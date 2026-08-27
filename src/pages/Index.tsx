import { Link } from 'react-router-dom';
import { Plane, Tent, Bus, ArrowRight } from 'lucide-react';
import SEO from '@/components/site/SEO';
import algarveHeroBeach from '@/assets/algarve-hero-beach.jpg';
import coastalRoad from '@/assets/destinations/tavira-hero.jpg';
import n125Road from '@/assets/algarve-coastal-road.jpg';
import westCoast from '@/assets/destinations/sagres-hero.jpg';
import inland from '@/assets/destinations/silves-hero.jpg';

const quickTips = [
  {
    emoji: '🚌',
    title: 'Bus van Faro Airport: €2,25',
    text: 'De taxi kost €25. De bus rijdt hetzelfde traject voor een fractie.',
  },
  {
    emoji: '🍽️',
    title: 'Prato do dia: €8–10',
    text: 'Het dagmenu in een lokaal restaurant. Inclusief drank. Dit is hoe locals lunchen.',
  },
  {
    emoji: '🏕️',
    title: 'Camping in Olhão: €20/nacht',
    text: 'Eén van de mooiste campings van de Algarve, vlak bij de haven.',
  },
  {
    emoji: '🚂',
    title: 'Trein Faro → Lagos: €5,25',
    text: 'De mooiste treinroute van de Algarve. Goedkoper dan je denkt.',
  },
  {
    emoji: '🏡',
    title: 'Quinta buiten het seizoen: €45/nacht',
    text: 'Een authentiek Portugees landhuis met pool, voor minder dan een budget hotel.',
  },
];

const destinations = [
  {
    image: coastalRoad,
    title: 'De Oost-Algarve',
    text: 'Tavira, Olhão, Manta Rota. Rustig, authentiek, betaalbaar.',
    href: '/bestemmingen',
  },
  {
    image: n125Road,
    title: 'De N125-route',
    text: 'De provinciale weg van oost naar west. Het echte Algarve-verhaal.',
    href: '/n125',
  },
  {
    image: westCoast,
    title: 'De West-Algarve',
    text: 'Sagres, Aljezur, Costa Vicentina. Wilde kust, weinig toeristen.',
    href: '/bestemmingen',
  },
  {
    image: inland,
    title: 'Het binnenland',
    text: 'Loulé, Silves, Alte. Markten, kastelen en lokale geheimen.',
    href: '/bestemmingen',
  },
];

const heroButtons = [
  { href: '/vliegen', icon: Plane, label: 'Goedkoop Vliegen' },
  { href: '/logeren', icon: Tent, label: 'Goedkoop Logeren' },
  { href: '/vervoer', icon: Bus, label: 'Vervoer in de Algarve' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Algarve voor Bijna Niks – Eerlijke reisgids voor budgetreizigers"
        description="Ontdek de echte Algarve zonder massa-toerisme en zonder kapitaal uit te geven. Onze eerlijke gids voor kampeerders, backpackers en slimme reizigers."
        url="/"
      />
      {/* Hero */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={algarveHeroBeach}
          alt="Algarve kust"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/45 to-secondary/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight drop-shadow-lg">
            Algarve voor Bijna Niks
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Reis de Algarve zoals de locals doen. Geen massa-toerisme, geen
            all-inclusive. Wél échte ervaringen voor een fractie van de prijs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {heroButtons.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                to={href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-warm transition-colors"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Value line */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-xl sm:text-2xl font-bold">
            €40 per dag per persoon.
          </p>
          <p className="mt-2 text-secondary-foreground/85 text-base sm:text-lg">
            Inclusief slaapplaats, eten en activiteiten. Wij laten je zien hoe.
          </p>
        </div>
      </section>

      {/* Quick tips */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Vijf tips die je meteen geld besparen
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            De verschillen tussen toeristenprijzen en lokale prijzen zijn enorm.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickTips.map((tip) => (
            <div
              key={tip.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-warm transition-shadow"
            >
              <div className="text-3xl mb-3">{tip.emoji}</div>
              <h3 className="text-lg font-bold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              Waar begin je?
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Vier gezichten van de Algarve — allemaal betaalbaar, allemaal echt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.title}
                to={dest.href}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white">
                      {dest.title}
                    </h3>
                    <p className="mt-1 text-white/90">{dest.text}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-white font-semibold">
                      Ontdek meer
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Wie zit hierachter?
        </span>
        <p className="mt-6 text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
          Geen reisbureau. Geen affiliate-marketeer. Wij zijn gewoon iemand die
          verliefd is op de Algarve. We reden de N125 van begin tot eind. Tien
          dagen, een huurauto voor €220 totaal. Die kennis delen we hier, gratis.
        </p>
        <Link
          to="/n125"
          className="mt-8 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Lees ons N125-reisverhaal
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default Index;
