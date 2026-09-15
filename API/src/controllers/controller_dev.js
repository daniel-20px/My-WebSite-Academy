
import obterResposta from '../services/genAI.service.js';

export const perguntarDev = async (req, res) => {
  try {
    const { pergunta } = req.body;

    if (!pergunta) {
      return res.status(400).json({
        erro: "É obrigatório enviar uma pergunta" 
      });
    }

    const resposta = await obterResposta(pergunta);


    return res.status(200).json({ resposta });

  } catch (err) {
    console.error("Erro no controller perguntarDev:", err); 
    return res.status(500).json({
      erro: "Erro ao processar sua pergunta. Tente novamente"
    });
  }
};
