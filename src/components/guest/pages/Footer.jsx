import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/images/GenesisOfficialLogo.png'
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
           <Link to="/" className=' cursor-pointer'>
          <img className='w-10 h-10' src={logo} alt="Offical logo" />
          <div className="flex items-center space-x-1">
          <span className="text-red-600 text-2xl font-bold">Gene</span>
          <span className="text-green-700 text-2xl font-bold">sis</span>
          <span className="text-teal-500 text-2xl font-bold">School</span>
        </div>
        </Link>
        <p>
            Empowering learners with flexible, affordable, and respected online education since 2023.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/courses" className="hover:text-white">Courses</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {currentYear} All rights reserved | Genesis Online School
      </div>
    </footer>
  );
}

export default Footer;

