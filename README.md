# 🍳 Recipes API

API RESTful de receitas culinárias desenvolvida com Node.js, Express e Prisma.

## 📋 Descrição

Esta é uma API para gerenciamento de receitas que permite criar, listar, atualizar e deletar receitas de diferentes culinárias e categorias.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma ORM** - Object-Relational Mapping
- **SQLite** - Banco de dados
- **CORS** - Cross-Origin Resource Sharing

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Nathsanfer/recipes-api.git

# Entre na pasta do projeto
cd recipes-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute as migrations do Prisma
npx prisma migrate dev

# Popule o banco de dados com dados de exemplo
npm run prisma:seed
```

## 🎯 Endpoints da API

### Receitas

#### GET /recipes
Lista todas as receitas

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Feijoada Completa",
    "category": "Prato Principal",
    "time": 180,
    "cuisine": "Brasileira",
    "servings": 8,
    "rating": 4.9,
    "description": "A mais tradicional receita brasileira...",
    "ingredients": "1kg de feijão preto, 500g de costela...",
    "instructions": "Deixe o feijão de molho...",
    "imageUrl": "https://example.com/feijoada.jpg",
    "createdAt": "2025-11-02T20:00:00.000Z",
    "updatedAt": "2025-11-02T20:00:00.000Z"
  }
]
```

#### GET /recipes/:id
Busca uma receita específica por ID

**Parâmetros:**
- `id` - ID da receita

#### POST /recipes
Cria uma nova receita

**Body:**
```json
{
  "name": "Bolo de Chocolate",
  "category": "Sobremesa",
  "time": 45,
  "cuisine": "Brasileira",
  "servings": 8,
  "rating": 4.8,
  "description": "Delicioso bolo de chocolate",
  "ingredients": "2 xícaras de farinha...",
  "instructions": "Bata os ovos com açúcar...",
  "imageUrl": "https://example.com/bolo.jpg"
}
```

#### PUT /recipes/:id
Atualiza uma receita existente

**Parâmetros:**
- `id` - ID da receita

**Body:** (mesmos campos do POST)

#### DELETE /recipes/:id
Remove uma receita

**Parâmetros:**
- `id` - ID da receita

## 🗂️ Estrutura do Projeto

```
recipes-api/
├── prisma/
│   ├── migrations/      # Histórico de migrations
│   ├── seed/           # Scripts de seed
│   │   └── seed.js
│   ├── schema.prisma   # Schema do banco de dados
│   └── prisma.js       # Cliente Prisma
├── src/
│   ├── controllers/    # Lógica de controle
│   │   └── recipeController.js
│   ├── models/         # Modelos de dados
│   │   └── recipeModel.js
│   ├── routes/         # Definição de rotas
│   │   ├── index.routes.js
│   │   └── recipeRoutes.js
│   └── server.js       # Servidor Express
├── .env                # Variáveis de ambiente
├── package.json
└── README.md
```

## 🎨 Categorias de Receitas

- Prato Principal
- Sobremesa
- Entrada
- Bebida

## 🌍 Culinárias Disponíveis

- Brasileira
- Italiana
- Japonesa
- Mexicana
- Francesa
- Chinesa
- Americana
- Cubana

## 🏃 Como Executar

```bash
# Modo desenvolvimento (com auto-reload)
npm run dev

# O servidor estará rodando em http://localhost:5000
```

## 📝 Licença

MIT

## 👤 Autor

**Nathalia Santos Ferreira**

---

Feito com ❤️ e ☕
