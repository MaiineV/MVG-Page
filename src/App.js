import React from "react";
import { BrowserRouter as Router, Route/*, Link*/, Routes } from "react-router-dom";
import "./App.css";

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

const Main = () => (
  <main>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Routes>
  </main>
);

const Home = () => (
  <div className="home">
    <h1>Everything you can imagine</h1>
    <Pattern />
  </div>
);

const About = () => (
  <section id="about" className="about">
    <h2>About Us</h2>
    <p>MVG is an Argentine company dedicated to video game development...</p>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="portfolio">
    <h2>Portfolio</h2>
    <div className="game-grid">
      <GameItem />
      <GameItem />
      <GameItem />
      <GameItem />
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    {/* Add your contact form or information here */}
  </section>
);

const GameItem = () => (
  <div className="game-item">
    <div className="game-thumbnail">
      {/* Replace with an actual YouTube embed */}
      <iframe width="100%" height="200" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <button className="download-button">Download</button>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2024 MVG. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://www.fiverr.com">Fiverr</a>
      <a href="https://www.linkedin.com">LinkedIn</a>
    </div>
  </footer>
);

const Pattern = () => (
  <div className="pattern">
    {/* Add your pattern design here */}
  </div>
);

export default App;
