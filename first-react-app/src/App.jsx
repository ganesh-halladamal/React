// src/App.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';
import TestimonialSection from './TestimonialSection';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <HeroSection />
        <AboutUs/>
        <Services />
        <TestimonialSection/>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
