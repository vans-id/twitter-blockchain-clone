import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MetaMaskInpageProvider } from '@metamask/providers'
import { APP_STATUS } from '../lib/constants'

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}

/**
 * The Context Type
 */
interface TwitterCtx {
  appStatus: APP_STATUS
  currentAccount: string
  connectToWallet: () => Promise<void>
}

/**
 * The Context value provider. Returns global context
 */
export const TwitterContext = createContext<TwitterCtx | null>(null)

/**
 * The Context Provider, provide this on the root app level
 */
export const TwitterProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [appStatus, setAppStatus] = useState<APP_STATUS>(APP_STATUS.NO_METAMASK)
  const [currentAccount, setCurrentAccount] = useState('')

  const router = useRouter()

  /**
   * Updates the app status and current account when wallet is connected
   */
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus(APP_STATUS.NO_METAMASK)
    console.log('Goes in checkIfWalletIsConnected')

    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })

      if (addressArray && Array.isArray(addressArray)) {
        setCurrentAccount(addressArray[0])
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

      if (addressArray && Array.isArray(addressArray)) {
        setCurrentAccount(addressArray[0])
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
   * Runs everytime the app starts
   */
  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  return (
    <TwitterContext.Provider
      value={{ appStatus, currentAccount, connectToWallet }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
