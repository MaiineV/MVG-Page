import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
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
     <Home />
     <Pattern />
     <About />
     <Portfolio />
  </main>
);

const Home = () => (
  <div id="home" className="home">
    <h1>Everything you <br/> can imagine</h1>
  </div>
);

const About = () => (
  <section id="about" className="about">
    <h2>About Us</h2>
    <p>MVG is an argentine company dedicated to video game development, created in 2024, which aims 
      to design and develop its own and third-party games.</p>
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

const GameItem = () => (
  <div className="game-item">
    <div className="game-thumbnail">
      <iframe width="100%" height="250ox" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
    <img src="PatternMVG.png" alt="MVG Pattern"></img>
  </div>
);

export default App;
