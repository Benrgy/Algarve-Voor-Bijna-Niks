import SEO from '@/components/site/SEO';
import PageHeader from '@/components/site/PageHeader';
import { Section, InfoCard, Callout, PriceRow } from '@/components/site/Section';
import heroImg from '@/assets/algarve-coastal-road.jpg';

const trainPrices = [
  { label: 'Faro → Lagos', price: '€5,25' },
  { label: 'Faro → Portimão', price: '€4,10' },
  { label: 'Faro → Tavira', price: '€2,60' },
  { label: 'Lissabon → Faro', price: '€20–25' },
];

const travelerTypes = [
  {
    emoji: '🧍',
    title: 'Solo',
    text: 'Trein en bus zijn ideaal. Goedkoop, sociaal en geen zorgen over parkeren. Huur alleen een auto voor de N125-dagtrip.',
  },
  {
    emoji: '💑',
    title: 'Koppel',
    text: 'Een huurauto voor een paar dagen loont snel. Deel de kosten (±€110 p.p. voor 10 dagen) en ontdek verborgen stranden.',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Gezin',
    text: 'Auto huren is de goedkoopste én makkelijkste optie. Kies een appartement met keuken en rijd op eigen tempo.',
  },
  {
    emoji: '🎒',
    title: 'Backpacker',
    text: 'Bus (Vamus) en trein brengen je overal. Combineer met hostels en je reist de hele Algarve voor bijna niks.',
  },
];

export default function Vervoer() {
  return (
    <main className="pt-16">
      <SEO
        title="Vervoer in de Algarve – Auto, bus, trein of fiets | Algarve voor Bijna Niks"
        description="Hoe kom je van A naar B in de Algarve? Alles over huurauto's, openbaar vervoer, Uber en fietsen. Eerlijke prijzen en praktische tips."
        url="/vervoer"
      />
      <PageHeader
        image={heroImg}
        eyebrow="Vervoer"
        title="Zo kom je overal in de Algarve"
        intro={
          <p>
            Je hebt geen dure taxi's of georganiseerde tours nodig. De Algarve is
            perfect te doen met een goedkope huurauto, de trein langs de kust of
            de lokale bus. Hieronder alles wat je moet weten — inclusief de echte
            prijzen.
          </p>
        }
      />

      <Section
        title="Auto huren"
        intro="Voor de N125-route en verborgen dorpjes is een auto onverslaanbaar. Met deze tips betaal je nooit te veel."
      >
        <div className="space-y-4">
          <Callout title="Vergelijk vooraf">
            <p>
              Boek via een vergelijker zoals <strong>Discovercars</strong> en
              reserveer weken van tevoren. Buiten het seizoen betaal je vaak
              €15–25 per dag; wij reden 10 dagen voor €220 totaal.
            </p>
          </Callout>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoCard emoji="🛣️" title="N125 vs. A22">
              <p>
                De <strong>N125</strong> is gratis, schilderachtig en voert door
                elk dorp. De <strong>A22</strong> (snelweg) is inmiddels óók
                tolvrij en snel als je afstand moet overbruggen.
              </p>
            </InfoCard>
            <InfoCard emoji="🛡️" title="Neem de volledige verzekering">
              <p>
                Een all-risk (full insurance) kost een paar euro per dag extra,
                maar voorkomt torenhoge borgstellingen en gedoe bij een krasje.
                Altijd doen.
              </p>
            </InfoCard>
          </div>
          <Callout title="Maak foto's bij ophalen" tone="warning">
            <p>
              Fotografeer de auto rondom vóór je wegrijdt — inclusief bestaande
              krassen en de brandstofmeter. Zo voorkom je discussies bij het
              inleveren.
            </p>
          </Callout>
        </div>
      </Section>

      <Section title="Trein" muted intro="De kustlijn per trein is spotgoedkoop én prachtig. De lijn Lagos–Faro is een belevenis op zich.">
        <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
          {trainPrices.map((t) => (
            <PriceRow key={t.label} label={t.label} price={t.price} />
          ))}
        </div>
        <p className="mt-4 text-muted-foreground">
          Kaartjes koop je gewoon aan het loket of de automaat op het station.
          Reserveren hoeft niet voor de regionale treinen langs de kust.
        </p>
      </Section>

      <Section title="Bus (Vamus)" intro="Het busnetwerk Vamus verbindt alle grote plaatsen. Perfect als je geen auto wilt.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard emoji="🚌" title="Vliegveldbus: €2,25">
            <p>
              De bus vanaf Faro Airport naar het centrum kost{' '}
              <strong>€2,25</strong> — een taxi vraagt €20–30 voor exact hetzelfde
              stukje. De keuze is snel gemaakt.
            </p>
          </InfoCard>
          <InfoCard emoji="🚍" title="Flixbus vanuit Nederland">
            <p>
              Wil je zonder vliegen? <strong>Flixbus</strong> rijdt vanuit
              Nederland en België richting Portugal en Sevilla — de goedkoopste
              (maar langste) manier om te komen.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Uber & Bolt" muted intro="Voor korte ritjes binnen een stad — bijvoorbeeld 's avonds naar een restaurant — zijn Uber en Bolt handig en goedkoop.">
        <Callout tone="secondary">
          <p>
            Reken op <strong>€8–12</strong> vanaf Faro Airport naar het centrum
            met Bolt of Uber. Prima als je 's avonds laat aankomt en de bus niet
            meer rijdt. Voor langere afstanden blijft de auto of trein voordeliger.
          </p>
        </Callout>
      </Section>

      <Section title="Welk vervoer past bij jou?" intro="Kort advies per type reiziger.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {travelerTypes.map((t) => (
            <InfoCard key={t.title} emoji={t.emoji} title={t.title}>
              <p>{t.text}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
