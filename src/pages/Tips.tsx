import PageHeader from '@/components/site/PageHeader';
import { Section, InfoCard } from '@/components/site/Section';
import heroImg from '@/assets/algarve-family-beach.jpg';

const themes = [
  {
    heading: '📅 Timing',
    emoji: '📅',
    cards: [
      ['Mei–juni: perfect', 'Warm, groen en nog rustig. Het beste weer zonder de zomerdrukte.'],
      ['Sep–okt: beste prijs', 'Zee is nog warm, prijzen dalen en het is heerlijk kalm.'],
      ['Vermijd juli–aug', 'Op een strak budget is het hoogseizoen te druk en te duur.'],
    ],
  },
  {
    heading: '💰 Geld besparen',
    emoji: '💰',
    cards: [
      ['Gebruik Revolut of Wise', 'Reken af tegen de echte wisselkoers, zonder verborgen kosten.'],
      ['Betaal altijd in euro\'s', 'Weiger "betalen in je eigen valuta" bij de pinautomaat — dat is duurder.'],
      ['Drink de huiswijn', 'De vinho da casa is spotgoedkoop en vaak prima.'],
      ['Parkeer buiten het centrum', 'Loop het laatste stukje en bespaar op peperdure parkeerplaatsen.'],
    ],
  },
  {
    heading: '🇵🇹 Lokaal leven',
    emoji: '🇵🇹',
    cards: [
      ['Ontbijt bij de pastelaria', 'Koffie en een pastel de nata voor ±€1,50. Zo begint de local zijn dag.'],
      ['Lunch is de hoofdmaaltijd', 'Middags eet je warm en goedkoop (prato do dia), \'s avonds lichter.'],
      ['Zeg "bom dia"', 'Een groet in het Portugees opent deuren en glimlachen.'],
      ['Bestel de "ementa do dia"', 'Het dagmenu is vers, lokaal en het beste wat de keuken te bieden heeft.'],
    ],
  },
  {
    heading: '🚗 Met de auto',
    emoji: '🚗',
    cards: [
      ['De N125 is gratis én mooi', 'De provinciale weg voert door elk dorp — de mooiste route.'],
      ['De A22 is nu tolvrij', 'De snelweg kost niets meer; handig als je snel afstand wilt maken.'],
      ['Foto\'s bij het ophalen', 'Fotografeer de huurauto rondom om discussies bij inleveren te voorkomen.'],
    ],
  },
  {
    heading: '🏖️ Stranden',
    emoji: '🏖️',
    cards: [
      ['Mijd de grote parkeerplaatsen', 'Stranden met enorme parkings zijn meestal het drukst.'],
      ['De oostkust is rustiger', 'Richting Tavira en Cacela Velha vind je ruimte en rust.'],
      ['Kom vroeg of laat', 'Vóór 9 uur of ná 17 uur heb je het strand vrijwel voor jezelf.'],
    ],
  },
  {
    heading: '👶 Met kinderen',
    emoji: '👶',
    cards: [
      ['Meia Praia: veilig water', 'Breed strand bij Lagos met rustig, ondiep water.'],
      ['Ria Formosa per pontje', 'Een boottochtje naar de eilanden is een avontuur voor kinderen.'],
      ['Campings zijn kindvriendelijk', 'Veel ruimte, speeltuinen en andere gezinnen.'],
      ['Portugezen zijn dol op kinderen', 'Kinderen zijn overal welkom, ook in restaurants.'],
    ],
  },
];

export default function Tips() {
  return (
    <main className="pt-16">
      <PageHeader
        image={heroImg}
        eyebrow="Tips & tricks"
        title="Slimme tips voor je Algarve-reis"
        intro={
          <p>
            Alle kleine dingen die samen een groot verschil maken — van het beste
            reismoment tot geld besparen, lokaal leven en tips met kinderen.
            Verzameld tijdens onze eigen reizen door de Algarve.
          </p>
        }
      />

      {themes.map((theme, i) => (
        <Section key={theme.heading} muted={i % 2 === 1} title={theme.heading}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {theme.cards.map(([title, text]) => (
              <InfoCard key={title} title={title}>
                <p>{text}</p>
              </InfoCard>
            ))}
          </div>
        </Section>
      ))}
    </main>
  );
}
