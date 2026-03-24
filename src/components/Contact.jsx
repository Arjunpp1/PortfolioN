import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-wrapper glass animate-fade-in-up">
          <div className="contact-info">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">
              I am actively seeking opportunities in IT support or network engineering roles. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              <a href="mailto:pparjun918@gmail.com" className="contact-item group">
                <div className="contact-icon-wrapper">
                  <Mail size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">pparjun918@gmail.com</span>
                </div>
              </a>

              <a href="tel:7736972761" className="contact-item group">
                <div className="contact-icon-wrapper">
                  <Phone size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">7736972761</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arjun-pp-2311b2256" target="_blank" rel="noopener noreferrer" className="contact-item group">
                <div className="contact-icon-wrapper">
                  <Globe size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">arjun-pp</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Kannur</span>
                </div>
              </div>
            </div>
            
            <div className="languages-section">
              <h3 className="languages-title">Languages Spoken</h3>
              <div className="languages-list">
                <span className="language-badge">English</span>
                <span className="language-badge">Hindi</span>
                <span className="language-badge">Malayalam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © {new Date().getFullYear()} Arjun P P. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
