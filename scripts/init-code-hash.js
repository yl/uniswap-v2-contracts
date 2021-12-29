const hre = require("hardhat");
const pair = require("../artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json");

async function main() {  
  const hash = hre.ethers.utils.keccak256(pair.bytecode);
  console.log("INIT_CODE_HASH:");
  console.log(hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
