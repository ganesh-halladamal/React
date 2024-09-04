import React from 'react';
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import './App.css';


function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon"><FaCode /></div>
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Custom web development solutions to fit your needs.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon"><FaMobileAlt /></div>
          <h3 className="service-title">Mobile Apps</h3>
          <p className="service-description">
            Creating mobile applications that stand out.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon"><FaCloud /></div>
          <h3 className="service-title">Cloud Services</h3>
          <p className="service-description">
            Secure and scalable cloud services for your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
