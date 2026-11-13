// Genera da brand/ le immagini che servono al sito, senza modificare i loghi:
//   public/favicon.svg           copia del monogramma piccolo
//   public/apple-touch-icon.png  icona per telefoni (monogramma piccolo su fondo bianco)
//   public/og.png                anteprima per i social, 1200x630, logo luminoso su blu notte
// Uso: npm run immagini
import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'node:fs';

const BLU_NOTTE = '#020821';
mkdirSync('public', { recursive: true });

copyFileSync('brand/gsn-monogramma-piccolo-colore.svg', 'public/favicon.svg');

const monogramma = await sharp('brand/gsn-monogramma-piccolo-colore.svg', { density: 96 })
  .resize({ width: 140 })
  .png()
  .toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } })
  .composite([{ input: monogramma, gravity: 'centre' }])
  .png()
  .toFile('public/apple-touch-icon.png');

const logo = await sharp('brand/gsn-orizzontale-trasparente.svg', { density: 96 })
  .resize({ width: 1200 })
  .png()
  .toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: BLU_NOTTE } })
  .composite([{ input: logo, gravity: 'centre' }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');

console.log('Immagini generate in public/: favicon.svg, apple-touch-icon.png, og.png');
