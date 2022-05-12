import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTweets from '../components/Profile/ProfileTweets'
import Sidebar from '../components/Shared/Sidebar/Sidebar'
import Widgets from '../components/Shared/Widgets/Widgets'

const styles = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#1A1D25] text-white`,
  content: `max-w-[1400px] w-full flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

/**
 * Component to display the Profile Page
 * @page
 */
const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar />
        <div className={`${styles.mainContent} hide-scrollbar`}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default Profile
