import React from 'react';
import { User, BookOpen, Award, Code, Smartphone, Server, Video } from 'lucide-react';

const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'University of Sri Lanka Institute of Information Technology',
    year: '2022',
  },
];

const certifications = [
  'Quality Assurance – Udemy (Completed in 2024)',
  'AWS Certified Solutions Architect – Associate',
];

const skills = [
  {
    title: 'Web Developer',
    icon: <Code className="skill-icon" />,
    description: 'Building modern web applications with React, JavaScript, and responsive design',
    highlight: 'Frontend Focus'
  },
  {
    title: 'React Native Developer',
    icon: <Smartphone className="skill-icon" />,
    description: 'Creating cross-platform mobile apps with seamless user experiences',
    highlight: 'Mobile First'
  },
  {
    title: 'Backend Developer',
    icon: <Server className="skill-icon" />,
    description: 'Developing robust server-side solutions and APIs for scalable applications',
    highlight: 'Server Side'
  },
  {
    title: 'Content Creator',
    icon: <Video className="skill-icon" />,
    description: 'Sharing knowledge through tutorials, blogs, and educational content',
    highlight: 'Knowledge Sharing'
  }
];

const CVCard = () => (
  <div className="cv-card-group">
    <div className="cv-card group">
      <div className="cv-card-text text-gray-50">
        <span className="font-bold text-5xl">DS</span>
        <p className="text-xs">Software & Network Engineer</p>
      </div>
      <button className="cv-card-btn duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
        Download CV
        <svg className="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
          <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd"></path>
        </svg>
      </button>
      <svg className="cv-card-bg1 group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="5"></path></svg>
      <svg className="cv-card-bg2 group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="2"></path></svg>
    </div>
    <style jsx>{`
      .cv-card-group {
        position: relative;
        z-index: 2;
        margin-right: 2rem;
      }
      .cv-card {
        position: relative;
        border: 4px solid #0369a1;
        overflow: hidden;
        border-radius: 1.5rem;
        height: 13rem;
        width: 18rem;
        background: #0369a1;
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        transition: transform 0.3s;
        box-shadow: 0 4px 32px rgba(3, 105, 161, 0.15);
      }
      .cv-card-text {
        color: #f9fafb;
      }
      .cv-card-btn {
        transition: background 0.3s, color 0.3s;
        border-radius: 0.5rem;
        border: 1px solid #0369a1;
        background: #f9fafb;
        color: #0369a1;
        font-weight: 600;
        padding: 0.5rem 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
      }
      .cv-card-btn:hover {
        background: #0369a1;
        color: #f9fafb;
      }
      .cv-card-bg1, .cv-card-bg2 {
        position: absolute;
        bottom: -2px;
        right: -80px;
        width: 12rem;
        height: 12rem;
        z-index: 0;
        pointer-events: none;
      }
      .cv-card-bg2 {
        right: -90px;
        z-index: 1;
      }
      @media (max-width: 900px) {
        .cv-card-group {
          margin: 0 auto 2rem auto;
        }
      }
    `}</style>
  </div>
);

const About = React.forwardRef(({ about }, ref) => (
  <section id="about" ref={ref} className="about-section">
    <div className="about-flex-container">
      <CVCard />
      <div className="about-content">
        <div className="about-header">
          <img 
            src="https://via.placeholder.com/120x120.png?text=Profile" 
            alt="Profile" 
            className="about-profile-img" 
          />
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="about-mission">Passionate about building resilient systems and continuous learning.</p>
          </div>
        </div>
        <div className="glass-card about-main-card">
          <p className="about-text">{about || "I'm a dedicated developer with expertise across multiple technologies and platforms. I love creating solutions that make a difference and sharing knowledge with the community."}</p>
          <div className="skills-section">
            <h3 className="skills-header">What I Do</h3>
            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-card-content">
                    {skill.icon}
                    <h4 className="skill-heading">{skill.title}</h4>
                    <p className="skill-description">{skill.description}</p>
                    <p className="skill-highlight">{skill.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-details-grid">
            <div className="about-detail-block">
              <h3 className="about-subheader">
                <BookOpen className="about-icon" /> Education
              </h3>
              <ul className="education-list">
                {education.map((edu, idx) => (
                  <li key={idx} className="education-item">
                    <strong>{edu.degree}</strong><br />
                    <span>{edu.institution} ({edu.year})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-detail-block">
              <h3 className="about-subheader">
                <Award className="about-icon" /> Certifications
              </h3>
              <ul className="certifications-list">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="certification-item">{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style jsx>{`
      .about-section {
        padding-top: 6rem;
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
        min-height: 100vh;
        color: white;
      }

      .about-flex-container {
        display: flex;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .about-section-banner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* Ensure it's behind other content */
        overflow: hidden;
      }

      .about-star {
        position: absolute;
        width: 100px; /* Adjust size as needed */
        height: 100px; /* Adjust size as needed */
        opacity: 0.1; /* Adjust as needed */
      }

      .about-star:nth-child(1) { top: 10%; left: 20%; }
      .about-star:nth-child(2) { top: 30%; left: 70%; }
      .about-star:nth-child(3) { top: 50%; left: 10%; }
      .about-star:nth-child(4) { top: 70%; left: 60%; }
      .about-star:nth-child(5) { top: 90%; left: 30%; }
      .about-star:nth-child(6) { top: 20%; left: 80%; }
      .about-star:nth-child(7) { top: 40%; left: 40%; }

      .about-curved-corner-star {
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
      }

      .about-curved-corner-star div {
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }

      .about-curved-corner-star #about-curved-corner-bottomright {
        bottom: 0;
        right: 0;
        transform: rotate(180deg);
      }

      .about-curved-corner-star #about-curved-corner-bottomleft {
        bottom: 0;
        left: 0;
        transform: rotate(90deg);
      }

      .about-curved-corner-star #about-curved-corner-topright {
        top: 0;
        right: 0;
        transform: rotate(270deg);
      }

      .about-curved-corner-star #about-curved-corner-topleft {
        top: 0;
        left: 0;
        transform: rotate(0deg);
      }

      .about-content {
        flex: 1; /* Take available space */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 2rem; /* Add some space for the banner */
      }

      .about-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .about-profile-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #60a5fa;
        box-shadow: 0 4px 24px rgba(96, 165, 250, 0.2);
        background: #fff;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #60a5fa;
        margin: 0;
      }

      .about-mission {
        font-size: 1.15rem;
        color: #a78bfa;
        font-style: italic;
        margin-top: 0.5rem;
      }

      .glass-card {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }

      .about-main-card {
        margin-top: 1rem;
        padding: 2rem;
        width: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .about-text {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #d1d5db;
        text-align: center;
        margin-bottom: 1rem;
      }

      .skills-section {
        margin: 2rem 0;
      }

      .skills-header {
        font-size: 1.8rem;
        font-weight: 600;
        color: #60a5fa;
        text-align: center;
        margin-bottom: 2rem;
      }

      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        justify-items: center;
      }

      .skill-card {
        position: relative;
        width: 240px;
        height: 280px;
        background-color: #000;
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 20px;
        gap: 12px;
        border-radius: 12px;
        cursor: pointer;
        color: white;
        transition: transform 0.3s ease;
      }

      .skill-card:hover {
        transform: translateY(-5px);
      }

      .skill-card::before {
        content: '';
        position: absolute;
        inset: 0;
        left: -5px;
        margin: auto;
        width: 250px;
        height: 290px;
        border-radius: 14px;
        background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
        z-index: -10;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .skill-card::after {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0;
        background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
      }

      .skill-card:hover::after {
        filter: blur(30px);
      }

      .skill-card:hover::before {
        transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
      }

      .skill-card-content {
        position: relative;
        z-index: 1;
      }

      .skill-icon {
        width: 2.5rem;
        height: 2.5rem;
        color: #60a5fa;
        margin-bottom: 1rem;
      }

      .skill-heading {
        font-size: 1.4rem;
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .skill-description {
        font-size: 0.9rem;
        color: #d1d5db;
        line-height: 1.4;
        margin-bottom: 1rem;
      }

      .skill-highlight {
        color: #e81cff;
        font-weight: 600;
        font-size: 0.9rem;
      }

      .about-details-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-between;
        margin-top: 2rem;
      }

      .about-detail-block {
        flex: 1 1 250px;
      }

      .about-subheader {
        font-size: 1.25rem;
        font-weight: 600;
        color: #60a5fa;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .about-icon {
        width: 1.25rem;
        height: 1.25rem;
      }

      .education-list, .certifications-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .education-item {
        margin-bottom: 0.75rem;
        color: #d1d5db;
      }

      .certification-item {
        color: #d1d5db;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .certification-item::before {
        content: '✓';
        color: #60a5fa;
      }

      @media (max-width: 768px) {
        .about-flex-container {
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
        }

        .about-section-banner {
          position: static;
          width: 100%;
          height: 200px; /* Adjust height for smaller screens */
          margin-bottom: 2rem;
        }

        .about-star {
          width: 50px;
          height: 50px;
          opacity: 0.05;
        }

        .about-star:nth-child(1) { top: 10%; left: 10%; }
        .about-star:nth-child(2) { top: 20%; left: 60%; }
        .about-star:nth-child(3) { top: 40%; left: 5%; }
        .about-star:nth-child(4) { top: 60%; left: 50%; }
        .about-star:nth-child(5) { top: 80%; left: 20%; }
        .about-star:nth-child(6) { top: 10%; left: 70%; }
        .about-star:nth-child(7) { top: 30%; left: 30%; }

        .about-curved-corner-star {
          width: 50px;
          height: 50px;
        }

        .about-curved-corner-star div {
          width: 50px;
          height: 50px;
        }

        .about-curved-corner-star #about-curved-corner-bottomright {
          bottom: 0;
          right: 0;
          transform: rotate(180deg);
        }

        .about-curved-corner-star #about-curved-corner-bottomleft {
          bottom: 0;
          left: 0;
          transform: rotate(90deg);
        }

        .about-curved-corner-star #about-curved-corner-topright {
          top: 0;
          right: 0;
          transform: rotate(270deg);
        }

        .about-curved-corner-star #about-curved-corner-topleft {
          top: 0;
          left: 0;
          transform: rotate(0deg);
        }

        .about-content {
          padding-left: 0;
        }

        .about-header {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        .about-main-card {
          padding: 1.5rem;
        }

        .skills-grid {
          grid-template-columns: 1fr;
        }

        .skill-card {
          width: 100%;
          max-width: 280px;
        }

        .skill-card::before {
          width: calc(100% + 10px);
        }

        .about-details-grid {
          flex-direction: column;
          gap: 1.5rem;
        }
      }

      @media (max-width: 600px) {
        .about-content {
          padding: 0 1rem;
        }

        .about-main-card {
          padding: 1rem;
        }

        .section-title {
          font-size: 2rem;
        }

        .skills-header {
          font-size: 1.5rem;
        }
      }
    `}</style>
  </section>
));

export default About;