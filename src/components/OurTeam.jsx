// src/components/OurTeam.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Avatar from '../assets/images/avatar1.jpg';
import Avatarr from '../assets/images/avatar2.jpg';
import Avatarrr from '../assets/images/avatar3.jpg';
import Avatarrrr from '../assets/images/avatar4.jpg';
import Avatarrrrr from '../assets/images/photo.png';

const OurTeam = () => {
    const { theme } = useTheme();

     const teamMembers = [
        {
           id: 1,
           name: 'John Doe',
            role: 'Lead Developer',
            imageUrl: Avatar,
        },
        {
          id: 2,
          name: 'Jane Smith',
           role: 'UI/UX Designer',
           imageUrl: Avatarr,
       },
      {
            id: 3,
            name: 'Mike Johnson',
           role: 'Project Manager',
           imageUrl: Avatarrr,
      },
      {
          id: 4,
           name: 'Emily Brown',
           role: 'SEO Specialist',
           imageUrl: Avatarrrr,
      },
       {
           id: 5,
           name: 'David Lee',
          role: 'Mobile Developer',
         imageUrl: Avatarrrrr,
        },
     ];

     const settings = {
        dots: true,
        infinite: true,
         speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
             slidesToScroll: 1,
           },
          },
           {
             breakpoint: 768,
              settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
           },
          {
             breakpoint: 480,
            settings: {
                slidesToShow: 1,
               slidesToScroll: 1,
             },
           },
        ],
      };


  return (
    <div className="py-16 px-8 md:px-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Our Team
      </h2>
      <Slider {...settings}>
           {teamMembers.map(member => (
             <div key={member.id} className="p-4">
                <div className={`shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-center  ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
                  <img src={member.imageUrl} alt={member.name} className="rounded-full object-cover w-32 h-32 mb-4" />
                  <h3 className={`font-bold text-lg ${theme === 'light' ? 'text-gray-800' : 'text-white'} mb-1`}>{member.name}</h3>
                  <p className={` ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{member.role}</p>
                </div>
           </div>
        ))}
       </Slider>
    </div>
  );
};

export default OurTeam;