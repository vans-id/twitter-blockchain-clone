import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { TwitterContext } from '../../context/TwitterContext'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'

interface Metadata {
  name: string
  description: string
  image: string
}

interface HeaderObject {
  key: string | undefined
  value: string | undefined
}

enum MODAL_STATUS {
  INITIAL,
  LOADING,
  FINISHED,
}

const ProfileImageMinter = () => {
  const { currentAccount, setAppStatus } = useContext(TwitterContext)
  const router = useRouter()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(MODAL_STATUS.INITIAL)
  const [profileImage, setProfileImage] = useState<File>()

  /**
   * Mints an NFT on trigger
   */
  const mint = async () => {
    if (!name || !description || !profileImage) return
    setStatus(MODAL_STATUS.LOADING)
  }

  /**
   * Displayed the modal on trigger
   * @param {MODAL_STATUS} modalStatus the modal status
   * @return {EmotionJSX.Element} the modal based on the modal's state
   */
  const modalChildren = (modalStatus = status) => {
    switch (modalStatus) {
      case MODAL_STATUS.INITIAL:
        return (
          <InitialState
            profileImage={profileImage!}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )

      case MODAL_STATUS.LOADING:
        return <LoadingState />

      case MODAL_STATUS.FINISHED:
        return <FinishedState />

      default:
        router.push('/')
        setAppStatus('error')
        break
    }
  }

  return modalChildren()
}

export default ProfileImageMinter
