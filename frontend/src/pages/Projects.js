import React, { useState } from 'react';

const Projects = ({ projects }) => {
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="My Portfolio">Recent Works</h2>
      <div className="work-filters">
        {categories.map(cat => (
          <span
            key={cat}
            className={`work-item${active === cat ? ' active-work' : ''}`}
            onClick={() => setActive(cat)}
            data-filter={cat === 'All' ? 'all' : `.${cat.toLowerCase()}`}
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="work-container container grid">
        {filtered.map((project, idx) => (
          <div className={`work-card mix ${project.category.toLowerCase()}`} key={idx}>
            <img src={project.image} alt="" className="work-img" />
            <h3 className="work-title">{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-button">Demo</a>
            <div className="portfolio-item-details" style={{ display: 'none' }}>
              <h3 className="details-title">{project.name}</h3>
              <p className="details-description">{project.description}</p>
              <ul className="details-info">
                <li>Technologies - <span>{project.tech.join(', ')}</span></li>
                <li>Role - <span>Developer</span></li>
                <li>View - <span><a href={project.link}>{project.link}</a></span></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 