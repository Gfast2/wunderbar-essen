import { allergens, allergens_english } from '../data/keyValue/allergens';

/**
 * Translates allergen IDs to localized names
 * @param allergenIds - Comma-separated allergen IDs (e.g., "1,3,4")
 * @param language - The language to use for the translated names
 * @returns Comma-separated allergen names
 */
export function translateAllergens(allergenIds: string | undefined, language: 'german' | 'english' = 'german'): string {
  if (!allergenIds) return '';

  const translations = language === 'english' ? allergens_english : allergens;

  return allergenIds
    .split(',')
    .map((id) => translations[id as keyof typeof translations] || id)
    .join(', ');
}
