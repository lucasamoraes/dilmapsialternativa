import React from 'react';
import { SectionId, Language } from '../types';
import { translations } from '../translations';

const YoutubeSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].youtube;

  return (
    <section id="youtube" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-yellow-600 font-bold tracking-widest text-xs uppercase block mb-4">{t.subtitle}</span>
        <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mb-12">{t.title}</h2>
        
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-4 bg-yellow-100 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-video rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/mOIDBMQTpWs?si=Ta3WBBI01gS2Rd4l"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-12">
          <a 
            href="https://www.youtube.com/@seucanal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-red-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl"
          >
            {t.btn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;