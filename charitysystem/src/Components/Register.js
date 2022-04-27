import React,{useState} from 'react'
import RegisterImg from '../assets/Register.PNG'
import useCharity from '../contract/useCharity'
import Navbar from './Navbar'

function Register() {

  const [userType,setUserType] = useState('beneficiary')
  const [userName,setUserName] = useState('')
  const [uName,setName] = useState('')
  const [password,setPassword] = useState('')

  const {connect,account,createUser} = useCharity()

  const userOptions = [
    { label: 'Beneficiary', value: 'beneficiary',key:1 },
    { label: 'Donor', value: 'donor',key:2 },
    { label: 'Validator', value: 'validator',key:3 },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    createUser(userName,uName,userType,password)
  }

  const handleConnect = (e) => {
    e.preventDefault();
    connect()
  }

  return (
      <div className="bg-black h-screen w-screen">
        <Navbar/>
        <div className="flex justify-center items-center h-full w-full">
          <div className="flex-1 px-16">
          <img src={RegisterImg} className="" alt="Charity Logo" />
          </div>
          <div className="flex-1 px-16">
            <div className="bg-gray-900 flex flex-col p-6 rounded-lg items-center">
                <div className="flex flex-col space-y-2 w-full my-2">
                  <label className="text-white text-lg font-semibold">User Name : </label>
                  <input name="UserName" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="User Name"/>
                </div>
                <div className="flex flex-col space-y-2 w-full my-2">
                  <label className="text-white text-lg font-semibold">Name : </label>
                  <input name="Email" type="email" value={uName} onChange={(e)=>setName(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Name"/>
                </div>
                <div className="flex flex-col space-y-2 w-full my-2">
                  <label className="text-white text-lg font-semibold">Password : </label>
                  <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}required className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none" placeholder="Password"/>
                </div>
                <div className="flex flex-col space-y-2 w-full my-2">
                  <label className="text-white text-lg font-semibold">User Type :</label>
                  <select className="w-1/3 bg-gray-600 text-white px-3 py-2" value={userType} onChange={(e)=>setUserType(e.target.value)}>
                    {userOptions.map((option) => (
                      <option className="px-4 py-2" key={option.key} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex flex-col items-center">
                  {!account?<button onClick={(e)=>handleConnect(e)} className="mt-8 w-2/3 py-2 px-4 text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Connect MetaMask
                  </button>:
                  <button onClick={(e)=>handleClick(e)} className="mt-6 w-2/3 py-2 px-4 text-lg font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Register
                  </button>
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register