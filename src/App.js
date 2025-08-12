import React, { useState, useEffect } from 'react';

// Styles Component
const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Lemonada:wght@300..700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Nunito', sans-serif;
      background-color: #EDBAA6;
      overflow-x: hidden;
    }

    :root {
      --primary-color: #b83b5e;
      --secondary-color: #D48032;
      --background-color: #EDBAA6;
      --accent-color: #bd7231;
      --white: #ffffff;
      --text-dark: #333;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .btn {
      display: inline-block;
      padding: 12px 24px;
      background: var(--accent-color);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-family: 'Nunito', sans-serif;
    }

    .btn:hover {
      background: #c07432;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .section-title {
      font-family: 'Lemonada', cursive;
      font-size: clamp(2rem, 5vw, 4rem);
      color: var(--secondary-color);
      text-align: center;
      margin-bottom: 2rem;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: var(--primary-color);
      border-radius: 2px;
    }

    .fade-in {
      animation: fadeIn 0.8s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .slide-in-left {
      animation: slideInLeft 0.8s ease-out;
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .slide-in-right {
      animation: slideInRight 0.8s ease-out;
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .parallax {
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media (max-width: 768px) {
      .container {
        padding: 0 0.5rem;
      }
    }
  `}</style>
);

// Navigation Component
const Navigation = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: ${isScrolled ? 'rgba(184, 59, 94, 0.95)' : 'var(--primary-color)'};
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: ${isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'};
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          color: white;
          font-size: 28px;
          font-family: 'Lemonada', cursive;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-desktop {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-desktop button {
          color: white;
          background: none;
          border: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
        }

        .nav-desktop button:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .nav-desktop button.active {
          background: rgba(255,255,255,0.2);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: 8px;
        }

        .hamburger {
          width: 25px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .nav-mobile {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--primary-color);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .nav-mobile.open {
          display: block;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile ul {
          list-style: none;
          padding: 1rem 0;
        }

        .nav-mobile button {
          display: block;
          width: 100%;
          color: white;
          background: none;
          border: none;
          text-decoration: none;
          padding: 1rem 2rem;
          transition: background 0.3s ease;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
          text-align: left;
        }

        .nav-mobile button:hover {
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .menu-toggle { display: flex; }
          .nav-mobile { display: ${isMenuOpen ? 'block' : 'none'}; }
        }
      `}</style>
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo" onClick={() => handlePageChange('home')}>
              MVG
            </div>
            
            <nav>
              <ul className="nav-desktop">
                <li><button className={currentPage === 'home' ? 'active' : ''} onClick={() => handlePageChange('home')}>Home</button></li>
                <li><button className={currentPage === 'portfolio' ? 'active' : ''} onClick={() => handlePageChange('portfolio')}>Portfolio</button></li>
                <li><button className={currentPage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>About</button></li>
                <li><button className={currentPage === 'contact' ? 'active' : ''} onClick={() => handlePageChange('contact')}>Contact</button></li>
              </ul>
            </nav>

            <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </div>
          </div>

          <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><button onClick={() => handlePageChange('home')}>Home</button></li>
              <li><button onClick={() => handlePageChange('portfolio')}>Portfolio</button></li>
              <li><button onClick={() => handlePageChange('about')}>About</button></li>
              <li><button onClick={() => handlePageChange('contact')}>Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

// Home Page Component
const HomePage = ({ onPageChange }) => {
  return (
    <>
      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, var(--background-color) 0%, #f0c19c 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D48032' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E") repeat;
          opacity: 0.3;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-family: 'Lemonada', cursive;
          font-size: clamp(3rem, 8vw, 8rem);
          color: var(--secondary-color);
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          line-height: 1.1;
        }

        .hero p {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: var(--text-dark);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--primary-color);
        }

        .btn-primary:hover {
          background: #a0325a;
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
        }

        .features {
          padding: 4rem 0;
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.15);
          border-color: var(--primary-color);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 2rem;
        }

        .feature-card h3 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--primary-color), #a0325a);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }

        .cta-section h2 {
          font-family: 'Lemonada', cursive;
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .btn-cta {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-cta:hover {
          background: white;
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main>
        <section className="hero fade-in">
          <div className="container">
            <div className="hero-content">
              <h1>Everything you<br />can imagine</h1>
              <p>Creating extraordinary gaming experiences that push the boundaries of imagination and innovation.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => onPageChange('portfolio')}>
                  Explore Games
                </button>
                <button className="btn btn-outline" onClick={() => onPageChange('about')}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">What We Do</h2>
            <div className="features-grid">
              <div className="feature-card slide-in-left">
                <div className="feature-icon">🎮</div>
                <h3>Game Development</h3>
                <p>Creating immersive 2D and 3D gaming experiences with innovative gameplay mechanics and stunning visuals.</p>
              </div>
              <div className="feature-card fade-in">
                <div className="feature-icon">🎨</div>
                <h3>Creative Design</h3>
                <p>Bringing unique artistic visions to life with our talented team of designers and artists.</p>
              </div>
              <div className="feature-card slide-in-right">
                <div className="feature-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Pushing the boundaries of what's possible in gaming through cutting-edge technology and creative thinking.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Start Your Gaming Journey?</h2>
            <p>Join thousands of players who have already discovered our amazing games.</p>
            <button className="btn btn-cta" onClick={() => onPageChange('portfolio')}>
              View Our Games
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

// Portfolio Page Component
const PortfolioPage = ({ onGameSelect }) => {
  const games = [
    {
      id: 'sawi',
      name: 'Sawi, The Void Buster',
      description: '2D Platformer while being a Frog Alien having a Work Crisis!',
      image: '/api/placeholder/400/250',
      category: 'Platformer',
      status: 'Demo Available'
    }
  ];

  return (
    <>
      <style jsx>{`
        .portfolio-page {
          min-height: 100vh;
          padding: 4rem 0;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .portfolio-subtitle {
          font-size: 1.3rem;
          color: var(--text-dark);
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .game-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .game-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .game-image {
          width: 100%;
          height: 250px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: white;
          transition: transform 0.3s ease;
        }

        .game-card:hover .game-image {
          transform: scale(1.1);
        }

        .game-content {
          padding: 2rem;
        }

        .game-title {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .game-category {
          display: inline-block;
          background: var(--primary-color);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .game-description {
          color: var(--text-dark);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .game-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .no-games {
          text-align: center;
          padding: 4rem 0;
          color: var(--text-dark);
        }

        .no-games h3 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .games-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="portfolio-page">
        <div className="container">
          <div className="portfolio-header fade-in">
            <h1 className="section-title">Our Portfolio</h1>
            <p className="portfolio-subtitle">
              Discover our collection of innovative games, each crafted with passion and attention to detail.
            </p>
          </div>

          {games.length > 0 ? (
            <div className="games-grid">
              {games.map((game, index) => (
                <div 
                  key={game.id} 
                  className={`game-card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                  onClick={() => onGameSelect(game)}
                >
                  <div className="game-status">{game.status}</div>
                  <div className="game-image">🎮</div>
                  <div className="game-content">
                    <h3 className="game-title">{game.name}</h3>
                    <span className="game-category">{game.category}</span>
                    <p className="game-description">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-games fade-in">
              <h3>More Games Coming Soon!</h3>
              <p>We're working hard on exciting new projects. Stay tuned for updates!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Game Details Component
const GameDetailsPage = ({ game, onBack }) => {
  if (!game) return null;

  const downloadLink = "https://drive.google.com/drive/folders/1qLpubZjmdf7CZxrNSlPjl6QM-GOvC9zl?dmr=1&ec=wgc-drive-globalnav-goto";
  const features = [
    "Unique frog alien protagonist",
    "Multiple worlds to explore",
    "Creative gadget-based gameplay",
    "Multiple completion paths",
    "Engaging storyline"
  ];

  return (
    <>
      <style jsx>{`
        .game-details-page {
          min-height: 100vh;
          padding: 4rem 0;
        }

        .game-hero {
          background: linear-gradient(135deg, var(--background-color) 0%, #f0c19c 100%);
          padding: 4rem 0;
          text-align: center;
        }

        .game-hero h1 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 1rem;
        }

        .game-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .meta-item {
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .game-content {
          background: white;
          margin-top: -2rem;
          border-radius: 40px 40px 0 0;
          position: relative;
          z-index: 2;
        }

        .content-inner {
          padding: 4rem 0;
        }

        .game-image-container {
          text-align: center;
          margin-bottom: 3rem;
        }

        .game-image {
          width: 100%;
          max-width: 600px;
          height: 400px;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          color: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .game-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .game-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--text-dark);
        }

        .game-features h3 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .features-list {
          list-style: none;
        }

        .features-list li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
        }

        .features-list li::before {
          content: '✓';
          color: var(--primary-color);
          font-weight: bold;
          margin-right: 1rem;
          font-size: 1.2rem;
        }

        .actions {
          text-align: center;
          padding: 2rem 0;
        }

        .actions .btn {
          margin: 0 1rem;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .game-info {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .game-meta {
            gap: 1rem;
          }
          
          .actions .btn {
            display: block;
            margin: 1rem auto;
            width: fit-content;
          }
        }
      `}</style>

      <div className="game-details-page">
        <section className="game-hero fade-in">
          <div className="container">
            <h1>{game.name}</h1>
            <div className="game-meta">
              <span className="meta-item">{game.category}</span>
              <span className="meta-item">Released 2024</span>
            </div>
          </div>
        </section>

        <section className="game-content">
          <div className="container">
            <div className="content-inner">
              <div className="game-image-container slide-in-left">
                <div className="game-image">🎮</div>
              </div>

              <div className="game-info">
                <div className="game-description slide-in-left">
                  <h3 style={{fontFamily: 'Lemonada, cursive', color: 'var(--secondary-color)', marginBottom: '1rem'}}>
                    About the Game
                  </h3>
                  <p>{game.description} Explore unique, different worlds, using your gadgets to complete them in your own way!</p>
                </div>

                <div className="game-features slide-in-right">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="actions fade-in">
                <a 
                  href={downloadLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-large"
                >
                  Check Demo & Trailer →
                </a>
                <button onClick={onBack} className="btn btn-large">
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// About Page Component
const AboutPage = () => {
  const teamMembers = [
    { name: "Game Designer", role: "Creative Vision", icon: "🎨" },
    { name: "Developer", role: "Technical Excellence", icon: "💻" },
    { name: "Artist", role: "Visual Storytelling", icon: "🖌️" }
  ];

  return (
    <>
      <style jsx>{`
        .about-page {
          min-height: 100vh;
        }

        .about-hero {
          background: linear-gradient(135deg, var(--primary-color), #a0325a);
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          opacity: 0.1;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
        }

        .about-hero h1 {
          font-family: 'Lemonada', cursive;
          font-size: clamp(3rem, 8vw, 5rem);
          margin-bottom: 1rem;
        }

        .about-hero p {
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .about-content {
          background: white;
          margin-top: -2rem;
          border-radius: 40px 40px 0 0;
          position: relative;
          z-index: 2;
        }

        .content-section {
          padding: 4rem 0;
        }

        .story-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .story-text h2 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .story-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-dark);
          margin-bottom: 1rem;
        }

        .story-image {
          background: linear-gradient(135deg, var(--background-color), #f0c19c);
          border-radius: 20px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8rem;
          position: relative;
          overflow: hidden;
        }

        .story-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D48032' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E") repeat;
        }

        .values-section {
          background: var(--background-color);
          padding: 4rem 0;
          margin: 4rem -2rem 0;
          border-radius: 40px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          padding: 0 5%
        }

        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-8px);
        }

        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-family: 'Lemonada', cursive;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .team-section {
          text-align: center;
          margin-top: 4rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .team-card {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
        }

        .team-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .story-section {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .values-section {
            margin: 2rem -1rem 0;
          }
          
          .story-image {
            height: 250px;
            font-size: 4rem;
          }
        }
      `}</style>

      <div className="about-page">
        <section className="about-hero fade-in">
          <div className="container">
            <div className="about-hero-content">
              <h1>About MVG</h1>
              <p>Passionate game developers creating extraordinary experiences since 2024</p>
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="content-section">
              <div className="story-section">
                <div className="story-text slide-in-left">
                  <h2>Our Story</h2>
                  <p>
                    MVG is an Argentine company dedicated to video game development, founded in 2024 with a clear mission: 
                    to design and develop innovative games that push the boundaries of imagination.
                  </p>
                  <p>
                    We specialize in creating both our own original titles and collaborating with other creators to bring 
                    their visions to life. Every project we undertake is infused with passion, creativity, and technical excellence.
                  </p>
                  <p>
                    Our team combines years of experience in game development with fresh perspectives on what makes 
                    games truly memorable and engaging.
                  </p>
                </div>
                <div className="story-image slide-in-right">
                  <img src='Principal1color.png' alt='MVG'></img>
                </div>
              </div>

              <div className="values-section">
                <h2 className="section-title">Our Values</h2>
                <div className="values-grid">
                  <div className="value-card fade-in">
                    <div className="value-icon">🎨</div>
                    <h3>Creativity</h3>
                    <p>We believe in the power of imagination to create worlds that captivate and inspire players.</p>
                  </div>
                  <div className="value-card fade-in">
                    <div className="value-icon">🌟</div>
                    <h3>Quality</h3>
                    <p>Every detail matters. We strive for excellence in every aspect of game development.</p>
                  </div>
                  <div className="value-card fade-in">
                    <div className="value-icon">🤝</div>
                    <h3>Collaboration</h3>
                    <p>Great games are made by great teams. We foster a culture of collaboration and mutual respect.</p>
                  </div>
                  <div className="value-card fade-in">
                    <div className="value-icon">🚀</div>
                    <h3>Innovation</h3>
                    <p>We're always looking for new ways to push the boundaries of what's possible in gaming.</p>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2 className="section-title">Our Team</h2>
                <div className="team-grid">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="team-card fade-in">
                      <div className="team-icon">{member.icon}</div>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          padding: 4rem 0;
        }

        .contact-hero {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }

        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #f0f0f0;
          border-radius: 10px;
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .contact-info {
          background: linear-gradient(135deg, var(--primary-color), #a0325a);
          color: white;
          padding: 3rem;
          border-radius: 20px;
          height: fit-content;
        }

        .contact-info h3 {
          font-family: 'Lemonada', cursive;
          margin-bottom: 2rem;
          font-size: 1.8rem;
        }

        .contact-methods {
          list-style: none;
        }

        .contact-methods li {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
        }

        .contact-methods .icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-methods a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .contact-methods a:hover {
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: white;
          color: var(--primary-color);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .contact-form,
          .contact-info {
            padding: 2rem;
          }
        }
      `}</style>

      <div className="contact-page">
        <div className="container">
          <div className="contact-hero fade-in">
            <h1 className="section-title">Get In Touch</h1>
            <p style={{fontSize: '1.3rem', color: 'var(--text-dark)', maxWidth: '600px', margin: '0 auto'}}>
              Have a project in mind? Want to collaborate? We'd love to hear from you!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-form slide-in-left">
              <h3 style={{fontFamily: 'Lemonada, cursive', color: 'var(--secondary-color)', marginBottom: '2rem'}}>
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

                <button type="button" className="btn btn-primary" style={{width: '100%'}} onClick={handleSubmit}>
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
                    <strong>Email</strong><br />
                    <a href="mailto:mainevgames@gmail.com">mainevgames@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">🌐</div>
                  <div>
                    <strong>Based in</strong><br />
                    Buenos Aires, Argentina
                  </div>
                </li>
                <li>
                  <div className="icon">⏰</div>
                  <div>
                    <strong>Response Time</strong><br />
                    Within 24 hours
                  </div>
                </li>
              </ul>

              <div className="social-links">
                <a href="https://www.fiverr.com/s/XLdA9WZ" target="_blank" rel="noopener noreferrer" className="social-link">
                  💼
                </a>
                <a href="http://linkedin.com/company/maine-v-games" target="_blank" rel="noopener noreferrer" className="social-link">
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
    </>
  );
};

// Footer Component
const Footer = ({ onPageChange }) => {
  return (
    <>
      <style jsx>{`
        .footer {
          background: var(--primary-color);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-family: 'Lemonada', cursive;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-section p {
          opacity: 0.9;
          line-height: 1.6;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links button {
          background: none;
          border: none;
          color: white;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity 0.3s ease;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-size: 16px;
        }

        .footer-links button:hover {
          opacity: 1;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: white;
          color: var(--primary-color);
          transform: translateY(-3px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 2rem;
          text-align: center;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MVG</h3>
              <p>Creating extraordinary gaming experiences that push the boundaries of imagination and innovation.</p>
              <div className="social-icons">
                <a href="mailto:mainevgames@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  ✉️
                </a>
                <a href="https://www.fiverr.com/s/XLdA9WZ" target="_blank" rel="noopener noreferrer" className="social-icon">
                  💼
                </a>
                <a href="http://linkedin.com/company/maine-v-games" target="_blank" rel="noopener noreferrer" className="social-icon">
                  🔗
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><button onClick={() => onPageChange('home')}>Home</button></li>
                <li><button onClick={() => onPageChange('portfolio')}>Portfolio</button></li>
                <li><button onClick={() => onPageChange('about')}>About</button></li>
                <li><button onClick={() => onPageChange('contact')}>Contact</button></li>
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
            <p>&copy; 2024 MVG. All rights reserved. Made with ❤️ in Buenos Aires, Argentina.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedGame(null);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setCurrentPage('game-details');
  };

  const handleBackToPortfolio = () => {
    setCurrentPage('portfolio');
    setSelectedGame(null);
  };

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'portfolio':
        return <PortfolioPage onGameSelect={handleGameSelect} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'game-details':
        return <GameDetailsPage game={selectedGame} onBack={handleBackToPortfolio} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;