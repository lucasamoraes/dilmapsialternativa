import React from 'react';
import { SectionId } from '../types';

const testimonials = [
  {
    id: 1,
    name: "Ana Clara",
    therapy: "Mesa Quantiônica",
    text: "A sessão com a Dilma foi um divisor de águas. Senti uma leveza imediata e desbloqueios na minha vida profissional que eu não conseguia resolver há anos.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Roberto Campos",
    therapy: "Grupo - Medo de Dirigir",
    text: "Eu tinha pânico só de pegar na chave do carro. Com o acolhimento do grupo e a orientação da Dilma, hoje dirijo com tranquilidade. Gratidão eterna!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Mariana Souza",
    therapy: "Brasileiros no Exterior",
    text: "Morar fora é solitário as vezes. Encontrei no grupo um porto seguro para compartilhar minhas angústias e me reconectar com minha essência brasileira.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-[#f0f7ff] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-yellow-700 font-semibold tracking-widest text-sm uppercase">Relatos de Amor</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2">Vidas Transformadas</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Histórias reais de quem permitiu se curar e reencontrou o equilíbrio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-yellow-100 p-1">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
              </div>
              
              <div className="flex space-x-1 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                 ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed font-light">"{t.text}"</p>
              
              <div className="mt-auto">
                <h4 className="font-serif text-lg font-semibold text-gray-900">{t.name}</h4>
                <span className="text-xs uppercase tracking-wider text-yellow-600 font-medium">{t.therapy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;