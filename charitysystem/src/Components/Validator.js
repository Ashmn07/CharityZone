import React from 'react'
import {useLocation,Link} from 'react-router-dom';
import useCharity from '../contract/useCharity'
import Logo from '../assets/logo.png'

function Validator() {
  const location = useLocation()
  return (
    <div className="bg-black h-screen w-screen">
      <nav className="border-gray-200 px-10 py-2.5 fixed w-full">
          <div className="container flex flex-wrap justify-between items-center mx-auto px-6 py-2">
              <div className="flex items-center">
                  <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Charity Zone Logo" />
                  <Link to="/" className="self-center text-4xl font-bold whitespace-nowrap text-white hover:text-gray-300 cursor-pointer">Charity Zone</Link>
              </div>
              <div className="text-white">
                Welcome {location.state.name}
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Validator