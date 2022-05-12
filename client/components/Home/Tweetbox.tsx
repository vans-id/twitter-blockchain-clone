import { useState, useContext, MouseEvent } from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const styles = {
  wrapper: `px-4 flex flex-row border-b border-[#282B33] py-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1EA2F3] text-white`,
}

/**
 * Component to display where the user can tweet
 * @component
 */
const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState('')

  const postTweet = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tweetBoxLeft}>
        <img
          src={
            'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631'
          }
          alt="profile"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.tweetBoxRight}>
        <form>
          <textarea
            placeholder="What's happening?"
            className={styles.inputField}
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
          <div className={styles.formLowerContainer}>
            <div className={styles.iconsContainer}>
              <BsCardImage className={styles.icon} />
              <RiFileGifLine className={styles.icon} />
              <RiBarChartHorizontalFill className={styles.icon} />
              <BsEmojiSmile className={styles.icon} />
              <IoMdCalendar className={styles.icon} />
              <MdOutlineLocationOn className={styles.icon} />
            </div>
            <button
              type="submit"
              onClick={(e) => postTweet(e)}
              disabled={!tweetMessage}
              className={`${styles.submitGeneral} ${
                tweetMessage ? styles.activeSubmit : styles.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tweetbox
