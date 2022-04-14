const hre = require("hardhat");

async function main() {
  [owner] = await hre.ethers.getSigners();

  const Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(owner.address);
  await factory.deployed();
  console.log("Factory:", factory.address);

  const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(factory.address, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
  await router.deployed();
  console.log("Router:", router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
