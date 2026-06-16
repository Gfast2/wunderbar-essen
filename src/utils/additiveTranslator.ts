import { additives } from '../data/keyValue/additive';

/**
 * Translates additive IDs to their German names
 * @param additiveIds - Comma-separated additive IDs (e.g., "1,3,4")
 * @returns Comma-separated additive names (e.g., "Ei, Soja, Gluten")
 */
export function translateAdditives(additiveIds: string | undefined): string {
  if (!additiveIds) return '';

  return additiveIds
    .split(',')
    .map((id) => additives[id as keyof typeof additives] || id)
    .join(', ');
}
