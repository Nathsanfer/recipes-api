import express from "express";
import PontoTuristicoController from "../controllers/pontoTuristicoController.js";

const pontosRouter = express.Router();

// Rotas de Pontos Turísticos
// GET /api/pontos-turisticos - Listar todos os pontos turísticos
pontosRouter.get("/", PontoTuristicoController.getAll);

// GET /api/pontos-turisticos/:id - Obter um ponto turístico pelo ID
pontosRouter.get("/:id", PontoTuristicoController.getById);

// POST /api/pontos-turisticos - Criar um novo ponto turístico
pontosRouter.post("/", PontoTuristicoController.create);

// PUT /api/pontos-turisticos/:id - Atualizar um ponto turístico
pontosRouter.put("/:id", PontoTuristicoController.update);

// DELETE /api/pontos-turisticos/:id - Remover um ponto turístico
pontosRouter.delete("/:id", PontoTuristicoController.delete);

export default pontosRouter;
