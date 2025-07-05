import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

// Sample contact data - replace with your actual data
const sampleContact = {
  email: 'your.email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  phone: '+94 123 456 789',
  location: 'Colombo, Sri Lanka'
};

const Contact = React.forwardRef(({ contact = sampleContact }, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred email service
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's connect and discuss opportunities in software development and network engineering.
        </p>
        
        <div className="contact-grid">
          {/* Contact Information Card */}
          <div className="contact-card info-card">
            <div className="contact-card-content">
              <div className="card-header">
                <MessageCircle className="card-icon" />
                <h3 className="card-title">Contact Information</h3>
              </div>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <Mail className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${contact.email}`} className="contact-value">
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <Phone className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{contact.phone}</span>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <MapPin className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{contact.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin className="social-icon" />
                  <span>LinkedIn</span>
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github className="social-icon" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Card */}
          <div className="contact-card form-card">
            <div className="contact-card-content">
              <div className="card-header">
                <Send className="card-icon" />
                <h3 className="card-title">Send Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Enter your message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  <Send className="button-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Quick Contact Buttons */}
        <div className="quick-contact">
          <h3 className="quick-contact-title">Quick Connect</h3>
          <div className="quick-contact-buttons">
            <a href={`mailto:${contact.email}`} className="quick-button email-button">
              <Mail className="quick-icon" />
              <span>Email Me</span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="quick-button linkedin-button">
              <Linkedin className="quick-icon" />
              <span>LinkedIn</span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="quick-button github-button">
              <Github className="quick-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
          min-height: 100vh;
          color: white;
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #60a5fa;
          text-align: center;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #a78bfa;
          text-align: center;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-card {
          position: relative;
          background-color: #000;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.3s ease;
          min-height: 450px;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          left: -5px;
          margin: auto;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 14px;
          background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
          z-index: -10;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .contact-card::after {
          content: "";
          z-index: -1;
          position: absolute;
          inset: 0;
          background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
          transform: translate3d(0, 0, 0) scale(0.95);
          filter: blur(20px);
        }

        .contact-card:hover::after {
          filter: blur(30px);
        }

        .contact-card:hover::before {
          transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
        }

        .contact-card-content {
          position: relative;
          z-index: 1;
          padding: 2rem;
          height: 100%;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(96, 165, 250, 0.3);
        }

        .card-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #60a5fa;
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #60a5fa;
          margin: 0;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #e81cff;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .contact-label {
          font-size: 0.85rem;
          color: #9ca3af;
          font-weight: 500;
        }

        .contact-value {
          font-size: 0.95rem;
          color: #f3f4f6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: #60a5fa;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.3);
          border-radius: 8px;
          color: #60a5fa;
          text-decoration: none;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .social-link:hover {
          background: rgba(96, 165, 250, 0.2);
          border-color: #60a5fa;
        }

        .social-icon {
          width: 1rem;
          height: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.9rem;
          color: #d1d5db;
          font-weight: 500;
        }

        .form-input,
        .form-textarea {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #60a5fa;
          background: rgba(255, 255, 255, 0.15);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #e81cff 0%, #40c9ff 100%);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #d016e8 0%, #3bb8e6 100%);
          transform: translateY(-2px);
        }

        .button-icon {
          width: 1rem;
          height: 1rem;
        }

        .quick-contact {
          text-align: center;
        }

        .quick-contact-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 1.5rem;
        }

        .quick-contact-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .quick-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          min-width: 120px;
          justify-content: center;
        }

        .email-button {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
        }

        .linkedin-button {
          background: linear-gradient(135deg, #0077b5 0%, #0e76a8 100%);
          color: white;
        }

        .github-button {
          background: linear-gradient(135deg, #333 0%, #24292e 100%);
          color: white;
        }

        .quick-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .quick-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .contact-card {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            padding: 0 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .contact-card-content {
            padding: 1.5rem;
          }
          
          .quick-contact-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .quick-button {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 600px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-card-content {
            padding: 1rem;
          }
          
          .social-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
});

export default Contact;