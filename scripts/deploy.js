const hre = require("hardhat");

async function main() {
  const initBalance = 1;

  const Assessment = await hre.ethers.getContractFactory("Assessment");

  const assessment = await Assessment.deploy(initBalance);

  await assessment.deployed();

  console.log(`A contract with a balance of ${initBalance} ETH has been deployed to address: ${assessment.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
