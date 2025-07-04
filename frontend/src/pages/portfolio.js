import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Network, ChevronDown, MapPin, Calendar, Building, Sun, Moon } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './portfolio.css';

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
      image: 'https://via.placeholder.com/300x200?text=Uplink+Monitoring',
    },
    {
      name: '🚨 Alert Escalation System',
      description: 'A web-based tool to streamline server issue escalation, guiding users through diagnostics to route issues efficiently.',
      tech: ['React', 'Express.js', 'MongoDB'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Enterprise',
      featured: true,
      image: 'https://via.placeholder.com/300x200?text=Alert+Escalation',
    },
    {
      name: '🚀 Skill-Sharing & Learning Platform',
      description: 'A platform for sharing skills and learning through interactive courses and mentorship, built with React and Spring Boot.',
      tech: ['React', 'Spring Boot', 'MongoDB', 'JWT'],
      link: 'https://github.com/Savinda935/Skill-Sharing-Learning-Platform_PAF',
      category: 'Web Development',
      featured: false,
      image: 'https://via.placeholder.com/300x200?text=Skill+Sharing',
    },
    {
      name: '🐾 Pet Care System',
      description: 'A full-stack MERN application for managing pet appointments, pain control, and health monitoring.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: 'https://github.com/Savinda935/Pet-Care-System',
      category: 'Web Development',
      featured: false,
      image: 'https://via.placeholder.com/300x200?text=Pet+Care',
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

      <section id="hero" ref={(el) => (sectionsRef.current.hero = el)} className="hero-section">
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
      </section>

      <section id="about" ref={(el) => (sectionsRef.current.about = el)} className="section">
        <div className="section-content fade-in-up">
          <h2 className="section-title">About Me</h2>
          <div className="glass-card"><p className="about-text">{portfolioData.about}</p></div>
        </div>
      </section>

      <section id="skills" ref={(el) => (sectionsRef.current.skills = el)} className="section">
        <div className="section-content">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="glass-card skill-card fade-in-left">
                <h3 className="skill-category">{category}</h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span>{skill.name}</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${skill.proficiency}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" ref={(el) => (sectionsRef.current.projects = el)} className="section">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-section">
            <h3 className="project-subsection">Enterprise Solutions</h3>
            <div className="projects-grid">
              {portfolioData.projects.filter((p) => p.featured).map((project) => (
                <div key={project.name} className="project-card glass-card fade-in-up">
                  <img src={project.image} alt={project.name} className="project-image" />
                  <div className="project-header">
                    <h4 className="project-title">{project.name}</h4>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="neo-button project-link">
                    <ExternalLink className="icon small" /> View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="project-section">
            <h3 className="project-subsection">Other Projects</h3>
            <div className="projects-grid">
              {portfolioData.projects.filter((p) => !p.featured).map((project) => (
                <div key={project.name} className="project-card glass-card fade-in-up">
                  <img src={project.image} alt={project.name} className="project-image small" />
                  <h4 className="project-title small">{project.name}</h4>
                  <p className="project-description small">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag small">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="neo-button project-link small">
                    <ExternalLink className="icon extra-small" /> View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section id="contact" ref={(el) => (sectionsRef.current.contact = el)} className="section">
        <div className="section-content">
          <h2 className="section-title">Get In Touch</h2>
          <div className="glass-card contact-card fade-in-up">
            <p className="contact-text">Let's connect and discuss opportunities in software development and network engineering.</p>
            <div className="contact-links">
              <a href={`mailto:${portfolioData.contact.email}`} className="neo-button"><Mail className="icon" /> Send Email</a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="neo-button"><Linkedin className="icon" /> LinkedIn</a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="neo-button"><Github className="icon" /> GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Dilshan Savinda. Built with React & CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;