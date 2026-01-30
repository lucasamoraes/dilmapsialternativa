import React from 'react';
import { WhatsappIcon } from './Icons';
import { getWhatsAppLink } from '../config';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(getWhatsAppLink("Olá Dilma! Vim pelo site e gostaria de conversar."), '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-90 group"
      aria-label="WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      <WhatsappIcon className="w-8 h-8 relative z-10" />
      <span className="absolute right-full mr-4 bg-white text-green-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-green-50">
        Conversar agora
      </span>
    </button>
  );
};

export default FloatingWhatsApp;