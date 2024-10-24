import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>AK</h1>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="toggle-icon" /> : <FaBars className="toggle-icon" />}
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="education" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
