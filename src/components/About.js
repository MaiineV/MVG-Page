import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-logo">
        <img src="about-logo.png" alt="About Us Logo" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>We are a game development company...</p>
      </div>
    </section>
  );
};

export default About;
