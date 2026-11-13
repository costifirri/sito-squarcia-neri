import type { APIRoute } from 'astro';
import { studio, mancante } from '../lib/studio';

// Finché "pubblicato" è false in studio.json il sito chiede ai motori di ricerca di non indicizzarlo.
export const GET: APIRoute = ({ site }) => {
  const righe = studio.pubblicato ? ['User-agent: *', 'Allow: /'] : ['User-agent: *', 'Disallow: /'];
  if (studio.pubblicato && site && !mancante(studio.dominio)) {
    righe.push('', `Sitemap: ${new URL('/sitemap-index.xml', site).href}`);
  }
  return new Response(righe.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
