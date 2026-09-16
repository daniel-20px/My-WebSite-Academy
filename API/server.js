import express from 'express';
import perguntarDev from './src/routes/dev.routes.js'; 
import cors from "cors";

const app = express();  
const PORT = 3001;

app.use(express.json());


app.use(cors({
  origin: "*", 
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use('/api/devhelp', perguntarDev); 

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
