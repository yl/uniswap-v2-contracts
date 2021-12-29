require("@nomiclabs/hardhat-waffle");

module.exports = {
   solidity: {
      version: '0.5.16',
      settings: {
         optimizer: {
            enabled: true,
            runs: 200,
         },
      },
   },
   paths: {
      sources: "./contracts/core",
    },
};
