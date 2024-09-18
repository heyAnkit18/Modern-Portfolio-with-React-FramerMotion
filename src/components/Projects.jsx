import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Video Sharing Platform',
    description: 'A dynamic platform for uploading and sharing videos, featuring user authentication and video management.',
    github: 'https://github.com/your-repo/video-sharing-platform',
    deploy: 'https://your-deployment-url.com/video-sharing-platform'
  },
  {
    title: 'University Portal',
    description: 'A comprehensive portal for university management with features for students, faculty, and administration.',
    github: 'https://github.com/your-repo/university-portal',
    deploy: 'https://your-deployment-url.com/university-portal'
  },
  {
    title: 'Event Booking Application',
    description: 'An application for booking events with a user-friendly interface and comprehensive event management features.',
    github: 'https://github.com/your-repo/event-booking-app',
    deploy: 'https://your-deployment-url.com/event-booking-app'
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <p>
          Here are some of the projects I’ve worked on. Each project showcases different aspects of my development skills and expertise.
        </p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn github-btn"
                >
                  <FaGithub className="icon" /> GitHub
                </a>
                <a 
                  href={project.deploy} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn deploy-btn"
                >
                  <FaExternalLinkAlt className="icon" /> Deploy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;