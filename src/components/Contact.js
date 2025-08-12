import { useState } from "react";
import '../styles/Contact.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-hero fade-in">
          <h1 className="section-title">Get In Touch</h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "var(--text-dark)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Have a project in mind? Want to collaborate? We'd love to hear from
            you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form slide-in-left">
            <h3
              style={{
                fontFamily: "Lemonada, cursive",
                color: "var(--secondary-color)",
                marginBottom: "2rem",
              }}
            >
              Send us a message
            </h3>

            <div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={handleSubmit}
              >
                Send Message →
              </button>
            </div>
          </div>

          <div className="contact-info slide-in-right">
            <h3>Let's Connect</h3>
            <ul className="contact-methods">
              <li>
                <div className="icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <br />
                  <a href="mailto:mainevgames@gmail.com">
                    mainevgames@gmail.com
                  </a>
                </div>
              </li>
              <li>
                <div className="icon">🌐</div>
                <div>
                  <strong>Based in</strong>
                  <br />
                  Buenos Aires, Argentina
                </div>
              </li>
              <li>
                <div className="icon">⏰</div>
                <div>
                  <strong>Response Time</strong>
                  <br />
                  Within 24 hours
                </div>
              </li>
            </ul>

            <div className="social-links">
              <a
                href="https://www.fiverr.com/s/XLdA9WZ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                💼
              </a>
              <a
                href="http://linkedin.com/company/maine-v-games"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                🔗
              </a>
              <a href="mailto:mainevgames@gmail.com" className="social-link">
                ✉️
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
