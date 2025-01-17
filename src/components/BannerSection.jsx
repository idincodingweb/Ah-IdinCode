// src/components/BannerSection.jsx
import React from 'react';
import Button from './Button';
import Imges from '../assets/images/about.png';
import { useTheme } from '../ThemeContext';

const BannerSection = () => {
    const { theme } = useTheme();
    return (
      <div className={`rounded-3xl py-16 px-8 md:px-16 relative overflow-hidden ${theme === 'light' ? 'bg-gradient-to-br from-pink-100 to-orange-100' : 'bg-gradient-to-br from-gray-800 to-gray-700'}`}>
        <div className={`absolute top-0 left-0 w-full h-full opacity-50 rounded-3xl ${theme === 'light' ? 'bg-gradient-to-tr from-pink-100 to-orange-100' : 'bg-gradient-to-tr from-gray-800 to-gray-700'}`}></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
             <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center md:text-left ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Hello, I'm Idin Iskandar
            </h2>
             <h4 className={`text-xl mb-4 text-center md:text-left ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                A passionate Front End Developer
            </h4>
            <div className="flex justify-center md:justify-start mb-8">
                <Button text="View My Portfolio" />
            </div>
            <p className={`text-center md:text-left ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Welcome to my online portfolio! Here, you'll find a collection of my work, demonstrating my passion for creating elegant and functional user interfaces. Let's build amazing web experiences together.
            </p>
        </div>
         <div className="md:w-1/2 flex justify-center md:justify-end">
               <img
                   src={Imges}
                   alt="Profile"
                   className="rounded-full object-cover w-64 h-64 shadow-lg"
                  />
           </div>
        </div>
      </div>
    );
  };
  
  export default BannerSection;