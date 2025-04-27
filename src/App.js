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
     <Portfolio />
     <Pattern />
     <About />
     <Home />
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
    <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
      <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
      <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
      <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
      <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
        <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
        <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
        <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
      <GameItem 
      gameName="Sawi, The Void Buster" 
      pptLink="https://docs.google.com/presentation/d/1i41noAkloAquLU7qBuRX9uC8RNmDiLRpW37RkgdQFuM/edit?usp=sharing"
      imageRoute={"SawiBanner.png"}/>
    </div>
  </section>
);

const GameItem = ({ gameName, pptLink, imageRoute }) => (
  <a href={pptLink} target="_blank" rel="noopener noreferrer" className="game-item">
    <div className="game-thumbnail">
      <img src={imageRoute} alt={gameName} className="thumbnail-image" />
    </div>
    <h3 className="game-title">{gameName}</h3>
  </a>
);

const Footer = () => (
  <footer className="footer">
    <div className="social-icons">
      <a href="mailto:mainevgames@gmail.com" target="_blank" rel="noreferrer"><img src="mailvector.png" alt="Mail Logo"/></a>
      <a href="https://www.fiverr.com/s/XLdA9WZ" target="_blank" rel="noreferrer"><img src="FiverrLogo.png" alt="Fiverr Logo"/></a>
      <a href="http://linkedin.com/company/maine-v-games" target="_blank" rel="noreferrer"><img src="LinkedinLogo.png" alt="Linkedin Logo"/></a>
    </div>
    <p>© 2024 MVG. All rights reserved.</p>
  </footer>
);

const Pattern = () => (
  <div className="pattern">
    <img src="PatternMVG.png" alt="MVG Pattern"></img>
  </div>
);

export default App;
