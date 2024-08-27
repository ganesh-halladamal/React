// src/App.jsx
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <HeroSection />
        <AboutUs/>
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
