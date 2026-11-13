# Sito del Dr. Giorgio Squarcia Neri

Sito vetrina statico in italiano e inglese, costruito con [Astro](https://astro.build).

## Comandi

Da eseguire nel terminale, dentro la cartella del progetto.

| Comando            | Cosa fa                                                              |
| ------------------ | -------------------------------------------------------------------- |
| `npm install`      | Installa il necessario (solo la prima volta o su un nuovo computer)  |
| `npm run dev`      | Avvia il sito in locale su http://localhost:4321                     |
| `npm run build`    | Crea il sito definitivo nella cartella `dist/`                       |
| `npm run mancanti` | Elenca i dati e i testi ancora a segnaposto                          |
| `npm run immagini` | Rigenera favicon, icona e anteprima social a partire da `brand/`     |

## Dove si modifica cosa

- **Dati dello studio** (indirizzo, telefono, email, P. IVA, Ordine, orari, dominio, coordinate della mappa):
  `src/data/studio.json`. Vanno sostituiti i valori tra parentesi quadre, es. `"[TELEFONO]"`.
- **Trattamenti**: un file per trattamento in `src/content/trattamenti/it/` e la traduzione in
  `src/content/trattamenti/en/`. Le due versioni devono avere la stessa `chiave`. Il nome del file
  diventa l'indirizzo della pagina. Il campo `gruppo` (es. Seno, Filler) raggruppa le schede nell'indice.
- **Testi delle pagine** (home, chi sono, contatti, privacy, cookie): cartella `src/views/`, con il testo
  italiano e quello inglese uno sotto l'altro nello stesso file.
- **Menu, piè di pagina, etichette**: `src/i18n/ui.ts`.
- **Colori e stile**: `src/styles/global.css`. **Loghi**: `brand/` (non modificarli).

## Prima di pubblicare

1. `npm run mancanti` non deve elencare più nulla.
2. In `src/data/studio.json` impostare `"dominio"` (es. `"www.esempio.it"`, senza `https://`) e
   `"pubblicato": true`. Finché `pubblicato` è `false` il sito chiede ai motori di ricerca di non indicizzarlo.
3. Far verificare la privacy policy a un consulente.

## Privacy

Il sito non usa cookie di tracciamento né servizi esterni: i font sono ospitati in locale e la mappa
(OpenStreetMap) si carica solo dopo un clic del visitatore.
