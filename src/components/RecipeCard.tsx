import {Badge} from '@/components/ui/badge';
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
                <Badge variant="default">⏱️ {recipe.cookTime} min</Badge>
                {/* <Badge variant="default">🍽️ {recipe.servings} servings</Badge> */}
               </div>
               <div className='text-sm text-muted-foreground'>
                Ingrédients: {recipe.ingredients.slice(0, 6).join(', ')}
                {recipe.ingredients.length > 6 ? ', ...' : ''}
               </div>
            </CardContent>
        </Card>
    )
}