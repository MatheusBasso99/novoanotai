// Estrutura do produto (não alterar esta parte)
export interface Product {
    id: string;
    name: string;
    price: number;         // PREÇO DO PRODUTO (edite este valor quando necessário)
    description: string;
    longDescription: string;
    image: string;
    category: string;
    isFeatured: boolean;
    ingredients?: string[];
    tags?: string[];
    checkoutLink: string;
    slug: string;
  }
  
  // ======= LISTA DE PRODUTOS (EDITE AQUI) =======
  // Para alterar um preço, basta mudar o número após "price:"
  export const products: Product[] = [
    {
      id: "burger-1",
      name: "Burger Clássico",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 32.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Hambúrguer artesanal, queijo cheddar, alface, tomate e molho especial.",
      longDescription: "Nosso Burger Clássico é preparado com 180g de carne bovina de primeira qualidade, grelhada no ponto perfeito, coberta com queijo cheddar derretido, alface crocante, tomate fresco e nosso molho especial exclusivo. Tudo isso servido em um pão artesanal macio e levemente tostado. Uma experiência de sabor inesquecível para os amantes de um bom hambúrguer tradicional.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
      category: "Hambúrgueres",
      isFeatured: true,
      ingredients: ["Pão artesanal", "Hambúrguer 180g", "Queijo cheddar", "Alface", "Tomate", "Molho especial"],
      tags: ["Clássico", "Mais vendido"],
      checkoutLink: "https://pay.exemplo.com/burger-classico",
      slug: "burger-classico"
    },
    {
      id: "burger-2",
      name: "Burger Bacon Supreme",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 36.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Hambúrguer artesanal, muito bacon crocante, queijo, cebola caramelizada e molho barbecue.",
      longDescription: "Para os amantes de bacon, nosso Burger Bacon Supreme é irresistível. São 180g de carne bovina suculenta, coberta com generosas fatias de bacon extra crocante, queijo derretido na hora, cebola caramelizada no açúcar mascavo e molho barbecue defumado. Tudo isso em um pão artesanal macio e levemente tostado. A explosão de sabores e texturas faz desse hambúrguer uma experiência única.",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500",
      category: "Hambúrgueres",
      isFeatured: true,
      ingredients: ["Pão artesanal", "Hambúrguer 180g", "Bacon crocante", "Queijo", "Cebola caramelizada", "Molho barbecue"],
      tags: ["Especial", "Picante"],
      checkoutLink: "https://pay.exemplo.com/burger-bacon",
      slug: "burger-bacon-supreme"
    },
    {
      id: "pizza-1",
      name: "Pizza Margherita",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 45.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Molho de tomate, muçarela de búfala, tomate e manjericão fresco.",
      longDescription: "Nossa Pizza Margherita é preparada seguindo a autêntica receita italiana. Base fina e crocante, coberta com molho de tomate fresco caseiro, muçarela de búfala derretida, tomates orgânicos em fatias e manjericão fresco colhido do nosso jardim. Finalizada com azeite extra virgem de oliva, essa pizza clássica é um tributo à simplicidade e ao equilíbrio de sabores que fazem da culinária italiana uma das mais celebradas no mundo.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500",
      category: "Pizzas",
      isFeatured: true,
      ingredients: ["Massa artesanal", "Molho de tomate", "Muçarela de búfala", "Tomate", "Manjericão fresco", "Azeite extra virgem"],
      tags: ["Clássico", "Vegetariano"],
      checkoutLink: "https://pay.exemplo.com/pizza-margherita",
      slug: "pizza-margherita"
    },
    {
      id: "pizza-2",
      name: "Pizza Pepperoni",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 49.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Molho de tomate, queijo muçarela e pepperoni fatiado.",
      longDescription: "A Pizza Pepperoni é um clássico americano que conquistou o mundo. Nossa versão conta com uma base perfeita, nem tão fina nem tão grossa, coberta com molho de tomate temperado com ervas frescas, generosas porções de queijo muçarela que derrete na medida certa e fatias de pepperoni levemente picante que ficam crocantes nas bordas. Assada em forno a lenha, traz aquele sabor característico que só uma pizza bem feita pode oferecer.",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500",
      category: "Pizzas",
      isFeatured: false,
      ingredients: ["Massa artesanal", "Molho de tomate", "Queijo muçarela", "Pepperoni"],
      tags: ["Clássico", "Picante"],
      checkoutLink: "https://pay.exemplo.com/pizza-pepperoni",
      slug: "pizza-pepperoni"
    },
    {
      id: "pasta-1",
      name: "Fettuccine Alfredo",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 42.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Massa fresca fettuccine com molho cremoso de queijo parmesão e manteiga.",
      longDescription: "Nosso Fettuccine Alfredo é preparado seguindo a receita tradicional romana. A massa fresca é feita diariamente em nossa cozinha e cozida al dente. O molho, uma combinação perfeita de manteiga e queijo parmesão envelhecido, é preparado na hora para garantir aquela textura cremosa e aveludada que derrete na boca. Finalizamos com uma pitada de noz-moscada e pimenta-do-reino moída na hora. Um prato simples, mas com sabor intenso e reconfortante.",
      image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=500",
      category: "Massas",
      isFeatured: false,
      ingredients: ["Massa fettuccine fresca", "Manteiga", "Queijo parmesão", "Noz-moscada", "Pimenta-do-reino"],
      tags: ["Clássico", "Vegetariano"],
      checkoutLink: "https://pay.exemplo.com/fettuccine-alfredo",
      slug: "fettuccine-alfredo"
    },
    {
      id: "pasta-2",
      name: "Spaghetti Carbonara",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 46.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Spaghetti com molho cremoso de ovos, queijo pecorino, pancetta e pimenta preta.",
      longDescription: "Nossa Carbonara é um tributo à culinária romana tradicional. Preparamos o spaghetti al dente e o misturamos delicadamente com um molho feito de ovos caipiras frescos, queijo pecorino romano, pedaços generosos de pancetta crocante e muita pimenta-do-reino moída na hora. Sem adição de creme de leite, respeitando a receita original. O resultado é um prato com textura cremosa, sabor intenso e aquele toque de umami que só uma boa carbonara proporciona.",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=500",
      category: "Massas",
      isFeatured: true,
      ingredients: ["Spaghetti", "Ovos caipiras", "Queijo pecorino romano", "Pancetta", "Pimenta-do-reino"],
      tags: ["Clássico", "Tradicional"],
      checkoutLink: "https://pay.exemplo.com/spaghetti-carbonara",
      slug: "spaghetti-carbonara"
    },
    {
      id: "salad-1",
      name: "Salada Caesar",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 28.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Alface romana, croutons, queijo parmesão, molho Caesar caseiro e frango grelhado.",
      longDescription: "Nossa Salada Caesar segue a receita clássica com um toque especial. Folhas frescas de alface romana crocante são cobertas com croutons artesanais, lascas generosas de queijo parmesão envelhecido e peito de frango suculento grelhado com ervas. O molho Caesar, preparado na casa com anchova, gema de ovo, alho, mostarda Dijon, azeite de oliva e limão, é o toque final que harmoniza todos os ingredientes. Uma salada que é uma refeição completa e satisfatória.",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=500",
      category: "Saladas",
      isFeatured: false,
      ingredients: ["Alface romana", "Croutons artesanais", "Queijo parmesão", "Frango grelhado", "Molho Caesar caseiro"],
      tags: ["Clássico", "Leve"],
      checkoutLink: "https://pay.exemplo.com/salada-caesar",
      slug: "salada-caesar"
    },
    {
      id: "dessert-1",
      name: "Tiramisù",
      // ↓↓↓ EDITE O PREÇO AQUI ↓↓↓
      price: 24.90,
      // ↑↑↑ EDITE O PREÇO AQUI ↑↑↑
      description: "Clássico italiano com camadas de biscoito champagne, café, mascarpone e cacau.",
      longDescription: "Nosso Tiramisù é preparado segundo a receita tradicional italiana. Intercalamos camadas de biscoito champagne embebido em café expresso com um creme aveludado de queijo mascarpone, ovos e açúcar. Finalizamos com uma generosa camada de cacau em pó. A combinação de texturas e o equilíbrio entre o amargor do café e a doçura do creme fazem deste um dos nossos sobremesas mais pedidas. Cada porção é preparada individualmente para garantir a perfeição em cada garfada.",
      image: "https://images.unsplash.com/photo-1586040140378-bd0baee8d3fb?q=80&w=500",
      category: "Sobremesas",
      isFeatured: true,
      ingredients: ["Biscoito champagne", "Café expresso", "Queijo mascarpone", "Ovos", "Açúcar", "Cacau em pó"],
      tags: ["Clássico", "Italiano"],
      checkoutLink: "https://pay.exemplo.com/tiramisu",
      slug: "tiramisu"
    }
  ];
  
  // ======= FUNÇÕES DE UTILIDADE (NÃO MODIFICAR) =======
  
  /**
   * Busca um produto pelo seu slug
   */
  export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find(product => product.slug === slug);
  };
  
  /**
   * Busca produtos por categoria
   */
  export const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
  };
  
  /**
   * Busca produtos em destaque
   */
  export const getFeaturedProducts = (): Product[] => {
    return products.filter(product => product.isFeatured);
  };