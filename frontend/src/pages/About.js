import React from 'react';
import profilephoto from '../images/profilephoto.png';

const About = ({ about, education, experience }) => (
  <section className="about section" id="about">
    <h2 className="section-title" data-heading="My Intro">About me</h2>
    <div className="about-container container grid">
      <img src={profilephoto} alt="About" className="about-img" />
      <div className="about-data">
        <h3 className="about-heading">Hi, I'm Dilshan Savinda, based in Sri Lanka</h3>
        <p className="about-description">{about}</p>
        <div className="about-info">
          <div className="about-box">
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">{experience[0]?.period}</span>
          </div>
          <div className="about-box">
            <h3 className="about-title">Company</h3>
            <span className="about-subtitle">{experience[0]?.company}</span>
          </div>
          <div className="about-box">
            <h3 className="about-title">Role</h3>
            <span className="about-subtitle">{experience[0]?.role}</span>
          </div>
        </div>
        <a href="#contact" className="button">Contact me</a>
      </div>
    </div>
  </section>
);

export default About; 