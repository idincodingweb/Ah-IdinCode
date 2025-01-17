// src/components/PortfolioSection.jsx
import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import Netflix from '../assets/images/screen/netflix.png';
import Imovies from '../assets/images/screen/imovies.png';
import Anime from '../assets/images/screen/animestory.png';
import Shop from '../assets/images/screen/olshop.png';
import Business from '../assets/images/screen/bisnsis.png';
import Profile from '../assets/images/screen/profile.png';
import ChatAi from '../assets/images/screen/ChatAi.png';


const PortfolioSection = () => {
    const { theme } = useTheme();
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const projects = [
         {
            id: 1,
            title: 'Netflix Clone',
            description: 'Netflik clone ini saya buat dengan desain yang mewah, tetapi saya belum filan mengembangkan ini sehingga masih ada bug pada front end nya.',
            imageUrl: Netflix,
            technologies: ['React', 'Tailwind CSS', 'Node.js'],
            viewDetailUrl: 'https://netflix-clone-v2-drab.vercel.app/',
        },
         {
             id: 2,
            title: 'Movies App',
            description: 'Movies App ini memiliki desain sederhana dan sedikit banayk fitur.',
            imageUrl: Imovies,
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            viewDetailUrl: 'https://imovies-v3.vercel.app/',
        },
          {
            id: 3,
            title: 'Anime Story Web',
            description: 'Anime story web ini saya buat dengn reactjs murni tanpa framework vite maupun netjs , dan fiturnya pun sederhna untuk desainnya saya gunakan warna neon lighting.',
            imageUrl: Anime,
            technologies: ['React', 'Chart.js', 'Material UI'],
            viewDetailUrl: 'https://asw-psi.vercel.app/',
          },
           {
             id: 4,
            title: 'Shope In',
            description: 'Online shop ini tanpa menggunakan backend namun desain sederhana dengan seikit fitur. ini tujuannya untuk landingpage produk saja.',
             imageUrl: Shop,
            technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
            viewDetailUrl: 'https://shope-in.vercel.app/',
           },
          {
            id: 5,
            title: 'Portfolio Business',
             description: 'Creative portfolio bisnis dengan desain mewah dan elegant, dibangun dengan react dan bootstrap5.',
             imageUrl: Business,
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
             viewDetailUrl: 'https://creative-business.vercel.app/',
           },
           {
            id: 6,
            title: 'Creative Profile',
             description: 'Creative Profile Portfolio Pribadi dengan desain mewah dan warna yang lembut, dibangun dengan react vite dan bootstrap5.',
             imageUrl: Profile,
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
             viewDetailUrl: 'https://creative-business.vercel.app/',
           },
           {
            id: 7,
            title: 'Chat Gpt AI Clone',
             description: 'Chatgpt A.I Clone Ini saya buat dengan desain sederhana responsif react js dan APIA dari gemini, framework css tailwind.',
             imageUrl: ChatAi,
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
             viewDetailUrl: 'https://idin-chat-bot.vercel.app/',
           },
    ];

    const handleToggleAccordion = (projectId) => {
        setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
    };

    return (
      <div className="py-16 px-8 md:px-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              My Projects
           </h2>
           <ul className="space-y-4">
            {projects.map((project) => (
                <li
                    key={project.id}
                    className={`border rounded-lg overflow-hidden ${theme === 'light' ? 'border-gray-200 bg-white' : 'border-gray-700 bg-gray-800'}`}
                >
                    <button
                       onClick={() => handleToggleAccordion(project.id)}
                       className="w-full py-4 px-6 flex justify-between items-center"
                   >
                       <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{project.title}</h3>
                        <svg
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                          className={`w-5 h-5 transition-transform duration-200  ${expandedProjectId === project.id ? 'rotate-180' : ''} ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                       >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                   </button>
                    <div
                        className={`${expandedProjectId === project.id ? 'block' : 'hidden'} px-6 pb-6 transition-all duration-300`}
                    >
                          <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-48 rounded-lg mb-4" />
                          <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{project.description}</p>
                           <ul className={`flex mb-4 text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                              {project.technologies.map((tech, index) => (
                                 <li key={index} className="mr-2">{tech}</li>
                              ))}
                         </ul>
                          <a href={project.viewDetailUrl} className={`inline-block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'light' ? 'text-white' : 'text-white'}`}> View Detail</a>
                      </div>
                 </li>
                ))}
            </ul>
        </div>
    );
};

export default PortfolioSection;
