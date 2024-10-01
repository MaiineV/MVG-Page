import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <div className="contact-links">
        <a href="https://wa.me/your-number" className="contact-link">WhatsApp</a>
        <a href="https://www.fiverr.com/your-profile" className="contact-link">Fiverr</a>
        <a href="https://www.linkedin.com/in/your-profile" className="contact-link">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
