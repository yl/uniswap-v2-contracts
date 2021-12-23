const hre = require("hardhat");
const pair = require("../artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json");

async function main() {
  [account] = await hre.ethers.getSigners();
  console.log("Address:", account.address);

  const Multicall = await hre.ethers.getContractFactory("Multicall");
  const multicall = await Multicall.deploy();
  await multicall.deployed();
  console.log("Multicall:", multicall.address);

  const WETH = await hre.ethers.getContractFactory("WETH9");
  const weth = await WETH.deploy();
  await weth.deployed();
  console.log("WETH:", weth.address);

  const Token = await hre.ethers.getContractFactory("contracts/periphery/test/ERC20.sol:ERC20");
  const token = await Token.deploy(hre.ethers.BigNumber.from('21000000000000000000000000'));
  await token.deployed();
  console.log("Token:", token.address);

  const Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(account.address);
  await factory.deployed();
  console.log("Factory:", factory.address);

  const Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(factory.address, weth.address);
  await router.deployed();
  console.log("Router:", router.address);

  const hash = hre.ethers.utils.keccak256(pair.bytecode);
  console.log("INIT_CODE_HASH:", hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
