import { useContext, useEffect } from 'react'
import Image from 'next/image'
import checkMark from '../../../assets/check.png'
import { useRouter } from 'next/router'
import { TwitterContext } from '../../context/TwitterContext'

const styles = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}

const FinishedState = () => {
  const { getCurrentUserDetails } = useContext(TwitterContext)
  const router = useRouter()

  useEffect(() => {
    getCurrentUserDetails()
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Minting Successful!</div>
      <Image src={checkMark} alt="checkmark" height={100} width={100} />
      <div onClick={() => router.push('/')} className={styles.closeButton}>
        Close
      </div>
    </div>
  )
}

export default FinishedState
