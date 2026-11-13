import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Una scheda per trattamento: src/content/trattamenti/it/*.md e .../en/*.md
const trattamenti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trattamenti' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    categoria: z.enum(['chirurgia-estetica', 'chirurgia-ricostruttiva', 'medicina-estetica']),
    // Stessa "chiave" nella scheda italiana e in quella inglese: collega le due traduzioni.
    chiave: z.string(),
    ordine: z.number().default(100),
  }),
});

export const collections = { trattamenti };
