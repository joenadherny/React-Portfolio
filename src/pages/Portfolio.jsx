// pages/Portfolio/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'CSS Portfolio',
      imageSrc: "src/assets/Screenshot1.png",
      deployedLink: 'https://joenadherny.github.io/Portfolio-CSS/',
      githubLink: 'https://github.com/joenadherny/Portfolio-CSS',
    },
    {
      title: 'SVG Logo Maker',
      imageSrc: "src/assets/Screenshot2.png",
      deployedLink: 'https://joenadherny.github.io/SVG--Logo-Creator/',
      githubLink: 'https://github.com/joenadherny/SVG--Logo-Creator',
    },
    {
        title: 'Password Generator',
        imageSrc: "src/assets/Screenshot4.png",
        deployedLink: 'https://joenadherny.github.io/Password-Generator/',
        githubLink: 'https://github.com/joenadherny/Password-Generator',
      },
      {
        title: 'Note Taker',
        imageSrc: "src/assets/Screenshot3.png",
        deployedLink: 'https://bote-taker-production.up.railway.app/',
        githubLink: 'https://github.com/joenadherny/Bote-Taker',
      },
      {
        title: 'Text-Editor',
        imageSrc: "src/assets/Screenshot3.png",
        deployedLink: 'https://text-editor-production-7b11.up.railway.app/',
        githubLink: 'https://github.com/joenadherny/Text-Editor',
      },
      {
        title: 'README-Generator',
        imageSrc: "src/assets/Screenshot3.png",
        deployedLink: 'https://joenadherny.github.io/README-Generator-/',
        githubLink: 'https://github.com/joenadherny/README-Generator-',
      },
      

    // Add more projects as needed
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-links">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed Link
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
