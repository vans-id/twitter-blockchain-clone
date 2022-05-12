import { news, whoToFollow } from '../../../lib/static'
import { BiSearch } from 'react-icons/bi'

const styles = {
  wrapper: `flex-[1] p-4 overflow-y-scroll hide-scrollbar`,
  searchBar: `flex items-center bg-[#14181B] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#22252F] my-6 rounded-md overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1EA2F3] text-sm cursor-pointer hover:bg-[#282B33]`,
  item: `flex items-center p-3 my-2 hover:bg-[#282B33] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

/**
 * Component to display the Widget Component
 * @component
 */
const Widgets = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <BiSearch />
        <input
          placeholder="Search Twitter"
          type="text"
          className={styles.inputBox}
        />
      </div>

      <div className={styles.section}>
        <div className={styles.title}>What's happening</div>
        {news.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.newsItemLeft}>
              <div className={styles.newsItemCategory}>{item.category}</div>
              <div className={styles.newsItemTitle}>{item.title}</div>
            </div>
            <div className={styles.newsItemRight}>
              <img
                src={item.image}
                alt={item.category}
                className={styles.newsItemImage}
              />
            </div>
          </div>
        ))}
        <div className={styles.showMore}>Show more</div>
      </div>

      <div className={styles.section}>
        <div className={styles.title}>Who to follow</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.followAvatarContainer}>
              <img
                src={item.avatar}
                alt={item.handle}
                className={styles.followAvatar}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.handle}>{item.handle}</div>
            </div>
            <div className={styles.followButton}>Follow</div>
          </div>
        ))}
        <div className={styles.showMore}>Show more</div>
      </div>
    </div>
  )
}

export default Widgets
