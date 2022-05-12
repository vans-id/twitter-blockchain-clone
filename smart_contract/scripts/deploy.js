const hre = require('hardhat');

async function main() {
  // gets info of the account used to deploy
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log('Deploying contract with account: ', deployer.address);
  console.log('Account balance: ', accountBalance.toString());

  const profileImageMinterFactory = await hre.ethers.getContractFactory(
    'ProfileImageNfts'
  );
  const profileImageContract = await profileImageMinterFactory.deploy({});
  await profileImageContract.deployed();

  console.log('Contract deployed to:', profileImageContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
