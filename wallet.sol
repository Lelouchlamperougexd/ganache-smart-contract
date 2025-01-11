// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWallet {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Function to receive Ether
    receive() external payable {}

    // Function to withdraw all Ether in the contract
    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }

    // Function to check the contract balance
    function checkBalance() public view returns (uint256) {
        return address(this).balance;
    }
}