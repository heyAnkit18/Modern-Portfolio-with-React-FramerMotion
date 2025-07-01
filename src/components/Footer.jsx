import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Ankit. All rights reserved.</p>
        <p className="footer-text">
          Full Stack Developer with a passion for building impactful web applications.
          <br />
          <span className="opportunities-text">Open to new challenges and collaborations. Let’s connect!</span>
        </p>
        <a href="#top" className="back-to-top">Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;