import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            MVG
          </Link>

          <nav>
            <ul className="nav-desktop">
              <li>
                <Link to="/" className={isActive("/") ? "active" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={isActive("/portfolio") ? "active" : ""}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive("/about") ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>

        <nav className={`nav-mobile ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;