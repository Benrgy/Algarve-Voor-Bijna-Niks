import PageHeader from '@/components/site/PageHeader';
import { Section, InfoCard, Callout } from '@/components/site/Section';
import heroImg from '@/assets/algarve-local-market.jpg';

const dishes = [
  {
    emoji: '🥪',
    title: 'Bifana — €2–3',
    text: 'Warm broodje met gekruid varkensvlees. Het ultieme snelle lokale hapje, te koop in elk café.',
  },
  {
    emoji: '🐟',
    title: 'Gegrilde sardines — €8–12',
    text: 'Vers van de grill, vooral in de zomer. Simpel, zilt en heerlijk met brood en salade.',
  },
  {
    emoji: '🥧',
    title: 'Pastel de Nata — €0,80–1,20',
    text: 'Het beroemde custardtaartje. Warm uit de oven bij de pastelaria, met een snufje kaneel.',
  },
  {
    emoji: '🍲',
    title: 'Cataplana — €14–20',
    text: 'Stoofpot van vis en schaaldieren uit een koperen pan. Delen met z\'n tweeën — een feestmaal.',
  },
  {
    emoji: '🥩',
    title: 'Prego — €3–5',
    text: 'Broodje biefstuk met knoflook. Vaak het toetje na de sardines, of een maaltijd op zich.',
  },
  {
    emoji: '🌶️',
    title: 'Kip Piri Piri — €10–14',
    text: 'Gegrilde kip met pittige piri-piri saus. Een klassieker, vaak met friet en salade.',
  },
];

export default function Eten() {
  return (
    <main className="pt-16">
      <PageHeader
        image={heroImg}
        eyebrow="Eten & drinken"
        title="Eten als een local, niet als een toerist"
        intro={
          <p>
            De Algarve heeft fantastisch, betaalbaar eten — als je weet waar je
            moet zijn. Vermijd de dure boulevards en eet waar de Portugezen zelf
            eten. Hier lees je precies hoe, en wat het kost.
          </p>
        }
      />

      <Section title="De gouden regel" intro="Eén simpele vuistregel bespaart je de hele reis geld.">
        <Callout title="Loop weg van de boulevard" tone="warning">
          <p>
            Restaurants met foto-menu's, uitsmijters aan de deur en Engelse
            teksten aan de kust vragen toeristenprijzen voor middelmatig eten.
            Loop twee straten landinwaarts en je vindt een tasca waar de locals
            eten — half zo duur, twee keer zo lekker.
          </p>
        </Callout>
      </Section>

      <Section muted title="Prato do dia — €8–10" intro="Het dagmenu is dé manier om goedkoop en goed te lunchen.">
        <p className="text-muted-foreground leading-relaxed">
          Het <strong>prato do dia</strong> (gerecht van de dag) is wat de kok
          die dag vers heeft gemaakt. Meestal inclusief soep of brood én een
          drankje, voor €8–10. Zo lunchen locals door de week.
        </p>
        <Callout title="Zo vraag je ernaar" tone="secondary">
          <p>
            Vraag simpelweg: <em>"Tem prato do dia?"</em> ("Heeft u een dagmenu?")
            of <em>"A ementa do dia, por favor."</em> Een glimlach en een{' '}
            <em>"obrigado"</em> doen de rest.
          </p>
        </Callout>
      </Section>

      <Section title="Wat je geproefd moet hebben" intro="Zes lokale klassiekers met eerlijke prijzen.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((d) => (
            <InfoCard key={d.title} emoji={d.emoji} title={d.title}>
              <p>{d.text}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section muted title="Zelf koken: de supermarkt" intro="Een keuken in je accommodatie? Dan eet je voor een habbekrats fantastisch.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard emoji="🛒" title="Pingo Doce & Continente">
            <p>
              De twee grote supermarktketens. Haal er de beroemde{' '}
              <strong>rotisserie-kip</strong> voor €3–5 — een complete maaltijd.
            </p>
          </InfoCard>
          <InfoCard emoji="🍷" title="Wijn & bier">
            <p>
              Prima lokale wijn kost <strong>€2–4 per fles</strong>, een biertje{' '}
              <strong>€0,70–1,20</strong>. Kwaliteit voor bijna niks.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Markten" intro="Voor de verste vis, groente en sfeer ga je naar de markt.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InfoCard emoji="🧺" title="Loulé (zaterdag)">
            <p>De beste weekmarkt van de Algarve. Kom vroeg voor het lekkerste.</p>
          </InfoCard>
          <InfoCard emoji="🐠" title="Olhão (dagelijks)">
            <p>De vismarkt aan de haven — hier koopt de hele stad zijn vis.</p>
          </InfoCard>
          <InfoCard emoji="🍅" title="Faro">
            <p>Overdekte markt met verse producten midden in de stad.</p>
          </InfoCard>
          <InfoCard emoji="🥖" title="Lagos">
            <p>Gezellige markt, perfect om een picknick bij elkaar te scharrelen.</p>
          </InfoCard>
        </div>
      </Section>

      <Section muted title="Je dag-eetbudget">
        <Callout tone="primary">
          <p>
            Ontbijt bij de pastelaria (€1,50) + prato do dia als lunch (€9) +
            zelf koken of een bifana 's avonds (€3–8) ={' '}
            <strong>ongeveer €12–18 per persoon per dag</strong>. Eet je één keer
            uit gebreid uit? Reken dan €25–30. Nog altijd bijna niks.
          </p>
        </Callout>
      </Section>
    </main>
  );
}
