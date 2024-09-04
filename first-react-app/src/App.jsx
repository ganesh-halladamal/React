import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';
import TestimonialSection from './TestimonialSection';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <AboutUs />
        <Services />
        <TestimonialSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
