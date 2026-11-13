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
    // Sottogruppo mostrato nell'indice (es. "Seno", "Filler"). Facoltativo.
    gruppo: z.string().optional(),
    ordine: z.number().default(100),
    // Dati sintetici facoltativi, mostrati in un riquadro sotto il testo.
    durata: z.string().optional(),
    anestesia: z.string().optional(),
    ritorno: z.string().optional(),
  }),
});

export const collections = { trattamenti };
