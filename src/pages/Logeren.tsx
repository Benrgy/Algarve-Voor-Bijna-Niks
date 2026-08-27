import PageHeader from '@/components/site/PageHeader';
import { Section, InfoCard, Callout } from '@/components/site/Section';
import heroImg from '@/assets/algarve-villa-pool.jpg';

const types = [
  {
    emoji: '🏕️',
    title: 'Camping — €15–25/nacht',
    body: (
      <>
        <p>
          De goedkoopste én vaak mooiste manier om te slapen. Aanraders:{' '}
          <strong>Camping Olhão</strong>, <strong>Turiscampo (Lagos)</strong> en{' '}
          <strong>Parque da Trindade (Lagos)</strong>.
        </p>
        <p className="text-destructive font-medium">
          Let op: wildkamperen is verboden en boetes lopen op tot €500. Gebruik
          de app <strong>Park4Night</strong> voor legale plekken.
        </p>
      </>
    ),
  },
  {
    emoji: '🛏️',
    title: 'Hostels — €18–28/nacht',
    body: (
      <>
        <p>
          Perfect voor solo-reizigers en backpackers. <strong>The White
          Butterfly</strong> in Lagos is een klassieker, en ook in Faro vind je
          goede hostels.
        </p>
        <p>
          Boek via <strong>Hostelworld</strong> voor de meeste keuze en eerlijke
          reviews.
        </p>
      </>
    ),
  },
  {
    emoji: '🏡',
    title: 'Quintas / Turismo Rural — €45–90/nacht',
    body: (
      <>
        <p>
          Een authentiek Portugees landhuis met zwembad en tuin, vaak
          landinwaarts. Buiten het seizoen goedkoper dan een saai budgethotel.
        </p>
        <p>
          Zoek op <strong>Booking.com</strong> → filter op "B&amp;B" of "Country
          House" → sorteer op prijs.
        </p>
      </>
    ),
  },
  {
    emoji: '🏠',
    title: 'Appartement — €50–120/nacht',
    body: (
      <>
        <p>
          Ideaal voor gezinnen: eigen keuken, dus je kookt zelf met
          boodschappen van <strong>Pingo Doce</strong>.
        </p>
        <p>
          Boek in kleinere dorpen in plaats van de kustplaatsen — dat scheelt al
          gauw <strong>30–50%</strong>.
        </p>
      </>
    ),
  },
  {
    emoji: '🤝',
    title: 'Couchsurfing & Workaway — €0',
    body: (
      <>
        <p>
          Gratis slapen bij locals via <strong>Couchsurfing</strong>, of werk een
          paar uur per dag in ruil voor kost en inwoning via{' '}
          <strong>Workaway</strong>.
        </p>
        <p>De beste manier om het échte Portugese leven te leren kennen.</p>
      </>
    ),
  },
];

const comparison = [
  { type: 'Camping', night: '€15–25', week: '€105–175' },
  { type: 'Hostel', night: '€18–28', week: '€126–196' },
  { type: 'Quinta', night: '€45–90', week: '€315–630' },
  { type: 'Appartement', night: '€50–120', week: '€350–840' },
  { type: 'Couchsurfing', night: '€0', week: '€0' },
];

export default function Logeren() {
  return (
    <main className="pt-16">
      <PageHeader
        image={heroImg}
        eyebrow="Logeren"
        title="Slapen in de Algarve voor bijna niks"
        intro={
          <p>
            Je hoeft geen fortuin uit te geven aan een hotel aan de boulevard.
            Van campings vlak bij zee tot authentieke quinta's met zwembad — dit
            zijn de vijf manieren waarop je goedkoop én goed slaapt in de Algarve.
          </p>
        }
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {types.map((t) => (
            <InfoCard key={t.title} emoji={t.emoji} title={t.title}>
              {t.body}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section muted title="Wat kost het echt?" intro="Een eerlijke prijsvergelijking per nacht en per week (buiten het hoogseizoen).">
        <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-soft">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-4 font-bold text-foreground">Type</th>
                <th className="p-4 font-bold text-foreground">Per nacht</th>
                <th className="p-4 font-bold text-foreground">Per week</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.type} className="border-b border-border last:border-0">
                  <td className="p-4 text-foreground font-medium">{row.type}</td>
                  <td className="p-4 text-primary font-bold">{row.night}</td>
                  <td className="p-4 text-muted-foreground">{row.week}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout title="Onze tip" tone="secondary">
          <p>
            Combineer! Een paar nachten camping bij de kust, dan een quinta
            landinwaarts, en sluit af in een hostel in Lagos. Zo houd je je
            gemiddelde ruim onder de €30 per nacht.
          </p>
        </Callout>
      </Section>
    </main>
  );
}
