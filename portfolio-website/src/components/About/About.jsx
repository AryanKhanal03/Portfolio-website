import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaReact, FaJs, FaPython, FaCss3Alt, FaDatabase as FaSQL } from 'react-icons/fa';
import { SiFirebase, SiFlutter } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'JavaScript', level: 80, icon: <FaJs /> },
    { name: 'Flutter/Dart', level: 80, icon: <SiFlutter /> },
    { name: 'Python', level: 70, icon: <FaPython /> },
    { name: 'CSS', level: 70, icon: <FaCss3Alt /> },
    { name: 'SQL', level: 40, icon: <FaSQL /> },
    { name: 'Firebase', level: 50, icon: <SiFirebase /> },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I am a Computer Engineering student at Kathmandu University with a passion for technology and innovation. Skilled in web and app development, I enjoy creating efficient and user-friendly solutions. What started as curiosity about the internet has grown into a commitment to building impactful digital experiences.
            </p>
            <p>
              Alongside this, I have a growing interest in Artificial Intelligence and Machine Learning, which inspire me to explore how intelligent systems can shape the future. I continuously adapt to new technologies to learn, grow, and contribute meaningfully.
            </p>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={require('../../assets/MyPhoto.jpeg')} alt="Aryan Khanal" />
          </motion.div>
        </div>

        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-level"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>My Expertise</h3>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaCode />
              </div>
              <h4>Frontend Development</h4>
              <p>Creating responsive and interactive user interfaces with modern frameworks like React.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaServer />
              </div>
              <h4>Backend Development</h4>
              <p>Building robust server-side applications and APIs using Python (with frameworks such as Flask or Django).</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaMobile />
              </div>
              <h4>Responsive Design</h4>
              <p>Ensuring applications work flawlessly across all devices and screen sizes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaDatabase />
              </div>
              <h4>Database Design</h4>
              <p>Designing and optimizing database schemas for efficient data management.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;