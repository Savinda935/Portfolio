import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Network, ChevronDown, MapPin, Calendar, Building, Sun, Moon } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './portfolio.css';
import About from './About';
import herobg from '../images/herobg.png';
import Skill from './Skill';
import Project from './project';
import petcare from '../images/petcare.jpg';
import skillshare from '../images/skillshare.jpg';
import uplink from '../images/uplink.jpg';
import Alertescalation from '../images/Alertescalation.jpg';
import Contact from './contact';


gsap.registerPlugin(ScrollTrigger);

const portfolioData = {
  name: 'Dilshan Savinda',
  title: 'Software & Network Engineer',
  tagline: 'Building resilient systems & monitoring solutions',
  about: `I am a passionate software developer with experience in building web and mobile applications. I love solving problems and learning new technologies. Currently working at Fentons Information Technology as part of the Network Operations Center (NOC) team.`,
  skills: {
    'Programming': [
      { name: 'JavaScript', proficiency: 90 },
      { name: 'React', proficiency: 85 },
      { name: 'Node.js', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
      { name: 'Spring Boot', proficiency: 65 },
    ],
    'Infrastructure': [
      { name: 'Network Monitoring', proficiency: 88 },
      { name: 'System Administration', proficiency: 82 },
      { name: 'Server Management', proficiency: 80 },
      { name: 'NOC Operations', proficiency: 85 },
    ],
    'Database': [
      { name: 'MongoDB', proficiency: 80 },
      { name: 'MySQL', proficiency: 75 },
      { name: 'Database Design', proficiency: 70 },
    ],
    'Tools': [
      { name: 'Git', proficiency: 90 },
      { name: 'Docker', proficiency: 75 },
      { name: 'Linux', proficiency: 80 },
      { name: 'Network Diagnostics', proficiency: 85 },
    ],
  },
  projects: [
    {
      name: '📡 Real-Time Uplink Monitoring System',
      description: 'A real-time monitoring dashboard built to visualize uplink uptime and availability across multiple nodes. Used by IT teams to detect downtime and ensure network stability.',
      tech: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
      link: 'https://github.com/Savinda935/Uplink-Availability-Manage-System',
      category: 'Enterprise',
      featured: true,
      image: uplink,
    },
    {
      name: '🚨 Alert Escalation System',
      description: 'A web-based tool to streamline server issue escalation, guiding users through diagnostics to route issues efficiently.',
      tech: ['React', 'Express.js', 'MongoDB'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Enterprise',
      featured: true,
      image: Alertescalation,
    },
    {
      name: '🚀 Skill-Sharing & Learning Platform',
      description: 'A platform for sharing skills and learning through interactive courses and mentorship, built with React and Spring Boot.',
      tech: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
      link: 'https://github.com/Savinda935/Skill-Sharing-Learning-Platform_PAF',
      category: 'Web Development',
      featured: false,
      image: skillshare,
    },
    {
      name: '🐾 Pet Care System',
      description: 'A full-stack MERN application for managing pet appointments, pain control, and health monitoring.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Web Development',
      featured: false,
      image: petcare,
    },
  ],
  experience: [
    {
      company: 'Fentons Information Technology',
      role: 'Software & Network Engineer – NOC Team',
      period: '2022 - Present',
      location: 'Colombo, Sri Lanka',
      description: `Contributing to software development and infrastructure support in the NOC. Developed real-time monitoring and escalation tools, improving network uptime and response times.`,
      achievements: [
        'Developed monitoring systems improving uptime by 15%',
        'Created escalation tools reducing response time by 40%',
        'Enhanced system reliability with infrastructure teams',
        'Maintained 24/7 uptime monitoring',
      ],
    },
  ],
  contact: {
    email: 'dilshansavinda83@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dilshan-savinda-795753312/',
    github: 'https://github.com/Savinda935',
    location: 'Negombo, Western Province, Sri Lanka',
  },
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const sectionsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = 'hero';
      sections.forEach((section) => {
        const element = sectionsRef.current[section];
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.fade-in-up').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    gsap.utils.toArray('.fade-in-left').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const scrollToSection = (sectionId) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">DS</div>
          <div className="nav-links">
            {['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
          </button>
        </div>
      </nav>

      <section
        id="hero"
        ref={(el) => (sectionsRef.current.hero = el)}
        className="hero-section"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-flex-container">
          <div className="hero-content fade-in-up">
            <h1 className="glitch-text" data-text={portfolioData.name}>{portfolioData.name}</h1>
            <p className="typewriter">{portfolioData.title}</p>
            <p className="hero-tagline">{portfolioData.tagline}</p>
            <div className="social-links">
              <a href={portfolioData.contact.github} className="neo-button"><Github className="icon" /></a>
              <a href={portfolioData.contact.linkedin} className="neo-button"><Linkedin className="icon" /></a>
              <a href={`mailto:${portfolioData.contact.email}`} className="neo-button"><Mail className="icon" /></a>
            </div>
            <div className="hero-info">
              <div className="info-item"><Building className="icon small" /> Currently at Fentons Information Technology</div>
              <div className="info-item"><MapPin className="icon small" /> {portfolioData.contact.location}</div>
            </div>
            <div className="scroll-indicator"><ChevronDown className="icon" /></div>
          </div>
          <div className="hero-loader-container">
            <div className="hero-loader"></div>
            <div className="hero-loader"></div>
            <div className="hero-loader"></div>
          </div>
        </div>
      </section>

      <About about={portfolioData.about} ref={(el) => (sectionsRef.current.about = el)} />

      <Skill skills={portfolioData.skills} ref={(el) => (sectionsRef.current.skills = el)} />

      <Project projects={portfolioData.projects} ref={(el) => (sectionsRef.current.projects = el)} />

      <section id="experience" ref={(el) => (sectionsRef.current.experience = el)} className="section">
        <div className="section-content">
          <h2 className="section-title">Professional Experience</h2>
          {portfolioData.experience.map((exp) => (
            <div key={exp.company} className="glass-card experience-card fade-in-up">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <div className="experience-info">
                    <div className="info-item"><Calendar className="icon small" /> {exp.period}</div>
                    <div className="info-item"><MapPin className="icon small" /> {exp.location}</div>
                  </div>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div>
                <h4 className="experience-achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      <div className="achievement-dot"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact contact={portfolioData.contact} ref={(el) => (sectionsRef.current.contact = el)} />

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Dilshan Savinda. Built with React & CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;