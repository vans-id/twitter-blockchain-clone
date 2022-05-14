import { useContext } from 'react'
import { BsStars } from 'react-icons/bs'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Shared/Post'
import Tweetbox from './Tweetbox'

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#282B33] overflow-y-scroll hide-scrollbar`,
  header: `sticky bg-[#1A1D25] top-0 border-b border-[#282B33] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

interface Tweet {
  author: TweetAuthor
  tweet: string
  timestamp: string
}

interface TweetAuthor {
  name: string
  walletAddress: string
  profileImage: string
  isProfileImageNft: boolean
}

/**
 * Component to display where the user's feed
 * @component
 */
const Feed = () => {
  const { tweets } = useContext(TwitterContext)

  /**
   * Gets the wallet addres if author's name is 'Unnamed'
   */
  const getDisplayName = (tweet: Tweet) =>
    tweet.author.name === 'Unnamed'
      ? `${tweet.author.walletAddress.slice(
          0,
          4
        )}...${tweet.author.walletAddress.slice(41)}`
      : tweet.author.name

  /**
   * Gets the trimmed wallet addres
   */
  const getUsername = (tweet: Tweet) =>
    `${tweet.author.walletAddress.slice(
      0,
      4
    )}...${tweet.author.walletAddress.slice(41)}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Home</div>
        <BsStars />
      </div>
      <Tweetbox />
      {(tweets as Tweet[]).map((tweet, i) => (
        <Post
          key={i}
          displayName={getDisplayName(tweet)}
          username={getUsername(tweet)}
          avatar={tweet.author.profileImage}
          text={tweet.tweet}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
