import dati from '../data/studio.json';

export const studio = dati;

/** Vero se il valore è ancora un segnaposto tipo "[TELEFONO]". */
export const mancante = (valore: unknown): boolean =>
  typeof valore !== 'string' || valore.trim() === '' || valore.includes('[');

const soloCifre = (numero: string) => numero.replace(/[^\d+]/g, '');

export const linkTelefono = mancante(studio.telefono) ? null : `tel:${soloCifre(studio.telefono)}`;
export const linkEmail = mancante(studio.email) ? null : `mailto:${studio.email}`;
export const linkWhatsapp = mancante(studio.whatsapp)
  ? null
  : `https://wa.me/${soloCifre(studio.whatsapp).replace('+', '')}`;
