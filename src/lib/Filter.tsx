import { Recipe, DietTag } from "@/types";

export type SortBy = 'cook-asc' | 'cook-desc' | 'alpha-asc' | 'alpha-desc';

export interface Filters {
    query: string;
    includeIngredients: string[];
    excludeIngredients: string[];
    dietTags: DietTag[];
    maxCookTime: number | null;
    maxPrepTime: number | null;
    sortBy: SortBy;
}

const normalize = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function filterAndSortRecipes(
    recipes: Recipe[],
    filters: Filters): Recipe[] {
        // Filtering
        const nq = normalize(filters.query || '');

        const filtered = recipes.filter(r => {
            //text query search in title, description, ingredients, instructions

            const haystack = 
                normalize(r.title) + ' ' +
                normalize(r.description) + ' ' +
                r.ingredients.map(normalize).join(' ') + ' ' +
                r.instructions.map(normalize).join(' ');

                const matchesQuery = nq.length === 0 || haystack.includes(nq);

                // Include ingredients: recipe must contain all selected include ingredients

                const matchesInclude = filters.includeIngredients .length === 0 ||
                    filters.includeIngredients.every(ing => 
                        r.ingredients.some(ring => normalize(ring).includes(normalize(ing)))
                    );

                // Exclude ingredients: recipe must NOT contain any excluded ingredients
                const matchesExclude =
      filters.excludeIngredients.length === 0 ||
      filters.excludeIngredients.every((ing) => !r.ingredients.includes(ing));

      // Diet restrictions: AND logic (must match all selected)
      const matchesDiet =
      filters.dietTags.length === 0 ||
      filters.dietTags.every((d) => r.dietTags.includes(d));

      // Cook time
    const matchesTime = filters.maxCookTime === null || r.cookTime <= filters.maxCookTime;

     return (
      matchesQuery && matchesInclude && matchesExclude && matchesDiet && matchesTime
    );
  });
        // Sorting
  const byTimeAsc = (a: Recipe, b: Recipe) =>
    a.cookTime === b.cookTime
      ? a.title.localeCompare(b.title)
      : a.cookTime - b.cookTime;

  const byTimeDesc = (a: Recipe, b: Recipe) =>
    a.cookTime === b.cookTime
      ? a.title.localeCompare(b.title)
      : b.cookTime - a.cookTime;

  const byAlphaAsc = (a: Recipe, b: Recipe) => a.title.localeCompare(b.title);
  const byAlphaDesc = (a: Recipe, b: Recipe) => b.title.localeCompare(a.title);

  const sorted = [...filtered].sort((a, b) => {
    switch (filters.sortBy) {
      case 'cook-asc':
        return byTimeAsc(a, b);
      case 'cook-desc':
        return byTimeDesc(a, b);
      case 'alpha-asc':
        return byAlphaAsc(a, b);
      case 'alpha-desc':
        return byAlphaDesc(a, b);
      default:
        return byTimeAsc(a, b);
    }
  });

  return sorted;
 }

 export function getAllIngredients(recipes: Recipe[]): string[] {
  const set = new Set<string>();
  for (const r of recipes) {
    for (const ing of r.ingredients) {
      set.add(ing);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export const DIET_OPTIONS: DietTag[] = [
  'vegan',
  'vegetarian',
  'gluten-free',
  'dairy-free',
  'keto',
  'paleo'
];

export const SORT_OPTIONS: Array<{ value: SortBy; label: string }> = [
  { value: 'cook-asc', label: 'Temps: croissant' },
  { value: 'cook-desc', label: 'Temps: décroissant' },
  { value: 'alpha-asc', label: 'A → Z' },
  { value: 'alpha-desc', label: 'Z → A' }
];