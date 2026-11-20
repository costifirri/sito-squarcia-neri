import dati from '../data/studio.json';

export const studio = dati;

/** Vero se il valore è ancora un segnaposto tipo "[TELEFONO]". */
export const mancante = (valore: unknown): boolean =>
  typeof valore !== 'string' || valore.trim() === '' || valore.includes('[');

const soloCifre = (numero: string) => numero.replace(/[^\d+]/g, '');

export const linkTelefono = mancante(studio.telefono) ? null : `tel:${soloCifre(studio.telefono)}`;
export const linkEmail = mancante(studio.email) ? null : `mailto:${studio.email}`;

/** Email di prenotazione con oggetto e testo già compilati (null se manca l'indirizzo). */
export function linkPrenotazione(lingua: 'it' | 'en'): string | null {
  if (!linkEmail) return null;
  const testi = {
    it: {
      oggetto: 'Richiesta di appuntamento',
      corpo: 'Buongiorno,\n\nvorrei fissare una visita.\n\nNome e cognome:\nRecapito telefonico:\n\nGrazie.',
    },
    en: {
      oggetto: 'Appointment request',
      corpo: 'Good morning,\n\nI would like to book a consultation.\n\nFull name:\nPhone number:\n\nThank you.',
    },
  }[lingua];
  return `${linkEmail}?subject=${encodeURIComponent(testi.oggetto)}&body=${encodeURIComponent(testi.corpo)}`;
}
export const linkWhatsapp = mancante(studio.whatsapp)
  ? null
  : `https://wa.me/${soloCifre(studio.whatsapp).replace('+', '')}`;
