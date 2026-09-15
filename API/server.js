import express from 'express';
// Caminho ajustado para garantir que o Node encontre o arquivo se este código estiver na raiz
import perguntarDev from './src/routes/dev.routes.js'; 

import cors from "cors";

const app = express();  
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use('/api/devhelp', perguntarDev); 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

