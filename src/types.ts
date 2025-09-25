export type DietTag = 
  | 'vegan'
  | 'vegetarian'
  | 'gluten-free'
  | 'dairy-free'
  | 'keto'
  | 'paleo';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  dietTags: DietTag[];
  instructions: string[];
  cookTime: number;
  prepTime: number;
  image?: string;
}
