import { useEffect, useContext, useState } from 'react'
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

interface Tweets extends Array<Tweet> {}

interface Author {
  name: string
  profileImage: string
  walletAddress: string
  isProfileImageNft: Boolean | undefined
}

const TWEETS = [
  {
    displayName: 'Evan',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2022-05-12',
  },
  {
    displayName: 'Evan',
    username: '0xE43411b1a61259e5104c9808a5c63b8FcC973B31',
    avatar:
      'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631',
    text: 'gm',
    isProfileImageNft: true,
    timestamp: '2022-05-01',
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
]

/**
 * Component to display the Profile Tweets
 * @component
 */
const ProfileTweets = () => {
  return (
    <div className={styles.wrapper}>
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

export default ProfileTweets
