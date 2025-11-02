import express from "express";

// Importe da rota
import pontosRouter from "./pontoTuristicoRoutes.js";
import recipeRouter from "./recipeRoutes.js";

const router = express.Router();

// Rota pública
router.use("/pontos-turisticos", pontosRouter);


// Rota pública
router.use("/recipes", recipeRouter);

export default router;
