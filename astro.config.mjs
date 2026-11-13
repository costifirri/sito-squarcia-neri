import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Il dominio si imposta in src/data/studio.json (campo "dominio").
const studio = JSON.parse(readFileSync(new URL('./src/data/studio.json', import.meta.url), 'utf8'));
const dominioMancante = studio.dominio.includes('[');
const site = dominioMancante ? 'https://example.invalid' : `https://${studio.dominio}`;

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],
});
