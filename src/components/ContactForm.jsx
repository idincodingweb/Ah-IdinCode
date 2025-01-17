// src/components/ContactForm.jsx
import React, { useState } from 'react';
import LocationMap from './LocationMap';
import { useTheme } from '../ThemeContext';

const ContactForm = () => {
    const { theme } = useTheme();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:idincode@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
         window.location.href = mailtoLink;

        setName('');
        setEmail('');
        setMessage('');
    };

  return (
     <div className={`py-16 px-8 md:px-16 min-h-screen w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>  {/* Full width and min-h-screen*/}
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            Contact Me
         </h2>
        <div className={`overflow-hidden max-w-lg mx-auto p-6  ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-700 border border-gray-600'}`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Name</label>
                  <input
                       type="text"
                       id="name"
                       className={`border px-3 py-2 w-full ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-800' : 'bg-gray-700 border-gray-600 text-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                       required
                    />
                </div>
                  <div className="mb-4">
                     <label htmlFor="email" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Email</label>
                       <input
                          type="email"
                         id="email"
                         className={`border px-3 py-2 w-full ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-800' : 'bg-gray-700 border-gray-600 text-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="Enter your email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                         required
                       />
                 </div>
                  <div className="mb-4">
                      <label htmlFor="message" className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Message</label>
                       <textarea
                         id="message"
                           rows="5"
                          className={`border px-3 py-2 w-full ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-800' : 'bg-gray-700 border-gray-600 text-white'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Enter your message"
                             value={message}
                             onChange={(e) => setMessage(e.target.value)}
                            required
                       ></textarea>
                  </div>
                  <button type="submit" className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}>Send Message</button>
              </form>
        </div>
        <LocationMap />
       </div>
   );
};

export default ContactForm;