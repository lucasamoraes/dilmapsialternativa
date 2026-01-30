import React from 'react';

import { Language } from '../types';
import { translations } from '../translations';

const StorySection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].story;

  return (
    <section className="py-24 bg-[#f0f7ff] text-blue-900 relative overflow-hidden">
      {/* Decorative light elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
             <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="/images/dilma.png" 
                  alt="Dilma Silva" 
                  className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-[#f0f7ff] to-transparent">
                   <h3 className="text-4xl font-serif font-bold italic">Dilma Silva</h3>
                   <p className="text-yellow-600 font-bold tracking-widest uppercase text-xs mt-2">Psialternativas</p>
                </div>
             </div>
          </div>

          <div className="space-y-8">
            <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-xs block">{t.subtitle}</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight italic">
              "{t.title} <br/>
              <span className="text-blue-900 not-italic underline decoration-yellow-500/30 underline-offset-[12px]">{t.titleUnder}</span>"
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p className="text-xl leading-relaxed">
                {t.content1}
              </p>
              
              <p className="opacity-90">
                {t.content2}
              </p>

              <div className="py-8 border-y border-blue-100 mt-10">
                <p className="text-3xl md:text-4xl font-serif italic text-yellow-600 text-center leading-relaxed tracking-wide">
                  "{t.mantra}"
                </p>
              </div>

              <p className="text-sm uppercase tracking-widest text-yellow-600/60 font-bold text-center mt-4">
                Transmutação & Paz Interior
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;