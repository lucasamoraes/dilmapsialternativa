import React from 'react';
import { Language } from '../types';
import { SparklesIcon, StarIcon, WhatsappIcon } from './Icons';
import { SALES_CHECKOUT_LINK } from '../config';

const SalesPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const handleBuy = () => {
    window.open(SALES_CHECKOUT_LINK, '_blank');
  };

  return (
    <div className="bg-[#fdfbf7]">
      {/* 1. Header Minimalista (Sem Menu) */}
      <header className="py-6 border-b border-yellow-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <span className="font-serif font-bold text-xl tracking-widest text-blue-900 uppercase">Dilma Silva</span>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Promessa Principal */}
      <section className="py-16 md:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Acesso Exclusivo
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-blue-900 leading-tight mb-8">
            Transforme suas dores físicas em <span className="italic text-yellow-600">equilíbrio e propósito</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            O método único que une a Psicologia Clínica à Mesa Quantiônica para uma cura profunda de dentro para fora.
          </p>
          
          {/* Vídeo Placeholder */}
          <div className="max-w-3xl mx-auto aspect-video bg-blue-900 rounded-3xl shadow-2xl relative overflow-hidden group cursor-pointer mb-12 border-8 border-white">
             <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000" alt="Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-yellow-500 transition-colors">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
             </div>
          </div>

          <button 
            onClick={handleBuy}
            className="w-full md:w-auto px-12 py-6 bg-yellow-600 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-yellow-700 hover:scale-105 transition-all animate-pulse"
          >
            Quero Garantir minha vaga agora
          </button>
        </div>
      </section>

      {/* 3. Benefícios / O que vai receber */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">O que você vai conquistar:</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Clareza Mental", desc: "Técnicas de psicologia para organizar pensamentos e gerir emoções.", icon: <StarIcon className="w-6 h-6"/> },
              { title: "Alívio Energético", desc: "Sessões de Mesa Quantiônica para limpar bloqueios ancestrais.", icon: <SparklesIcon className="w-6 h-6"/> },
              { title: "Saúde Física", desc: "A harmonia espiritual refletida na diminuição de dores no corpo.", icon: <img src="/images/logo.png" alt="Logo" className="w-6 h-6"/> }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
                <div className="text-yellow-400 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-blue-100 opacity-70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Oferta Irresistível */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-[#f0f7ff] p-12 rounded-[3rem] shadow-xl border border-blue-50">
             <h2 className="text-3xl font-serif text-blue-900 mb-2 italic">Acesso Vitalício ao Método</h2>
             <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-8">Tratamento Energético & Psicológico</p>
             
             <div className="space-y-4 mb-10">
                <div className="flex items-center text-left text-gray-700 p-4 bg-white rounded-2xl shadow-sm">
                   <div className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></div>
                   <span>4 Consultas Individuais Online</span>
                </div>
                <div className="flex items-center text-left text-gray-700 p-4 bg-white rounded-2xl shadow-sm">
                   <div className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></div>
                   <span>Limpeza Completa na Mesa Quantiônica</span>
                </div>
                <div className="flex items-center text-left text-gray-700 p-4 bg-white rounded-2xl shadow-sm">
                   <div className="w-2 h-2 bg-yellow-600 rounded-full mr-4"></div>
                   <span>Bônus: Guia de Ho'oponopono para dor</span>
                </div>
             </div>

             <div className="mb-10">
                <span className="text-gray-400 line-through text-lg">De R$ 1.997,00</span>
                <div className="text-5xl font-serif text-blue-900 mt-2 font-bold">12x R$ 97,00</div>
                <p className="text-sm text-yellow-600 font-bold mt-2">Ou R$ 997,00 à vista</p>
             </div>

             <button 
               onClick={handleBuy}
               className="w-full py-6 bg-yellow-600 text-white rounded-full font-black uppercase tracking-[0.2em] shadow-xl hover:bg-yellow-700 transition-all text-sm"
             >
               Garantir Minha Transformação
             </button>
             
             <p className="mt-6 text-xs text-gray-400 flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                Pagamento seguro e criptografado
             </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ Rápido */}
      <section className="py-20 bg-gray-50">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-center text-blue-900 mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
               {[
                 { q: "As sessões são individuais?", a: "Sim, todo o processo é personalizado para sua necessidade específica." },
                 { q: "Posso fazer morando em outro país?", a: "Com certeza. Atendemos brasileiros em todo o mundo via Zoom ou Google Meet." },
                 { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional para pedir seu dinheiro de volta." }
               ].map((item, idx) => (
                 <details key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer group">
                    <summary className="font-bold text-blue-900 list-none flex justify-between items-center">
                       {item.q}
                       <span className="text-yellow-600 group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                 </details>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Minimalista de Vendas */}
      <footer className="py-12 text-center text-gray-400 text-xs uppercase tracking-widest border-t border-gray-100">
         <img src="/images/logo.png" alt="Logo" className="w-12 h-12 mx-auto mb-6 opacity-20" />
         <p>© 2024 Dilma Silva • Todos os direitos reservados</p>
         <div className="mt-4 flex justify-center space-x-4">
            <a href="/" className="hover:text-blue-900 transition-colors">Voltar para o site principal</a>
         </div>
      </footer>
    </div>
  );
};

export default SalesPage;