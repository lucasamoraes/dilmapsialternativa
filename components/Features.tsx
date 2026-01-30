import React from 'react';
import { SectionId, Language } from '../types';
import { SparklesIcon, StarIcon } from './Icons';
import { translations } from '../translations';

const Features: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].holistica;
  
  return (
    <section className="py-24 bg-[#fdfbf7]" id={SectionId.MESA}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-bold tracking-widest text-xs uppercase">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mt-2">
            {t.title} <span className="italic text-yellow-600">{t.titleGold}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-200/40 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1000" 
              alt="Mesa Quantiônica" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover border-4 border-white"
            />
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {t.desc}
            </p>
            
            <div className="grid gap-4">
              {t.items.map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                  <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mr-4">
                    <SparklesIcon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="font-bold text-blue-900 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;