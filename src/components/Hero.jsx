import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.png'; // Ensure the image path is correct
import resumePDF from '../assets/resume.pdf'; // Import your resume PDF

// Typing effect speed in milliseconds
const typingSpeed = 50;

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `As a Rising Full Stack Developer with a specialization in the MERN stack, I bring hands-on experience in building dynamic web applications. My expertise includes React and Node.js, where I leverage my skills to create efficient and scalable solutions. I am passionate about continuous learning and collaboration to drive innovation in web development.`;

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
        <p>
          Full Stack Developer | MERN Stack Expert | React JS & Node JS Specialist
        </p>
        <p>{displayedText}</p>
        <div className="social-links">
          <a href="https://github.com/heyAnkit18" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-949090261/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:ankitkumarjune18@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
        </div>
        {/* Resume Download Button */}
        <motion.a 
          className="resume-btn"
          href={resumePDF} // Reference the imported resume PDF
          download="Ankit_Kumar_Resume.pdf"
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
        <img src={profileImage} alt="Ankit's Profile" />
      </motion.div>
    </div>
  );
};

export default Hero;


