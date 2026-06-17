// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
// const blog = defineCollection({
//   loader: glob({ base: './src/content/menu', pattern: '**/*.{md,mdx}' }),
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//   }),
// });

const menuSchema = z.object({
    number: z.string(),
    name_chinese: z.string(),
    name_german: z.string(),
    price: z.string(),
    description: z.string(),
    unit: z.string().optional(),
    allergens: z.string().optional(),
    additive: z.string().optional(),
    // Link of the photo of the menu item
    photo: z.string().optional(),
});

const menu = defineCollection({
  loader: file("src/data/menu.json"),
  schema: menuSchema,
});

export type Menu = z.infer<typeof menuSchema>;

// 5. Export a single `collections` object to register your collection(s)
export const collections = { /* blog, */ menu };