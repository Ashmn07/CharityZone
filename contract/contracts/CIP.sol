//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Charity{
    
    struct User{
        address wallet;
        string name;
        string username;
        string usertype;
    }

    mapping(address => string) public usernames;
    mapping(string => User) public users;

    function register(string memory _username,string memory _name,string memory _usertype) public {
        require(bytes(usernames[msg.sender]).length==0,"User already exists");
        require(users[_username].wallet == address(0),"Username is already taken, Try another");

        users[_username] = User({
            wallet:msg.sender,
            name:_name,
            username:_username,
            usertype:_usertype
        });
        usernames[msg.sender] = _username;
    }

    function getUser(address _wallet) public view returns (User memory){
        return users[usernames[_wallet]];
    }

    Project[] public projects;

    struct Project{
        string title;
        string description;
        address creator;
    }

    function createProject(string memory d,string memory t) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        Project memory temp = Project(t,d,msg.sender);
        projects.push(temp);
    }

    function getProjects() public view returns (Project[] memory){
        return projects;
    }
}