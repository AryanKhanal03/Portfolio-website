import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub} from 'react-icons/fa';
import './Projects.css';
import portfolioImg from '../../assets/portfolio.png';
import dinesmartImg from '../../assets/dinesmart.png';
import ebasketImg from '../../assets/e-basket.png';
import vmaxImg from '../../assets/vmax.png';
import paddlewarsImg from '../../assets/paddlewars.png';
import stonkwatchImg from '../../assets/stonkwatch.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Framer Motion.',
      image: portfolioImg,
      github: 'https://github.com/AryanKhanal03/Portfolio-website',
      tags: ['JavaScipt (React)', 'CSS3']
    },
    {
      id: 2,
      title: 'DineSmart',
      description: 'A restaurant management system for seamless dining experiences.',
      image: dinesmartImg,
      github: 'https://github.com/AryanKhanal03/DineSmart',
      tags: ['Flutter (Dart)', 'Firebase']
    },
    {
      id: 3,
      title: 'E-Basket',
      description: 'E-commerce platform for online shopping with cart functionality.',
      image: ebasketImg,
      github: 'https://github.com/AryanKhanal03/E_Basket-1',
      tags: ['JavaScript (React)', 'Firebase', 'CSS3']
    },
    {
      id: 4,
      title: 'V-Max',
      description: 'Robust backend for the V-Max application focusing on performance.',
      image: vmaxImg,
      github: 'https://github.com/AryanKhanal03/V-Max',
      tags: ['Java(SpringBoot)', 'JavaScript (React)', 'MySQL']
    },
    {
      id: 5,
      title: 'Paddle Wars',
      description: 'A classic pong game reimagined using OpenGL and Python.',
      image: paddlewarsImg,
      github: 'https://github.com/AryanKhanal03/paddle-wars.py',
      tags: ['Python (OpenGL)']
    },
    {
      id: 6,
      title: 'Stonk Watch',
      description: 'Real-time stock market tracking application for investors.',
      image: stonkwatchImg,
      github: 'https://github.com/AryanKhanal03/Stonk-Watch',
      tags: ['Flutter(Dart)', 'API']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card glass"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;