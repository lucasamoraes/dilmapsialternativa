import React from 'react';
import { SectionId, Language } from '../types';
import { SparklesIcon, WhatsappIcon } from './Icons';
import { translations } from '../translations';
import { getWhatsAppLink } from '../config';

const PackagesSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].packages;
  const handleContact = (packageName: string) => {
    window.open(getWhatsAppLink(`${t.btn}: ${packageName}`), '_blank');
  };

  return (
    <section id={SectionId.PACKAGES} className="py-24 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-serif text-blue-900 text-center mb-16">{t.title}</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { name: t.group10, type: 'blue' },
            { name: t.group2, type: 'gold' }
          ].map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-blue-50 flex flex-col">
              <h3 className="text-3xl font-serif text-blue-900 mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{t.sub}</p>
              <ul className="space-y-4 mb-10 flex-1">
                {t.sessions.map((session, sIdx) => (
                  <li key={sIdx} className="flex justify-between items-center py-4 border-b border-blue-50 last:border-0">
                    <span className="font-semibold text-gray-700">{session}</span>
                    <span className="text-yellow-600 font-black text-xs uppercase">{t.consult}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => handleContact(pkg.name)} className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center ${pkg.type === 'blue' ? 'bg-blue-900 text-white' : 'bg-yellow-600 text-white shadow-lg'}`}>
                <WhatsappIcon className="w-5 h-5 mr-3" />
                {t.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;