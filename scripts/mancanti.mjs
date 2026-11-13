// Elenca tutti i segnaposto ancora presenti nel sito (dati e testi da fornire).
// Uso: npm run mancanti
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const cartelle = ['src/data', 'src/content', 'src/views', 'src/components'];
const modello = /\[[A-ZÀ-Ú][A-ZÀ-Ú' ]{2,}(?::[^\]]*)?\]/g;
const trovati = new Map();

function visita(percorso) {
  for (const nome of readdirSync(percorso)) {
    const file = join(percorso, nome);
    if (statSync(file).isDirectory()) visita(file);
    else {
      const segnaposto = readFileSync(file, 'utf8').match(modello);
      if (segnaposto) trovati.set(relative('.', file).replaceAll('\\', '/'), [...new Set(segnaposto)]);
    }
  }
}

cartelle.forEach(visita);

let totale = 0;
for (const [file, elenco] of trovati) {
  console.log(`\n${file}`);
  for (const voce of elenco) {
    console.log(`  ${voce}`);
    totale++;
  }
}
console.log(totale === 0 ? 'Nessun segnaposto: tutti i dati sono stati inseriti.' : `\nTotale segnaposto da sostituire: ${totale}`);
