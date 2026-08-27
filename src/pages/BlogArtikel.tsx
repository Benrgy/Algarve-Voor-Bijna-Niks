import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home, Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import ArtikelInhoud from '@/components/site/ArtikelInhoud';
import {
  getArtikelBySlug,
  getGerelateerdeArtikelen,
  categorieLabels,
} from '@/data/artikelen';

function formatDatum(datum: string) {
  try {
    return format(new Date(datum), 'd MMMM yyyy', { locale: nl });
  } catch {
    return datum;
  }
}

export default function BlogArtikel() {
  const { slug } = useParams<{ slug: string }>();
  const artikel = slug ? getArtikelBySlug(slug) : undefined;

  if (!artikel) {
    return (
      <main className="pt-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <Helmet>
            <title>Artikel niet gevonden — Algarve voor Bijna Niks</title>
            <meta name="robots" content="noindex" />
          </Helmet>
          <h1 className="text-3xl font-black text-foreground">
            Artikel niet gevonden
          </h1>
          <p className="mt-3 text-muted-foreground">
            Dit artikel bestaat niet (meer). Bekijk alle verhalen en gidsen.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Terug naar de blog
          </Link>
        </div>
      </main>
    );
  }

  const gerelateerd = getGerelateerdeArtikelen(artikel);
  const canonical = `https://algarvevoorbijnaniks.lovable.app/blog/${artikel.slug}`;

  return (
    <main className="pt-16">
      <Helmet>
        <title>{`${artikel.titel} — Algarve voor Bijna Niks`}</title>
        <meta name="description" content={artikel.intro} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={artikel.titel} />
        <meta property="og:description" content={artikel.intro} />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={artikel.datum} />
        <meta property="article:section" content={categorieLabels[artikel.categorie]} />
      </Helmet>

      {/* Hero met afbeelding */}
      <header className="relative">
        <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={artikel.afbeelding}
            alt={artikel.titel}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/55 to-secondary/25" />
          <div className="relative z-10 h-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-8 sm:pb-12">
            <span className="inline-block w-fit mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-primary/90 px-3 py-1 rounded-full">
              {categorieLabels[artikel.categorie]}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow">
              {artikel.titel}
            </h1>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-muted/30"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center gap-2 text-sm flex-wrap text-muted-foreground">
            <li>
              <Link
                to="/"
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground font-semibold truncate max-w-[50vw]">
              {artikel.titel}
            </li>
          </ol>
        </div>
      </nav>

      {/* Content + sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-10 lg:gap-14">
          {/* Artikel */}
          <article className="min-w-0">
            <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
              {artikel.ondertitel}
            </p>

            <div className="mt-5 flex items-center gap-5 text-sm text-muted-foreground border-b border-border pb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDatum(artikel.datum)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {artikel.leestijd} leestijd
              </span>
            </div>

            <div className="mt-8">
              <ArtikelInhoud inhoud={artikel.inhoud} />
            </div>

            {/* Tags */}
            {artikel.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-2">
                {artikel.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                Terug naar alle artikelen
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-lg font-black text-foreground mb-4">
              Meer over {categorieLabels[artikel.categorie].toLowerCase()}
            </h2>
            {gerelateerd.length > 0 ? (
              <div className="space-y-4">
                {gerelateerd.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blog/${rel.slug}`}
                    className="group flex gap-4 bg-card rounded-xl border border-border overflow-hidden shadow-soft hover:shadow-warm transition-all"
                  >
                    <div className="relative w-24 flex-shrink-0 overflow-hidden">
                      <img
                        src={rel.afbeelding}
                        alt={rel.titel}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="py-3 pr-3">
                      <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                        {rel.titel}
                      </h3>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {rel.leestijd}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">
                Geen gerelateerde artikelen. Bekijk{' '}
                <Link to="/blog" className="text-primary font-semibold hover:underline">
                  alle verhalen
                </Link>
                .
              </p>
            )}

            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Alle artikelen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
