require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

task("init-code-hash", "Prints the UniswapV2Pair init code hash", async (args, hre) => {
   const pair = require("./artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json");
   const hash = hre.ethers.utils.keccak256(pair.bytecode);
   console.log(hash);
});

module.exports = {
   defaultNetwork: "hardhat",
   networks: {
      hardhat: {
      },
      bsctest: {
         url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
         accounts: {
            mnemonic: "trim recipe there gown fault thrive celery spatial brief vivid tennis simple"
         }
      }
   },
   solidity: {
      version: '0.6.6',
      settings: {
         optimizer: {
            enabled: true,
            runs: 200
         }
      }
   },
   etherscan: {
      apiKey: {
         bscTestnet: "PSFXI2GNY94HDB3BS12RTH2W1HE6SQUHAA"
      }
   }
};
