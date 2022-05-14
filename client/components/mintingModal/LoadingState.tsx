import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'

const styles = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const LoadingState = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Minting in progress...</div>
      <GridLoader color={'#fff'} loading={true} css={cssOverride} size={30} />
    </div>
  )
}

export default LoadingState
