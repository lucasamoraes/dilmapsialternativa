import React, { useState } from 'react';
import { getSpiritualInsight } from '../services/geminiService';
import { SparklesIcon } from './Icons';

const GeminiInsight: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetInsight = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setInsight('');
    const result = await getSpiritualInsight(topic);
    setInsight(result);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block p-2 bg-white/10 rounded-full mb-4">
            <SparklesIcon className="w-8 h-8 text-yellow-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-yellow-100">Oráculo Digital</h2>
        <p className="text-purple-200 mb-8 max-w-xl mx-auto">
          Está sentindo alguma angústia ou dúvida? Escreva abaixo o que sente (ex: "ansiedade", "futuro incerto", "mágoa") e receba uma mensagem de luz guiada pela IA.
        </p>

        <div className="max-w-lg mx-auto bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20 flex">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Como você está se sentindo hoje?"
            className="flex-1 bg-transparent border-none outline-none px-6 text-white placeholder-purple-300"
            onKeyDown={(e) => e.key === 'Enter' && handleGetInsight()}
          />
          <button 
            onClick={handleGetInsight}
            disabled={loading}
            className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold transition-colors disabled:opacity-50"
          >
            {loading ? 'Sintonizando...' : 'Receber Mensagem'}
          </button>
        </div>

        {insight && (
          <div className="mt-8 animate-fade-in">
            <div className="bg-white/95 text-purple-900 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto transform transition-all hover:scale-105">
              <p className="font-serif text-2xl italic leading-relaxed">"{insight}"</p>
              <div className="mt-4 text-sm text-purple-600 font-semibold tracking-widest uppercase">- Guia Interior</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiInsight;