import React from 'react';

const education = [
  {
    title: 'XYZ University (Sometown, NJ)',
    degree: 'BFA in Graphic Design',
    period: '2011 - 2013',
  },
  {
    title: 'ABC University (Sometown, NJ)',
    degree: 'Diploma in Web Design',
    period: '2013 - 2015',
  },
  {
    title: 'KLM University (Sometown, NJ)',
    degree: 'BS in Web Development',
    period: '2015 - 2017',
  },
];

const experience = [
  {
    title: 'Copalopa Inc. (Sometown, NJ)',
    role: 'Lead / Senior UX Designer',
    period: '2018 - Present',
  },
  {
    title: 'Gabogle Inc. (Sometown, NJ)',
    role: 'Web site / UX Designer',
    period: '2015 - 2018',
  },
  {
    title: 'Copalopa Inc. (Sometown, NJ)',
    role: 'Junior UX Designer',
    period: '2013 - 2015',
  },
];

const Qualifications = () => (
  <section className="qualification section" id="qualification">
    <h2 className="section-title" data-heading="My Journey">Qualifications</h2>
    <div className="qualification-container container grid">
      <div className="education">
        <h3 className="qualification-title"><i className="uil uil-graduation-cap"></i>Education</h3>
        <div className="timeline">
          {education.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="circle-dot"></div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-text">{item.degree}</p>
              <span className="timeline-date"><i className="uil uil-calendar-alt"></i>{item.period}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="experience">
        <h3 className="qualification-title"><i className="uil uil-suitcase"></i>Experience</h3>
        <div className="timeline">
          {experience.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="circle-dot"></div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-text">{item.role}</p>
              <span className="timeline-date"><i className="uil uil-calendar-alt"></i>{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Qualifications; 