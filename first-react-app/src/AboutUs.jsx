import React from "react";
import "./AboutUs.css"; // Make sure to create this CSS file or use inline styles


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Welcome to Exclamatory Labs Pvt Ltd, where innovation meets
            creativity. We are dedicated to providing cutting-edge solutions
            that drive success and deliver exceptional results. Our team of
            experts is passionate about transforming ideas into reality,
            ensuring the highest quality and satisfaction for our clients.
            Join us on our journey as we continue to push the boundaries
            of technology and creativity.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="/about.jpg"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
