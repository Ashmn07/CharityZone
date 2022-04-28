import Charity from './Charity.json'
import {ethers} from 'ethers'
import { useEffect, useState } from 'react'

const ContractABI = Charity.abi
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const Ethereum = typeof window !== 'undefined' && window.ethereum

const getCharityContract = () => {
    const provider = new ethers.providers.Web3Provider(Ethereum)
    const signer = provider.getSigner()
    return new ethers.Contract(ContractAddress,ContractABI, signer)
}

const useCharity = () => {
    const [currentAccount,setCurrentAccount] = useState('')
    const [currentUser,setCurrentUser] = useState(null)

    useEffect(()=>{
        if(!Ethereum){
            console.log("Please install Metamask")
            return;
        }
        connect()
    },[])
    const connect = async () => {
        try{
            if(!Ethereum){
                alert("Please install Metamask")
                return;
            }
            const accounts = await Ethereum.request({
                method:'eth_requestAccounts',
            });
            if(accounts.length === 0){
                console.log("No Authorized Accounts")
                return;
            }
            const acc = accounts[0]
            console.log("Connected to ",acc)
            setCurrentAccount(acc)
        }
        catch(e){
            console.log(e)
        }
    }
    const getUser = async() => {
        const contract = getCharityContract();
        const user = await contract.getUser(currentAccount)
        const {wallet,name,username,usertype} = user
        setCurrentUser({wallet,name,username,usertype})
        return user
    }
    const createUser = async (username,uName,userType,password) => {
        const contract = getCharityContract();
        
        const user = await contract.register(username,uName,userType,password)
    }
    return {connect,account:currentAccount,user:currentUser,createUser,getUser}
    // const CharityContract = getCharity()
}

export default useCharity