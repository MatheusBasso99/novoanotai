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
    id: "burger-1",
    name: "Fire Classic",
    price: 32.90,
    description: "Hambúrguer artesanal com 180g, queijo cheddar, alface, tomate e molho especial Fire.",
    longDescription: "Nosso Fire Classic é preparado com 180g de carne bovina de primeira qualidade, grelhada no ponto perfeito, coberta com queijo cheddar derretido, alface crocante, tomate fresco e nosso molho especial Fire. Tudo isso servido em um pão brioche macio e levemente tostado. Uma experiência de sabor inesquecível para os amantes de um bom hambúrguer tradicional com um toque de fogo.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Queijo cheddar", "Alface", "Tomate", "Molho Fire"],
    tags: ["Clássico", "Mais vendido"],
    checkoutLink: "https://pay.exemplo.com/fire-classic",
    slug: "fire-classic",
    spicyLevel: 1
  },
  {
    id: "burger-2",
    name: "Inferno Bacon",
    price: 39.90,
    description: "Hambúrguer artesanal 180g, muito bacon crocante, queijo, cebola caramelizada e molho barbecue picante.",
    longDescription: "Para os amantes de bacon e pimenta, nosso Inferno Bacon é irresistível. São 180g de carne bovina suculenta, coberta com generosas fatias de bacon extra crocante, queijo derretido na hora, cebola caramelizada no açúcar mascavo e molho barbecue picante exclusivo. Tudo isso em um pão brioche macio e levemente tostado. A explosão de sabores e a pontada de picância faz desse hambúrguer uma experiência memorável.",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Bacon crocante", "Queijo", "Cebola caramelizada", "Molho barbecue picante"],
    tags: ["Especial", "Picante"],
    checkoutLink: "https://pay.exemplo.com/inferno-bacon",
    slug: "inferno-bacon",
    spicyLevel: 2
  },
  {
    id: "burger-3",
    name: "Volcano",
    price: 42.90,
    description: "Hambúrguer duplo (2x 130g), pimenta jalapeño, queijo pepper jack, cebola crispy e molho volcano.",
    longDescription: "O Volcano é para quem gosta de aventura! Com dois suculentos hambúrgueres de 130g cada, fatias de pimenta jalapeño, queijo pepper jack derretido, cebola crispy crocante e nosso exclusivo molho volcano de pimentas selecionadas. Servido em um pão brioche especial com gergelim preto. Um verdadeiro vulcão de sabores intensos que vai fazer seu paladar entrar em erupção!",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: true,
    ingredients: ["Pão brioche com gergelim preto", "2 Hambúrgueres de 130g", "Pimenta jalapeño", "Queijo pepper jack", "Cebola crispy", "Molho volcano"],
    tags: ["Extra picante", "Especialidade da casa"],
    checkoutLink: "https://pay.exemplo.com/volcano",
    slug: "volcano",
    spicyLevel: 3
  },
  {
    id: "burger-4",
    name: "Cheeseburger Fire",
    price: 34.90,
    description: "Hambúrguer artesanal 180g com mix de queijos derretidos, picles e molho especial.",
    longDescription: "Nosso Cheeseburger Fire é a escolha perfeita para os amantes de queijo. Hambúrguer artesanal de 180g de primeira qualidade, coberto por um mix exclusivo de três queijos derretidos: cheddar, muçarela e provolone. Completamos com picles crocantes e nosso molho especial Fire. Servido em um pão brioche macio. Um clássico com o toque Fire Burger!",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500",
    category: "Hambúrgueres",
    isFeatured: false,
    ingredients: ["Pão brioche", "Hambúrguer 180g", "Mix de queijos", "Picles", "Molho Fire"],
    tags: ["Clássico", "Queijos"],
    checkoutLink: "https://pay.exemplo.com/cheeseburger-fire",
    slug: "cheeseburger-fire",
    spicyLevel: 1
  },
  {
    id: "combo-1",
    name: "Combo Fire",
    price: 49.90,
    description: "Fire Classic, batata frita média, 4 onion rings e refrigerante 400ml.",
    longDescription: "O Combo Fire é perfeito para quem quer experimentar um pouco de tudo! Acompanha nosso Fire Classic com 180g de hambúrguer suculento, uma porção média de batatas fritas crocantes, 4 deliciosos onion rings e refrigerante de sua escolha (400ml). A combinação ideal para uma refeição completa, com sabor e variedade em cada mordida.",
    image: "https://images.unsplash.com/photo-1610614819513-58e34989e371?q=80&w=500",
    category: "Combos",
    isFeatured: true,
    ingredients: ["Fire Classic", "Batata frita média", "4 Onion rings", "Refrigerante 400ml"],
    tags: ["Combo", "Mais pedido"],
    checkoutLink: "https://pay.exemplo.com/combo-fire",
    slug: "combo-fire",
    isCombo: true
  },
  {
    id: "combo-2",
    name: "Combo Infernal",
    price: 59.90,
    description: "Inferno Bacon, batata frita grande com cheddar e bacon, e refrigerante 500ml.",
    longDescription: "O Combo Infernal é para quem quer uma experiência gastronômica intensa! Acompanha nosso picante Inferno Bacon, uma porção grande de batatas fritas cobertas com cheddar cremoso e pedacinhos de bacon crocante, além de refrigerante de sua escolha (500ml). Uma explosão de sabores em cada etapa da refeição, garantindo satisfação máxima!",
    image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=500",
    category: "Combos",
    isFeatured: true,
    ingredients: ["Inferno Bacon", "Batata frita grande com cheddar e bacon", "Refrigerante 500ml"],
    tags: ["Combo", "Picante"],
    checkoutLink: "https://pay.exemplo.com/combo-infernal",
    slug: "combo-infernal",
    isCombo: true,
    spicyLevel: 2
  },
  {
    id: "combo-3",
    name: "Combo Erupção",
    price: 69.90,
    description: "Volcano, batata frita grande, 6 chicken fire e refrigerante 500ml.",
    longDescription: "Prepare-se para a erupção de sabores mais intensa com este combo! Inclui nosso hambúrguer Volcano extremamente picante, uma porção grande de batatas fritas crocantes, 6 unidades do nosso exclusivo chicken fire (empanado e temperado com especiarias picantes) e refrigerante de sua escolha (500ml). Este combo foi feito para os verdadeiros amantes de pimenta que buscam uma experiência gastronômica inesquecível.",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=500",
    category: "Combos",
    isFeatured: false,
    ingredients: ["Volcano", "Batata frita grande", "6 Chicken fire", "Refrigerante 500ml"],
    tags: ["Combo", "Extra picante"],
    checkoutLink: "https://pay.exemplo.com/combo-erupcao",
    slug: "combo-erupcao",
    isCombo: true,
    spicyLevel: 3
  },
  {
    id: "combo-4",
    name: "Combo Família",
    price: 129.90,
    description: "2 hambúrgueres Fire Classic, 2 Cheeseburger Fire, batata família, 8 onion rings e 2 refrigerantes 1L.",
    longDescription: "O Combo Família é ideal para compartilhar! Inclui 2 hambúrgueres Fire Classic, 2 Cheeseburger Fire, uma batata frita tamanho família (serve até 4 pessoas), 8 onion rings crocantes e 2 refrigerantes de 1 litro à sua escolha. Perfeito para reunir a família ou os amigos para uma refeição completa com o sabor inconfundível da Fire Burger.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=500",
    category: "Combos",
    isFeatured: true,
    ingredients: ["2 Fire Classic", "2 Cheeseburger Fire", "Batata frita família", "8 Onion rings", "2 Refrigerantes 1L"],
    tags: ["Combo", "Família", "Compartilhar"],
    checkoutLink: "https://pay.exemplo.com/combo-familia",
    slug: "combo-familia",
    isCombo: true
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