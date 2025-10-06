import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace these with your actual EmailJS credentials
  const SERVICE_ID = "service_uoqwllq";
  const TEMPLATE_ID = "template_jdorox7";
  const PUBLIC_KEY = "7VGg1CkH7NgLyFD8H";

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS parameters - these should match your template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "mainevgames@gmail.com", // Your receiving email
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.email.includes("@") &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== ""
    );
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

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: '#f44336',
                  color: 'white',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  ✗ Failed to send message. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: "100%",
                  opacity: isSubmitting || !validateForm() ? 0.7 : 1,
                  cursor: isSubmitting || !validateForm() ? 'not-allowed' : 'pointer'
                }}
                disabled={isSubmitting || !validateForm()}
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
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