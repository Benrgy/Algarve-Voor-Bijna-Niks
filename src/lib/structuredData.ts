export const SITE_URL = 'https://algarvevoorbijnaniks.lovable.app';
export const SITE_NAME = 'Algarve voor Bijna Niks';

const abs = (path?: string) =>
  !path ? SITE_URL : path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Onafhankelijke Nederlandstalige reisgids over budgetreizen in de Algarve, gebaseerd op eigen ervaring ter plaatse.',
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'nl-NL',
  publisher: { '@id': `${SITE_URL}/#organization` },
});

export const faqSchema = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: abs(item.url),
  })),
});

export const articleSchema = (input: {
  headline: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  section?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: input.headline,
  description: input.description,
  inLanguage: 'nl-NL',
  mainEntityOfPage: { '@type': 'WebPage', '@id': abs(input.url) },
  ...(input.image ? { image: [abs(input.image)] } : {}),
  ...(input.datePublished ? { datePublished: input.datePublished } : {}),
  ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  ...(input.section ? { articleSection: input.section } : {}),
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: { '@id': `${SITE_URL}/#organization` },
});

export const touristDestinationSchema = (input: {
  name: string;
  description?: string;
  url: string;
  image?: string;
  region?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: input.name,
  description: input.description,
  url: abs(input.url),
  ...(input.image ? { image: abs(input.image) } : {}),
  address: {
    '@type': 'PostalAddress',
    addressRegion: input.region || 'Algarve',
    addressCountry: 'PT',
  },
});

export const itemListSchema = (input: {
  name: string;
  items: { name: string; url: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: input.name,
  numberOfItems: input.items.length,
  itemListElement: input.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: abs(item.url),
  })),
});

export const collectionPageSchema = (input: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: input.name,
  description: input.description,
  url: abs(input.url),
  inLanguage: 'nl-NL',
  isPartOf: { '@id': `${SITE_URL}/#website` },
});
