import React, { useState, useEffect } from 'react';
import { SectionId, Language } from '../types';
import { GlobeIcon } from './Icons';
import { translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navBgClass = scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6';
  const textClass = scrolled ? 'text-yellow-600' : 'text-white drop-shadow-md';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-wider leading-none transition-colors ${textClass}`}>
              DILMA SILVA
            </span>
            <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-yellow-600' : 'text-blue-100 drop-shadow-sm'}`}>
              Psialternativas
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection(SectionId.HOME)}
            className={`text-xs font-black hover:text-yellow-600 transition-colors uppercase tracking-[0.15em] ${scrolled ? 'text-yellow-600' : 'text-blue-50 drop-shadow-md'}`}
          >
            {t.home}
          </button>

          <div className="relative group">
            <button
              className={`text-xs font-black hover:text-yellow-600 transition-colors uppercase tracking-[0.15em] flex items-center ${scrolled ? 'text-yellow-600' : 'text-blue-50 drop-shadow-md'}`}
            >
              {t.services}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute left-0 mt-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
               <div className="bg-white rounded-xl shadow-2xl py-2 border border-blue-50 flex flex-col">
                 <button onClick={() => scrollToSection(SectionId.MESA)} className="text-left px-4 py-3 text-[10px] font-bold uppercase hover:bg-blue-50 text-blue-900 tracking-wider">{t.mesa}</button>
                 <button onClick={() => scrollToSection(SectionId.CONVENCIONAL)} className="text-left px-4 py-3 text-[10px] font-bold uppercase hover:bg-blue-50 text-blue-900 tracking-wider">{t.therapy}</button>
               </div>
            </div>
          </div>

          {[
            { id: SectionId.GROUPS, label: t.groups },
            { id: SectionId.PACKAGES, label: t.packages },
            { id: SectionId.CONTACT, label: t.contact },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id as SectionId)}
              className={`text-xs font-black hover:text-yellow-600 transition-colors uppercase tracking-[0.15em] ${scrolled ? 'text-yellow-600' : 'text-blue-50 drop-shadow-md'}`}
            >
              {item.label}
            </button>
          ))}

          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center space-x-1 text-xs font-bold uppercase p-2 rounded-lg border border-white/20 ${scrolled ? 'text-yellow-600 border-yellow-600' : 'text-white drop-shadow-md'}`}
            >
              <GlobeIcon className="w-4 h-4" />
              <span>{lang}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-2xl py-2 w-24 border border-blue-50">
                {['pt', 'fr', 'de'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l as Language); setLangMenuOpen(false); }}
                    className={`w-full text-center px-4 py-2 text-xs font-bold uppercase hover:bg-blue-50 text-blue-900 ${lang === l ? 'bg-blue-100' : ''}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
           <span className={`block w-6 h-0.5 mb-1 ${scrolled ? 'bg-yellow-600' : 'bg-white'}`}></span>
           <span className={`block w-6 h-0.5 mb-1 ${scrolled ? 'bg-yellow-600' : 'bg-white'}`}></span>
           <span className={`block w-6 h-0.5 ${scrolled ? 'bg-yellow-600' : 'bg-white'}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
            <button onClick={() => scrollToSection(SectionId.HOME)} className="text-left text-sm font-bold uppercase text-blue-900 tracking-widest py-2 border-b border-gray-100">
              {t.home}
            </button>
            
            <div className="py-2 border-b border-gray-100">
              <span className="block text-xs font-bold text-yellow-600 uppercase tracking-widest mb-2">{t.services}</span>
              <div className="pl-4 flex flex-col space-y-3">
                <button onClick={() => scrollToSection(SectionId.MESA)} className="text-left text-sm font-medium text-gray-600">{t.mesa}</button>
                <button onClick={() => scrollToSection(SectionId.CONVENCIONAL)} className="text-left text-sm font-medium text-gray-600">{t.therapy}</button>
              </div>
            </div>

            {[
              { id: SectionId.GROUPS, label: t.groups },
              { id: SectionId.PACKAGES, label: t.packages },
              { id: SectionId.CONTACT, label: t.contact },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as SectionId)}
                className="text-left text-sm font-bold uppercase text-blue-900 tracking-widest py-2 border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-center space-x-4 pt-4">
               {['pt', 'fr', 'de'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l as Language); setMobileMenuOpen(false); }}
                    className={`text-xs font-bold uppercase px-4 py-2 rounded-lg transition-colors ${lang === l ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {l}
                  </button>
                ))}
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;