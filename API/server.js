import express from 'express';
import perguntarDev from './src/routes/dev.routes.js'; 
import cors from "cors";

const app = express();  
const PORT = 3001;

app.use(express.json());

// CORREÇÃO CRÚCIAL DE PRODUÇÃO: Libera o acesso total para o seu site do Render não ser bloqueado
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use('/api/devhelp', perguntarDev); 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
