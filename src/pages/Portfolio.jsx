// pages/Portfolio/Portfolio.jsx
import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'CSS Portfolio',
      imageSrc: "src/assets/Screenshot1.png",
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      title: 'SVG Logo Maker',
      imageSrc: "src/assets/Screenshot2.png",
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },
    {
        title: 'Password Generator',
        imageSrc: "src/assets/Screenshot4.png",
        deployedLink: 'https://example.com/project2',
        githubLink: 'https://github.com/example/project2',
      },
      {
        title: 'Note Taker',
        imageSrc: "src/assets/Screenshot3.png",
        deployedLink: 'https://example.com/project2',
        githubLink: 'https://github.com/example/project2',
      },
      

   
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
