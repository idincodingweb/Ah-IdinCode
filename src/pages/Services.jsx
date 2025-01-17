// src/pages/Services.jsx
import React from 'react';
import OurServices from '../components/OurServices'; // Import component OurServices
import OurTeam from '../components/OurTeam';       // Import component OurTeam
import LocationMap from '../components/LocationMap'; // Import component LocationMap
import { useTheme } from '../ThemeContext';

const Services = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <OurServices />
      <OurTeam />
      <LocationMap />
    </div>
  );
};

export default Services;