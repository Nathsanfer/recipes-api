import PontoTuristicoModel from "../models/pontoTuristicoModel.js";

class PontoTuristicoController {
  // GET /api/pontos-turisticos
  async getAll(req, res) {
    try {
      const pontos = await PontoTuristicoModel.findAll();
      res.json(pontos);
    } catch (error) {
      console.error("Erro ao buscar pontos turísticos:", error);
      res.status(500).json({ error: "Erro ao buscar pontos turísticos" });
    }
  }
  
  // GET /api/pontos-turisticos/:id
  async getById(req, res) {
    try {
      const { id } = req.params;

      const ponto = await PontoTuristicoModel.findById(id);

      if (!ponto) {
        return res.status(404).json({ error: "Ponto turístico não encontrado" });
      }

      res.json(ponto);
    } catch (error) {
      console.error("Erro ao buscar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao buscar ponto turístico" });
    }
  }

  // POST /api/pontos-turisticos
  async create(req, res) {
    try {
      const {nome, descricao, regiao, cidade, estado, imagemUrl, nota} = req.body;

      if (!nome || !descricao || !regiao || !cidade || !estado) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
      }

      const newPonto = await PontoTuristicoModel.create(
        nome,
        descricao,
        regiao,
        cidade,
        estado,
        imagemUrl,
        nota
      );

      if (!newPonto) {
        return res.status(400).json({ error: "Erro ao criar ponto turístico" });
      }

      res.status(201).json(newPonto);
    } catch (error) {
      console.error("Erro ao criar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao criar ponto turístico" });
    }
  }

  
  // PUT /api/pontos-turisticos/:id
  async update(req, res) {
    try {
      const { id } = req.params;
      const {nome, descricao, regiao, cidade, estado, imagemUrl, nota} = req.body;

      const updatedPonto = await PontoTuristicoModel.update(
        id,
        nome,
        descricao,
        regiao,
        cidade,
        estado,
        imagemUrl,
        nota
      );

      if (!updatedPonto) {
        return res.status(404).json({ error: "Ponto turístico não encontrado" });
      }

      res.json(updatedPonto);
    } catch (error) {
      console.error("Erro ao atualizar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao atualizar ponto turístico" });
    }
  }

  // DELETE /api/pontos-turisticos/:id
  async delete(req, res) {
    try {
      const { id } = req.params;

      const result = await PontoTuristicoModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Ponto turístico não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover ponto turístico:", error);
      res.status(500).json({ error: "Erro ao remover ponto turístico" });
    }
  }
}

export default new PontoTuristicoController();
