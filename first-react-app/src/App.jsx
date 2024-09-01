// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import Services from './Services';
import Footer from './Footer';
import AboutUs from './AboutUs';
import TestimonialSection from './TestimonialSection';
import ContactUs from './ContactUs';

ReactDOM.render(<App />, document.getElementById('root'));
function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <HeroSection />
        <AboutUs/>
        <Services />
        <TestimonialSection/>
        <ContactUs/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
