// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About & Contact</Link></li>
        <li><Link to="/fixtures">Fixtures</Link></li>
        <li><Link to="/fanzone">Fanzone</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
