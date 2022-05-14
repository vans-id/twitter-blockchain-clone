import contractArtifact from './ProfileImageNfts.json'

export const contractAddress = '0x878D277d6e2DcfE9D85E08AF8d11a35ED9820f59'
export const contractABI = contractArtifact.abi
export const enum APP_STATUS {
  LOADING,
  CONNECTED,
  DISCONNECTED,
  NO_METAMASK,
  ERROR,
}

export const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#334250a7',
  },
}
