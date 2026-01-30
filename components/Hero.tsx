import React from 'react';
import { SectionId, Language } from '../types';
import { translations } from '../translations';
import { getWhatsAppLink } from '../config';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].hero;
  
  const handleBooking = () => {
    window.open(getWhatsAppLink("Olá Dilma! Gostaria de agendar uma consulta energética."), '_blank');
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2525&auto=format&fit=crop" alt="Paz" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-[#f0f7ff]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in-up">
        <span className="block text-yellow-400 font-bold tracking-[0.3em] mb-4 text-xs uppercase">{t.subtitle}</span>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
          {t.title} <br/><span className="italic text-yellow-400">{t.titleGold}</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">{t.desc}</p>
        <button onClick={handleBooking} className="bg-[#bf953f] text-white px-12 py-5 rounded-full text-xs uppercase font-black tracking-[0.2em] hover:bg-[#d4ac58] transition-all transform hover:scale-105 shadow-2xl">
          {t.btn}
        </button>
      </div>
    </section>
  );
};

export default Hero;