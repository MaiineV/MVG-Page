import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MVG</h3>
            <p>
              Creating extraordinary gaming experiences that push the boundaries
              of imagination and innovation.
            </p>
            <div className="social-icons">
              <a
                href="mailto:mainevgames@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                ✉️
              </a>
              <a
                href="https://www.fiverr.com/s/XLdA9WZ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                💼
              </a>
              <a
                href="http://linkedin.com/company/maine-v-games"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                🔗
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>Game Development</li>
              <li>Creative Design</li>
              <li>Consultation</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 MVG. All rights reserved. Made with ❤️ in Buenos Aires,
            Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
