import { getCollection } from 'astro:content';
import { rotte, type Lingua } from '../i18n/ui';

/** Schede dei trattamenti di una lingua, ordinate; "slug" è il nome del file senza estensione. */
export async function trattamentiDi(lingua: Lingua) {
  const tutte = await getCollection('trattamenti');
  return tutte
    .filter((scheda) => scheda.id.startsWith(`${lingua}/`))
    .map((scheda) => {
      const slug = scheda.id.slice(lingua.length + 1);
      return { scheda, slug, url: `${rotte.trattamenti[lingua]}${slug}/` };
    })
    .sort((a, b) => a.scheda.data.ordine - b.scheda.data.ordine || a.scheda.data.titolo.localeCompare(b.scheda.data.titolo));
}

/** Indirizzo della stessa scheda nell'altra lingua (o l'indice, se la traduzione manca). */
export async function traduzioneDi(chiave: string, lingua: Lingua) {
  const altra: Lingua = lingua === 'it' ? 'en' : 'it';
  const trovate = await trattamentiDi(altra);
  return trovate.find((t) => t.scheda.data.chiave === chiave)?.url ?? rotte.trattamenti[altra];
}
