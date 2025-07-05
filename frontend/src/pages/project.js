import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './project.css';

const getCategories = (projects) => {
  const cats = projects.map((p) => p.category);
  return ['All', ...Array.from(new Set(cats))];
};

const Project = React.forwardRef(({ projects }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = getCategories(projects);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="section">
      <div className="section-content">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-button${selectedCategory === cat ? ' active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="project-section">
          <h3 className="project-subsection">Enterprise Solutions</h3>
          <div className="projects-grid">
            {filteredProjects.filter((p) => p.featured).map((project) => (
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
            {filteredProjects.filter((p) => !p.featured).map((project) => (
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
  );
});

export default Project;
