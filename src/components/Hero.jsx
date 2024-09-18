import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.png'; // if the file is .png, for example


const typingSpeed = 50;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');

  const fullText = `As a rising Full Stack Developer, I am a dynamic individual adept at translating web application concepts into functional solutions. With 6+ months of hands-on experience and a focus on collaborative teamwork, I continuously seek opportunities to enhance my skills and drive innovation in modern web development.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        clearInterval(interval); 
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2 }}
      >
        <h1>Hello, I'm Ankit</h1>
        <p>Full Stack Developer | MERN Stack Expert</p>
        <p>{displayedText}</p>
        <div className="social-links">
          <a href="https://github.com/heyAnkit18" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-949090261/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:ankitkumarjune18@.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
        </div>
        <motion.a 
          className="resume-btn"
          href="/resume.pdf" 
          download
          whileHover={{ scale: 1.1, backgroundColor: "#FFD700", color: "#1C1C1C" }}
          transition={{ duration: 0.3 }}
        >
          <FaDownload className="icon" /> Download Resume
        </motion.a>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
      >
        {/* Replace the placeholder div with an image tag */}
        <img src={profileImage} alt="Ankit's Profile" className="profile-photo" />
      </motion.div>
    </div>
  );
};

export default Hero;
