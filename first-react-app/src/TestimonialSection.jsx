import React from "react";
import "./AboutUs.css";

const testimonials = [
  {
    quote: "Exclamatory Labs has revolutionized our business processes. Their innovative solutions are top-notch!",
    author: "John Doe",
    designation: "CEO, ABC Corp"
  },
  {
    quote: "Working with Exclamatory Labs was a fantastic experience. Their team is professional, creative, and highly skilled.",
    author: "Jane Smith",
    designation: "CTO, XYZ Ltd"
  },
  {
    quote: "Their approach to solving complex problems is impressive. Highly recommended!",
    author: "Michael Lee",
    designation: "Project Manager, DEF Inc"
  }
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
            <p className="designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
