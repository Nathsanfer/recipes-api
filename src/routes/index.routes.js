import express from "express";

// Importe da rota
import pontosRouter from "./pontoTuristicoRoutes.js";

const router = express.Router();

// Rota pública
router.use("/pontos-turisticos", pontosRouter);

export default router;
