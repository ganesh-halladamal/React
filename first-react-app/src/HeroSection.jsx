import React from 'react';
import HeroImage from './assets/hero-image.jpg'; // Ensure the image exists in your assets folder
import './App.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={HeroImage} alt="Hero" />
      <h1>Welcome to Exclamatory Labs</h1>
      <p>Innovative Solutions for Your Business</p>
      <button>Get Started</button>
    </div>
  );
};

export default HeroSection;
