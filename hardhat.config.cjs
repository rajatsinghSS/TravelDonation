require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIA_URL=`https://eth-sepolia.g.alchemy.com/v2/nKNxb2He5k55RmJMRLWpn_38SDZ2nMPv`,
      accounts: [`31edab02511a557acb2eabc1b9462ec628fe8dd4ad2fd40216e12fae7490fae3`],
    }
  },
  paths: {
    artifacts: "./src/artifacts",
  }
};
