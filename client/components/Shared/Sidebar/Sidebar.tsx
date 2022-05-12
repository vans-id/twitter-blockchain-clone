import { useState } from 'react'
import Link from 'next/link'

import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { FaRegListAlt, FaHashtag, FaBell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import { VscTwitter } from 'react-icons/vsc'
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from 'react-icons/bs'

import SidebarOption from './SidebarOption'

const styles = {
  wrapper: `flex-[0.7] px-8 flex flex-col bg-[#13151B]`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1EA2F3] hover:bg-[#1882c2] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#474C56] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full aspect-square`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

interface SidebarProps {
  initialSelectedIcon?: string
}

/**
 * Component to display and wrap the Sidebar
 * @component
 * @param {string} initialSelectedIcon - the initial activate icon, optional
 */
const Sidebar = ({ initialSelectedIcon = 'Home' }: SidebarProps) => {
  const [selected, setSelected] = useState(initialSelectedIcon)

  return (
    <div className={styles.wrapper}>
      <div className={styles.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={styles.navContainer}>
        {SIDEBAR_OPTIONS.map((item, i) => (
          <SidebarOption
            key={`sidebar-option-${i}`}
            Icon={selected === item.name ? item.iconActive : item.iconPassive}
            text={item.name}
            isActive={Boolean(selected === item.name)}
            setSelected={setSelected}
            redirect={`/${item.name === 'Home' ? '' : item.name}`}
          />
        ))}
        <SidebarOption Icon={CgMoreO} text="More" />
        <div className={styles.tweetButton}>Mint</div>
      </div>

      <div className={styles.profileButton}>
        <div className={styles.profileLeft}>
          <img
            src={
              'https://www.artnews.com/wp-content/uploads/2021/08/BAYC-8746.png?w=631'
            }
            alt="profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileRight}>
          <div className={styles.details}>
            <div className={styles.name}>Test Name</div>
            <div className={styles.handle}>@0x12345...6789A</div>
          </div>
          <div className={styles.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  )
}

const SIDEBAR_OPTIONS = [
  {
    name: 'Home',
    iconActive: RiHome7Fill,
    iconPassive: RiHome7Line,
  },
  {
    name: 'Explore',
    iconActive: FaHashtag,
    iconPassive: BiHash,
  },
  {
    name: 'Notifications',
    iconActive: FaBell,
    iconPassive: FiBell,
  },
  {
    name: 'Messages',
    iconActive: HiMail,
    iconPassive: HiOutlineMail,
  },
  {
    name: 'Bookmarks',
    iconActive: BsBookmarkFill,
    iconPassive: BsBookmark,
  },
  {
    name: 'Lists',
    iconActive: RiFileList2Fill,
    iconPassive: FaRegListAlt,
  },
  {
    name: 'Profile',
    iconActive: BsPersonFill,
    iconPassive: BsPerson,
  },
]

export default Sidebar
