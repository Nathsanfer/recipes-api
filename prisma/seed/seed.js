import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed de receitas...");

  // Limpar banco de dados antes de inserir novos dados
  await prisma.recipe.deleteMany({});

  console.log("Inserindo receitas...");

  // Receitas Brasileiras
  const receitasBrasileiras = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Feijoada Completa",
        category: "Prato Principal",
        time: 180,
        cuisine: "Brasileira",
        servings: 8,
        rating: 4.9,
        description: "A mais tradicional receita brasileira com feijão preto, carnes variadas e acompanhamentos típicos.",
        ingredients: "1kg de feijão preto, 500g de costela de porco, 300g de linguiça calabresa, 200g de bacon, 300g de carne seca, 2 folhas de louro, alho, cebola, sal e pimenta",
        instructions: "Deixe o feijão de molho na noite anterior. Cozinhe as carnes separadamente e depois junte com o feijão. Refogue alho e cebola, adicione ao feijão e deixe cozinhar por 3 horas. Sirva com arroz, couve, farofa e laranja.",
        imageUrl: "https://example.com/feijoada.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Brigadeiro",
        category: "Sobremesa",
        time: 20,
        cuisine: "Brasileira",
        servings: 20,
        rating: 5.0,
        description: "O doce mais amado do Brasil, perfeito para festas e celebrações.",
        ingredients: "1 lata de leite condensado, 3 colheres de sopa de chocolate em pó, 1 colher de sopa de manteiga, chocolate granulado para cobrir",
        instructions: "Em uma panela, misture o leite condensado, chocolate em pó e manteiga. Cozinhe em fogo baixo mexendo sempre até desgrudar do fundo. Deixe esfriar, faça bolinhas e passe no granulado.",
        imageUrl: "https://example.com/brigadeiro.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Moqueca de Peixe",
        category: "Prato Principal",
        time: 60,
        cuisine: "Brasileira",
        servings: 6,
        rating: 4.8,
        description: "Prato típico capixaba com peixe fresco, tomates, pimentões e leite de coco.",
        ingredients: "1kg de peixe (badejo ou robalo), 3 tomates, 2 pimentões, 1 cebola, 200ml de leite de coco, azeite de dendê, coentro, sal e pimenta",
        instructions: "Tempere o peixe com sal, limão e alho. Em uma panela de barro, faça camadas de cebola, tomate, pimentão e peixe. Adicione leite de coco e dendê. Cozinhe por 40 minutos em fogo baixo. Finalize com coentro.",
        imageUrl: "https://example.com/moqueca.jpg",
      },
    }),
  ]);

  // Receitas Italianas
  const receitasItalianas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Lasanha à Bolonhesa",
        category: "Prato Principal",
        time: 90,
        cuisine: "Italiana",
        servings: 8,
        rating: 4.9,
        description: "Camadas deliciosas de massa, molho bolonhesa e molho branco gratinadas no forno.",
        ingredients: "500g de massa para lasanha, 800g de carne moída, 2 latas de tomate pelado, 500ml de leite, 50g de manteiga, 50g de farinha de trigo, queijo parmesão, mussarela, alho, cebola, sal e pimenta",
        instructions: "Prepare o molho bolonhesa refogando carne com alho, cebola e tomate. Faça o molho branco com manteiga, farinha e leite. Monte camadas alternando massa, molho bolonhesa, molho branco e queijo. Asse por 40 minutos a 180°C.",
        imageUrl: "https://example.com/lasanha.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Risoto de Funghi",
        category: "Prato Principal",
        time: 45,
        cuisine: "Italiana",
        servings: 4,
        rating: 4.7,
        description: "Arroz cremoso com cogumelos variados e parmesão.",
        ingredients: "300g de arroz arbóreo, 200g de cogumelos variados, 1 litro de caldo de legumes, 1 cebola, 100ml de vinho branco, 50g de manteiga, queijo parmesão ralado, azeite, sal e pimenta",
        instructions: "Refogue a cebola, adicione o arroz e o vinho. Vá adicionando o caldo aos poucos mexendo sempre. Adicione os cogumelos salteados. Finalize com manteiga e parmesão.",
        imageUrl: "https://example.com/risoto.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Tiramisu",
        category: "Sobremesa",
        time: 30,
        cuisine: "Italiana",
        servings: 8,
        rating: 4.9,
        description: "Sobremesa italiana clássica com café, mascarpone e biscoitos champanhe.",
        ingredients: "500g de mascarpone, 6 ovos, 200g de açúcar, 300ml de café forte, 2 pacotes de biscoito champanhe, cacau em pó, 50ml de licor de café",
        instructions: "Separe as claras das gemas. Bata as gemas com açúcar até ficar cremoso, adicione o mascarpone. Bata as claras em neve e incorpore delicadamente. Molhe os biscoitos no café e monte camadas alternadas com o creme. Polvilhe cacau e leve à geladeira por 4 horas.",
        imageUrl: "https://example.com/tiramisu.jpg",
      },
    }),
  ]);

  // Receitas Japonesas
  const receitasJaponesas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Sushi Variado",
        category: "Prato Principal",
        time: 60,
        cuisine: "Japonesa",
        servings: 4,
        rating: 4.8,
        description: "Combinado de sushis com salmão, atum e pepino.",
        ingredients: "400g de arroz japonês, 300g de salmão fresco, 200g de atum, 6 folhas de alga nori, 1 pepino japonês, vinagre de arroz, açúcar, sal, wasabi, shoyu",
        instructions: "Cozinhe o arroz e tempere com vinagre de arroz. Corte os peixes em tiras. Coloque a alga na esteira, espalhe o arroz, adicione os recheios e enrole. Corte em pedaços e sirva com wasabi e shoyu.",
        imageUrl: "https://example.com/sushi.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Ramen Tradicional",
        category: "Prato Principal",
        time: 120,
        cuisine: "Japonesa",
        servings: 4,
        rating: 4.7,
        description: "Sopa japonesa com macarrão, caldo rico e diversos acompanhamentos.",
        ingredients: "400g de macarrão ramen, 1,5L de caldo de ossos, 4 ovos, 300g de chashu (barriga de porco), alga nori, cebolinha, brotos de feijão, óleo de gergelim, shoyu, missô",
        instructions: "Prepare o caldo cozinhando ossos por 2 horas. Cozinhe o macarrão. Prepare o chashu assado. Cozinhe os ovos por 7 minutos. Monte tigelas com macarrão, caldo quente e acompanhamentos.",
        imageUrl: "https://example.com/ramen.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Tempurá de Legumes",
        category: "Entrada",
        time: 30,
        cuisine: "Japonesa",
        servings: 4,
        rating: 4.6,
        description: "Legumes empanados em massa leve e crocante.",
        ingredients: "200g de farinha de trigo, 1 ovo, 250ml de água gelada, batata-doce, berinjela, abobrinha, cenoura, óleo para fritar, sal",
        instructions: "Corte os legumes em fatias finas. Prepare a massa misturando farinha, ovo e água gelada levemente (pode ficar com grumos). Aqueça o óleo a 180°C. Passe os legumes na massa e frite até dourar. Escorra em papel absorvente.",
        imageUrl: "https://example.com/tempura.jpg",
      },
    }),
  ]);

  // Receitas Mexicanas
  const receitasMexicanas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Tacos al Pastor",
        category: "Prato Principal",
        time: 50,
        cuisine: "Mexicana",
        servings: 6,
        rating: 4.9,
        description: "Tacos tradicionais mexicanos com carne de porco marinada e abacaxi.",
        ingredients: "600g de lombo de porco, tortillas de milho, 1 abacaxi, cebola roxa, coentro, limão, pimenta chipotle, cominho, alho, vinagre, sal",
        instructions: "Marine a carne com especiarias por 2 horas. Grelhe a carne e o abacaxi. Corte em cubos pequenos. Aqueça as tortillas. Monte os tacos com carne, abacaxi, cebola e coentro. Sirva com limão.",
        imageUrl: "https://example.com/tacos.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Guacamole Tradicional",
        category: "Entrada",
        time: 15,
        cuisine: "Mexicana",
        servings: 6,
        rating: 4.8,
        description: "Pasta cremosa de abacate com tomate, cebola e temperos.",
        ingredients: "3 abacates maduros, 2 tomates, 1 cebola roxa, 1 jalapeño, coentro fresco, suco de 2 limões, sal",
        instructions: "Amasse os abacates com um garfo. Pique finamente tomate, cebola, jalapeño e coentro. Misture tudo, adicione limão e sal a gosto. Sirva imediatamente com nachos.",
        imageUrl: "https://example.com/guacamole.jpg",
      },
    }),
  ]);

  // Receitas Francesas
  const receitasFrancesas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Coq au Vin",
        category: "Prato Principal",
        time: 120,
        cuisine: "Francesa",
        servings: 6,
        rating: 4.8,
        description: "Frango cozido lentamente em vinho tinto com cogumelos e bacon.",
        ingredients: "1 frango inteiro cortado, 750ml de vinho tinto, 200g de bacon, 300g de cogumelos, 12 cebolas pequenas, 3 dentes de alho, tomilho, louro, farinha, manteiga, sal e pimenta",
        instructions: "Doure o bacon e reserve. Doure o frango na mesma panela. Adicione vinho, alho, ervas e deixe cozinhar por 1 hora. Adicione cogumelos e cebolas. Cozinhe mais 30 minutos. Engrosse o molho se necessário.",
        imageUrl: "https://example.com/coq-au-vin.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Crème Brûlée",
        category: "Sobremesa",
        time: 60,
        cuisine: "Francesa",
        servings: 6,
        rating: 4.9,
        description: "Sobremesa francesa clássica com creme de baunilha e cobertura caramelizada.",
        ingredients: "500ml de creme de leite fresco, 6 gemas, 100g de açúcar, 1 fava de baunilha, açúcar demerara para caramelizar",
        instructions: "Aqueça o creme com a baunilha. Bata gemas com açúcar. Misture com o creme quente. Distribua em ramequins. Asse em banho-maria por 40 minutos a 150°C. Deixe esfriar. Polvilhe açúcar e caramelize com maçarico.",
        imageUrl: "https://example.com/creme-brulee.jpg",
      },
    }),
  ]);

  // Receitas Chinesas
  const receitasChinesas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Frango Xadrez",
        category: "Prato Principal",
        time: 35,
        cuisine: "Chinesa",
        servings: 4,
        rating: 4.7,
        description: "Frango em cubos salteado com vegetais e amendoim.",
        ingredients: "500g de peito de frango, 100g de amendoim torrado, 1 pimentão vermelho, 1 pimentão verde, molho shoyu, amido de milho, gengibre, alho, cebola, óleo de gergelim, açúcar",
        instructions: "Corte o frango em cubos e marine com shoyu e amido. Saltei o frango em fogo alto. Adicione vegetais picados. Tempere com molho de shoyu, gengibre e alho. Finalize com amendoim e óleo de gergelim.",
        imageUrl: "https://example.com/frango-xadrez.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Yakisoba",
        category: "Prato Principal",
        time: 40,
        cuisine: "Chinesa",
        servings: 4,
        rating: 4.8,
        description: "Macarrão frito com legumes e carne ao estilo oriental.",
        ingredients: "400g de macarrão para yakisoba, 300g de carne (frango, porco ou boi), repolho, cenoura, brócolis, molho shoyu, molho inglês, óleo de gergelim, alho, gengibre",
        instructions: "Cozinhe o macarrão e reserve. Saltei a carne em fogo alto. Adicione os legumes. Adicione o macarrão e os molhos. Mexa rapidamente em fogo alto por 3 minutos.",
        imageUrl: "https://example.com/yakisoba.jpg",
      },
    }),
  ]);

  // Receitas de Sobremesas Variadas
  const sobremesas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Brownie de Chocolate",
        category: "Sobremesa",
        time: 45,
        cuisine: "Americana",
        servings: 12,
        rating: 4.9,
        description: "Brownie denso e úmido com muito chocolate.",
        ingredients: "200g de chocolate meio amargo, 150g de manteiga, 3 ovos, 200g de açúcar, 100g de farinha de trigo, 50g de cacau em pó, 100g de nozes picadas",
        instructions: "Derreta o chocolate com a manteiga. Bata os ovos com açúcar. Misture chocolate derretido, farinha e cacau. Adicione nozes. Despeje em forma untada e asse a 180°C por 25-30 minutos.",
        imageUrl: "https://example.com/brownie.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Cheesecake de Frutas Vermelhas",
        category: "Sobremesa",
        time: 90,
        cuisine: "Americana",
        servings: 10,
        rating: 4.8,
        description: "Torta cremosa de cream cheese com base de biscoito e cobertura de frutas vermelhas.",
        ingredients: "300g de biscoito maisena, 100g de manteiga derretida, 600g de cream cheese, 200g de açúcar, 3 ovos, 200ml de creme de leite, 300g de frutas vermelhas, geleia de morango",
        instructions: "Faça a base misturando biscoito triturado com manteiga. Bata cream cheese com açúcar, ovos e creme. Despeje sobre a base. Asse em banho-maria a 160°C por 50 minutos. Cubra com frutas e geleia.",
        imageUrl: "https://example.com/cheesecake.jpg",
      },
    }),
  ]);

  // Receitas de Bebidas
  const bebidas = await Promise.all([
    prisma.recipe.create({
      data: {
        name: "Caipirinha Tradicional",
        category: "Bebida",
        time: 5,
        cuisine: "Brasileira",
        servings: 1,
        rating: 5.0,
        description: "O drink mais famoso do Brasil com cachaça, limão e açúcar.",
        ingredients: "1 limão, 2 colheres de sopa de açúcar, 50ml de cachaça, gelo",
        instructions: "Corte o limão em pedaços. Coloque no copo com açúcar e macere. Adicione gelo e cachaça. Misture bem e sirva.",
        imageUrl: "https://example.com/caipirinha.jpg",
      },
    }),
    prisma.recipe.create({
      data: {
        name: "Mojito Cubano",
        category: "Bebida",
        time: 10,
        cuisine: "Cubana",
        servings: 1,
        rating: 4.7,
        description: "Drink refrescante com rum, hortelã e limão.",
        ingredients: "50ml de rum branco, 10 folhas de hortelã, 1 limão, 2 colheres de açúcar, água com gás, gelo",
        instructions: "Macere hortelã com açúcar e suco de limão. Adicione rum e gelo. Complete com água com gás. Mexa delicadamente e decore com hortelã.",
        imageUrl: "https://example.com/mojito.jpg",
      },
    }),
  ]);

  const totalReceitas = await prisma.recipe.count();
  console.log(`Seed concluído! ${totalReceitas} receitas inseridas com sucesso.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
