import SEO from '@/components/site/SEO';
import PageHeader from '@/components/site/PageHeader';
import { Section, Callout } from '@/components/site/Section';
import {
  Quote,
  Check,
  X,
  Car,
  Wallet,
  Clock,
  Users,
} from 'lucide-react';
import heroImg from '@/assets/algarve-coastal-road.jpg';
import tavira from '@/assets/destinations/tavira-hero.jpg';
import fuseta from '@/assets/destinations/fuseta-hero.jpg';
import loule from '@/assets/destinations/loule-hero.jpg';
import alte from '@/assets/destinations/alte-hero.jpg';
import silves from '@/assets/destinations/silves-hero.jpg';
import lagos from '@/assets/destinations/lagos-hero.jpg';
import sagres from '@/assets/destinations/sagres-hero.jpg';
import odeceixe from '@/assets/algarve-sunset-beach.jpg';
import aljezur from '@/assets/destinations/aljezur-hero.jpg';
import bordeira from '@/assets/destinations/bordeira-hero.jpg';

type Stop = {
  n: number;
  name: string;
  subtitle: string;
  image: string;
  anekdote: string;
  nietMissen: string[];
  overslaan: string;
  praktisch: {
    parkeren: string;
    kosten: string;
    tijdstip: string;
    drukte: string;
  };
};

const stops: Stop[] = [
  {
    n: 1,
    name: 'Tavira',
    subtitle: 'Waar de reis begint',
    image: tavira,
    anekdote:
      'Ik parkeerde bij de markt, liep over de oude Romeinse brug en dook een zijstraatje in. Daar vond ik een tasca waar de menukaart alleen in het Portugees hing — altijd een goed teken. Ik bestelde de bacalhau com batatas, kreeg er ongevraagd een karafje huiswijn bij, en betaalde minder dan tien euro. De ober sprak geen woord Engels en dat maakte het alleen maar beter.',
    nietMissen: [
      'De eilandboten naar Ilha de Tavira (€2,20 retour) — kilometers leeg strand',
      'De zaterdagmarkt langs de rivier, vroeg in de ochtend',
      'De klim naar het kasteel voor het uitzicht over de daken',
    ],
    overslaan:
      'De restaurants direct aan het marktplein zelf. Mooi terras, toeristenprijzen, middelmatig eten. Loop één straat verder.',
    praktisch: {
      parkeren:
        'Gratis langs de N125 ten noorden van de stad — 10 minuten lopen naar het centrum.',
      kosten: 'Stad gratis · eilandboot €2,20 retour · kasteel gratis',
      tijdstip: 'Zaterdagochtend voor de markt, of laat op de middag voor de gouden gloed.',
      drukte:
        'Zomer druk maar nooit benauwd · voor- en najaar heerlijk rustig.',
    },
  },
  {
    n: 2,
    name: 'Fuseta',
    subtitle: 'Bij toeval ontdekt',
    image: fuseta,
    anekdote:
      'Fuseta stond niet op mijn lijst. Ik reed er per ongeluk vanaf toen ik een verkeerde afslag nam. En dat werd de mooiste vergissing van de reis. Vissers zaten op de kade hun netten te repareren, de ria lag er spiegelglad bij, en op het terras hoorde ik uitsluitend Portugees om me heen. Meer locals dan toeristen — precies zoals het hoort.',
    nietMissen: [
      'De veerboot naar de barrière-eilanden (€2)',
      'De zonsondergang over de ria met de vissersbootjes op de voorgrond',
      'Een koffie op de kade terwijl de boten binnenkomen',
    ],
    overslaan:
      'Zoek hier geen bezienswaardigheden of activiteiten — die zijn er niet. En dat is precies het punt van Fuseta.',
    praktisch: {
      parkeren: 'Gratis, vrijwel overal langs de waterkant.',
      kosten: 'Dorp gratis · veerboot €2',
      tijdstip: 'Einde van de middag, richting zonsondergang.',
      drukte:
        'Het hele jaar rustig · zelfs in augustus voelt het als een geheim.',
    },
  },
  {
    n: 3,
    name: 'Loulé',
    subtitle: 'De markt van de streek',
    image: loule,
    anekdote:
      'Ik kwam aan op zaterdag en de markt was een caleidoscoop van kleur en geluid. Bij een kraampje stond een oudere vrouw vijgen uit haar eigen tuin te verkopen — vijftig cent voor een handvol, zoeter dan wat dan ook uit een supermarkt. Ze drukte er nog een paar extra in mijn hand toen ik betaalde. Zo begint een goede dag.',
    nietMissen: [
      'De overdekte markthal — een prachtig art-nouveau gebouw',
      'Verse amandelen en vijgen kopen bij de kramen',
      'De overblijfselen van het Moorse kasteel midden in de stad',
    ],
    overslaan:
      'De souvenirwinkels rondom het marktplein. Dezelfde magneetjes als overal, tegen dubbele prijs.',
    praktisch: {
      parkeren:
        'Betaalde parkeergarage onder het plein, of gratis aan de rand van de stad.',
      kosten: 'Markt gratis toegang · garage ± €1/uur',
      tijdstip: 'Zaterdagochtend — dan is de markt op zijn levendigst.',
      drukte:
        'Zaterdag druk (dat hoort erop) · doordeweeks een rustig provinciestadje.',
    },
  },
  {
    n: 4,
    name: 'Alte',
    subtitle: 'Het bergdorp',
    image: alte,
    anekdote:
      'Ik reed een smal bergweggetje op dat almaar bleef klimmen en dacht heilig dat ik verkeerd zat. Maar toen opende de vallei zich en daar lag Alte: spierwit tegen de groene serra. Een man liep langzaam de weg over met een geit aan een touw, knikte me toe alsof ik er woonde, en verdween achter een muurtje. Ik heb er een uur op een bankje gezeten en niets gedaan. Het was perfect.',
    nietMissen: [
      'De bron Fonte Grande — ideale plek voor een picknick',
      'De uitzichtpunten over de serra',
      'Gewoon: doelloos door de witte straatjes dwalen',
    ],
    overslaan:
      'Verwacht geen grote attractie of museum. Alte is een rustpauze, geen bezienswaardigheid. Kom om even niets te moeten.',
    praktisch: {
      parkeren: 'Gratis op het centrale plein.',
      kosten: 'Volledig gratis',
      tijdstip: 'Midden op de dag, als rustige onderbreking van het rijden.',
      drukte:
        'Vrijwel altijd rustig · een enkele toerbus in het hoogseizoen.',
    },
  },
  {
    n: 5,
    name: 'Silves',
    subtitle: 'Het Moorse kasteel',
    image: silves,
    anekdote:
      'Ik verwachtte er eerlijk gezegd weinig van — nog een kasteel. Maar op een doordeweekse ochtend liep ik door de rode zandstenen poort en was ik zowat de enige bezoeker. Ik stond op de muren, keek uit over de sinaasappelboomgaarden en de rivier, en had het gevoel dat ik de stad even voor mezelf had. Drie euro voor een half uur stilte tussen duizend jaar geschiedenis.',
    nietMissen: [
      'Het kasteel (€3 entree) — meer dan waard, ga vroeg',
      'De kathedraal direct naast het kasteel',
      'Een pastel de nata in het stadje aan de voet van de heuvel',
    ],
    overslaan:
      'De route van Lagos naar Silves zit vol rondrijdende toerbussen. Ga vroeg in de ochtend, dan heb je het kasteel bijna voor jezelf.',
    praktisch: {
      parkeren: 'Betaald parkeerterrein aan de voet van de heuvel, ± €1/uur.',
      kosten: 'Kasteel €3 · stad gratis',
      tijdstip: 'Zo vroeg mogelijk — vóór de bussen arriveren.',
      drukte:
        'Rustig in de ochtend · rond het middaguur vullen de bussen het aan.',
    },
  },
  {
    n: 6,
    name: 'Lagos',
    subtitle: 'Bruisend maar echt',
    image: lagos,
    anekdote:
      'Ik liep door de Rua 25 de Abril waar elke derde deur een bar bleek. In plaats van de drukste koos ik voor de tasca halverwege: drie tafeltjes, een TV waarop voetbal stond te schetteren en een eigenaar die me een biertje bracht zonder te vragen. Twee locals gebaarden naar het scherm, ik gebaarde terug, en zonder een woord te wisselen hoorde ik er even bij.',
    nietMissen: [
      'Ponta da Piedade — absoluut, zelfs als het druk is. Dé kliffen van de Algarve',
      'De stadsmuren bij zonsondergang',
      'De lokale markt op vrijdagochtend',
    ],
    overslaan:
      'Meia Praia voor de strandliefhebber — te vol, te duur. Ga in plaats daarvan naar Praia do Camilo: een smallere trap naar beneden, maar spectaculaire rotsen en veel meer sfeer.',
    praktisch: {
      parkeren:
        'Gratis parkeerplaats net buiten de stadsmuren richting het westen, 10 minuten lopen.',
      kosten: 'Stad gratis · Ponta da Piedade gratis · boottochtje vanaf ± €15',
      tijdstip: 'Ponta da Piedade vroeg of bij zonsondergang, nooit rond het middaguur.',
      drukte:
        'Zomer echt druk · voor- en najaar de perfecte balans tussen leven en rust.',
    },
  },
  {
    n: 7,
    name: 'Sagres',
    subtitle: 'Het einde van de wereld',
    image: sagres,
    anekdote:
      'Het waait altijd in Sagres. Zelfs in augustus trok ik mijn trui aan. De vuurtoren staat op het puntje van Europa en je kijkt letterlijk naar het einde van de bekende wereld. Naast me stond een Duits stel foto\'s van zichzelf te maken terwijl ze tegen de wind in leunden, lachend, met hun haar recht overeind. Ik bleef tot de zon in de oceaan zakte en zei geen woord.',
    nietMissen: [
      'Cabo de São Vicente (3 km van Sagres) — de meest dramatische zonsondergang van Europa',
      'Het fort van Sagres (gratis op zondag)',
      'De worstjes-kraam bij de vuurtoren — legendarisch onder reizigers',
    ],
    overslaan:
      'De stad Sagres zelf heeft weinig charme: vooral surfers en een enkel overpriced restaurant. Kom voor de kaap en het fort, niet voor het dorp.',
    praktisch: {
      parkeren:
        'Gratis bij het fort · betaald bij Cabo de São Vicente (€1,50).',
      kosten: 'Fort € (gratis op zondag) · kaap gratis · parkeren kaap €1,50',
      tijdstip: 'Laat in de middag, blijf voor de zonsondergang bij de kaap.',
      drukte:
        'Zonsondergang trekt publiek, maar de ruimte is enorm · overdag rustig.',
    },
  },
  {
    n: 8,
    name: 'Odeceixe',
    subtitle: 'Waar rivier en oceaan samenkomen',
    image: odeceixe,
    anekdote:
      'Ik reed een smal weggetje af dat nergens naartoe leek te gaan. Dan opeens een riviertje, een bruggetje, een café — en tweehonderd meter verder een strand dat half in de Alentejo ligt. Kinderen spetterden in het rustige zoete water van de rivier, terwijl volwassenen zich in de branding van de oceaan lieten beuken. Twee stranden in één, gescheiden door een zandbank. Ik snapte niet waarom hier niet veel meer mensen waren.',
    nietMissen: [
      'Het strand waar zoet rivierwater en zoute oceaan elkaar raken',
      'Het witte dorpje bovenop de heuvel',
      'De zonsondergang over de wilde Atlantische kust',
    ],
    overslaan:
      'Er zijn hier geen bezienswaardigheden om af te vinken. Kom voor de rust, de natuur en het water — niets meer, niets minder.',
    praktisch: {
      parkeren:
        'Gratis parkeerterrein boven, 10 minuten wandelen naar het strand.',
      kosten: 'Volledig gratis',
      tijdstip: 'Namiddag tot zonsondergang · bij eb is het riviergedeelte op zijn mooist.',
      drukte:
        'Zelfs in de zomer verrassend rustig · buiten het seizoen bijna verlaten.',
    },
  },
  {
    n: 9,
    name: 'Aljezur',
    subtitle: 'De poort naar het wilde westen',
    image: aljezur,
    anekdote:
      'Ik stopte bij een kleine bakkerswinkel voor iets te eten onderweg. De eigenaar vroeg waar ik naartoe ging. Toen ik "Carrapateira" zei, knikte hij goedkeurend, alsof ik zojuist een examen had gehaald. "Boa escolha," zei hij — goede keuze. Hij stopte er een extra broodje bij "voor onderweg". Dat soort kleine dingen maken deze route.',
    nietMissen: [
      'De wekelijkse markt',
      'Praia da Arrifana — dramatische kliffen en een surfersparadijs',
      'De bakkerij in het centrum (vraag naar de aanrader van de dag)',
    ],
    overslaan:
      'Het kasteel van Aljezur is klein en niet bijzonder. Sla het gerust over en bewaar je energie voor de stranden.',
    praktisch: {
      parkeren: 'Gratis in het centrum.',
      kosten: 'Dorp gratis · markt gratis toegang',
      tijdstip: 'Ochtend voor de markt, middag voor Praia da Arrifana.',
      drukte:
        'Rustig dorp · Arrifana trekt surfers maar blijft ruim.',
    },
  },
  {
    n: 10,
    name: 'Carrapateira / Praia da Bordeira',
    subtitle: 'Het mooiste einde',
    image: bordeira,
    anekdote:
      'Dit was het einde van mijn route en meteen de mooiste plek. Ik parkeerde boven op de klif en liep het smalle pad af naar het brede, wilde strand. Misschien dertig mensen op een strand van een kilometer breed. De golven waren enorm, de wind droeg het zilte zand mee, en ik stond daar met de gedachte die ik de hele reis al had: waarom weet bijna niemand van deze plek? Ik bleef tot het donker werd.',
    nietMissen: [
      'De lagune bij eb — perfect en veilig voor kinderen',
      'De houten walkway langs de klif met uitzicht over de baai',
      'De enige bar in Carrapateira: koffie + pastel voor €2,50',
    ],
    overslaan:
      'Ook hier: er valt weinig te "doen". Maar na 300 kilometer weet je inmiddels dat dat het allermooiste is wat de Algarve te bieden heeft.',
    praktisch: {
      parkeren: 'Gratis plateau boven het strand.',
      kosten: 'Volledig gratis',
      tijdstip: 'Kom bij eb voor de lagune, blijf voor de zonsondergang.',
      drukte:
        'Zelfs op piekdagen leeg · dit is een van de rustigste stranden van de kust.',
    },
  },
];

function PraktischBlok({ p }: { p: Stop['praktisch'] }) {
  const items = [
    { icon: Car, label: 'Parkeren', value: p.parkeren },
    { icon: Wallet, label: 'Gratis of betaald', value: p.kosten },
    { icon: Clock, label: 'Beste tijdstip', value: p.tijdstip },
    { icon: Users, label: 'Drukte per seizoen', value: p.drukte },
  ];
  return (
    <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
      <div className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
        Praktische info
      </div>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-3">
            <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Icon className="h-4 w-4 text-secondary" />
            </div>
            <div>
              <dt className="text-sm font-semibold text-foreground">{label}</dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function N125() {
  return (
    <main className="pt-16">
      <SEO
        title="De N125: Mijn persoonlijke road trip door de Algarve | Algarve voor Bijna Niks"
        description="10 dagen lang de N125 van Tavira tot Sagres gereden. Dit is mijn eerlijke verslag: de hoogtepunten, de teleurstellingen en alles wat je echt moet weten."
        url="/n125"
      />
      <PageHeader
        image={heroImg}
        eyebrow="Het reisverhaal"
        title="De N125 — van oost naar west"
        intro={
          <p>
            De N125 is de oude provinciale weg die de hele Algarve doorkruist. Ik
            reed hem van oost naar west, met alle omwegen naar de wilde westkust
            erbij: tien dagen, een huurauto voor €220 totaal. Geen snelweg, geen
            haast — wél elk dorp, elke markt, elk verborgen strand en elke tasca
            waar de kaart alleen in het Portugees hing. Dit is mijn eerlijke
            verslag, stop voor stop: de hoogtepunten én wat je gerust kunt
            overslaan.
          </p>
        }
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { v: '± 300 km', l: 'totale route' },
            { v: '4,5 uur', l: 'pure rijtijd' },
            { v: '7–10 dagen', l: 'aanbevolen' },
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
        <div className="space-y-12">
          {stops.map((stop) => (
            <article
              key={stop.n}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-72 w-full">
                <img
                  src={stop.image}
                  alt={stop.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
                <span className="absolute top-4 left-4 h-11 w-11 rounded-full bg-primary text-primary-foreground text-lg font-black flex items-center justify-center shadow-warm">
                  {stop.n}
                </span>
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
                    {stop.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {stop.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                {/* Anekdote */}
                <div className="relative rounded-xl bg-primary/5 border-l-4 border-primary p-5">
                  <Quote className="absolute -top-3 -left-1 h-6 w-6 text-primary/40" />
                  <p className="text-foreground/90 italic leading-relaxed">
                    {stop.anekdote}
                  </p>
                </div>

                {/* Niet missen / Overslaan */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-foreground mb-3">
                      <Check className="h-5 w-5 text-primary" />
                      Niet missen
                    </h4>
                    <ul className="space-y-2">
                      {stop.nietMissen.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-muted-foreground leading-relaxed"
                        >
                          <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-foreground mb-3">
                      <X className="h-5 w-5 text-secondary" />
                      Gerust overslaan
                    </h4>
                    <p className="flex gap-2 text-muted-foreground leading-relaxed">
                      <X className="h-4 w-4 text-secondary shrink-0 mt-1" />
                      <span>{stop.overslaan}</span>
                    </p>
                  </div>
                </div>

                {/* Praktisch */}
                <PraktischBlok p={stop.praktisch} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Wat ik zou veranderen */}
      <Section muted title="Wat ik terugkijkend zou veranderen">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Ik zou <strong>méér tijd in het oosten</strong> nemen. Tavira, Fuseta
            en Olhão waren rustiger, goedkoper en authentieker dan alles ten
            westen van Albufeira — en ik reed er veel te snel doorheen omdat ik
            "nog zoveel wilde zien". Achteraf: twee extra nachten in het oosten
            en één minder in de drukke midden-Algarve.
          </p>
          <p>
            Ik zou <strong>minder haasten bij Silves</strong>. Ik was er vlak vóór
            de toerbussen en had daardoor het kasteel bijna voor mezelf, maar ik
            joeg mezelf op om op tijd door te rijden. Onnodig. Een rustige koffie
            in het stadje eronder had de ochtend af gemaakt.
          </p>
          <p>
            Ik zou <strong>eerder stoppen voor de lunch</strong>. De beste maaltijden
            waren de dagmenu's (prato do dia) rond 13.00 uur in dorpjes waar ik
            toevallig langsreed. Wie te lang doorrijdt, komt aan als de keuken
            sluit en eindigt bij een toeristenrestaurant aan de kust. Plan je dag
            rond de lunch, niet andersom.
          </p>
          <p>
            En tot slot: ik zou <strong>de westkust niet als "het einde" hebben
            behandeld</strong>. Odeceixe, Carrapateira en Praia da Bordeira waren
            de mooiste plekken van de hele reis. Ze verdienen meer dan de laatste,
            vermoeide dagen. Een volgende keer begin ik daar.
          </p>
        </div>
      </Section>

      {/* De N125 in cijfers */}
      <Section title="De N125 in cijfers">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {[
              ['Totale afstand', 'ca. 300 km (inclusief omwegen naar de westkust)'],
              ['Rijtijd zonder stops', 'ongeveer 4,5 uur'],
              ['Aanbevolen aantal dagen', '7 tot 10 dagen'],
              ['Beste periode', 'mei–juni en september'],
              ['Kosten huurauto', '€220 voor 10 dagen (richtprijs, buiten hoogseizoen)'],
              ['Tolkosten', '€0 — de N125 is volledig tolvrij'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col border-b border-border pb-4 last:border-0 last:pb-0 sm:last:border-0"
              >
                <dt className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  {label}
                </dt>
                <dd className="mt-1 text-lg font-bold text-foreground">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Callout title="Neem de tijd" tone="secondary">
          <p>
            De N125 rijd je op papier in een halve dag, maar dat is niet het punt.
            Trek er <strong>7 tot 10 dagen</strong> voor uit, sla af waar het je
            aantrekt en blijf slapen in de dorpjes die je aanspreken. De weg is
            volledig <strong>tolvrij</strong> — je betaalt alleen voor benzine,
            koffie en de af en toe verse pastel de nata.
          </p>
        </Callout>
      </Section>
    </main>
  );
}
