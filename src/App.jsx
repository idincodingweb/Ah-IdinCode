import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
      <div className="full-width-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
      </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;