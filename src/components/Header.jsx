import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const linksRef = useRef({});

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    // Scroll spy logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      let currentSection = activeTab;

      sections.forEach(section => {
        if (!section) return;
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      if (currentSection !== activeTab) {
        setActiveTab(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  useEffect(() => {
    // Update indicator pos
    const currentLink = linksRef.current[activeTab];
    if (currentLink && navRef.current) {
      setIndicatorStyle({
        width: `${currentLink.offsetWidth}px`,
        transform: `translateX(${currentLink.offsetLeft}px)`
      });
    }
  }, [activeTab]);

  return (
    <div className="pill-nav-container">
      <nav ref={navRef} className="pill-nav animate-fade-in-up">
        <div className="nav-indicator" style={indicatorStyle}></div>
        {navLinks.map((link) => (
          <a 
            key={link.id} 
            href={link.href} 
            ref={el => linksRef.current[link.id] = el}
            className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
            onClick={() => setActiveTab(link.id)}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
