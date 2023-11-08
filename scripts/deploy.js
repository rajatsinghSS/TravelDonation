async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("TravelDonation");

  console.log("Blockchain address:", await token.getAddress());
  };
  


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });