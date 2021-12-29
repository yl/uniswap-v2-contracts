const hre = require("hardhat");
const pair = require("../artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json");

async function main() {  
  [account] = await hre.ethers.getSigners();

  const Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(account.address);
  await factory.deployed();
  console.log("Factory:");
  console.log(factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
