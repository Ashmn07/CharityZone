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
        uint investorCount;
    }

    function createProject(string memory d,string memory t) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        Project memory temp = Project(t,d,msg.sender,0);
        projects.push(temp);
    }

    function getProjects() public view returns (Project[] memory){
        return projects;
    }

    struct Request{
        string reason;
        address requestor;
        uint amount;
        uint reqId;
        bool verified;
        Project proj;
    }

    Request[] public requests;

    function reqDel(uint index) internal {
        require(index < requests.length);
        requests[index] = requests[requests.length-1];
        requests.pop();
    }

    function createRequest(string memory r,uint amount,uint projId) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        Request memory temp = Request(r,msg.sender,amount,block.number,false,projects[projId]);   
        requests.push(temp);
    }

    function getRequests() public view returns (Request[] memory){
        return requests;
    }

    function rejectRequest(uint reqId) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("validator"))));
        reqDel(reqId);
    }

    function approveRequest(uint reqId) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("validator"))));
        requests[reqId].verified=true;
    }
}