import { Link } from "react-router-dom";
import '../styles/Home.css'

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        
      `}</style>

      <main>
        <section className="hero fade-in">
          <div className="container">
            <div className="hero-content">
              <h1>Everything you<br />can imagine</h1>
              <p>Creating extraordinary gaming experiences that push the boundaries of imagination and innovation.</p>
              <div className="hero-buttons">
                <Link to="/portfolio" className="btn btn-primary">
                  Explore Games
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
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
            <Link to="/portfolio" className="btn btn-cta">
              View Our Games
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
