import React, { useState, useEffect } from 'react';
import { getSpiritualInsight } from '../services/geminiService';
import { SparklesIcon } from './Icons';

const GeminiInsight: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  // Verifica se a chave existe assim que a página carrega
  useEffect(() => {
    const checkKey = () => {
      // 1. Tenta ver se a chave foi configurada no arquivo .env (Padrão Vite)
      const envKey = import.meta.env.VITE_API_KEY;
      
      // 2. Tenta ver se a chave está no process (Legado)
      const processKey = process.env.API_KEY;

      // 3. Tenta ver se estamos no Google AI Studio (Ambiente de Teste)
      const isAIStudio = (window as any).aistudio && (window as any).aistudio.hasSelectedApiKey;

      if (envKey || processKey) {
        setHasKey(true); // Se tiver chave configurada, libera o oráculo direto!
      } else if (isAIStudio) {
        // Se estiver no Studio, verifica se o usuário clicou no botão
        (window as any).aistudio.hasSelectedApiKey().then((has: boolean) => setHasKey(has));
      }
    };
    checkKey();
  }, []);

  const handleActivateKey = async () => {
    // Esse botão só funciona dentro do Google AI Studio
    if ((window as any).aistudio) {
      try {
        await (window as any).aistudio.openSelectKey();
        setHasKey(true);
      } catch (e) {
        console.error("Falha ao selecionar chave", e);
      }
    } else {
      alert("Para o site funcionar na hospedagem, você precisa configurar a VITE_API_KEY no arquivo .env antes de fazer o build.");
    }
  };

  const handleGetInsight = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setInsight('');
    
    try {
        const result = await getSpiritualInsight(topic);
        setInsight(result);
    } catch (error) {
        setInsight("Houve uma interferência na conexão. Tente novamente.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white relative overflow-hidden" id="ai-insight">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block p-2 bg-white/10 rounded-full mb-4">
            <SparklesIcon className="w-8 h-8 text-yellow-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-yellow-100">Oráculo Digital</h2>
        <p className="text-purple-200 mb-8 max-w-xl mx-auto">
          Está sentindo alguma angústia ou dúvida? Escreva abaixo o que sente e receba uma mensagem de luz.
        </p>

        {!hasKey ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/20">
            <p className="text-purple-200 mb-6">
              O Oráculo precisa ser configurado.
            </p>
            {/* Esse botão só aparece se não tiver chave configurada */}
            <button 
              onClick={handleActivateKey}
              className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold transition-all shadow-lg flex items-center justify-center mx-auto opacity-50 cursor-not-allowed"
              title="Configure a VITE_API_KEY no seu projeto para ativar automaticamente."
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              Aguardando Configuração...
            </button>
          </div>
        ) : (
          <>
            <div className="max-w-lg mx-auto bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/20 flex flex-col md:flex-row gap-2 md:gap-0">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Como você está se sentindo hoje?"
                className="flex-1 bg-transparent border-none outline-none px-6 py-3 text-white placeholder-purple-300 text-center md:text-left"
                onKeyDown={(e) => e.key === 'Enter' && handleGetInsight()}
              />
              <button 
                onClick={handleGetInsight}
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold transition-colors disabled:opacity-50 w-full md:w-auto"
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
          </>
        )}
      </div>
    </section>
  );
};

export default GeminiInsight;