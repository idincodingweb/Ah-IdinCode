// src/pages/Home.jsx
import React from 'react';
import BannerSection from '../components/BannerSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import { useTheme } from '../ThemeContext';


const Home = () => {
    const {theme} = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
      <BannerSection />
      <AboutSection />
      <PortfolioSection />
    </div>
  );
};

export default Home;