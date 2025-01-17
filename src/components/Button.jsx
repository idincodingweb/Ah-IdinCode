// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-gradient-to-l focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};

export default Button;