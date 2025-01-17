// src/components/Footer.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react'; // Import icon from lucide-react


const Footer = () => {
    const { theme } = useTheme();
  return (
    <footer className={`py-8 px-8 md:px-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
           <div className="mb-6 md:mb-0 md:w-1/4">
                <h1 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-4`}>Ah.</h1>
                <p className={`text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>A passionate front-end developer. Let's build something amazing together.</p>
           </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h4 className={`font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-2`}>Socials</h4>
            <p className={`text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-4`}>idincode@gmail.com</p>
             <div className="flex space-x-4">
                    <a href="#" className={`text-gray-500 hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                        <Facebook className="w-6 h-6" />
                    </a>
                     <a href="#" className={`text-gray-500 hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                         <Instagram className="w-6 h-6" />
                    </a>
                   <a href="#" className={`text-gray-500 hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                     <Twitter className="w-6 h-6" />
                 </a>
                   <a href="#" className={`text-gray-500 hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                     <Github className="w-6 h-6" />
                 </a>
            </div>
         </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
               <h4 className={`font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-2`}>Quick Links</h4>
               <ul className={`text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                  <li className="mb-1"><a href="#" className={`hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>About</a></li>
                  <li className="mb-1"><a href="#" className={`hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>Portfolio</a></li>
                  <li><a href="#" className={`hover:${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>Contact</a></li>
                </ul>
          </div>
          <div className="md:w-1/4">
               <h4 className={`font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-2`}>Location & Contact</h4>
              <p className={`text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-2`}>Karawang, Jawabarat, Indonesia</p>
              <p className={`text-gray-600 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>(+62) 812-3456-7890</p>
           </div>
         </div>
         <div className={`text-center mt-6 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
           © {new Date().getFullYear()} Idin Iskandar. All rights reserved.
        </div>
     </footer>
    );
};

export default Footer;