import { GoogleGenAI } from "@google/genai";

export const getSpiritualInsight = async (topic: string): Promise<string> => {
  // REMOVA ou COMENTE esta linha antiga:
  // const apiKey = process.env.API_KEY; 

  // ADICIONE esta linha correta para Vite:
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    // O erro será lançado se a chave não for encontrada
    throw new Error("API_KEY_MISSING");
  }

  try {
    // Always create a new instance to ensure the latest key is used
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Você é um guia espiritual sábio e gentil, auxiliando a terapeuta Dilma (Especialista em Mesa Quantiônica). 
    O usuário está buscando orientação sobre: "${topic}".
    Forneça uma mensagem curta, acolhedora e profunda (máximo de 3 frases) que traga paz, reflexão e esperança. 
    Use um tom holístico e terapêutico.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Respire fundo e confie no processo da vida.";
  } catch (error: any) {
    console.error("Error fetching insight:", error);
    if (error.message === "API_KEY_MISSING") {
       return "Por favor, ative a conexão espiritual (API Key) para receber sua mensagem.";
    }
    return "O universo está em silêncio agora, mas sua resposta virá no tempo certo.";
  }
};