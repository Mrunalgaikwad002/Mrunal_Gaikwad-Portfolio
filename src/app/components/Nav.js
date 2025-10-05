'use client';

import { useState, useEffect } from 'react';

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Observe only sections that exist on the page to avoid mis-highlighting
    const sections = ['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'];
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
    { id: 'contact', label: 'Contact', href: '#contact', icon: '✉️' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    e.stopPropagation();
    const id = href && href.startsWith('#') ? href.slice(1) : href;
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 56; // matches h-14 spacer
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollTarget = Math.max(0, elementTop - headerOffset);
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
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

      <header className={`fixed top-1 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-white/10 transition-all duration-300 ${
        isScrolling ? 'shadow-lg shadow-blue-500/10' : ''
      }`}>
        <nav className="mx-auto max-w-7xl px-3 h-14 flex items-center justify-between">
          {/* Logo with hover effect */}
          <a 
            href="#home" 
            className="group font-bold text-lg tracking-tight transition-all duration-300 hover:scale-[1.02]"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-blue-500 transition-all duration-300">
              MG
            </span>
          </a>

          {/* Navigation Items */}
          <div className="relative flex items-center gap-2 md:gap-4 lg:gap-6 flex-wrap justify-end">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative z-10 px-2 py-1 rounded-md transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-blue-400 bg-blue-500/10' 
                    : 'text-foreground/80 hover:text-blue-400 hover:bg-blue-500/5'
                }`}
              >
                <span className="flex items-center gap-1">
                  <span className="hidden md:inline text-base">
                    {item.icon}
                  </span>
                  <span className="font-medium text-sm">{item.label}</span>
                </span>
                
                {/* Active indicator with animation */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                )}
                
                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </nav>
      </header>
      {/* Spacer to offset fixed header height */}
      <div className="h-14" />
    </>
  );
}


