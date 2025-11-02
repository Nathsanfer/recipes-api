import prisma from "../../prisma/prisma.js";

class PontoTuristicoModel {
  // Obter todos os pontos turísticos
  async findAll() {
    const pontosTuristicos = await prisma.pontoTuristico.findMany({
      orderBy: {
        dataCriacao: "desc",
      },
    });

    return pontosTuristicos;
  }

  // Obter um ponto turístico pelo ID
  async findById(id) {
    const pontoTuristico = await prisma.pontoTuristico.findUnique({
      where: {
        id: Number(id),
      },
    });

    return pontoTuristico;
  }

  // Criar um novo ponto turístico
  async create(nome, descricao, regiao, cidade, estado, imagemUrl, nota) {
    const newPontoTuristico = await prisma.pontoTuristico.create({
      data: {
        nome,
        descricao,
        regiao,
        cidade,
        estado,
        imagemUrl,
        nota,
      },
    });

    return newPontoTuristico;
  }

  // Atualizar um ponto turístico
  async update(id, nome, descricao, regiao, cidade, estado, imagemUrl, nota) {
    const pontoTuristico = await this.findById(id);

    if (!pontoTuristico) {
      return null;
    }

    // Atualiza apenas os campos que foram enviados
    const data = {};
    if (nome !== undefined) data.nome = nome;
    if (descricao !== undefined) data.descricao = descricao;
    if (regiao !== undefined) data.regiao = regiao;
    if (cidade !== undefined) data.cidade = cidade;
    if (estado !== undefined) data.estado = estado;
    if (imagemUrl !== undefined) data.imagemUrl = imagemUrl;
    if (nota !== undefined) data.nota = nota;

    const pontoTuristicoUpdated = await prisma.pontoTuristico.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return pontoTuristicoUpdated;
  }

  // Remover um ponto turístico
  async delete(id) {
    const pontoTuristico = await this.findById(id);

    if (!pontoTuristico) {
      return null;
    }

    await prisma.pontoTuristico.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new PontoTuristicoModel();
