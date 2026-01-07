import React from 'react';
import { FaGithub, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="logo-text glass">Aryan <span>Khanal</span></h2>
            <p>Engineering impactful digital experiences through code.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social-section">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="https://github.com/AryanKhanal03" target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aryan-k-0386a627a/" target="_blank" rel="noopener noreferrer" className="social-link glass" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Aryan Khanal. All Rights Reserved.</p>
          <Link to="home" smooth={true} duration={500} className="back-to-top glass">
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;