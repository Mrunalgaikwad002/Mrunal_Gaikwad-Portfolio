'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'achievements', 'certificates'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      // Add scrolling state for animations
      setIsScrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial active section based on scroll position
    const handleInitialScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Check initial position after a short delay to ensure DOM is ready
    setTimeout(handleInitialScroll, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home', icon: '🏠' },
    { id: 'about', label: 'About', href: '#about', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', href: '#skills', icon: '⚡' },
    { id: 'education', label: 'Education', href: '#education', icon: '🎓' },
    { id: 'projects', label: 'Projects', href: '#projects', icon: '🧩' },
    { id: 'experience', label: 'Experience', href: '#experience', icon: '💼' },
    { id: 'achievements', label: 'Achievements', href: '#achievements', icon: '🏆' },
    { id: 'certificates', label: 'Certificates', href: '#certificates', icon: '📜' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className={`sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-white/10 transition-all duration-300 ${
        isScrolling ? 'shadow-lg shadow-blue-500/10' : ''
      }`}>
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          {/* Logo with hover effect */}
          <a 
            href="#home" 
            className="group font-bold text-xl tracking-tight transition-all duration-300 hover:scale-105"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300">
              MG
            </span>
          </a>

          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-foreground/80 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </span>
                
                {/* Active indicator with animation */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse" />
                )}
                
                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-300" />
              </a>
            ))}
            
            {/* CTA Button with enhanced styling */}
            <a 
              href="#contact" 
              className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Let's Connect</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}


