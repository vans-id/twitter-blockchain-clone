import { useContext } from 'react'
import Image from 'next/image'

import { TwitterContext } from '../context/TwitterContext'

import Sidebar from '../components/Shared/Sidebar/Sidebar'
import Feed from '../components/Home/Feed'
import Widgets from '../components/Shared/Widgets/Widgets'

import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'
import { APP_STATUS } from '../lib/constants'

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#1A1D25] text-white`,
  content: `max-w-[1400px] w-full flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

/**
 * Component to display the Home Page
 * @page
 */
const Home = () => {
  const { appStatus, connectToWallet } = useContext(TwitterContext)

  /**
   * Displayed content based on app status
   */
  const app = (status = appStatus) => {
    switch (status) {
      case APP_STATUS.CONNECTED:
        return userLoggedIn
      case APP_STATUS.DISCONNECTED:
        return noUserFound
      case APP_STATUS.NO_METAMASK:
        return noMetamaskFound
      case APP_STATUS.ERROR:
        return error
      case APP_STATUS.LOADING:
        return loading

      default:
        return loading
    }
  }

  /**
   * Displayed the main content
   */
  const userLoggedIn = (
    <div className={styles.content}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  )

  /**
   * Displayed when the user's wallet not connected
   */
  const noUserFound = (
    <div className={styles.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className={styles.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        Connect Wallet
      </div>
      <div className={styles.loginContent}>Connect to Metamask.</div>
    </div>
  )

  /**
   * Displayed when the user do not have metamask
   */
  const noMetamaskFound = (
    <div className={styles.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div className={styles.loginContent}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )

  /**
   * Displayed when an error occured
   */
  const error = (
    <div className={styles.loginContainer}>
      <Image src={errorImg} width={250} height={200} />
      <div className={styles.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )

  /**
   * Displayed when the app status is loading
   */
  const loading = (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>Loading...</div>
    </div>
  )

  return <div className={styles.wrapper}>{app(appStatus)}</div>
}

export default Home
