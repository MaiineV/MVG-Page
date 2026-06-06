import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { IconMail, IconBriefcase, IconLinkedin } from "./Icons";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useLang();
  const f = t.footer;
  const n = t.nav;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="/brand/logo-principal-neg.svg"
              alt="MVG Games"
              style={{ height: "44px", width: "auto", marginBottom: "1rem" }}
            />
            <p>{f.tagline}</p>
            <div className="social-icons">
              <a
                href="mailto:mainevgames@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Email MVG"
              >
                <IconMail width={20} height={20} />
              </a>
              <a
                href="https://www.fiverr.com/s/XLdA9WZ"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="MVG on Fiverr"
              >
                <IconBriefcase width={20} height={20} />
              </a>
              <a
                href="http://linkedin.com/company/maine-v-games"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="MVG on LinkedIn"
              >
                <IconLinkedin width={20} height={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{f.quickLinks}</h3>
            <ul className="footer-links">
              <li><Link to="/">{n.home}</Link></li>
              <li><Link to="/services">{n.services}</Link></li>
              <li><Link to="/portfolio">{n.portfolio}</Link></li>
              <li><Link to="/about">{n.about}</Link></li>
              <li><Link to="/contact">{n.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{f.servicesH}</h3>
            <ul className="footer-links">
              <li><Link to="/services">Web &amp; Frontend</Link></li>
              <li><Link to="/services">Backend &amp; APIs</Link></li>
              <li><Link to="/services">Game Development</Link></li>
              <li><Link to="/contact">{f.requestQuote}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{f.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
