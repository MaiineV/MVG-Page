import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <div className="logo">Logo</div>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
