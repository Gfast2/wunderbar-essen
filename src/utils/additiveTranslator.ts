import { additives, additives_english } from '../data/keyValue/additive';

/**
 * Translates additive IDs to localized names
 * @param additiveIds - Comma-separated additive IDs (e.g., "1,3,4")
 * @param language - The language to use for the translated names
 * @returns Comma-separated additive names
 */
export function translateAdditives(additiveIds: string | undefined, language: 'german' | 'english' = 'german'): string {
  if (!additiveIds) return '';

  const translations = language === 'english' ? additives_english : additives;

  return additiveIds
    .split(',')
    .map((id) => translations[id as keyof typeof translations] || id)
    .join(', ');
}
