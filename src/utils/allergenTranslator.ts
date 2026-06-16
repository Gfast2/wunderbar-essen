import { allergens } from '../data/keyValue/allergens';

/**
 * Translates allergen IDs to their German names
 * @param allergenIds - Comma-separated allergen IDs (e.g., "1,3,4")
 * @returns Comma-separated allergen names (e.g., "Ei, Soja, Gluten")
 */
export function translateAllergens(allergenIds: string | undefined): string {
  if (!allergenIds) return '';

  return allergenIds
    .split(',')
    .map((id) => allergens[id as keyof typeof allergens] || id)
    .join(', ');
}
