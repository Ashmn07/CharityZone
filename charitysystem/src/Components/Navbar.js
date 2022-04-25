import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="border-gray-200 px-10 py-2.5 fixed w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-6 py-2">
            <div className="flex items-center">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Charity Zone Logo" />
                <Link to="/" className="self-center text-4xl font-bold whitespace-nowrap text-white hover:text-gray-300 cursor-pointer">Charity Zone</Link>
            </div>
            <div className="hidden w-full md:block md:w-auto">
            <ul className="flex space-x-8 mt-0 text-xl font-medium">
                <li className="bg-gray-800 rounded-md bg-opacity-60 hover:bg-opacity-90 px-4 py-1">
                <Link to="/login" className="block text-white md:hover:text-gray-300 md:bg-transparent md:p-0" aria-current="page">Login</Link>
                </li>
                <li className="bg-gray-800 rounded-md bg-opacity-60 hover:bg-opacity-90 px-4 py-1">
                <Link to="/register" className="block text-white md:hover:text-gray-300 md:bg-transparent md:p-0" aria-current="page">Register</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
