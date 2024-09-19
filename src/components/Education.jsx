import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <div id="education" className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education & Internship
      </motion.h2>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h3>Internship</h3>
        <p><strong>10X Academy, Hyderabad</strong></p>
        <p>Full Stack Development Bootcamp</p>
        <p>8-months hands-on experience in full stack development, including MERN stack projects.</p>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3>B.Tech - Computer Science & Engineering</h3>
        <p><strong>ABES Engineering College</strong></p>
        <p>Graduated in 2020 with a focus on software development, algorithms, and database management.</p>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h3>12th Standard</h3>
        <p><strong>SIG INT College</strong></p>
        <p>Completed in 2016 with a science focus (Physics, Chemistry, Mathematics).</p>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3>10th Standard</h3>
        <p><strong>Modern Academy</strong></p>
        <p>Completed in 2014 with strong academic performance.</p>
      </motion.div>
    </div>
  );
};

export default Education;
