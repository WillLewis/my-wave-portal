const main = async () => {
	const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compiles the contract
	const waveContract = await waveContractFactory.deploy(); // Hardhat creates a local Ethereum network just for this contract which is deleted after script completes
	await waveContract.deployed();
	console.log("Contract deployed to:", waveContract.address); // gives address of the deployed contract
};

const runMain = async () => {
	try {
		await main();
		process.exit(0); // exit Node process without error
	} catch (error) { 
		console.log(error);
		process.exit(1); // exit Node process while indicating  ' Uncaugh Fatal Execption'  error
	}
};

runMain();
