const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("contracts/periphery/test/ERC20.sol:ERC20");
  const token = await Token.deploy(hre.ethers.BigNumber.from('21000000000000000000000000'));
  await token.deployed();
  console.log("Token:");
  console.log(token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
