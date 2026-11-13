export type Lingua = 'it' | 'en';

export const lingue: Lingua[] = ['it', 'en'];

/** Indirizzi delle pagine nelle due lingue. */
export const rotte = {
  home: { it: '/', en: '/en/' },
  chiSono: { it: '/chi-sono/', en: '/en/about/' },
  trattamenti: { it: '/trattamenti/', en: '/en/treatments/' },
  contatti: { it: '/contatti/', en: '/en/contact/' },
  privacy: { it: '/privacy/', en: '/en/privacy/' },
  cookie: { it: '/cookie/', en: '/en/cookies/' },
} as const;

export type Rotta = keyof typeof rotte;

export const categorie = ['chirurgia-estetica', 'chirurgia-ricostruttiva', 'medicina-estetica'] as const;
export type Categoria = (typeof categorie)[number];

export const nomiCategorie: Record<Categoria, Record<Lingua, string>> = {
  'chirurgia-estetica': { it: 'Chirurgia estetica', en: 'Aesthetic surgery' },
  'chirurgia-ricostruttiva': { it: 'Chirurgia ricostruttiva', en: 'Reconstructive surgery' },
  'medicina-estetica': { it: 'Medicina estetica', en: 'Aesthetic medicine' },
};

/** Testi dell'interfaccia comuni a tutte le pagine. */
export const ui = {
  it: {
    saltaAlContenuto: 'Vai al contenuto',
    menu: 'Menu',
    navPrincipale: 'Navigazione principale',
    nav: { home: 'Home', chiSono: 'Chi sono', trattamenti: 'Trattamenti', contatti: 'Contatti' },
    altraLingua: 'English',
    altraLinguaSigla: 'EN',
    prenota: 'Prenota una visita',
    telefono: 'Telefono',
    email: 'Email',
    whatsapp: 'WhatsApp',
    scriviWhatsapp: 'Scrivi su WhatsApp',
    chiama: 'Chiama',
    partitaIva: 'P. IVA',
    ordine: (provincia: string, numero: string) =>
      `Iscritto all'Ordine dei Medici Chirurghi e degli Odontoiatri di ${provincia}, n. ${numero}`,
    footerContatti: 'Contatti',
    footerPagine: 'Pagine',
    footerNote: 'Informazioni',
    privacy: 'Privacy policy',
    cookie: 'Cookie policy',
    avvisoSanitario:
      'Le informazioni contenute in questo sito hanno scopo informativo e non sostituiscono la visita medica.',
    logoAlt: 'Dr. Giorgio Squarcia Neri, chirurgia plastica ricostruttiva ed estetica: pagina iniziale',
  },
  en: {
    saltaAlContenuto: 'Skip to content',
    menu: 'Menu',
    navPrincipale: 'Main navigation',
    nav: { home: 'Home', chiSono: 'About', trattamenti: 'Treatments', contatti: 'Contact' },
    altraLingua: 'Italiano',
    altraLinguaSigla: 'IT',
    prenota: 'Book a consultation',
    telefono: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    scriviWhatsapp: 'Message on WhatsApp',
    chiama: 'Call',
    partitaIva: 'VAT no.',
    ordine: (provincia: string, numero: string) =>
      `Registered with the Medical Council (Ordine dei Medici Chirurghi e degli Odontoiatri) of ${provincia}, no. ${numero}`,
    footerContatti: 'Contact',
    footerPagine: 'Pages',
    footerNote: 'Information',
    privacy: 'Privacy policy',
    cookie: 'Cookie policy',
    avvisoSanitario:
      'The information on this website is for information purposes only and does not replace a medical consultation.',
    logoAlt: 'Dr. Giorgio Squarcia Neri, plastic, reconstructive and aesthetic surgery: home page',
  },
} as const;
