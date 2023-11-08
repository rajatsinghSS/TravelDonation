// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract TravelDonation{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos;
    address payable owner;

    constructor(){
        owner=payable(msg.sender);
    }

    function Contribute(string memory name,string memory message) public payable{
        require(msg.value>0,"Please pay greater then 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    } 

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}
//Deploying contracts with the account: 0xBE43a8bE5804853F7e0bEA3E09D610456062C012
//Blockchain address: 0x17Eb06657760dAa97FD0574FE3EAD6C7a76788eB