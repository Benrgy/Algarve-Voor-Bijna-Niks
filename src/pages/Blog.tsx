import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/site/PageHeader';
import {
  artikelen,
  categorieLabels,
  type ArtikelCategorie,
  type Artikel,
} from '@/data/artikelen';
import heroImg from '@/assets/algarve-local-market.jpg';

type Filter = 'alle' | ArtikelCategorie;

const filters: { key: Filter; label: string }[] = [
  { key: 'alle', label: 'Alle' },
  { key: 'bestemmingen', label: 'Bestemmingen' },
  { key: 'praktisch', label: 'Praktisch' },
  { key: 'verhalen', label: 'Verhalen' },
  { key: 'eten', label: 'Eten' },
];

function formatDatum(datum: string) {
  try {
    return format(new Date(datum), 'd MMMM yyyy', { locale: nl });
  } catch {
    return datum;
  }
}

function CategorieBadge({ categorie }: { categorie: ArtikelCategorie }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
      {categorieLabels[categorie]}
    </span>
  );
}

function ArtikelKaart({ artikel }: { artikel: Artikel }) {
  return (
    <Link
      to={`/blog/${artikel.slug}`}
      className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={artikel.afbeelding}
          alt={artikel.titel}
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <CategorieBadge categorie={artikel.categorie} />
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-black text-foreground leading-snug group-hover:text-primary transition-colors">
          {artikel.titel}
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
          {artikel.intro.length > 120
            ? artikel.intro.slice(0, 117).trimEnd() + '…'
            : artikel.intro}
        </p>
        <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {artikel.leestijd}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-primary">
            Lees meer
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [actief, setActief] = useState<Filter>('alle');

  const uitgelicht = useMemo(
    () => artikelen.find((a) => a.uitgelicht) ?? artikelen[0],
    []
  );

  const zichtbaar = useMemo(() => {
    const lijst =
      actief === 'alle'
        ? artikelen
        : artikelen.filter((a) => a.categorie === actief);
    return lijst;
  }, [actief]);

  return (
    <main className="pt-16">
      <Helmet>
        <title>Verhalen & Gidsen — Algarve voor Bijna Niks</title>
        <meta
          name="description"
          content="Eerlijke verhalen en praktische gidsen over de Algarve, geschreven door iemand die er echt is geweest. Van wilde stranden tot het perfecte prato do dia."
        />
        <link
          rel="canonical"
          href="https://algarvevoorbijnaniks.lovable.app/blog"
        />
        <meta property="og:title" content="Verhalen & Gidsen — Algarve voor Bijna Niks" />
        <meta
          property="og:description"
          content="Eerlijke verhalen en praktische gidsen over de Algarve, geschreven door iemand die er echt is geweest."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageHeader
        image={heroImg}
        eyebrow="Blog"
        title="Verhalen & Gidsen"
        intro={
          <p>
            Alles wat je weten wilt over de Algarve, geschreven door iemand die
            er echt is geweest. Geen persreisjes, geen gesponsorde onzin — wel
            wilde stranden, gouden uren en de beste lunch voor €7.
          </p>
        }
      />

      {/* Uitgelicht artikel */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 bg-border" />
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Uitgelicht
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Link
          to={`/blog/${uitgelicht.slug}`}
          className="group grid md:grid-cols-2 gap-0 bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all"
        >
          <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
            <img
              src={uitgelicht.afbeelding}
              alt={uitgelicht.titel}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <CategorieBadge categorie={uitgelicht.categorie} />
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-foreground leading-tight group-hover:text-primary transition-colors">
              {uitgelicht.titel}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {uitgelicht.ondertitel}
            </p>
            <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDatum(uitgelicht.datum)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {uitgelicht.leestijd}
              </span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
              Lees het hele artikel
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </section>

      {/* Filter tabs + grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActief(f.key)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-semibold transition-colors',
                actief === f.key
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {zichtbaar.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zichtbaar.map((artikel) => (
              <ArtikelKaart key={artikel.slug} artikel={artikel} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-16">
            Nog geen artikelen in deze categorie. Kom snel terug!
          </p>
        )}
      </section>
    </main>
  );
}
