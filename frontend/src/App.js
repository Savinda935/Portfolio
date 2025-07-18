import React, { useState, useRef } from 'react';
import Header from './pages/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Qualifications from './pages/Qualifications';
import portfolioData from './pages/portfolioData';
import './pages/portfolio.css';
import Footer from './pages/Footer';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'qualification', label: 'Qualifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef({});

  const handleSectionClick = (id) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header sections={sections} activeSection={activeSection} onSectionClick={handleSectionClick} />
      <main className="main" style={{ flex: 1, marginTop: '64px' }}>
        <div ref={el => (sectionRefs.current.home = el)}><Home data={portfolioData} /></div>
        <div ref={el => (sectionRefs.current.about = el)}><About about={portfolioData.about} education={portfolioData.education} experience={portfolioData.experience} /></div>
        <div ref={el => (sectionRefs.current.qualification = el)}><Qualifications /></div>
        <div ref={el => (sectionRefs.current.skills = el)}><Skills skills={portfolioData.skills} /></div>
        <div ref={el => (sectionRefs.current.work = el)}><Projects projects={portfolioData.projects} /></div>
        <div ref={el => (sectionRefs.current.services = el)}><Services /></div>
        <div ref={el => (sectionRefs.current.contact = el)}><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;