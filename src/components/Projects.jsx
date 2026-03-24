import React from 'react';
import { Router, Server } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Home Network Configuration & Troubleshooting',
      icon: <Router size={24} />,
      points: [
        'Configured and managed a home Wi-Fi network using a router',
        'Diagnosed and resolved connectivity issues',
        'Improved network performance and stability'
      ],
      tags: ['Wi-Fi', 'LAN', 'Troubleshooting'],
      delay: 'delay-100'
    },
    {
      title: 'Network Simulation using Cisco Packet Tracer',
      icon: <Server size={24} />,
      points: [
        'Designed a basic LAN topology using switch and PCs',
        'Configured IP addressing and verified connectivity using ping',
        'Gained hands-on experience in network setup and troubleshooting'
      ],
      tags: ['Cisco Packet Tracer', 'Topology', 'IP Addressing'],
      delay: 'delay-200'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className={`project-card glass animate-fade-in-up ${project.delay}`}>
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <ul className="project-points">
                {project.points.map((point, idx) => (
                  <li key={idx}>
                    <span className="point-bullet">-</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
