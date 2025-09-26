{/*home page*/}
import {useMemo, useState} from 'react';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import { Card } from '@/components/ui/card';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Bienvenue sur application de Recherche de Recettes</h1>
      <p className="mt-4 justify-center text-center">Cette application vous permet de rechercher des recettes en fonction de vos préférences et de vos besoins alimentaires. Vous pouvez filtrer les recettes par ingrédients, restrictions alimentaires et temps de cuisson.</p>
      <h2 className="mt-8 text-2xl font-bold text-gray-300 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Bientôt disponible</h2>
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Recherche de Recettes
        </h1>
        <div className="flex items-center gap-4">
        {/* Future features: search bar, filters, user auth */}
        {/* <input
            type="text"
            placeholder="Rechercher une recette"
            className="px-4 py-2 border border-gray-300 rounded-md"
          /> */}
        </div>
      </div>
      </header>
      <main>
         <section className='w-full'>
          {recipes.length === 0 ? (
            <Card className="p-8 text-center text-muted-foreground">
              Aucune recette ne correspond à vos filtres. Essayez d&#39;élargir la recherche.
            </Card>
            ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          )}
         </section>
      </main>
    </div>
  );
}
