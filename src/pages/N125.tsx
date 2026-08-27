import PageHeader from '@/components/site/PageHeader';
import { Section, Callout } from '@/components/site/Section';
import heroImg from '@/assets/algarve-coastal-road.jpg';
import vilaReal from '@/assets/destinations/vila-real-santo-antonio-hero.jpg';
import tavira from '@/assets/destinations/tavira-hero.jpg';
import olhao from '@/assets/destinations/olhao-hero.jpg';
import faro from '@/assets/destinations/faro-hero.jpg';
import loule from '@/assets/destinations/loule-hero.jpg';
import albufeira from '@/assets/destinations/albufeira-hero.jpg';
import carvoeiro from '@/assets/destinations/carvoeiro-hero.jpg';
import silves from '@/assets/destinations/silves-hero.jpg';
import portimao from '@/assets/destinations/portimao-hero.jpg';
import lagos from '@/assets/destinations/lagos-hero.jpg';

const stops = [
  {
    n: 1,
    name: 'Vila Real de Santo António',
    subtitle: 'Het begin',
    image: vilaReal,
    text: 'Aan de grens met Spanje, waar de Guadiana-rivier in zee stroomt, begint de N125. Een rustige grensstad met een strak dambordpatroon van straten. Zet je teller op nul — de rest van de Algarve ligt voor je.',
  },
  {
    n: 2,
    name: 'Tavira',
    subtitle: 'Verborgen parel',
    image: tavira,
    text: 'Misschien wel het mooiste stadje van de hele kust. Slenter over de Romeinse brug, verdwaal in de witte straatjes en neem het pontje naar het eiland (Ilha de Tavira) voor slechts €2,50.',
  },
  {
    n: 3,
    name: 'Olhão',
    subtitle: 'De echte vissersplaats',
    image: olhao,
    text: 'Geen toeristenopsmuk, maar de bruisende markthallen aan de haven waar locals hun vis en groente kopen. De camping hier is een van de mooiste van de Algarve — €20 per nacht, vlak bij het water.',
  },
  {
    n: 4,
    name: 'Faro',
    subtitle: 'Meer dan alleen een vliegveld',
    image: faro,
    text: 'De meeste mensen rijden meteen door, en dat is zonde. De Cidade Velha (oude stad) binnen de stadsmuren is gratis en verrassend sfeervol. Klim de kathedraaltoren op voor uitzicht over de Ria Formosa.',
  },
  {
    n: 5,
    name: 'Loulé',
    subtitle: 'Elke zaterdag markt',
    image: loule,
    text: 'Een klein stukje landinwaarts, maar de moeite waard. De zaterdagmarkt is de beste van de Algarve. Ontbijt hier voor €2 en proef het echte lokale leven, ver van de kustdrukte.',
  },
  {
    n: 6,
    name: 'Albufeira',
    subtitle: 'Hier rijden we snel doorheen',
    image: albufeira,
    text: 'Eerlijk is eerlijk: het centrum van Albufeira is massa-toerisme in optima forma. Engelse pubs, dure boulevards en weinig authentieks. Ons advies? Doorrijden en je geld elders uitgeven.',
  },
  {
    n: 7,
    name: 'Armação de Pêra & Carvoeiro',
    subtitle: 'Kleiner en rustiger',
    image: carvoeiro,
    text: 'Iets verderop wordt het weer aangenaam. Carvoeiro is een charmant klifstadje met een intiem strand, en de kustpaden hier (langs de Algar Seco) zijn spectaculair en gratis.',
  },
  {
    n: 8,
    name: 'Silves',
    subtitle: 'Het Moorse kasteel',
    image: silves,
    text: 'De oude Moorse hoofdstad van de Algarve, landinwaarts aan de rivier. Het rode zandstenen kasteel torent boven het stadje uit — entree slechts €3,50. Een sprong terug in de tijd.',
  },
  {
    n: 9,
    name: 'Portimão & Ferragudo',
    subtitle: 'Het voetveer',
    image: portimao,
    text: 'Neem in Portimão het voetveer naar het pittoreske Ferragudo voor €1. Wandel daarna naar restaurant Fim do Mundo — letterlijk "het einde van de wereld" — voor verse vis met uitzicht.',
  },
  {
    n: 10,
    name: 'Lagos',
    subtitle: 'Het einde',
    image: lagos,
    text: 'Het westelijke eindpunt en een reis-hoogtepunt. De kliffen van Ponta da Piedade zijn adembenemend en gratis te bewandelen. Slaap in The White Butterfly hostel voor €20 per nacht. De N125 zit erop.',
  },
];

export default function N125() {
  return (
    <main className="pt-16">
      <PageHeader
        image={heroImg}
        eyebrow="Het reisverhaal"
        title="De N125 — van oost naar west"
        intro={
          <p>
            De N125 is de oude provinciale weg die de hele Algarve doorkruist,
            van de Spaanse grens tot aan de wilde westkust. Wij reden hem van
            begin tot eind: tien dagen, een huurauto voor €220 totaal. Geen
            snelweg, geen haast — wél elk dorp, elke markt en elk verborgen
            strand. Dit is de route, stop voor stop.
          </p>
        }
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { v: '160 km', l: 'totale route' },
            { v: '±3 uur', l: 'pure rijtijd' },
            { v: '5–10 dagen', l: 'aanbevolen' },
            { v: '€0', l: 'tolvrij' },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-card rounded-2xl border border-border p-4 shadow-soft"
            >
              <div className="text-xl sm:text-2xl font-black text-primary">
                {s.v}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <div className="space-y-10">
          {stops.map((stop) => (
            <article
              key={stop.n}
              className="grid md:grid-cols-2 gap-6 items-center bg-card rounded-2xl border border-border overflow-hidden shadow-soft"
            >
              <div className="relative h-56 md:h-full min-h-[220px]">
                <img
                  src={stop.image}
                  alt={stop.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 h-10 w-10 rounded-full bg-primary text-primary-foreground font-black flex items-center justify-center shadow-warm">
                  {stop.n}
                </span>
              </div>
              <div className="p-6 md:pr-8">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">
                  {stop.subtitle}
                </span>
                <h3 className="text-2xl font-black text-foreground mt-1">
                  {stop.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {stop.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Section muted title="Praktisch">
        <Callout title="Neem de tijd" tone="secondary">
          <p>
            De N125 is maar 160 km en in drie uur te rijden, maar dat is niet het
            punt. Trek er <strong>5 tot 10 dagen</strong> voor uit, sla af waar
            het je aantrekt en blijf slapen in de dorpjes die je aanspreken. De
            weg is volledig <strong>tolvrij</strong> — je betaalt alleen voor
            benzine, koffie en het af en toe verse pastel de nata.
          </p>
        </Callout>
      </Section>
    </main>
  );
}
