// import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const closeMenu = (e) => {
  //   if (!e.target.closest('.nav') && !e.target.closest('.menu-icon')) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isOpen) {
  //     document.addEventListener('click', closeMenu);
  //   } else {
  //     document.removeEventListener('click', closeMenu);
  //   }
  //   return () => {
  //     document.removeEventListener('click', closeMenu);
  //   };
  // }, [isOpen]);

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src="PrincipalNegativo.png" alt="MVG Games" className="logo-image" />
      </a>
    </header>
  );
};

export default Header;
