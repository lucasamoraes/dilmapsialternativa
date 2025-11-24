import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2525&auto=format&fit=crop" 
          alt="Peaceful nature" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast and emotional impact */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Gradient to smooth bottom edge into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#fdfbf7]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="block text-yellow-300 font-semibold tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up drop-shadow-sm">
          TERAPIAS INTEGRATIVAS & BEM-ESTAR
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-md">
          Reencontre o seu <br/>
          <span className="italic text-yellow-400">Equilíbrio Interior</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
          Um espaço de acolhimento e transformação através da Mesa Quantiônica e terapias holísticas. 
          Cure dores, supere medos e harmonize sua energia.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-yellow-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg border border-yellow-500/30 backdrop-blur-sm"
        >
          Agende sua Consulta
        </button>
      </div>
    </section>
  );
};

export default Hero;