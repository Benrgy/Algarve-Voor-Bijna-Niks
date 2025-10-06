export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Algarve voor Bijna Niks - Goedkope Vakanties Portugal vanaf €199',
    description: 'Ontdek de goedkoopste Algarve vakanties! All-inclusive deals, last-minute aanbiedingen en geheime tips voor budget reizen naar Portugal. Boek nu en bespaar tot 70%.',
    keywords: 'algarve goedkoop, portugal vakantie budget, algarve deals, last minute algarve, goedkope vakanties portugal, algarve aanbiedingen',
    ogTitle: 'Algarve voor Bijna Niks - Ontdek Portugal voor een Fractie van de Prijs',
    ogDescription: '🏖️ Al 10.000+ Nederlanders gingen je voor! Boek jouw droomvakantie naar de Algarve vanaf €199. Exclusieve deals die je nergens anders vindt.',
    twitterTitle: 'Algarve voor Bijna Niks - Goedkope Portugal Vakanties',
    twitterDescription: 'Bespaar tot 70% op jouw Algarve vakantie! Exclusieve deals en geheime tips voor budget reizigers. Boek nu! 🏖️'
  },
  '/blog': {
    title: 'Algarve Reisgidsen & Tips - Lokale Insider Informatie',
    description: 'Ontdek de beste lokale geheimen, reistips en insider informatie over de Algarve. Geschreven door locals en reisexperts.',
    keywords: 'algarve tips, algarve reisgids, portugal reizen, algarve lokaal, algarve geheimen, portugal insider tips',
    ogTitle: 'Algarve Reisgidsen - Lokale Tips & Insider Informatie',
    ogDescription: 'Ontdek de beste lokale geheimen en reistips voor de Algarve. Geschreven door locals en reisexperts.',
    twitterTitle: 'Algarve Reisgidsen & Lokale Tips',
    twitterDescription: 'De beste lokale geheimen en insider informatie over de Algarve 🏖️'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];