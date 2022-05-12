import Sidebar from '../components/Shared/Sidebar/Sidebar'
import Feed from '../components/Home/Feed'
import Widgets from '../components/Shared/Widgets/Widgets'

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#1A1D25] text-white`,
  content: `max-w-[1400px] w-full flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

/**
 * Component to display the Home Page
 * @page
 */
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  )
}

export default Home
