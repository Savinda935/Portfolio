import React, { useState } from 'react';

const Skills = ({ skills }) => {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">My Experience</h2>
      <div className="skills-container container grid">
        <div className="skills-tabs">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`skills-header${active === cat ? ' skills-active' : ''}`}
              onClick={() => setActive(cat)}
              data-target={`#${cat}`}
            >
              <div>
                <h1 className="skills-title">{cat}</h1>
                <span className="skills-subtitle">{skills[cat].length} skills</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-content">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`skills-group${active === cat ? ' skills-active' : ''}`}
              data-content
              id={cat}
            >
              <div className="skills-list grid">
                {skills[cat].map((skill) => (
                  <div className="skills-data" key={skill.name}>
                    <div className="skills-titles">
                      <h3 className="skills-name">{skill.name}</h3>
                      <span className="skills-number">{skill.proficiency}%</span>
                    </div>
                    <div className="skills-bar">
                      <span className="skills-percentage" style={{ width: `${skill.proficiency}%` }}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 