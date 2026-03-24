import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const fullName = "Arjun P P";
  const [displayedName, setDisplayedName] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Blink cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(blink);
  }, []);

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => setShowIndicator(window.scrollY < 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid"></div>
      <div className="container hero-content">

        <div className="available-badge animate-fade-in-up">
          <span className="pulse-dot"></span> Available for Opportunities
        </div>

        <h1 className="hero-name">
          <span className="typed-name">{displayedName}</span>
          <span className={`cursor ${typingDone ? 'cursor-blink' : ''} ${cursorVisible ? 'visible' : 'hidden'}`}>|</span>
        </h1>

        <h2 className="hero-title animate-fade-in-up delay-200">
          Network Engineer <span className="title-separator">|</span> IT Support
        </h2>

        <p className="hero-description animate-fade-in-up delay-300">
          Passionate about networking, troubleshooting, and system support. Building scalable and secure network infrastructures.
        </p>

        <div className="hero-cta-group animate-fade-in-up delay-400">
          <a href="#projects" className="cta-button-primary">
            View Projects
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={`scroll-indicator ${showIndicator ? 'visible' : 'hidden'}`}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <ChevronDown className="scroll-arrow" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
