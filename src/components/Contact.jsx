import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import resumePDF from '../assets/resume.pdf'; 

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <div className="contact-list">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">Email:</span>
              <a href="mailto:ankitkumarjune18@gmail.com" className="contact-link">ankitkumarjune18@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">Phone:</span>
              <span className="contact-link">8449917791</span>
            </div>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div className="contact-info">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="contact-link">View Profile</a>
            </div>
          </div>
        </div>
       
        <a 
          href={resumePDF}
          download="Ankit_Kumar_Resume.pdf" 
          className="resume-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;