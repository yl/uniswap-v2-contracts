require("@nomiclabs/hardhat-waffle");

task("init-code-hash", "Prints the UniswapV2Pair init code hash", async (args, hre) => {
   const pair = require("./artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json");
   const hash = hre.ethers.utils.keccak256(pair.bytecode);
   console.log(hash);
});

module.exports = {
   solidity: {
      version: '0.6.6',
      settings: {
         optimizer: {
            enabled: true,
            runs: 200,
         },
      },
   },
};
