import React from 'react';
import { useTheme } from '../ThemeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurTeam = () => {
    const { theme } = useTheme();

     const teamMembers = [
        {
           id: 1,
           name: 'Sari Sintia',
            role: 'Lead Developer',
            imageUrl: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/cewek/_sari_351-20250118-0001.jpg' ,
        },
        {
          id: 2,
          name: 'Hida Zein',
           role: 'UI/UX Designer',
           imageUrl: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/cewek/hida.z_85-20250118-0001.jpg',
       },
      {
            id: 3,
            name: 'Nur Nuriman',
           role: 'Project Manager',
           imageUrl: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/cewek/nur_nuriman-20250118-0001.jpg',
      },
      {
          id: 5,
           name: 'Finky Nurul',
           role: 'SEO Specialist',
           imageUrl: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/cewek/pink_nurulrr-20250118-0001.jpg',
      },
       {
           id: 4,
           name: 'Sania Tasya',
          role: 'Mobile Developer',
         imageUrl: 'https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/cewek/sunchq-20250118-0001.jpg',
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
