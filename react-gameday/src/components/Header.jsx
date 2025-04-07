import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Header.css';

const Header = () => {
  // State to track if navigation is open or closed
  const [navOpen, setNavOpen] = useState(false);

  // Toggle the navigation menu open/closed
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  // Close the nav menu when a link is clicked (optional)
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>GameDay Central</h1>
      </div>
      <button className="menu-toggle" onClick={toggleNav} aria-label="Toggle navigation">
        &#9776;
      </button>
      <nav className={`nav ${navOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>About & Contact</Link>
          </li>
          <li>
            <Link to="/fixtures" onClick={closeNav}>Fixtures</Link>
          </li>
          <li>
            <Link to="/fanzone" onClick={closeNav}>Fanzone</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
