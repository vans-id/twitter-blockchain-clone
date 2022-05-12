import { useContext, useEffect } from 'react'
import { BsStars } from 'react-icons/bs'
import Post from '../Shared/Post'
import Tweetbox from './Tweetbox'

const styles = {
  wrapper: `flex-[2] border-r border-l border-[#282B33] overflow-y-scroll hide-scrollbar`,
  header: `sticky bg-[#1A1D25] top-0 border-b border-[#282B33] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const TWEETS = [
  {
    displayName: 'Evan',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2022-04-01',
  },
  {
    displayName: 'Dewa',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gn',
    isProfileImageNft: true,
    timestamp: '2020-06-01',
  },
  {
    displayName: 'Richard',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01',
  },
  {
    displayName: 'Evan',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2022-04-01',
  },
  {
    displayName: 'Dewa',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gn',
    isProfileImageNft: true,
    timestamp: '2020-06-01',
  },
  {
    displayName: 'Richard',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01',
  },
]

/**
 * Component to display where the user's feed
 * @component
 */
const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>Home</div>
        <BsStars />
      </div>
      <Tweetbox />
      {TWEETS.map((tweet, i) => (
        <Post
          key={i}
          displayName={tweet.displayName}
          username={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
