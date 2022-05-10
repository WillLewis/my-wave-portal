// SPDX-Licens-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/**
 * The contractName contract does this and that...
 */
contract WavePortal {
  uint256 totalWaves;

  mapping (address => uint) public userWaveCount; // tracks how many times a particular user waves
  

  constructor() {
  	console.log("Yo, yo I am a contract and I am smart");
    
  }

  function wave() public {
  	totalWaves +=1;
  	console.log("%s has waved!", msg.sender);
  	userWaveCount[msg.sender]++;
  }

  function getTotalWaves() public view returns (uint256) {
  	console.log("We have %d total waves!", totalWaves);
  	return totalWaves;
  }

  // added by me to get waves of a particular user
  function getUserWaves() public view returns (uint256) {
  	console.log("%s has waved %d times", msg.sender, userWaveCount[msg.sender]);
  	return userWaveCount[msg.sender];
  }
}
