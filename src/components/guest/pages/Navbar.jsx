import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Header from './Header';
import logo from '../../../assets/images/GenesisOfficialLogo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className=' cursor-pointer'>
          <img className='w-10 h-10' src={logo} alt="Offical logo" />
          <div className="flex items-center space-x-1">
          <span className="text-red-600 text-2xl font-bold">Gene</span>
          <span className="text-green-700 text-2xl font-bold">sis</span>
          <span className="text-teal-500 text-2xl font-bold">School</span>
        </div>
        </Link>
        

        {/* Desktop Nav */}
        <div className=' flex flex-col'>

          <Header />

          <nav className="hidden md:flex space-x-6 items-center">
          <Link to="#" className="text-gray-700 hover:border-b text-xl hover:border-blue-500 cursor-pointer hover:text-green-500">What We Offer</Link>
          <Link to="#" className="text-gray-700 text-xl hover:text-green-500 hover:border-b hover:border-blue-500 cursor-pointer">How it Works</Link>
          <Link to="#" className="text-gray-700 text-xl hover:text-green-500 hover:border-b hover:border-blue-500">Explore Courses</Link>
          <Link to="#" className="text-gray-700 text-xl hover:text-green-500 hover:border-b hover:border-blue-500">How to Apply</Link>

          <Link to="#" className="bg-green-600 text-xl text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition">Apply now</Link>
          <FaShoppingCart className="text-gray-600 cursor-pointer" />
        </nav>

        </div>
        

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to="#" className="block text-gray-700">What We Offer</Link>
          <Link to="#" className="block text-gray-700">How it Works</Link>
          <Link to="#" className="block text-gray-700">Explore Courses</Link>
          <Link to="#" className="block text-gray-700">How to Apply</Link>
          <div className="block text-gray-700">
            <button onClick={() => setLoginDropdown(!loginDropdown)}>
              Login ▾
            </button>
            {loginDropdown && (
              <div className="ml-4 mt-1">
                <Link to="#" className="block hover:underline">Student Login</Link>
                <Link to="#" className="block hover:underline">Admin Login</Link>
              </div>
            )}
          </div>
          <Link to="#" className="block bg-green-600 text-white px-4 py-2 rounded-full text-center font-semibold">Apply now</Link>
        </div>
      )}
    </header>
  );
}



export default Navbar
