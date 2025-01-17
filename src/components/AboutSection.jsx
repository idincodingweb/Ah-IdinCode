// src/components/AboutSection.jsx
import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

const AboutSection = () => {
    const { theme } = useTheme();
    const [skills, setSkills] = useState([
        { name: 'HTML', progress: 90 },
        { name: 'CSS', progress: 85 },
        { name: 'JavaScript', progress: 75 },
        { name: 'React', progress: 80 },
        { name: 'Tailwind CSS', progress: 95 },
        { name: 'UI Design', progress: 86 },
    ]);

    const handleProgressChange = (index, newProgress) => {
        if(newProgress < 0) newProgress = 0
        if(newProgress > 100) newProgress = 100
        const updatedSkills = skills.map((skill, i) =>
            i === index ? { ...skill, progress: newProgress } : skill
        );
        setSkills(updatedSkills);
    };


    return (
        <div className="py-16 px-8 md:px-16">
            <div className="flex flex-col md:flex-row justify-center items-start"> {/* Ubah items-center menjadi items-start */}
               <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                     About Me
                 </h2>
                 <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                    Hello, I'm Idin Iskandar, a passionate front-end developer dedicated to creating seamless and engaging web experiences. With a keen eye for detail and a love for clean code, I specialize in crafting user-friendly interfaces that blend functionality with aesthetics. My goal is to continuously learn and adapt to the ever-evolving landscape of web development, always striving to deliver cutting-edge solutions that push creative boundaries.
                </p>
                 <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>I'm also proficient in other areas such as team collaboration, project management, and clear communication. Beyond the tech, I enjoy photography, reading, and exploring new cultures.</p>
               </div>
              <div className="md:w-1/2"> {/*Skills Di kanan*/}
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                          My Skills
                    </h3>
                  <ul className="mb-6 skills-item-container">
                      {skills.map((skill, index) => (
                         <li key={index} className="mb-4 skills-item-mobile">
                             <div className="flex justify-between items-center mb-2">
                                 <span className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{skill.name}</span>
                                 <span className={`font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{skill.progress}%</span>
                             </div>
                             <div className="relative bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
                                 <div
                                     className={`bg-gradient-to-r from-pink-500 to-orange-500 h-4 rounded-full`}
                                     style={{ width: `${skill.progress}%`}}
                                 >
                               </div>
                               <input
                                   type="range"
                                    min="0"
                                    max="100"
                                   value={skill.progress}
                                   onChange={(e) => handleProgressChange(index, parseInt(e.target.value))}
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                                />
                            </div>
                       </li>
                     ))}
                 </ul>
           </div>
        </div>
  </div>
 );
};

export default AboutSection;