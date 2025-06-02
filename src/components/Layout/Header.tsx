import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center group" title="Home">
          <div className="relative w-10 h-10 mr-2 rounded-full bg-gradient-to-br from-neon-green to-cyber-blue overflow-hidden">
            <div className="absolute inset-0.5 bg-black rounded-full flex items-center justify-center">
              <span className="text-neon-green font-bold text-xl">S</span>
            </div>
          </div>
          <span className="font-tech tracking-wider text-lg md:text-xl font-bold text-white">SAAHIL</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { path: '/', label: 'HOME', tooltip: 'Go to Home' },
            { path: '/blog', label: 'LAB NOTES', tooltip: 'Read My Blog Posts' },
            { path: '/contact', label: 'CONTACT', tooltip: 'Get in Touch' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={item.tooltip}
              className={({ isActive }) => `
                relative group py-2 tracking-wider text-sm font-medium
                ${isActive ? 'text-neon-green' : 'text-gray-300 hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          title="Toggle Menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col items-center space-y-8">
          {[
            { path: '/', label: 'HOME', tooltip: 'Go to Home' },
            { path: '/blog', label: 'LAB NOTES', tooltip: 'Read My Blog Posts' },
            { path: '/contact', label: 'CONTACT', tooltip: 'Get in Touch' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={item.tooltip}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `
                text-xl font-bold tracking-widest
                ${isActive ? 'text-neon-green' : 'text-white'}
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;