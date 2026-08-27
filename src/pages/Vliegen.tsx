import PageHeader from '@/components/site/PageHeader';
import { Section, InfoCard, Callout } from '@/components/site/Section';
import heroImg from '@/assets/algarve-faro-airport.jpg';

const airlines = [
  ['Transavia', 'Vaste waarde vanaf Amsterdam, Rotterdam en Eindhoven.'],
  ['Ryanair', 'Vaak de laagste prijzen — let op de bagagekosten.'],
  ['easyJet', 'Betrouwbaar netwerk vanuit meerdere Europese steden.'],
  ['TUI fly', 'Ook los te boeken vanaf Nederland en België.'],
];

const priceGuide = [
  ['Laagseizoen (nov–mrt)', '€40–90 retour'],
  ['Tussenseizoen (apr–jun, sep–okt)', '€80–150 retour'],
  ['Hoogseizoen (jul–aug)', '€180–350 retour'],
];

export default function Vliegen() {
  return (
    <main className="pt-16">
      <PageHeader
        image={heroImg}
        eyebrow="Vliegen"
        title="Goedkoop naar de Algarve vliegen"
        intro={
          <p>
            De Algarve heeft een eigen vliegveld: Faro. Met de juiste timing en
            een paar slimme trucs vlieg je er voor verrassend weinig heen — en
            soms is een omweg via Lissabon of Sevilla nóg goedkoper.
          </p>
        }
      />

      <Section title="Timing is alles" intro="Wanneer je boekt bepaalt grotendeels wat je betaalt.">
        <Callout title="Boek 8–12 weken van tevoren" tone="secondary">
          <p>
            Dat is de sweet spot: vroeg genoeg voor lage prijzen, laat genoeg om
            geen last-minute-risico te lopen. Vermijd schoolvakanties als je
            flexibel bent.
          </p>
        </Callout>
      </Section>

      <Section muted title="Welke maatschappijen vliegen op Faro?">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {airlines.map(([name, desc]) => (
            <InfoCard key={name} emoji="✈️" title={name}>
              <p>{desc}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Slim vergelijken" intro="Één instelling maakt het verschil.">
        <Callout title="Zoek op Skyscanner.nl met 'hele maand'" tone="primary">
          <p>
            Zet je zoekopdracht op <strong>"hele maand"</strong> in plaats van een
            vaste datum. Je ziet dan meteen de goedkoopste dagen om te vliegen —
            vaak scheelt dat tientallen euro's.
          </p>
        </Callout>
      </Section>

      <Section muted title="Het slimme alternatief" intro="Faro is niet altijd het goedkoopst. Twee omwegen die de moeite waard zijn.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard emoji="🚂" title="Vlieg naar Lissabon">
            <p>
              Vanaf Lissabon rijd je met de trein in ±2,5 uur naar de Algarve voor{' '}
              <strong>€20–25</strong>. Vaak goedkopere vluchten én een leuke
              extra stad.
            </p>
          </InfoCard>
          <InfoCard emoji="🚌" title="Vlieg naar Sevilla">
            <p>
              Vanuit Sevilla (Spanje) brengt de Flixbus je in ±3,5 uur naar de
              Algarve voor <strong>€15–25</strong>. Ideaal bij een goedkope
              Sevilla-deal.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Vanaf Faro Airport" intro="Laat je bij aankomst niet uitknijpen.">
        <Callout title="Neem de bus, geen taxi" tone="warning">
          <p>
            De bus naar het centrum kost <strong>€2,25</strong>. Een taxi vraagt{' '}
            <strong>€20–30</strong> voor exact dezelfde rit. Bolt of Uber zit
            ertussenin op <strong>€8–12</strong> — handig als je 's avonds laat
            aankomt.
          </p>
        </Callout>
      </Section>

      <Section muted title="Prijsindicatie per seizoen">
        <div className="bg-card rounded-2xl border border-border p-2 sm:p-4 shadow-soft">
          {priceGuide.map(([season, price]) => (
            <div
              key={season}
              className="flex items-center justify-between gap-4 p-3 border-b border-border last:border-0"
            >
              <span className="text-foreground">{season}</span>
              <span className="font-bold text-primary whitespace-nowrap">
                {price}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          Prijzen zijn indicaties voor een retour vanuit Nederland/België en
          variëren per boekmoment.
        </p>
      </Section>
    </main>
  );
}
