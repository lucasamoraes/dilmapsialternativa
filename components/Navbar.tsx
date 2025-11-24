import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { LotusIcon } from './Icons';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Dynamic classes based on scroll state
  const navBgClass = scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6';
  const textClass = scrolled ? 'text-gray-800' : 'text-white';
  const subTextClass = scrolled ? 'text-gray-600' : 'text-gray-200 hover:text-white';
  const iconBgClass = scrolled ? 'bg-yellow-100' : 'bg-white/20 backdrop-blur-sm';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
          <div className={`${iconBgClass} p-2 rounded-full mr-2 transition-colors`}>
            <LotusIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <span className={`text-xl font-serif font-bold tracking-wider transition-colors ${textClass}`}>
            DILMA<span className="font-light">.PSI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { id: SectionId.HOME, label: 'Início' },
            { id: SectionId.ABOUT, label: 'Holística' },
            { id: SectionId.MESA, label: 'Mesa Quantiônica' },
            { id: SectionId.GROUPS, label: 'Grupos' },
            { id: SectionId.CONTACT, label: 'Agendar' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest ${subTextClass}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <span className={`block w-6 h-0.5 mb-1 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 mb-1 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4">
           {[
            { id: SectionId.HOME, label: 'Início' },
            { id: SectionId.ABOUT, label: 'Holística' },
            { id: SectionId.MESA, label: 'Mesa Quantiônica' },
            { id: SectionId.GROUPS, label: 'Grupos' },
            { id: SectionId.CONTACT, label: 'Agendar' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;