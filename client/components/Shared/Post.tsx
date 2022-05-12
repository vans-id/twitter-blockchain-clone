import { useState } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'

const styles = {
  wrapper: `flex p-3 border-b border-[#282B33]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

interface PostProps {
  displayName: string
  username: string
  text: string
  avatar: string
  timestamp: string
  isProfileImageNft: Boolean | undefined
}

/**
 * Component to display the each Post Item
 * @component
 * @param {string} displayName the post owner
 * @param {string} username the owner's wallet address
 * @param {string} text the post caption
 * @param {string} avatar the avatar url
 * @param {string} timestamp the timestamp post created
 * @param {Boolean | undefined} isProfileImageNft the profile image status
 */
const Post = ({
  displayName,
  username,
  text,
  avatar,
  timestamp,
  isProfileImageNft,
}: PostProps) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          src={avatar}
          alt={username}
          className={
            isProfileImageNft
              ? `${styles.profileImage} smallHex`
              : styles.profileImage
          }
        />
      </div>
      <div className={styles.postMain}>
        <div>
          <span className={styles.headerDetails}>
            <span className={styles.name}>{displayName}</span>
            {isProfileImageNft && (
              <span className={styles.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
            <span className={styles.handleAndTimeAgo}>
              @{username} • {format(new Date(timestamp).getTime())}
            </span>
          </span>
          <div className={styles.tweet}>{text}</div>
        </div>
        <div className={styles.footer}>
          <div
            className={`${styles.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
          >
            <FaRegComment />
          </div>
          <div
            className={`${styles.footerIcon} hover:bg-[#1b393b] hover:text-[#03ba7c]`}
          >
            <FaRetweet />
          </div>
          <div
            className={`${styles.footerIcon} hover:bg-[#39243c] hover:text-[#f91c80]`}
          >
            <AiOutlineHeart />
          </div>
          <div
            className={`${styles.footerIcon} hover:bg-[#1e364a] hover:text-[#1d9bf0]`}
          >
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
