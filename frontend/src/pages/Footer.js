import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg">
      <div className="footer-container container grid">
        <div>
          <h1 className="footer-title">Dilshan</h1>
          <span className="footer-subtitle">Software & Network Engineer</span>
        </div>
        <ul className="footer-links">
          <li>
            <a href="#services" className="footer-links">Services</a>
          </li>
          <li>
            <a href="#work" className="footer-links">Work</a>
          </li>
          <li>
            <a href="#contact" className="footer-links">Contact</a>
          </li>
        </ul>
        <div className="footer-socials">
          <a href="https://github.com/Savinda935" target="_blank" rel="noopener noreferrer" className="footer-social">
            <i className="uil uil-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dilshan-savinda-795753312/" target="_blank" rel="noopener noreferrer" className="footer-social">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="mailto:dilshansavinda83@gmail.com" className="footer-social">
            <i className="uil uil-envelope"></i>
          </a>
        </div>
      </div>
      <p className="footer-copy">&#169; <a href="https://github.com/Savinda935">Dilshan Savinda</a>. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
