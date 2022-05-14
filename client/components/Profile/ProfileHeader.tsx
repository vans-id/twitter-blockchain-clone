import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { TwitterContext } from '../../context/TwitterContext'

const styles = {
  wrapper: `border-[#282B33] border-b`,
  header: `py-1 px-3 my-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

interface Tweets {
  tweet: string
  timestamp: string
}

interface UserData {
  name: string
  profileImage: string
  coverImage: string
  walletAddress: string
  tweets: Tweets[]
  isProfileImageNft: Boolean | undefined
}

/**
 * Component to display the Profile Header
 * @component
 */
const ProfileHeader = () => {
  const {
    currentAccount,
    currentUser,
  }: { currentAccount: String; currentUser: UserData } =
    useContext(TwitterContext)
  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.backButton} onClick={() => router.push('/')}>
          <BsArrowLeftShort />
        </div>

        <div className={styles.details}>
          <div className={styles.primary}>{currentUser.name}</div>
          <div className={styles.secondary}>
            {currentUser.tweets?.length} Tweets
          </div>
        </div>
      </div>

      <div className={styles.coverPhotoContainer}>
        <img
          src={currentUser.coverImage}
          alt="cover"
          className={styles.coverPhoto}
        />
      </div>
      <div className={styles.profileImageContainer}>
        <div className={true ? 'hex' : styles.profileImageContainer}>
          <img
            src={currentUser.profileImage}
            alt="profile"
            className={true ? styles.profileImageNft : styles.profileImage}
          />
        </div>
      </div>

      <div className={styles.details}>
        <div>
          <div className={styles.primary}>{currentUser.name}</div>
        </div>
        <div className={styles.secondary}>
          {currentAccount &&
            `@${currentAccount.slice(0, 8)}...${currentAccount.slice(-4)}`}
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  )
}

export default ProfileHeader
