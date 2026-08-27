import SEO from '@/components/site/SEO';
import PageHeader from '@/components/site/PageHeader';
import { Section } from '@/components/site/Section';
import heroImg from '@/assets/algarve-sunset-beach.jpg';
import tavira from '@/assets/destinations/tavira-hero.jpg';
import faro from '@/assets/destinations/faro-hero.jpg';
import lagos from '@/assets/destinations/lagos-hero.jpg';
import cacela from '@/assets/destinations/cacela-velha-hero.jpg';
import taviraIsland from '@/assets/destinations/tavira-island-hero.jpg';
import alte from '@/assets/destinations/alte-hero.jpg';
import castroMarim from '@/assets/destinations/castro-marim-hero.jpg';
import altura from '@/assets/destinations/altura-hero.jpg';

const regions = [
  {
    key: 'oost',
    label: 'Oost',
    image: tavira,
    title: 'De Oost-Algarve',
    tagline: 'Rustig, authentiek, betaalbaar.',
    places: [
      ['Tavira', 'Witte straatjes, Romeinse brug en een eiland voor de kust.'],
      ['Olhão', 'Echte vissersplaats met bruisende markthallen.'],
      ['Manta Rota', 'Breed, rustig strand met gratis parkeren.'],
      ['Cacela Velha', 'Gehuchtje van 50 inwoners met een adembenemend uitzicht.'],
      ['Vila Real de Santo António', 'Grensstad aan de Guadiana, begin van de N125.'],
    ],
  },
  {
    key: 'midden',
    label: 'Midden',
    image: faro,
    title: 'De Midden-Algarve',
    tagline: 'Cultuur, markten en kastelen.',
    places: [
      ['Faro (Cidade Velha)', 'Sfeervolle oude stad binnen de muren — en gratis.'],
      ['Loulé', 'De beste zaterdagmarkt van de Algarve.'],
      ['Silves', 'Moorse hoofdstad met een rood zandstenen kasteel.'],
      ['Albufeira', 'Eerlijk advies: sla het toeristische centrum over.'],
      ['Carvoeiro', 'Charmant klifstadje met spectaculaire kustpaden.'],
    ],
  },
  {
    key: 'west',
    label: 'West',
    image: lagos,
    title: 'De West-Algarve',
    tagline: 'Wilde kust, weinig toeristen.',
    places: [
      ['Lagos', 'De kliffen van Ponta da Piedade — een hoogtepunt.'],
      ['Sagres', 'Het meest westelijke punt, geliefd bij surfers.'],
      ['Aljezur', 'Poort naar de wilde Costa Vicentina.'],
      ['Odeceixe', 'Waar de rivier de zee ontmoet — een uniek strand.'],
    ],
  },
];

const gems = [
  {
    image: cacela,
    title: 'Cacela Velha',
    text: '50 inwoners, een kerkje en misschien wel het mooiste uitzichtpunt van de kust.',
  },
  {
    image: taviraIsland,
    title: 'Ilha de Tavira',
    text: 'Vrijwel onbewoond eiland, bereikbaar met een pontje van €2,50.',
  },
  {
    image: alte,
    title: 'Alte',
    text: 'Landinwaarts dorpje met natuurlijke bronnen en een lokaal café.',
  },
  {
    image: castroMarim,
    title: 'Alcoutim',
    text: 'Vergeten grensdorp aan de Guadiana-rivier, recht tegenover Spanje.',
  },
  {
    image: altura,
    title: 'Praia da Manta Rota',
    text: 'Breed, rustig strand met gratis parkeren — ver van de drukte.',
  },
];

export default function Bestemmingen() {
  return (
    <main className="pt-16">
      <SEO
        title="Bestemmingen Algarve – Van Lagos tot de Goldene Eilanden | Algarve voor Bijna Niks"
        description="De mooiste plekken in de Algarve, inclusief 5 verborgen parels die de meeste toeristen nooit vinden. Oost, midden en west vergeleken."
        url="/bestemmingen"
      />
      <PageHeader
        image={heroImg}
        eyebrow="Bestemmingen"
        title="Waar moet je heen in de Algarve?"
        intro={
          <p>
            De Algarve is verrassend divers: het rustige oosten, het culturele
            midden en de wilde westkust. Hieronder de mooiste plekken per regio —
            plus vijf verborgen parels die de meeste toeristen nooit zien.
          </p>
        }
      />

      {regions.map((region, i) => (
        <Section
          key={region.key}
          muted={i % 2 === 1}
          title={region.title}
          intro={region.tagline}
        >
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={region.image}
                alt={region.title}
                className="w-full h-56 md:h-72 object-cover"
              />
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
              <ul className="space-y-4">
                {region.places.map(([name, desc]) => (
                  <li key={name}>
                    <span className="font-bold text-foreground">{name}</span>
                    <span className="text-muted-foreground"> — {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section title="5 verborgen parels" intro="Plekken die je niet in de standaard reisgidsen vindt.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gems.map((gem) => (
            <div
              key={gem.title}
              className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-warm transition-shadow"
            >
              <img
                src={gem.image}
                alt={gem.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{gem.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {gem.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
