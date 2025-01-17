// src/components/Header.jsx
import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';  // Import Link

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <div className={`py-4 px-8 md:px-16 flex justify-between items-center border-b relative ${theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
      <Link to="/" className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Ah.</Link>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75v2.25M5.636 18.364l1.591-1.591M3 12H5.25m-.386-6.364l1.591 1.591" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
        <div className="md:flex items-center hidden">
          <nav className="flex space-x-6 ml-8">
              <Link to="/" className={`py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Home</Link>
             <Link to="/blog" className={`py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Blog</Link>
            <Link to="/services" className={`py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Services</Link>
             <Link to="/contact" className={`py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Contact</Link>
          </nav>
        </div>
      <button onClick={toggleMobileMenu} className="md:hidden ml-4 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
     </button>
 </div>
   {/* Mobile Menu */}
   <div className={`md:hidden absolute top-full left-0 w-full z-10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`p-4 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
            <nav>
               <Link to="/" className={`block py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Home</Link>
              <Link to="/#" className={`block py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>About</Link>
              <Link to="/services" className={`block py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Services</Link>
              <Link to="/contact" className={`block py-2 text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Contact</Link>
            </nav>
        </div>
    </div>
</div>
  );
};

export default Header;