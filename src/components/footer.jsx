// components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/joenadherny" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add another platform link here */}
      </div>
    </footer>
  );
};

export default Footer;
