import React from "react";
import './App.css';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0388562438447!2d144.95373631547317!3d-37.81627974275653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57706d3a36b5f38!2sGoogle%20Australia!5e0!3m2!1sen!2sus!4v1616122917692!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="social-media-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:hr@exclamatorylabs.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="tel:+918970086779">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
