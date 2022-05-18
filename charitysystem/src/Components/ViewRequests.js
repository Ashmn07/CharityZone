import { useEffect,useState } from 'react';
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import useCharity from '../contract/useCharity'

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
            <div className="flex flex-wrap space-x-16">
           {requests.length==0?
           <span className="text-white font-bold text-4xl">No requests Yet</span>
           :
            requests.map((req,id)=>(
                <div key={id} className="block p-6 max-w-sm rounded-lg border  shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{req.reason}</h5>
                {/* <p class="font-normal text-gray-400">{req.amount}</p> */}
                </div>
            ))
           }
           </div>
       </div>     
    </div>
  );
}

export default ViewRequests;
