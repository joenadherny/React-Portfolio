// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">Blake Boiteux</Link>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/resume">Resume</Link></li>
        <li className="navbar-item"><Link to="/portfolio">Portfolio</Link></li>
        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
