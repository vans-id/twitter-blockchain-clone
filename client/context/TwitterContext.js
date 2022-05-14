import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { client } from '../lib/client'
import { APP_STATUS } from '../lib/constants'

/**
 * The Context Object
 * @return appStatus,
 * @return currentAccount,
 * @return connectToWallet,
 * @return fetchTweets,
 * @return tweets,
 * @return currentUser,
 * @return getCurrentUserDetails
 */
export const TwitterContext = createContext()

// export const APP_STATUS = {
//   LOADING: 'LOADING',
//   CONNECTED: 'CONNECTED',
//   DISCONNECTED: 'DISCONNECTED',
//   NO_METAMASK: 'NO_METAMASK',
//   ERROR: 'ERROR',
// }

/**
 * The Context Provider
 */
export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState(APP_STATUS.LOADING)
  const [currentAccount, setCurrentAccount] = useState('')
  const [tweets, setTweets] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const router = useRouter()

  /**
   * Updates the app status and current account when wallet is connected
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus(APP_STATUS.NO_METAMASK)

    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (addressArray.length > 0) {
        setAppStatus(APP_STATUS.CONNECTED)
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus(APP_STATUS.DISCONNECTED)
      }
    } catch (err) {
      router.push('/')
      setAppStatus(APP_STATUS.ERROR)
    }
  }

  /**
   * Initiates browser's metamask connection
   */
  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus(APP_STATUS.NO_METAMASK)

    try {
      setAppStatus(APP_STATUS.LOADING)

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        setAppStatus(APP_STATUS.CONNECTED)
      } else {
        router.push('/')
        setAppStatus(APP_STATUS.DISCONNECTED)
      }
    } catch (err) {
      router.push('/')
      setAppStatus(APP_STATUS.ERROR)
    }
  }

  /**
   * Creates an account in Sanity DB if user does not have one
   * @param {string} userWalletAddress - the wallet address
   */
  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus(APP_STATUS.NO_METAMASK)

    try {
      const userDoc = {
        _type: 'users',
        _id: userWalletAddress,
        name: 'Unnamed',
        isProfileImageNft: false,
        profileImage:
          'https://www.pngitem.com/pimgs/m/93-934654_cryptokitties-hd-png-download.png',
        walletAddress: userWalletAddress,
      }

      await client.createIfNotExists(userDoc)
    } catch (error) {
      router.push('/')
      setAppStatus(APP_STATUS.ERROR)
    }
  }

  /**
   * Gets all the tweets stored in Sanity DB.
   */
  const fetchTweets = async () => {
    const query = `
      *[_type == "tweets"]{
        "author": author->{name, walletAddress, profileImage, isProfileImageNft},
        tweet,
        timestamp
      }|order(timestamp desc)
    `

    const sanityResponse = await client.fetch(query)
    sanityResponse.forEach(async (item) => {
      const newItem = {
        tweet: item.tweet,
        timestamp: item.timestamp,
        author: {
          name: item.author.name,
          walletAddress: item.author.walletAddress,
          profileImage: item.author.profileImage,
          isProfileImageNft: item.author.isProfileImageNft,
        },
      }
      setTweets((prevState) => [...prevState, newItem])
    })
  }

  /**
   * Gets the current user details from Sanity DB.
   * @param {String} userAccount Wallet address of the currently logged in user
   */
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== APP_STATUS.CONNECTED) return

    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNft,
        coverImage,
        walletAddress
      }
    `

    const sanityResponse = await client.fetch(query)
    setCurrentUser({
      tweets: sanityResponse[0].tweets,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
      walletAddress: sanityResponse[0].walletAddress,
      coverImage: sanityResponse[0].coverImage,
      isProfileImageNft: sanityResponse[0].isProfileImageNft,
    })
  }

  /**
   * Runs everytime the app starts
   */
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  /**
   * Runs everytime currentAccount changes
   */
  useEffect(() => {
    if (!currentAccount || appStatus !== APP_STATUS.CONNECTED) return

    getCurrentUserDetails(currentAccount)
    fetchTweets()
  }, [currentAccount, appStatus])

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectToWallet,
        fetchTweets,
        tweets,
        currentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
