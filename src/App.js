import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/Home';
import PortfolioPage from './components/Portfolio';
import GameDetailsPage from './components/GameDetails';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';

import ScrollToTop from './ScrollToTop';

import './App.css';

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/game/:id" element={<GameDetailsPage />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;