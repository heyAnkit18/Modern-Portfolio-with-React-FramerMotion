import React from 'react';
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaNetworkWired } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiRedux, SiFirebase } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Data Structure', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Redux Toolkit', icon: <SiRedux /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <FaCode /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'Mongoose', icon: <FaCode /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'RESTful APIs', icon: <FaNetworkWired /> },
  ];

  return (
    <section className="skills">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="icon">{skill.icon}</div>
              <span className="name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;