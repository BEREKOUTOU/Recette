import type { Recipe } from "@/types";

const img1 = new URL('../assets/images/img.jpg', import.meta.url).href;
const img2 = new URL('../assets/images/img2.jpg', import.meta.url).href;
const img3 = new URL('../assets/images/img3.jpg', import.meta.url).href;
const img4 = new URL('../assets/images/img4.jpg', import.meta.url).href;
const img5 = new URL('../assets/images/img5.webp', import.meta.url).href;
const img6 = new URL('../assets/images/img6.jpg', import.meta.url).href;
const img7 = new URL('../assets/images/img7.jpg', import.meta.url).href;
const img8 = new URL('../assets/images/img8.jpg', import.meta.url).href;
const img9 = new URL('../assets/images/img9.jpeg', import.meta.url).href;
const img10 = new URL('../assets/images/img10.webp', import.meta.url).href;
const img11 = new URL('../assets/images/img11.jpg', import.meta.url).href;
const img12 = new URL('../assets/images/img12.jpg', import.meta.url).href;
const img13 = new URL('../assets/images/img13.jpg', import.meta.url).href;
const img14 = new URL('../assets/images/img14.jpg', import.meta.url).href;
const img15 = new URL('../assets/images/img15.jpg', import.meta.url).href;
const img16 = new URL('../assets/images/img16.jpg', import.meta.url).href;
const img17 = new URL('../assets/images/img17.jpg', import.meta.url).href;
const img18 = new URL('../assets/images/img18.jpg', import.meta.url).href;
const img19 = new URL('../assets/images/img19.jpg', import.meta.url).href;
const img20 = new URL('../assets/images/img20.jpg', import.meta.url).href;

export const recipes = [
  {
    id: "r1",
    title: "salade de quinoa aux légumes",
    description:
      "Une salade fraîche et colorée avec du quinoa, des légumes croquants et une vinaigrette légère au citron.",
    ingredients: ["quinoa", "concombre", "tomates cerises", "poivron rouge", "oignon rouge", "persil", "citron", "huile d'olive", "sel", "poivre"],
    dietTags: ["vegan", "gluten-free"],
    instructions: [
      "Cuire le quinoa selon les instructions du paquet et laisser refroidir.",
      "Laver et couper les légumes.",
      "Dans un saladier, ajouter le quinoa, les légumes, le persil, le sel et le poivre.",
      "Ajouter l'huile d'olive et la vinaigrette au citron.",
      "Mettre au frais et servir.",
    ],
    cookTime: 25,
    prepTime: 10,
    image: img1,
  },
  {
    id: "r2",
    title: "poulet aux pommes de terre",
    description:
      "Un plat sain et nutritif avec du poulet, des pommes de terre croquantes et une vinaigrette de tomates.",
    ingredients: ["poulet", "pommes de terre", "tomates cerises", "huile d'olive", "sel", "poivre"],
    dietTags: ["vegan", "gluten-free"],
    instructions: [
      "Cuire le poulet et les pommes de terre selon les instructions du paquet.",
      "Laver et couper les tomates cerises.",
      "Dans un saladier, ajouter le poulet, les pommes de terre, les tomates cerises, le sel et le poivre.",
      "Ajouter l'huile d'olive et la vinaigrette de tomates.",
      "Mettre au frais et servir.",
    ],
    cookTime: 45,
    prepTime: 10,
    image: img2,
  },
  {
    id: 'r3',
    title: 'Curry de pois chiches',
    description:
      'Curry parfumé de pois chiches au lait de coco, épices et épinards.',
    ingredients: ['pois chiches', 'lait de coco', 'oignon', 'ail', 'gingembre', 'curry', 'épinards', 'coriandre', 'sel'],
    dietTags: ['vegan', 'gluten-free'],
    instructions: [
      'Faire revenir l\'oignon, l\'ail et le gingembre dans une poêle.',
      'Ajouter le lait de coco, le curry, les pois chiches et les épinards.',
      'Ajouter le sel et la coriandre.',
      'Mettre au frais et servir.',
    ],
    cookTime: 35,
    prepTime: 15,
    image: img3,
  },
  {
    id: 'r4',
    title: 'Pâtes Primavera',
    description:
      'Pâtes aux légumes de saison sautés à l’ail et au citron, parmesan en option.',
    ingredients: ['pâtes', 'courgette', 'petits pois', 'tomate', 'ail', 'citron', 'parmesan', 'huile d\'olive', 'sel', 'poivre', 'persil'],
    dietTags: ['vegetarian', 'gluten-free'],
    instructions: [
      'Cuire le quinoa selon les instructions du paquet et laisser refroidir.',
      'Laver et couper les légumes.',
      'Dans un saladier, ajouter le quinoa, les légumes, le persil, le sel et le poivre.',
      'Ajouter l\'huile d\'olive et la vinaigrette au citron.',
      'Mettre au frais et servir.',
    ],
    cookTime: 25,
    prepTime: 10,
    image: img4,
  },
  {
    id: 'r5',
     title: 'Buddha bowl au tofu',
    description:
      'Bol complet avec tofu croustillant, riz brun, légumes rôtis et sauce tahini.',
    ingredients: ['tofu', 'riz brun', 'brocoli', 'patate douce', 'chou rouge', 'tahini', 'citron', 'ail', 'sel', 'poivre'],
    dietTags: ['vegan'],
    instructions: [
      'Cuire le riz brun selon les instructions du paquet.',
      'Rôtir le brocoli et la patate douce au four avec de l\'huile d\'olive, du sel et du poivre.',
      'Faire revenir le tofu jusqu\'à ce qu\'il soit croustillant.',
      'Préparer la sauce tahini en mélangeant le tahini, le jus de citron, l\'ail, le sel et un peu d\'eau.',
      'Assembler le bol avec le riz, les légumes rôtis, le tofu et la sauce tahini.', 
    ],
    cookTime: 30,
    prepTime: 15,
    image: img5,
  },
  {
    id: 'r6',
    title: 'Saumon au four et asperges',
    description:
      'Filet de saumon cuit au four avec asperges, citron et aneth.',
    ingredients: ['saumon', 'asperges', 'citron', 'aneth', 'huile d\'olive', 'sel', 'poivre'],
    dietTags: ['gluten-free', 'keto', 'paleo'],
    instructions: [
      'Préchauffer le four à 200°C.',
      'Placer le saumon et les asperges sur une plaque de cuisson.',
      'Ajouter l\'huile d\'olive, le sel et le poivre.',
      'Cuire le saumon et les asperges pendant 10 minutes.',
      'Servir avec du citron et de l\'aneth.',
    ],
    cookTime: 22,
    prepTime: 8,
    image: img6,
  },
  {
    id: 'r7',
    title: 'Soupe de lentilles corail',
    description:
      'Soupe réconfortante aux lentilles corail, carotte, céleri et cumin.',
    ingredients: ['lentilles corail', 'carotte', 'céleri', 'oignon', 'ail', 'cumin', 'bouillon', 'sel', 'poivre'],
    dietTags: ['vegan', 'gluten-free'],
    instructions: [
      'Faire revenir l\'oignon, l\'ail, la carotte et le céleri dans une grande casserole.',
      'Ajouter les lentilles corail, le cumin et le bouillon.',
      'Cuire pendant 20 minutes.',
      'Servir avec du sel et du poivre.',
    ],
    cookTime: 30,
    prepTime: 10,
    image: img7
  },
  {
    id: 'r8',
    title: 'Omelette aux champignons',
    description:
      'Omelette moelleuse garnie de champignons sautés et ciboulette.',
    ingredients: ['oeufs', 'champignon', 'beurre', 'ciboulette', 'sel', 'poivre'],
    dietTags: ['gluten-free', 'keto'],
    instructions: [
      'Faire chauffer le beurre dans une poêle.',
      'Ajouter les oeufs et les champignons.',
      'Cuire jusqu\'à ce qu\'ils soient croustillants.',
      'Servir avec de la ciboulette et du sel et du poivre.', 
    ],
    cookTime: 10,
    prepTime: 5,
    image: img8
  },
  {
    id: 'r9',
    title: 'Tacos au poisson',
    description:
      'Tacos de poisson grillé avec salsa de mangue et chou rouge.',
    ingredients: ['poisson blanc', 'tortilla', 'mangue', 'chou rouge', 'citron vert', 'coriandre', 'épices', 'sel', 'poivre'],
    dietTags: [ 'gluten-free', 'paleo'],
    instructions: [
      'Griller le poisson et le couper en tranches.',
      'Couper le chou rouge en lanières.',
      'Mélanger la salsa de mangue avec du citron vert, de la coriandre et des épices.',
      'Assembler les tacos avec la tortilla, le poisson, le chou rouge et la salsa.',
    ],
    cookTime: 25,
    prepTime: 10,
    image: img9
  },
  {
    id: 'r10',
    title: 'Ratatouille',
    description:
      'Classique ratatouille provençale mijotée: aubergine, courgette, poivron, tomate.',
    ingredients: ['aubergine', 'courgette', 'poivron', 'tomate', 'oignon', 'ail', 'herbes de provence', 'huile d\'olive', 'sel', 'poivre'],
    dietTags: ['vegan', 'gluten-free', 'paleo'],
    instructions: [
      'Faire revenir l\'oignon et l\'ail dans une grande poêle.',
      'Ajouter les légumes coupés en dés et les herbes de Provence.', 
      'Ajouter l\'huile d\'olive, le sel et le poivre.',
      'Mettre au frais et servir.',
    ],
    cookTime: 60,
    prepTime: 15,
    image: img10
  },
  {
    id: 'r11',
    title: 'Salade grecque',
    description:
      'Concombre, tomate, feta, olive et origan, assaisonnée d’huile d’olive.',
    ingredients: ['concombre', 'tomate', 'feta', 'olive', 'oignon rouge', 'origan', 'huile d\'olive', 'sel', 'poivre'],
    dietTags: ['vegetarian', 'gluten-free'],
    instructions: [
      'Laver et couper les légumes.',
      'Dans un saladier, ajouter les légumes, la feta, les olives, le sel et le poivre.',
      'Ajouter l\'huile d\'olive et l\'origan.',
      'Mettre au frais et servir.',
    ],
    cookTime: 15,
    prepTime: 10,
    image: img11
  },
  {
    id: 'r12',
    title: 'Shakshuka',
    description:
      'Oeufs pochés dans une sauce tomate épicée aux poivrons.',
    ingredients: ['oeufs', 'tomate', 'poivron', 'oignon', 'ail', 'cumin', 'paprika', 'sel', 'poivre'],
    dietTags: ['gluten-free', 'vegetarian'],
    instructions: [
      'Faire revenir l\'oignon, l\'ail et le poivron dans une poêle.',
      'Ajouter la tomate, le cumin, le paprika, le sel et le poivre.',
      'Casser les oeufs dans la sauce et cuire jusqu\'à ce qu\'ils soient pris.',
      'Servir chaud.',
    ],
    cookTime: 28,
    prepTime: 10,
    image: img12
  },
  {
    id: 'r13',
    title: 'Chili sin carne',
    description:
      'Chili végétarien avec haricots rouges, maïs, tomate et épices.',
    ingredients: ['haricots rouges', 'maïs', 'tomate', 'oignon', 'ail', 'chili', 'cumin', 'paprika', 'sel', 'poivre'],
    dietTags: ['vegan', 'gluten-free'],
    instructions: [
      'Faire revenir l\'oignon et l\'ail dans une grande casserole.',
      'Ajouter les haricots rouges, le maïs, la tomate, le chili, le cumin, le paprika, le sel et le poivre.',
      'Casser les oeufs dans la sauce et cuire jusqu\'à ce qu\'ils soient pris.',
      'Servir chaud.',
    ],
    cookTime: 45,
    prepTime: 15,
    image: img13
  },
  {
    id: 'r14',
    title: 'Crevettes à l’ail et citron',
    description:
      'Crevettes sautées rapidement à l’ail, citron et persil.',
    ingredients: ['crevettes', 'ail', 'citron', 'persil', 'beurre', 'sel', 'poivre'],
    dietTags: ['gluten-free', 'keto', 'paleo'],
    instructions: [
      'Faire fondre le beurre dans une poêle.',
      'Ajouter l\'ail et les crevettes.', 
      'Ajouter le persil, le sel et le poivre.',
      'Mettre au frais et servir.',
    ],
    cookTime: 12,
    prepTime: 8,
    image: img14
  }
] satisfies readonly Recipe[];
