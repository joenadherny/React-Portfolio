// pages/AboutMe/AboutMe.jsx
import React from 'react';

import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <img src={aboutMeImage} alt="Developer Avatar" className="about-me-image" />
      <p className="about-me-bio">
        My name is Joe Nadherrny and I have just started my career path into coding. Below are some of the projects I have worked on over the past months in my Full Stack Web Development bootcamp I am finishing up. 
      </p>
    </div>
  );
};

export default AboutMe;
