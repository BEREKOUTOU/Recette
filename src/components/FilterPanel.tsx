import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import type { DietTag } from '@/types';
import type { Filters } from '@/lib/Filter';

interface Props {
  allIngredients: string[];
  dietOptions: DietTag[];
  filters: Filters;
  onChange: (patch: Partial<Filters>) => void;
  onReset: () => void;
}

export default function FilterPanel({
  allIngredients,
  dietOptions,
  filters,
  onChange,
  onReset
}: Props) {
  const { query, includeIngredients, excludeIngredients, dietTags, maxCookTime } = filters;

  const toggleInArray = (arr: string[], value: string) => {
    if (arr.includes(value)) return arr.filter((v) => v !== value);
    return [...arr, value];
  };

  const handleIncludeToggle = (ing: string) => {
    onChange({
      includeIngredients: toggleInArray(includeIngredients, ing)
    });
  };

  const handleExcludeToggle = (ing: string) => {
    onChange({
      excludeIngredients: toggleInArray(excludeIngredients, ing)
    });
  };

  const handleDietToggle = (diet: DietTag) => {
    onChange({
      dietTags: dietTags.includes(diet)
        ? (dietTags.filter((d) => d !== diet) as DietTag[])
        : ([...dietTags, diet] as DietTag[])
    });
  };

  return (
    <aside className="w-full md:w-80 md:shrink-0 md:border-r md:border-border p-4 space-y-6 bg-white/60 backdrop-blur">
      <div className="space-y-2">
        <Label htmlFor="search">Recherche</Label>
        <Input
          id="search"
          placeholder="Nom, description, ingrédient…"
          value={query}
          onChange={(e) => onChange({ query: e.target.value })}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Temps de cuisson (max)</Label>
          <span className="text-sm text-muted-foreground">{maxCookTime} min</span>
        </div>
        <Slider
          value={[maxCookTime]}
          onValueChange={(v) => onChange({ maxCookTime: v[0] ?? maxCookTime })}
          min={10}
          max={120}
          step={5}
        />
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Restrictions alimentaires</Label>
        <div className="grid grid-cols-2 gap-2">
          {dietOptions.map((d) => (
            <label key={d} className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={dietTags.includes(d)}
                onCheckedChange={(c) => {
                  if (typeof c === 'boolean') handleDietToggle(d);
                  else handleDietToggle(d);
                }}
              />
              <span className="capitalize">{d.replace('-', ' ')}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Ingrédients à inclure</Label>
        <div className="max-h-48 overflow-auto rounded border p-2">
          <div className="grid grid-cols-1 gap-2">
            {allIngredients.map((ing) => {
              const disabled = excludeIngredients.includes(ing);
              return (
                <label key={`inc-${ing}`} className="flex items-center gap-2 text-sm opacity-100">
                  <Checkbox
                    checked={includeIngredients.includes(ing)}
                    disabled={disabled}
                    onCheckedChange={() => handleIncludeToggle(ing)}
                  />
                  <span className={disabled ? 'line-through text-muted-foreground' : ''}>
                    {ing}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Ingrédients à exclure</Label>
        <div className="max-h-48 overflow-auto rounded border p-2">
          <div className="grid grid-cols-1 gap-2">
            {allIngredients.map((ing) => {
              const disabled = includeIngredients.includes(ing);
              return (
                <label key={`exc-${ing}`} className="flex items-center gap-2 text-sm opacity-100">
                  <Checkbox
                    checked={excludeIngredients.includes(ing)}
                    disabled={disabled}
                    onCheckedChange={() => handleExcludeToggle(ing)}
                  />
                  <span className={disabled ? 'line-through text-muted-foreground' : ''}>
                    {ing}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Button variant="outline" className="w-full" onClick={onReset}>
          Réinitialiser
        </Button>
      </div>
    </aside>
  );
}