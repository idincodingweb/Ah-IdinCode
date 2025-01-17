// src/components/TestimonialSection.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';

const TestimonialSection = () => {
    const { theme } = useTheme();
  return (
    <div className="py-16 px-8 md:px-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg shadow-md text-center border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
              <img src="https://placekitten.com/100/100" alt="Testimonial 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className={`font-bold text-lg mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>John Doe</h3>
              <p className={`text-gray-500 mb-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Company X</p>
              <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>"Testimonial 1."</p>
          </div>
           <div className={`p-6 rounded-lg shadow-md text-center border ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'}`}>
              <img src="https://placekitten.com/101/100" alt="Testimonial 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className={`font-bold text-lg mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Jane Smith</h3>
              <p className={`text-gray-500 mb-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>Company Y</p>
              <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>"Testimonial 2."</p>
          </div>
      </div>
    </div>
  );
};

export default TestimonialSection;