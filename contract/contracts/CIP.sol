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
    mapping(address => string) beneficiaryLinks;

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

    function registerB(string memory _username,string memory _name,string memory _usertype,string memory link) public {
        require(bytes(usernames[msg.sender]).length==0,"User already exists");
        require(users[_username].wallet == address(0),"Username is already taken, Try another");

        users[_username] = User({
            wallet:msg.sender,
            name:_name,
            username:_username,
            usertype:_usertype
        });
        usernames[msg.sender] = _username;
           require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        beneficiaryLinks[msg.sender]=link;
    }

    function getUser(address _wallet) public view returns (User memory){
        return users[usernames[_wallet]];
    }

    Project[] public projects;

     struct Donation{
        address donor;
        uint amt;
    }

    struct Project{
        string title;
        string description;
        address creator;
        uint donorCount;
        uint projectId;
    }

    function createProject(string memory d,string memory t) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        Project memory temp = Project(t,d,msg.sender,0,block.number);
        projects.push(temp);
    }

    function getValidatorSecret() public pure returns(string memory){
        return "AUCZ";
    }

    function getProjects() public view returns (Project[] memory){
        return projects;
    }

     struct Request{
        string reason;
        address payable recepient;
        string requestor;
        uint amount;
        uint reqId;
        string reqLink;
        Project proj;
        string phno;
    }

    Request[] public requests;

    function createRequest(string memory r,uint amount,uint projId,string memory phno) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("beneficiary"))));
        Request memory temp = Request(r,payable(msg.sender),usernames[msg.sender],amount,block.number,beneficiaryLinks[msg.sender],projects[projId],phno);   
        requests.push(temp);
    }

    function getRequests() public view returns (Request[] memory){
        return requests;
    }

    Request[] public delRequests;
    Request[] public valRequests;

    function reqDel(uint index) internal {
        require(index < requests.length);
        requests[index] = requests[requests.length-1];
        requests.pop();
    }

    function getDelRequests() public view returns (Request[] memory){
        return delRequests;
    }
    function getValRequests() public view returns (Request[] memory){
        return valRequests;
    }

    function rejectRequest(uint reqId) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("validator"))));
        delRequests.push(requests[reqId]);
        reqDel(reqId);
    }

    function approveRequest(uint reqId) public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("validator"))));
        valRequests.push(requests[reqId]);
        reqDel(reqId);
    }

    mapping(uint => mapping(address => uint)) donations;

    function donate(uint projId) payable public {
        require(keccak256(abi.encodePacked((users[usernames[msg.sender]].usertype))) 
        == keccak256(abi.encodePacked(("donor"))));
        donations[projId][msg.sender]+=msg.value;
    }

    function showDonations(uint projId) public view returns (uint){
        return donations[projId][msg.sender];
    }

}

