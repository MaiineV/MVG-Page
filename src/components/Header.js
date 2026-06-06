import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, lang, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const LangToggle = ({ onClick }) => (
    <button
      type="button"
      className="lang-toggle"
      onClick={onClick}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
    >
      <span className={lang === "en" ? "on" : ""}>EN</span>
      <span className="sep">/</span>
      <span className={lang === "es" ? "on" : ""}>ES</span>
    </button>
  );

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" aria-label="MVG home">
            <img
              src="/brand/logo-principal-neg.svg"
              alt="MVG Games"
              className="logo-img"
            />
          </Link>

          <nav>
            <ul className="nav-desktop">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={isActive(item.to) ? "active" : ""}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <LangToggle onClick={toggle} />
              </li>
              <li>
                <Link to="/contact" className="btn btn-primary header-cta">
                  {t.nav.getQuote}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>

        <nav className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-mobile-actions">
              <LangToggle onClick={toggle} />
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary"
              >
                {t.nav.getQuote}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
