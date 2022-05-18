import { useEffect,useState } from 'react';
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import useCharity from '../contract/useCharity'
import { FaPeopleArrows } from "react-icons/fa";

function ViewRequests() {

  const {getRequests} = useCharity()
  const [requests,setRequests] = useState([])

  const getR = async () => {
    const r = await getRequests()
    console.log(r)
    setRequests(r)
  }

  useEffect(()=>{
    getR()
  },[])

  return (
    <div className="bg-black min-h-screen min-w-screen">
      <nav className="border-gray-200 px-10 py-2.5 fixed w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-6 py-2">
            <div className="flex items-center">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Charity Zone Logo" />
                <Link to="/" className="self-center text-4xl font-bold whitespace-nowrap text-white hover:text-gray-300 cursor-pointer">Charity Zone</Link>
            </div>
        </div>
      </nav>
       <div className="w-full px-16 py-32">
            <h1 className="text-white mb-8 font-bold text-4xl">Charity Requests</h1>
            <div className="grid grid-cols-3 gap-6">
           {requests.length==0?
           <span className="text-white font-bold text-4xl">No requests Yet</span>
           :
            requests.map((req,id)=>(
                <div key={id} className="flex flex-col divide-y divide-gray-600 rounded-xl shadow-md bg-gray-800 border-gray-700">
                  <div className="flex items-center justify-left space-x-4 py-4 px-6">
                    <FaPeopleArrows className="text-white text-xl"/>
                    <h5 className="text-xl font-bold text-white">{req.reason}</h5>
                  </div>
                  <div className="flex py-4 items-center justify-left space-x-4 px-6">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <p className="text-lg font-semibold text-white">{req.requestor}</p>
                  </div>
                  <div className="py-4 flex items-center justify-between px-6">
                    <p className="font-normal text-gray-400">Amount : {req.amount.toNumber()} ether</p>
                    <p className="font-normal text-gray-400">Project : {req.proj.title}</p>
                  </div>
                  <div className="flex items-center w-full">
                    <button className="font-semibold text-lg flex-1 py-2 px-4 bg-green-500 cursor-pointer hover:bg-green-700 rounded-bl-xl">Accept</button>
                    <button className="font-semibold text-lg flex-1 py-2 px-4 bg-red-600 cursor-pointer hover:bg-red-800 rounded-br-xl">Reject</button>
                  </div>
                </div>
            ))
           }
           </div>
       </div>     
    </div>
  );
}

export default ViewRequests;
