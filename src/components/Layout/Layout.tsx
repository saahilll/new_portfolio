import React, { useState, useEffect } from 'react';
import { Home, Grid, User } from 'react-feather';

const NavLink = ({ href, icon, label, isActive }: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative p-2 group transition-all duration-300 ${
        isActive ? 'text-primary' : 'text-text-secondary hover:text-accent'
      }`}
      title={label}
    >
      <div className="relative">
        {/* Glow effect for active state */}
        {isActive && (
          <>
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md" />
            <div className="absolute -inset-3 rounded-full bg-primary/10 blur-lg" />
            <div className="absolute -inset-4 rounded-full bg-primary/5 blur-xl" />
          </>
        )}
        {/* Icon container */}
        <span className={`relative z-10 transition-transform duration-300 flex items-center justify-center ${
          isActive ? 'scale-110' : ''
        }`}>
          {icon}
        </span>

        {/* Tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-surface-dark/90 backdrop-blur-sm border border-primary/10">
          <span className="text-sm font-medium whitespace-nowrap text-text-primary">{label}</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-surface-dark/90 rotate-45 border-t border-r border-primary/10"></div>
        </div>
      </div>
    </a>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = {
        home: document.querySelector('#hero'),
        projects: document.querySelector('#projects'),
        about: document.querySelector('#about')
      };
      
      if (!sections.home || !sections.projects || !sections.about) return;

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate the middle of the viewport
      const viewportMiddle = scrollPosition + (viewportHeight / 2);

      // Get section boundaries
      const sectionBounds = {
        home: {
          top: sections.home.getBoundingClientRect().top + scrollPosition,
          bottom: sections.home.getBoundingClientRect().bottom + scrollPosition
        },
        projects: {
          top: sections.projects.getBoundingClientRect().top + scrollPosition,
          bottom: sections.projects.getBoundingClientRect().bottom + scrollPosition
        },
        about: {
          top: sections.about.getBoundingClientRect().top + scrollPosition,
          bottom: sections.about.getBoundingClientRect().bottom + scrollPosition
        }
      };

      // Determine active section based on which section contains the middle of the viewport
      if (viewportMiddle >= sectionBounds.about.top && viewportMiddle <= sectionBounds.about.bottom) {
        setActiveSection('about');
      } else if (viewportMiddle >= sectionBounds.projects.top && viewportMiddle < sectionBounds.about.top) {
        setActiveSection('projects');
      } else if (viewportMiddle < sectionBounds.projects.top) {
        setActiveSection('home');
      }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="min-h-screen bg-background-dark">
      <nav 
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-primary/10 bg-surface-dark/80 backdrop-blur-md"
      >
        <div className="relative p-1.5">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-accent/5"></div>
          
          {/* Navigation items */}
          <div className="relative flex flex-col items-center space-y-1">
            <NavLink 
              href="#hero" 
              icon={<Home size={18} />}
              label="Home"
              isActive={activeSection === 'home'}
            />
            <NavLink 
              href="#projects" 
              icon={<Grid size={18} />}
              label="Projects"
              isActive={activeSection === 'projects'}
            />
            <NavLink 
              href="#about" 
              icon={<User size={18} />}
              label="About"
              isActive={activeSection === 'about'}
            />
          </div>
        </div>
      </nav>

      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;