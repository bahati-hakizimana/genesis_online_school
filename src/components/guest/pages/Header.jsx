import  { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

function Header() {
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end items-end">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-end">
            <Link to="" className="text-gray-700 text-xl hover:text-green-500 hover:border-b cursor-pointer hover:border-blue-500">FAQ</Link>
            <Link to="" className="text-gray-700 text-xl hover:text-green-500 hover:border-b hover:border-blue-500 cursor-pointer">Contact Us</Link>
            <Link to="" className="text-gray-700 text-xl hover:text-green-500 hover:border-b hover:border-blue-500 cursor-pointer">English</Link>

          <div className="relative">
            <button
              onClick={() => setLoginDropdown(!loginDropdown)}
              className="text-gray-700 text-xl hover:text-black focus:outline-none"
            >
              Login ▾
            </button>
            {loginDropdown && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <Link to="#" className="block px-4 py-2 text-xl hover:bg-gray-100">Student Login</Link>
                <Link to="#" className="block px-4 py-2 text-xl hover:bg-gray-100">Admin Login</Link>
              </div>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;

