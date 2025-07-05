import React from 'react';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const sampleSkills = {
  'Frontend': [
    { name: 'React', proficiency: 95 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'TypeScript', proficiency: 85 }
  ],
  'Backend': [
    { name: 'Node.js', proficiency: 88 },
    { name: 'Python', proficiency: 80 },
    { name: 'Express.js', proficiency: 85 },
    { name: 'REST APIs', proficiency: 90 }
  ],
  'Database': [
    { name: 'MongoDB', proficiency: 85 },
    { name: 'PostgreSQL', proficiency: 80 },
    { name: 'MySQL', proficiency: 78 },
    { name: 'Firebase', proficiency: 82 }
  ],
  'Tools & Others': [
    { name: 'Git', proficiency: 90 },
    { name: 'Docker', proficiency: 75 },
    { name: 'AWS', proficiency: 70 },
    { name: 'React Native', proficiency: 88 }
  ]
};

const categoryIcons = {
  'Frontend': <Code className="category-icon" />,
  'Backend': <Database className="category-icon" />,
  'Database': <Database className="category-icon" />,
  'Tools & Others': <Wrench className="category-icon" />,
  'Design': <Palette className="category-icon" />
};

const Skill = React.forwardRef(({ skills = sampleSkills }, ref) => (
  <section id="skills" ref={ref} className="skills-section">
    <div className="skills-content">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillsArr]) => (
          <div key={category} className="card">
            <div className="main-content">
              <div className="header">
                <span>{categoryIcons[category] || <Code className="category-icon" />}</span>
                <span>{category}</span>
              </div>
              <p className="heading">{category} Skills</p>
              <div className="categories">
                {skillsArr.map((skill) => (
                  <span key={skill.name}>{skill.name}</span>
                ))}
              </div>
            </div>
            <div className="footer">
              {skillsArr.map((skill, idx) => (
                <span key={skill.name}>
                  {skill.name}{idx < skillsArr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .skills-section {
        padding: 6rem 0;
        background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
        min-height: 100vh;
        color: white;
      }
      .skills-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }
      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #60a5fa;
        text-align: center;
        margin-bottom: 3rem;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        justify-items: center;
      }
      .card {
        width: 320px;
        height: 350px;
        padding: 20px;
        color: white;
        background: linear-gradient(#212121, #212121) padding-box,
                    linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
        border: 2px solid transparent;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        transform-origin: right bottom;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
      }
      .card .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .card .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }
      .card .header span:first-child {
        font-weight: 600;
        color: #717171;
        margin-right: 4px;
        display: flex;
        align-items: center;
      }
      .card .heading {
        font-size: 24px;
        margin: 24px 0 16px;
        font-weight: 600;
      }
      .card .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .card .categories span {
        background-color: #e81cff;
        padding: 4px 8px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 50em;
      }
      .card .footer {
        font-weight: 600;
        color: #717171;
        margin-right: 4px;
        font-size: 13px;
        margin-top: 12px;
        white-space: normal;
        word-break: break-word;
      }
      .card:hover {
        rotate: 8deg;
      }
      .category-icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #60a5fa;
      }
      @media (max-width: 1024px) {
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .card {
          width: 100%;
          min-width: 0;
        }
      }
      @media (max-width: 768px) {
        .skills-content {
          padding: 0 1rem;
        }
        .section-title {
          font-size: 2rem;
        }
        .skills-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .card {
          padding: 12px;
          height: auto;
        }
        .card .heading {
          font-size: 18px;
        }
      }
      @media (max-width: 600px) {
        .card {
          padding: 8px;
        }
        .card .heading {
          font-size: 16px;
        }
      }
    `}</style>
  </section>
));

export default Skill;