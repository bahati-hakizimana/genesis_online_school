import  { useState } from 'react';
// import { FaSearch } from 'react-icons/fa';

function Header() {
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end items-end">

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-end">

          <a href="#" className="text-gray-700 hover:text-black">FAQ</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact Us</a>
          <a href="#" className="text-gray-700 hover:text-black">English</a>

          <div className="relative">
            <button
              onClick={() => setLoginDropdown(!loginDropdown)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              Login ▾
            </button>
            {loginDropdown && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Student Login</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Admin Login</a>
              </div>
            )}
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;

