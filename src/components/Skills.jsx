import React from 'react';
import { 
  Network, 
  Terminal, 
  Wrench, 
  AppWindow, 
  Cpu, 
  Users 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Networking',
      icon: <Network className="skill-icon" size={32} />,
      items: ['TCP/IP', 'DNS', 'DHCP', 'LAN/WAN', 'OSI Model'],
      delay: 'delay-100'
    },
    {
      title: 'Operating Systems',
      icon: <Terminal className="skill-icon" size={32} />,
      items: ['Windows', 'Basic Linux'],
      delay: 'delay-200'
    },
    {
      title: 'Troubleshooting',
      icon: <Wrench className="skill-icon" size={32} />,
      items: ['Network Issue Resolution', 'System Issue Resolution'],
      delay: 'delay-300'
    },
    {
      title: 'Tools',
      icon: <AppWindow className="skill-icon" size={32} />,
      items: ['Ping', 'Tracert', 'Remote Desktop'],
      delay: 'delay-400'
    },
    {
      title: 'Hardware',
      icon: <Cpu className="skill-icon" size={32} />,
      items: ['PC Components', 'Peripheral Setup'],
      delay: 'delay-500'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="skill-icon" size={32} />,
      items: ['Problem-solving', 'Communication', 'Teamwork'],
      delay: 'delay-500' /* matching delay for grid end */
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className={`skill-card glass animate-fade-in-up ${skill.delay}`}>
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <ul className="skill-list">
                {skill.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
