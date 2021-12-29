const hre = require("hardhat");

async function main() {
  const WETH = await hre.ethers.getContractFactory("WETH9");
  const weth = await WETH.deploy();
  await weth.deployed();
  console.log("WETH:");
  console.log(weth.address);

  const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(process.env.FACTORY, weth.address);
  await router.deployed();
  console.log("Router:");
  console.log(router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
