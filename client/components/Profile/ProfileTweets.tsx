import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Shared/Post'

const styles = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

interface Tweet {
  timestamp: string
  tweet: string
}

interface Author {
  name: string
  profileImage: string
  walletAddress: string
  isProfileImageNft: Boolean | undefined
}

/**
 * Component to display the Profile Tweets
 * @component
 */
const ProfileTweets = () => {
  const {
    currentUser,
    tweets,
  }: {
    currentUser: Author
    tweets: Tweet[]
  } = useContext(TwitterContext)

  /**
   * Gets the wallet addres if user's name is 'Unnamed'
   */
  const getDisplayName = () =>
    currentUser.name === 'Unnamed'
      ? `${currentUser.walletAddress?.slice(
          0,
          4
        )}...${currentUser.walletAddress?.slice(41)}`
      : currentUser.name

  /**
   * Gets the trimmed wallet addres
   */
  const getUsername = () =>
    `${currentUser.walletAddress?.slice(
      0,
      4
    )}...${currentUser.walletAddress?.slice(41)}`

  return (
    <div className={styles.wrapper}>
      {tweets.map((tweet, i) => (
        <Post
          key={i}
          displayName={getDisplayName()}
          username={getUsername()}
          avatar={currentUser.profileImage}
          text={tweet.tweet}
          isProfileImageNft={currentUser.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
