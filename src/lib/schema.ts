import { studio, mancante } from './studio';
import type { Lingua } from '../i18n/ui';

/** Toglie i campi vuoti o ancora a segnaposto, così non finiscono nei dati strutturati. */
function pulisci<T extends Record<string, unknown>>(oggetto: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(oggetto).filter(([, v]) => (typeof v === 'string' ? !mancante(v) : v != null)),
  ) as Partial<T>;
}

/**
 * Dati strutturati schema.org: il medico (Person) e la sua attività (Physician).
 * L'indirizzo dello studio non viene pubblicato, per scelta del medico.
 */
export function datiStrutturati(lingua: Lingua, sito: URL | undefined) {
  const base = sito && !mancante(studio.dominio) ? sito.href : undefined;
  const idMedico = base ? `${base}#medico` : undefined;
  const idStudio = base ? `${base}#studio` : undefined;

  const medico = pulisci({
    '@type': 'Person',
    '@id': idMedico,
    name: studio.nomeSenzaTitolo,
    honorificPrefix: 'Dr.',
    jobTitle: studio.qualifica[lingua],
    url: base,
    worksFor: idStudio ? { '@id': idStudio } : undefined,
  });

  const studioMedico = pulisci({
    '@type': 'Physician',
    '@id': idStudio,
    name: studio.nome,
    description: studio.qualifica[lingua],
    medicalSpecialty: 'https://schema.org/PlasticSurgery',
    url: base,
    image: base ? new URL('/og.png', base).href : undefined,
    telephone: studio.telefono,
    email: studio.email,
    vatID: studio.partitaIva,
    areaServed: studio.area[lingua],
  });

  return { '@context': 'https://schema.org', '@graph': [medico, studioMedico] };
}
