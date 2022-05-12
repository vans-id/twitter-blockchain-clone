require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.2',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8n5p1Mo0g_ZdLJT5TKR8E7tT-fjiegZ4',
      accounts: [
        'fd76ffca891d3d40e976d422f3c2faba5319ffc89e8edd8e98fb340cebf73728',
      ],
    },
  },
};
