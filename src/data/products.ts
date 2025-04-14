// Estrutura do produto (não alterar esta parte)
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  isFeatured: boolean;
  ingredients?: string[];
  tags?: string[];
  checkoutLink: string;
  slug: string;
  isCombo?: boolean;
  spicyLevel?: number; // 1-3 para indicar o nível de picante
}

// ======= LISTA DE PRODUTOS (EDITE AQUI) =======
export const products: Product[] = [
  {
    id: "combo-1",
    name: "Combo Fire Individual",
    price: 29.90,
    description: "Fire Classic, batata frita média, 4 onion rings e refrigerante 350ml.",
    longDescription: "O Combo Fire é perfeito para quem quer experimentar um pouco de tudo! Acompanha nosso Fire Classic com 180g de hambúrguer suculento, uma porção média de batatas fritas crocantes, 4 deliciosos onion rings e refrigerante de sua escolha (lata 350 ml). A combinação ideal para uma refeição completa, com sabor e variedade em cada mordida.",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/lsJM87RQfRT1pHobSyzpVCZINGJJjtVc1h6h7JJd.png",
    category: "Combos",
    isFeatured: true,
    ingredients: ["Fire Classic", "Batata frita média", "4 Onion rings", "Refrigerante 350ml"],
    tags: ["Combo", "Mais pedido"],
    checkoutLink: "https://pay.exemplo.com/combo-fire",
    slug: "combo-fire",
    isCombo: true
  },
  {
    id: "combo-3",
    name: "Combo Casal Erupção",
    price: 43.90,
    description: "Volcano, batata frita grande, 6 chicken fire e refrigerante 500ml.",
    longDescription: "Prepare-se para a erupção de sabores mais intensa com este combo! Inclui nosso hambúrguer Volcano, uma porção grande de batatas fritas crocantes, 6 unidades do nosso exclusivo chicken fire (empanado e temperado com especiarias picantes) e refrigerante de sua escolha (Garrafa 1L). Este combo foi feito para os verdadeiros amantes de pimenta que buscam uma experiência gastronômica inesquecível.",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/FbktHVFLV8aVvjpOwDdvLKY0mzIr1pOJInlyIqUq.png",
    category: "Combos",
    isFeatured: false,
    ingredients: ["Volcano", "Batata frita grande", "Refrigerante 1L"],
    tags: ["Combo", "Extra picante"],
    checkoutLink: "https://pay.exemplo.com/combo-erupcao",
    slug: "combo-erupcao",
    isCombo: true,
  },
  {
    id: "combo-4",
    name: "Combo Família Fire",
    price: 74.90,
    description: "2 hambúrgueres Fire Classic, 2 Cheeseburger Fire, batata família, 8 onion rings e 1 Refrigerante 2L.",
    longDescription: "O Combo Família é ideal para compartilhar! Inclui 2 hambúrgueres Fire Classic, 2 Cheeseburger Fire, uma batata frita tamanho família (serve até 4 pessoas), 8 onion rings crocantes e 2 refrigerantes de 1 litro à sua escolha. Perfeito para reunir a família ou os amigos para uma refeição completa com o sabor inconfundível da Fire Burger.",
    image: "https://res.cloudinary.com/dkndyevos/image/upload/v1744502084/familia_svd7pr.jpg",
    category: "Combos",
    isFeatured: true,
    ingredients: ["2 Fire Classic", "2 Cheeseburger Fire", "Batata frita família", "8 Onion rings", "1 Refrigerante 2L"],
    tags: ["Combo", "Família", "Compartilhar"],
    checkoutLink: "https://pay.exemplo.com/combo-familia",
    slug: "combo-familia",
    isCombo: true
  },
  {
    id: "burger-1",
    name: "Fire Classic",
    price: 22.90,
    description: "Hambúrguer artesanal com 180g, queijo cheddar, alface, tomate e molho especial Fire.",
    longDescription: "Nosso Fire Classic é preparado com 180g de carne bovina de primeira qualidade, grelhada no ponto perfeito, coberta com blend de queijo derretido e nosso molho especial Fire. Tudo isso servido em um pão brioche macio e levemente tostado. Uma experiência de sabor inesquecível para os amantes de um bom hambúrguer tradicional.",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/1vfFDnUAaspcvgvUcYwivnrHSOLcs6R2so9OqpFA.png",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Blend de Queijos",  "Molho Fire"],
    tags: ["Clássico", "Mais vendido"],
    checkoutLink: "https://pay.exemplo.com/fire-classic",
    slug: "fire-classic",
  },
  {
    id: "combo-2",
    name: "Combo Fogo Alto",
    price: 59.90,
    description: "Fogo Alto Bacon, batata frita grande com cheddar e bacon, e refrigerante 500ml.",
    longDescription: "O Combo Fogo Alto é para quem quer uma experiência gastronômica intensa! Acompanha nosso picante Fogo Alto Bacon, uma porção grande de batatas fritas cobertas com cheddar cremoso e pedacinhos de bacon crocante, além de refrigerante de sua escolha (500ml). Uma explosão de sabores em cada etapa da refeição, garantindo satisfação máxima!",
    image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=500",
    category: "Combos",
    isFeatured: true,
    ingredients: ["Fogo Alto Bacon", "Batata frita grande com cheddar e bacon", "Refrigerante 500ml"],
    tags: ["Combo", "Picante"],
    checkoutLink: "https://pay.exemplo.com/combo-fogo-alto",
    slug: "combo-fogo-alto",
    isCombo: true,
  },
  {
    id: "burger-2",
    name: "Fogo Alto Bacon",
    price: 29.90,
    description: "Hambúrguer artesanal 180g, muito bacon crocante, queijo, cebola caramelizada e molho barbecue picante.",
    longDescription: "Para os amantes de bacon e pimenta, nosso Fogo Alto Bacon é irresistível. São 180g de carne bovina suculenta, coberta com generosas fatias de bacon extra crocante, queijo derretido na hora, cebola caramelizada no açúcar mascavo e molho barbecue picante exclusivo. Tudo isso em um pão brioche macio e levemente tostado. A explosão de sabores e a pontada de picância faz desse hambúrguer uma experiência memorável.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Bacon crocante", "Queijo", "Cebola caramelizada", "Molho barbecue picante"],
    tags: ["Especial", "Picante"],
    checkoutLink: "https://pay.exemplo.com/fogo-alto-bacon",
    slug: "fogo-alto-bacon",
  },
  {
    id: "burger-3",
    name: "Volcano",
    price: 31.90,
    description: "Hambúrguer duplo (2x 130g), pimenta jalapeño, queijo pepper jack, cebola e molho volcano.",
    longDescription: "O Volcano é para quem gosta de aventura! Com dois suculentos hambúrgueres de 130g cada, fatias de pimenta jalapeño, queijo pepper jack derretido, cebola crispy crocante e nosso exclusivo molho volcano de pimentas selecionadas. Servido em um pão brioche especial com gergelim preto. Um verdadeiro vulcão de sabores intensos que vai fazer seu paladar entrar em erupção!",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche com gergelim preto", "2 Hambúrgueres de 130g", "Pimenta jalapeño", "Queijo pepper jack", "Cebola crispy", "Molho volcano"],
    tags: ["Extra picante", "Especialidade da casa"],
    checkoutLink: "https://pay.exemplo.com/volcano",
    slug: "volcano",
  },
  {
    id: "burger-4",
    name: "Cheeseburger Fire",
    price: 24.90,
    description: "Hambúrguer artesanal 180g com mix de queijos derretidos, picles e molho especial.",
    longDescription: "Nosso Cheeseburger Fire é a escolha perfeita para os amantes de queijo. Hambúrguer artesanal de 180g de primeira qualidade, coberto por um mix exclusivo de três queijos derretidos: cheddar, muçarela e provolone. Completamos com picles crocantes e nosso molho especial Fire. Servido em um pão brioche macio. Um clássico com o toque Fire Burger!",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/jsKUvHtd4ysE88tumzUmPkz86EeTGbieTh6UFzTv.png",
    category: "Hambúrgueres",
    isFeatured: false,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Mix de queijos", "Picles", "Molho Fire"],
    tags: ["Clássico", "Queijos"],
    checkoutLink: "https://pay.exemplo.com/cheeseburger-fire",
    slug: "cheeseburger-fire",
  },
  {
    id: "burger-5",
    name: "Fire Especial",
    price: 27.90,
    description: "Hambúrguer com blend especial da casa, queijo gouda, bacon caramelizado e aioli de alho.",
    longDescription: "Experimente o Fire Especial, um hambúrguer com nosso blend de carnes exclusivo, queijo gouda derretido que realça o sabor, bacon caramelizado crocante e um delicioso aioli de alho que dá o toque final. Servido em pão brioche macio, é uma explosão de sabores que você não vai esquecer!",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/gpspiyxgTfrwzFn3bHGq7600NnKtw8zYf5cqfOoG.png",
    category: "Hambúrgueres",
    isFeatured: false,
    ingredients: ["Pão brioche", "Blend especial da casa (180g)", "Queijo gouda", "Bacon caramelizado", "Aioli de alho"],
    tags: ["Especial", "Gourmet", "Bacon"],
    checkoutLink: "https://pay.exemplo.com/fire-especial",
    slug: "fire-especial",
  },
  {
    id: "burger-6",
    name: "Fire Atomic",
    price: 35.90,
    description: "Dois Hambúrguers 200g, cheddar inglês, relish de pepino agridoce, mostarda defumada e pão brioche.",
    longDescription: "Prepare-se para uma explosão de sabor atômica! O Fire Atomic vem com dois hambúrguers de 200g suculentos, coberto com cheddar inglês intenso, mostarda defumada para um toque defumado irresistível e tudo isso em um pão macio e levemente adocicado.",
    image: "https://cloudfox-digital-products.s3.amazonaws.com/uploads/public/products/GGRT3UD2PDToP1cfwaIRa8J2pr10HvwaECRA7oYN.png",
    category: "Hambúrgueres",
    isFeatured: false,
    ingredients: ["Pão brioche", "2 Hambúrguers 200g", "Cheddar inglês", "Mostarda defumada"],
    tags: ["Saboroso", "Premium"],
    checkoutLink: "https://pay.exemplo.com/fire-atomic",
    slug: "fire-atomic",
  },
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