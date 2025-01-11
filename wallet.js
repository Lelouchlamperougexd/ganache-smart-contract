const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

// Example: Check if connected
web3.eth.getAccounts().then(console.log);

const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "checkBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]; // Paste the ABI from Remix
const contractAddress = '0xbc5f7da7298bda1ea79ad5358eb16a2d5e95a6b7'; // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call checkBalance
contract.methods.checkBalance().call()
    .then(balance => {
        console.log("Contract Balance: ", balance);
    });

// Withdraw (make sure to unlock your account in Ganache first)
const account = '0xb737E4543Efb6E942F9d3B4b1935f4de81983E38'; // Replace with your Ganache account address

contract.methods.withdraw().send({ from: account })
    .then(receipt => {
        console.log("Withdrawal Transaction Receipt: ", receipt);
    });