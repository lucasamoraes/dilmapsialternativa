import React from 'react';
import { SectionId } from '../types';
import { SparklesIcon, StarIcon } from './Icons';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-[#fdfbf7]" id={SectionId.ABOUT}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Holistic */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-200 rounded-full opacity-50 blur-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1000&auto=format&fit=crop" 
               alt="Terapia Holística" 
               className="rounded-2xl shadow-xl relative z-10 w-full h-[400px] object-cover"
             />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">O que é Terapia Holística?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              A terapia holística trata o ser humano como um todo: <strong>mente, corpo e espírito</strong>. 
              Ao invés de focar apenas no sintoma, buscamos a raiz emocional e energética dos bloqueios que impedem sua felicidade.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <StarIcon className="w-5 h-5 text-yellow-600 mr-3" />
                Autoconhecimento profundo
              </li>
              <li className="flex items-center text-gray-700">
                <StarIcon className="w-5 h-5 text-yellow-600 mr-3" />
                Equilíbrio das emoções
              </li>
              <li className="flex items-center text-gray-700">
                <StarIcon className="w-5 h-5 text-yellow-600 mr-3" />
                Redução de estresse e ansiedade
              </li>
            </ul>
          </div>
        </div>

        {/* Mesa Quantiônica Section */}
        <div id={SectionId.MESA} className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-purple-50 rounded-full mb-6">
              <SparklesIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Mesa Quantiônica</h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Uma poderosa ferramenta de <strong>radiestesia e psiciônica</strong> que atua nos campos energéticos. 
              Através da mesa, é possível identificar frequências nocivas e transmutá-las em padrões de cura, amor e prosperidade.
              É como um "raio-x" da sua alma, permitindo ajustes imediatos na sua vibração.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="font-serif text-xl text-purple-900 mb-2">Diagnóstico</h3>
                <p className="text-sm text-gray-600">Identifica bloqueios em relacionamentos, saúde e finanças.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="font-serif text-xl text-purple-900 mb-2">Harmonização</h3>
                <p className="text-sm text-gray-600">Equilibra os chakras e limpa energias densas do passado.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="font-serif text-xl text-purple-900 mb-2">Potencialização</h3>
                <p className="text-sm text-gray-600">Abre caminhos para novas oportunidades e realizações.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;