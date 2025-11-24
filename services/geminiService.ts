import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real app, this comes from env

export const getSpiritualInsight = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "Conecte-se com sua essência interior. (Configure a API Key para receber mensagens personalizadas)";
  }

  try {
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
  } catch (error) {
    console.error("Error fetching insight:", error);
    return "O universo está em silêncio agora, mas sua resposta virá no tempo certo.";
  }
};