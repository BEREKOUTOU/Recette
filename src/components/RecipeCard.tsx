import { useState } from 'react';
import {Badge} from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {Recipe} from '@/types';
import{Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

interface Props {
    recipe: Recipe;
}

const PrettyDiet = (d: string) => {
    switch (d) {
        case 'vegan': 
            return 'Végan';
        case 'vegetarien':
            return 'Vegetarien';
        case 'gluten_free':
            return 'sans gluten';
        case 'dairy_free':
            return 'sans lactose';
        case 'keto':
            return 'Keto';
        case 'paleo':
            return 'Paléo';
        default:
            return d;
    }
}

export const RecipeCard = ({recipe}: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            {recipe.image && (
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                />
            ) }
            <CardHeader className="pb-2">
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="text-sm text-muted-foreground line-clamp-2">
                    {recipe.description}
               </div>
               <div className="flex flex-wrap gap-2">
                {recipe.dietTags.length > 0 ? (
                    recipe.dietTags.map((t) => (
                        <Badge key={t} variant="secondary">
                            {PrettyDiet(t)}
                        </Badge>
                    
                ))
                ) : (
                    <Badge variant="outline">Standard</Badge>
                )}
                <Badge variant="default">⏱️ {recipe.cookTime} min 🍽️</Badge>
                {/* <Badge variant="default">🍽️ {recipe.servings} servings</Badge> */}
               </div>
               <div className='text-sm text-muted-foreground'>
                Ingrédients: {recipe.ingredients.slice(0, 6).join(', ')}
                {recipe.ingredients.length > 6 ? ', ...' : ''}
               </div>
               <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Masquer les détails' : 'Voir plus de détails'}
                {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <Separator className="my-3" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ingrédients complets:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
        </Card>
    )
}