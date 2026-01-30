import React from 'react';
import { SectionId, Language } from '../types';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-serif text-2xl mb-4 text-yellow-500">Dilma Silva</h4>
          <p className="text-blue-100 text-sm opacity-70">Psialternativas • {lang === 'pt' ? 'Terapias Holísticas' : lang === 'fr' ? 'Thérapies Holistiques' : 'Ganzheitliche Therapien'}</p>
          <div className="mt-4"><a href="#" className="text-yellow-500 hover:text-white transition-colors">@dilma.psialternativas</a></div>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-4">{lang === 'pt' ? 'Redes' : lang === 'fr' ? 'Social' : 'Sozial'}</h4>
          <p className="text-sm opacity-60">Instagram • YouTube • WhatsApp</p>
        </div>
        <div>
           <h4 className="font-serif text-xl mb-4">{lang === 'pt' ? 'Atendimento' : lang === 'fr' ? 'Service' : 'Service'}</h4>
           <p className="text-sm opacity-60">Online & Presencial</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;