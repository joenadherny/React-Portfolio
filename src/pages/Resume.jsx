// pages/Resume/Resume.jsx
import React from 'react';
import './Resume.css';

const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React.js',
    'Node.js',
    'HTML5',
    'CSS3',
    'Git',
    'SQL',
    // Add more proficiencies as needed
  ];

  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>
        Download my resume:
        <a
          className="resume-link"
          href="/path/to/your/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume PDF
        </a>
      </p>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul className="proficiency-list">
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
