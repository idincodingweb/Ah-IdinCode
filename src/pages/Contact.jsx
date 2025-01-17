// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm'; // Import ContactForm Component
import { useTheme } from '../ThemeContext';

const Contact = () => {
   const { theme } = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
        <ContactForm />
     </div>
   );
};

export default Contact;