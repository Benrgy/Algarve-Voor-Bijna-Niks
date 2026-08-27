import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Link } from 'react-router-dom';
import { Plane, Tent, Bus, MapPin, BookOpen } from 'lucide-react';
import algarveHeroBeach from '@/assets/algarve-hero-beach.jpg';
import TrustSignals from '@/components/TrustSignals';
import BookingWidget from '@/components/BookingWidget';
import WeatherWidget from '@/components/WeatherWidget';
import FeaturedDestinationsPreview from '@/components/FeaturedDestinationsPreview';
import AffiliateServices from '@/components/AffiliateServices';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsSection from '@/components/BenefitsSection';
import PhotoShowcase from '@/components/PhotoShowcase';
import CTASection from '@/components/CTASection';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://algarve-voor-bijna-niks.netlify.app/#organization",
        "name": "Algarve voor Bijna Niks",
        "description": "Onafhankelijke reisgids voor betaalbare en authentieke Algarve vakanties",
        "url": "https://algarve-voor-bijna-niks.netlify.app"
      },
      {
        "@type": "FAQPage",
        "@id": "https://algarve-voor-bijna-niks.netlify.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wat zijn de goedkoopste maanden voor een Algarve vakantie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De goedkoopste maanden voor de Algarve zijn oktober tot maart, met uitzondering van de kerstvakantie. In deze periode zijn accommodaties en vluchten aanzienlijk voordeliger dan in de zomer."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <header
          className="relative py-16 md:py-24 px-4 text-center overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center"
          style={{
            backgroundImage: `url(${algarveHeroBeach})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10"></div>

          <div className="relative z-20 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="block mb-2">Algarve voor</span>
              <span className="text-transparent bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text drop-shadow-2xl text-5xl md:text-8xl">
                Bijna Niks
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Reis de Algarve zoals de locals doen. Geen massa-toerisme, geen all-inclusive. Wél échte ervaringen voor een fractie van de prijs.
            </p>

            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-white/95 mb-2 leading-relaxed">
                <strong>€40 per dag per persoon.</strong> Inclusief slaapplaats, eten en activiteiten. Wij laten je zien hoe.
              </p>
              <p className="text-sm text-white/80">
                Gebaseerd op onze eigen ervaring: tien dagen, een gehuurde auto en veel lokale tips.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/vliegen">
                <Button variant="cta" size="xl" className="backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <span className="mr-2">✈️</span>
                  Goedkoop Vliegen
                </Button>
              </Link>
              <Link to="/logeren">
                <Button variant="secondary" size="xl" className="backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <span className="mr-2">🏕️</span>
                  Goedkoop Logeren
                </Button>
              </Link>
              <Link to="/vervoer">
                <Button variant="hero" size="xl" className="backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  <span className="mr-2">🚌</span>
                  Vervoer in de Algarve
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Waarom deze gids anders is
            </h2>
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-6 md:pl-8 text-left">
              “Wij hebben de hele Algarve gereden — van het eerste dorpje in het oosten tot Lagos in het westen — over de N125, de provinciale weg die langs álle kleine plaatjes loopt. Tien dagen, een gehuurde auto voor €220. Geen reserveringen bij toeristenbureaus, geen all-inclusive hotel. Alleen de echte Algarve. Die kennis delen wij hier gratis.”
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              Geen commerciële reisorganisatie, geen dure pakketreizen. Gewoon eerlijke informatie van mensen die de Algarve zelf hebben verkend.
            </p>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Direct geld besparen — 5 tips
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deze vijf dingen doen wij zelf. Ze maken het verschil tussen een dure vakantie en een betaalbaar avontuur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 hover:shadow-soft transition-all duration-300">
                <div className="text-4xl mb-4">🚌</div>
                <h3 className="text-xl font-bold mb-2">Bus van Faro Airport: €2,25</h3>
                <p className="text-muted-foreground text-sm">
                  De taxi kost €25. De bus rijdt hetzelfde traject voor een fractie.
                </p>
              </div>

              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 hover:shadow-soft transition-all duration-300">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold mb-2">Prato do dia: €8-10</h3>
                <p className="text-muted-foreground text-sm">
                  Het dagmenu in een lokaal restaurant. Inclusief drank. Dit is hoe locals lunchen.
                </p>
              </div>

              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 hover:shadow-soft transition-all duration-300">
                <div className="text-4xl mb-4">🏕️</div>
                <h3 className="text-xl font-bold mb-2">Camping in Olhão: €20/nacht</h3>
                <p className="text-muted-foreground text-sm">
                  Eén van de mooiste campings van de Algarve, vlak bij de haven.
                </p>
              </div>

              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 hover:shadow-soft transition-all duration-300">
                <div className="text-4xl mb-4">🚂</div>
                <h3 className="text-xl font-bold mb-2">Trein Faro → Lagos: €5,25</h3>
                <p className="text-muted-foreground text-sm">
                  De mooiste treinroute van de Algarve. Goedkoper dan je denkt.
                </p>
              </div>

              <div className="bg-muted/40 rounded-2xl p-6 border border-border/50 hover:shadow-soft transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold mb-2">Quinta buiten het seizoen: €45/nacht</h3>
                <p className="text-muted-foreground text-sm">
                  Een authentiek Portugees landhuis met pool, voor minder dan een budget hotel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Weather Widgets */}
        <div className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Je Reis Planning</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vergelijk prijzen van boekingsplatforms en check het weer in de Algarve
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BookingWidget destination="Algarve" />
              <WeatherWidget />
            </div>
          </div>
        </div>

        {/* Featured Destinations with Real Photos */}
        <FeaturedDestinationsPreview />

        {/* Photo Showcase */}
        <PhotoShowcase />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Affiliate Services */}
        <AffiliateServices />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Final CTA */}
        <CTASection
          title="Begin Je Algarve Avontuur Vandaag"
          description="Ontdek onze bestemmingen, reistips en praktische gidsen — volledig gratis en zonder verplichtingen."
          primaryButtonText="Bekijk Bestemmingen"
          secondaryButtonText="Lees Reisgidsen"
          variant="accent"
        />

        {/* Trust Signals & AI Assistant */}
        <TrustSignals />
      </div>
      <AIAssistant />
    </>
  );
};

export default Index;
