import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.Dev_key) {
  console.error("⚠️ ALERTA: A variável process.env.Dev_key está UNDEFINED!");
} else {
  console.log("✅ Chave de API ativa e carregada para conexão segura.");
}

const ai = new GoogleGenerativeAI(process.env.Dev_key || "");

const obterResposta = async (pergunta) => {
  try {

    const model = ai.getGenerativeModel({
      model: "gemini-3.1-pro-preview",
      systemInstruction: "Você é um assistente de inteligência artificial especializado em desenvolvimento web front-end. Ajude o usuário a tirar dúvidas sobre JavaScript, TypeScript, HTML, CSS, React e Tailwind CSS. Responda em português de forma amigável com exemplos de código limpos. Se o usuário perguntar sobre assuntos totalmente fora desse escopo (como receitas de comida), recuse educadamente dizendo que seu foco é apenas front-end."
    });

    const result = await model.generateContent(pergunta);

    if (result.response && result.response.text) {
      return result.response.text();
    }

    return "Desculpe, não consegui processar a resposta. Tente novamente.";

  } catch (err) {
    if (err.message?.includes("503")) {
      return "O servidor está sobrecarregado. Por favor, clique em Enviar novamente em instantes!";
    }
    if (err.message?.includes("429")) {
      return "Limite diário de perguntas atingido. Tente novamente mais tarde!";
    }

    console.error("Erro na comunicação com a API do Gemini:", err.message);
    throw new Error("Erro ao chamar api do Gemini");
  }
};

export default obterResposta;
