import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import "./ia.css"

interface RespostaBackend {
  resposta: string;
}

export function ChatDev() {
  const [input, setInput] = useState("");
  const [respostaIA, setRespostaIA] = useState("");
  const [carregando, setCarregando] = useState(false);

  const enviarPergunta = async () => {
    if (!input.trim()) return;

    setCarregando(true);
    setRespostaIA("");
           try {
      // LINK OFICIAL E DEFINITIVO
      const response = await fetch("https://onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pergunta: input }), 
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do servidor");
      }
    
      const data: RespostaBackend = await response.json();
      setRespostaIA(data.resposta);
      setInput("");

    } catch (error) {
      console.error("Erro no frontend:", error);
      setRespostaIA("Desculpe, falha ao conectar com o servidor.");
    } finally {
      setCarregando(false);
    }
  };

  const limparConversa = () => {
    setRespostaIA("");
    setInput("");
  };

  return (
    <div id="chat-container">
      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte algo sobre Front-end..."
          className="chat-input"
          disabled={carregando}
        />
        <button
          onClick={enviarPergunta}
          className="chat-button"
          disabled={carregando}
        >
          {carregando ? "Pensando..." : "Enviar"}
        </button>

        {respostaIA && (
          <button
            onClick={limparConversa}
            className="chat-clear-button"
          >
            Limpar
          </button>
        )}
      </div>

      {respostaIA && (
        <div className="chat-response-box">
          <ReactMarkdown>{respostaIA}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default ChatDev;
