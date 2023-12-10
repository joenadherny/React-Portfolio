// pages/AboutMe/AboutMe.jsx
import React from 'react';
import aboutMeImage from '../../public/aboutme-image.jpg'; // Replace with your actual image path
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <img src={aboutMeImage} alt="Developer Avatar" className="about-me-image" />
      <p className="about-me-bio">
        Insert your short bio text here. Talk about your interests, skills, and a brief overview of your background.
      </p>
    </div>
  );
};

export default AboutMe;
