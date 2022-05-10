

const main = async () => {
	const [owner, randomPerson] = await hre.ethers.getSigners(); // get the wallet addresses
	const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compiles the contract
	const waveContract = await waveContractFactory.deploy(); // Hardhat creates a local Ethereum network just for this contract which is deleted after script completes
	await waveContract.deployed();
	
	console.log("Contract deployed to:", waveContract.address); // gives address of the deployed contract
	console.log("Contract deployed by:", owner.address); // gives address of the owner/ person deploying the contract

	
	/* 
	* we need to manually caling our functions like we would an API
	*/
	let totalWaveCount; // renamed from waveCount
	let userWaves; // waves from a particular user

	totalWaveCount = await waveContract.getTotalWaves(); 

	let waveTxn =  await waveContract.wave();
	await waveTxn.wait();

	totalWaveCount = await waveContract.getTotalWaves(); // get waveCount once more to see if its changed

	waveTxn = await waveContract.connect(randomPerson).wave();
	await waveTxn.wait();

	totalWaveCount = await waveContract.getTotalWaves();

	userWaves = await waveContract.getUserWaves();
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
