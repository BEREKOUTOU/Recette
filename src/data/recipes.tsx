import type { Recipe } from "@/types";

export const recipes: Recipe[] = [
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
    image: "./assets/images/img.jpg",
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
    image: "./assets/images/img2.jpg",
  },
]
