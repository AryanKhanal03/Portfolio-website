import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';
// Using public-served PDF to avoid hashed filenames

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-logo">
            <img src={process.env.PUBLIC_URL + '/website-logo.png'} alt="Logo" className="circle-logo" />
          </div>
          <h1>Hi, I'm <span className="highlight">Aryan Khanal</span></h1>
          <h2>Full Stack Developer & Mobile App Developer</h2>
          <p>I build exceptional digital experiences that make an impact</p>
          
          <div className="hero-btns">
            <Link to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
              <motion.button 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
            <motion.a 
              href={process.env.PUBLIC_URL + '/Cv.pdf'} 
              className="btn" 
              download 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </motion.a>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;