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
  dietTags: DietTag[];
  cookTime: number;
  ingredients: string[];
  image?: string;
}
