import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-content delay-100 animate-fade-in-up">
            <h3 className="about-subtitle">IT Support & Network Enthusiast</h3>
            <p className="about-text">
              I am an IT graduate eager to apply my foundational knowledge in networking and systems troubleshooting to real-world challenges. My academic background and personal projects have equipped me with a solid understanding of network architectures and a proactive approach to solving technical issues.
            </p>
            <p className="about-text">
              Whether it's configuring local area networks or diagnosing hardware anomalies, I am driven by a passion for continuous learning and delivering reliable IT solutions.
            </p>
          </div>

          <div className="education-card glass delay-200 animate-fade-in-up">
            <div className="card-header">
              <GraduationCap className="card-icon" size={28} />
              <h3 className="card-title">Education</h3>
            </div>
            
            <div className="education-item">
              <h4 className="degree">B.Tech in Computer Science & Engineering</h4>
              <p className="institution">Sree Narayana Guru College of Engineering and Technology</p>
              
              <div className="education-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Oct 2021 – May 2025</span>
                </div>
                <div className="meta-item accent-text">
                  <Award size={16} />
                  <span>CGPA: 6.59/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
