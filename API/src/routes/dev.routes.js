import express from 'express';
// Importa o controller 
import { perguntarDev } from '../controllers/controller_dev.js'; 

const router = express.Router();

// Vincula a rota POST 
router.post('/pergunta', perguntarDev);

export default router;
