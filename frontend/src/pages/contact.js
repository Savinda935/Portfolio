import React, { useState } from 'react';

const contactInfo = [
  {
    icon: 'uil uil-envelope-edit',
    title: 'Email',
    data: 'dilshansavinda83@gmail.com',
    button: 'Write me',
    link: 'mailto:user@gmail.com',
  },
  {
    icon: 'uil uil-whatsapp',
    title: 'Whatsapp',
    data: '+94 767 746 969',
    button: 'Write me',
    link: 'https://wa.me/999888777',
  },
  {
    icon: 'uil uil-facebook-messenger',
    title: 'Messenger',
    data: 'user.fb123',
    button: 'Write me',
    link: 'https://m.me/user.fb123',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ username: '', email: '', phone: '', message: '' });
  const [focus, setFocus] = useState({ username: false, email: false, phone: false, message: false });

  const handleFocus = (field) => setFocus({ ...focus, [field]: true });
  const handleBlur = (field) => setFocus({ ...focus, [field]: !!form[field] });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in Touch">Contact me</h2>
      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, idx) => (
              <div className="contact-card" key={item.title}>
                <i className={`${item.icon} contact-card-icon`}></i>
                <h3 className="contact-card-title">{item.title}</h3>
                <span className="contact-card-data">{item.data}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-button">
                  {item.button} <i className="uil uil-arrow-right contact-button-icon"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-content">
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className={`input-container${focus.username ? ' focus' : ''}`}> 
              <input type="text" className="input" name="username" value={form.username} onFocus={() => handleFocus('username')} onBlur={() => handleBlur('username')} onChange={handleChange} />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className={`input-container${focus.email ? ' focus' : ''}`}> 
              <input type="email" className="input" name="email" value={form.email} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} onChange={handleChange} />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container${focus.phone ? ' focus' : ''}`}> 
              <input type="tel" className="input" name="phone" value={form.phone} onFocus={() => handleFocus('phone')} onBlur={() => handleBlur('phone')} onChange={handleChange} />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea${focus.message ? ' focus' : ''}`}> 
              <textarea className="input" name="message" value={form.message} onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')} onChange={handleChange} />
              <label>Message</label>
              <span>Message</span>
            </div>
            <button type="submit" className="button"><i className="uil uil-navigator button-icon"></i>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
