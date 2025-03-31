// Header.jsx
import React from 'react';
import Navigation from './Navigation';
import '../components/css/Header.css'; // Create and style this file as needed

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>GameDay Central</h1>
      </div>
      <button className="menu-toggle" aria-label="Toggle navigation">&#9776;</button>
      <Navigation />
    </header>
  );
};

export default Header;
