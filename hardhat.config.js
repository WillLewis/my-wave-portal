require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const alchemyApiKey = process.env["ALCHEMY_API_KEY"];
const prodAlchemyApiKey = process.env["PROD_ALCHEMY_KEY"];
const rinkebyKey = process.env["RINKEBY_KEY"];


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: alchemyApiKey,
      accounts: [rinkebyKey],
    },
    mainnet: {
      chainId: 1,
      url: prodAlchemyApiKey,
      accounts: [rinkebyKey],
    }
  }
};
