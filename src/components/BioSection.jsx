// src/components/BioSection.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react'; // Import icons from lucide-react


const BioSection = () => {
  const { theme } = useTheme();
  return (
    <div className="py-16 px-8 md:px-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Bio Me
      </h2>
        <div className={`max-w-2xl mx-auto p-6 rounded-lg  ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-800 border border-gray-700'}`}>
        <div className="mb-6">
          <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            <span className="font-normal mr-2">Full Name:</span>
              Idin Iskandar, S.kom (Sarjana Komedi)
          </h3>
          <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
           <span className="font-normal mr-2">Address:</span>
                41372 Karawang, Jawabarat, Indonesia
          </h3>
          <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
           <span className="font-normal mr-2">School:</span>
                UNIKOM (Universitas Komedi)
          </h3>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
           <span className="font-normal mr-2">Occupation:</span>
                PT. Prima Jaya Abadi (Product Desain)
           </h3>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              <span className="font-normal mr-2">Email:</span>
              idincode@gmail.com
            </h3>
             <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
               I'm also a big fan of open-source projects, and I'm always looking for new ways to contribute to the community. My personal mantra: "Keep it simple, yet make it significant."
           </p>
        </div>
        <div className="flex justify-start mt-6">
             <a href="#" className="text-gray-500 hover:text-white relative">
                  <Facebook className="w-6 h-6" />
                     <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(255, 0, 255, 0.2)', filter: 'blur(1px)' }}></div>
                   <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(0, 255, 255, 0.2)', filter: 'blur(2px)' }}></div>
              </a>
                  <a href="#" className="text-gray-500 hover:text-white relative ml-4">
                        <Instagram className="w-6 h-6" />
                        <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(0, 255, 0, 0.2)', filter: 'blur(1px)' }}></div>
                       <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(255, 0, 0, 0.2)', filter: 'blur(2px)' }}></div>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white relative ml-4">
                      <Twitter className="w-6 h-6" />
                      <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(0, 0, 255, 0.2)', filter: 'blur(1px)' }}></div>
                   <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(255, 255, 0, 0.2)', filter: 'blur(2px)' }}></div>
                </a>
                   <a href="#" className="text-gray-500 hover:text-white relative ml-4">
                      <Github className="w-6 h-6"/>
                       <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(255, 0, 0, 0.2)', filter: 'blur(1px)' }}></div>
                     <div className="absolute inset-0 w-full h-full rounded-full shadow-md pointer-events-none" style={{ background: 'rgba(0, 0, 255, 0.2)', filter: 'blur(2px)' }}></div>
                    </a>
           </div>
         </div>
        </div>
   );
};

export default BioSection;