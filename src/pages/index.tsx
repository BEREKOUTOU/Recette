{/*home page*/}
import {useMemo, useState} from 'react';
import { recipes } from '@/data/recipes';
import { RecipeCard } from '@/components/RecipeCard';
import FilterPanel from '@/components/FilterPanel';
import { Card } from '@/components/ui/card';
import { DIET_OPTIONS, Filters, SORT_OPTIONS, SortBy, filterAndSortRecipes, getAllIngredients } from '@/lib/Filter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const initialFilters: Filters = {
  query: '',
  includeIngredients: [],
  excludeIngredients: [],
  dietTags: [],
  maxCookTime: null,
  maxPrepTime: null,
  sortBy: 'cook-asc',
};

export default function Index() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleChange = (updates: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...updates }));
  };

  const filteredRecipes = useMemo(() => filterAndSortRecipes(recipes, filters), [filters]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Recherche de Recettes
          </h1>
          <div className="flex items-center gap-4">
            <div className='text-sm text-mueted-foreground'>
              {filteredRecipes.length} Résultat{filteredRecipes.length > 1 ? 's' : ''}
            </div>
            <div className="flex items-center gap-2">
              <Select
                value={filters.sortBy}
                onValueChange={(v) => handleChange({ sortBy: v as SortBy })}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 ">
        Trouvez la recette parfaite pour chaque occasion !
      </h1>
      </div>
      <main className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 md:gap-6 px-4 py-6'>

        <FilterPanel
          allIngredients={getAllIngredients(recipes)}
          dietOptions={DIET_OPTIONS}
          filters={filters}
          onChange={handleChange}
          onReset={() => setFilters(initialFilters)}
        />
         <section className='w-full'>
          {filteredRecipes.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              Aucune recette ne correspond à vos filtres. Essayez d&#39;élargir la recherche.
            </Card>
            ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecipes.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          )}
         </section>
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <h2 className="text-lg font-bold text-gray-300 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Bonne Cuisine</h2>   
        &copy; {new Date().getFullYear()} Recherche de Recettes. Tous droits réservés.
      </footer>
    </div>
  );
}
