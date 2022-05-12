import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'

import { IconType } from 'react-icons'

const styles = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#282B33] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

interface SidebarOptionProps {
  text: string
  Icon: IconType
  isActive?: Boolean
  setSelected?: Dispatch<SetStateAction<string>>
  redirect?: URL | string
}

/**
 * Component to display the each Sidebar Item
 * @component
 * @param {string} text the sidebar caption
 * @param {IconType} Icon the sidebar icon
 * @param {Boolean} isActive the sidebar active status, optional
 * @param {Dispatch<SetStateAction<string>>} setSelected the set state function, optional
 * @param {URL | string} redirect the redirect URL, optional
 */
const SidebarOption = ({
  text,
  Icon,
  isActive,
  setSelected = () => {},
  redirect,
}: SidebarOptionProps) => {
  const router = useRouter()

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setSelected(text)
        if (redirect) router.push(redirect)
      }}
    >
      <div className={styles.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? styles.textActive : styles.textGeneral}`}>
        {text}
      </div>
    </div>
  )
}

export default SidebarOption
