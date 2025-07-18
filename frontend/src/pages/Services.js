import React, { useState } from 'react';

const servicesData = [
  {
    title: 'Web Designer',
    icon: 'uil uil-web-grid',
    description: 'I offer services with more than 3 years of experience with quality work to clients and companies',
    details: [
      'User Interface Development',
      'Web Page Development',
      'Interactive UX/UI Creations',
      'Company Brand Positioning',
      'Design and Mockup of products for companies',
    ],
  },
  {
    title: 'UI/UX Designer',
    icon: 'uil uil-arrow',
    description: 'I offer services with more than 5 years of experience with quality work to clients and companies',
    details: [
      'Usability Testing',
      'User Research',
      'Interaction Design',
      'Responsive Design',
      'Branding & Style Guides',
      'Accessibility',
      'A/B Testing',
    ],
  },
  {
    title: 'Branding Designer',
    icon: 'uil uil-edit',
    description: 'I offer services with more than 2 years of experience with quality work to clients and companies',
    details: [
      'Competitive Analysis',
      'Accessibility Design',
      'Project Management',
      'Iteration and Refinement',
      'Presenting Designs',
      'User Research',
      'Surveys & Questionnaires',
    ],
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>
      <div className="services-container container grid">
        {servicesData.map((service, idx) => (
          <div className="services-content" key={service.title}>
            <div>
              <i className={`${service.icon} services-icon`}></i>
              <h3 className="services-title">{service.title.split(' ')[0]} <br /> {service.title.split(' ').slice(1).join(' ')}</h3>
            </div>
            <span className="services-button" onClick={() => setActiveModal(idx)}>
              View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>
            <div className={`services-modal${activeModal === idx ? ' active-modal' : ''}`}>
              <div className="services-modal-content">
                <i className="uil uil-times services-modal-close" onClick={() => setActiveModal(null)}></i>
                <h3 className="services-modal-title">{service.title}</h3>
                <p className="services-modal-description">{service.description}</p>
                <ul className="services-modal-services grid">
                  {service.details.map((detail, i) => (
                    <li className="services-modal-service" key={i}>
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
