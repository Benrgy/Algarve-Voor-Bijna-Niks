import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import AlgarveDestinationGrid from '@/components/AlgarveDestinationGrid';
import AlgarveFAQ from '@/components/AlgarveFAQ';
import { Card, CardContent } from '@/components/ui/card';
import algarveHeroBeach from '@/assets/algarve-hero-beach.jpg';
import TrustSignals from '@/components/TrustSignals';
import BookingWidget from '@/components/BookingWidget';
import WeatherWidget from '@/components/WeatherWidget';
import InteractiveMap from '@/components/InteractiveMap';
import SocialProof from '@/components/SocialProof';
import AIAssistant from '@/components/AIAssistant';
import GamificationSystem from '@/components/GamificationSystem';

const Index = () => {
  // Structured Data JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://algarve-voor-bijna-niks.netlify.app/#organization",
        "name": "Algarve voor Bijna Niks",
        "description": "Specialist in goedkope Algarve vakanties voor Nederlandse reizigers",
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
              "text": "De goedkoopste maanden voor de Algarve zijn oktober-maart, met uitzondering van de kerstvakantie. In deze periode vind je hotels tot 70% goedkoper dan in de zomermaanden."
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
          className="relative py-16 md:py-24 px-4 text-center overflow-hidden min-h-screen flex items-center"
          style={{
            backgroundImage: `url(${algarveHeroBeach})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="relative z-20 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
                ⭐ Al 10.000+ tevreden vakantiegangers gingen jou voor!
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Algarve voor <span className="text-accent drop-shadow-lg">Bijna Niks</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              Ontdek het geheim van goedkopere reizen naar Portugal's zonnigste kust. 
              Boek nu jouw Algarve-droomvakantie voor een fractie van de prijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild className="backdrop-blur-sm">
                <a href="#destinations" className="scroll-smooth">
                  Bekijk Beste Deals Nu 🌊
                </a>
              </Button>
              <p className="text-white/90 text-sm drop-shadow-md">
                ⏰ Vandaag boeken = tot 70% korting
              </p>
            </div>
          </div>
        </header>

        {/* Social Proof */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">10.000+</div>
                  <p className="text-muted-foreground">Tevreden reizigers</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">70%</div>
                  <p className="text-muted-foreground">Gemiddelde besparing</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">4.8★</div>
                  <p className="text-muted-foreground">Waardering bezoekers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Features Grid */}
        <div className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Booking Widget */}
            <BookingWidget destination="Algarve" priceFrom={199} discountPercent={45} />
            
            {/* Weather Widget */}
            <WeatherWidget />
            
            {/* Gamification */}
            <GamificationSystem />
          </div>
        </div>

        {/* Interactive Map */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ontdek de Mooiste Plekken van de Algarve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Klik op een regio om specifieke deals en insider tips te ontdekken
              </p>
            </div>
            <InteractiveMap />
          </div>
        </div>

        {/* Social Proof Section */}
        <SocialProof />

        {/* Main Content */}
        <main>
          <div id="destinations">
            <AlgarveDestinationGrid />
          </div>
          <AlgarveFAQ />
        </main>

        {/* Trust Signals & AI Assistant */}
        <TrustSignals />
        <AIAssistant />

        {/* Footer */}
        <footer className="bg-foreground text-background py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Algarve voor Bijna Niks</h3>
                <p className="text-background/80 text-sm">
                  Jouw specialist voor goedkope vakanties naar de prachtige Algarve in Portugal. 
                  Wij helpen Nederlandse reizigers al sinds 2020 om de beste deals te vinden.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Populaire Bestemmingen</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li><a href="#destinations" className="hover:text-primary transition-colors">Lagos</a></li>
                  <li><a href="#destinations" className="hover:text-primary transition-colors">Portimão</a></li>
                  <li><a href="#destinations" className="hover:text-primary transition-colors">Faro</a></li>
                  <li><a href="#destinations" className="hover:text-primary transition-colors">Albufeira</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Reistips</h4>
                <ul className="space-y-2 text-sm text-background/80">
                  <li><a href="#faq" className="hover:text-primary transition-colors">Budget Vakantie Tips</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">Beste Reistijd</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">Vliegticket Deals</a></li>
                  <li><a href="#faq" className="hover:text-primary transition-colors">Last Minute Aanbiedingen</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
              <p className="mb-2">
                <strong>Affiliate Disclaimer:</strong> Wij ontvangen commissie als je een aanbieding boekt via onze links. 
                Dit heeft geen invloed op de prijs die je betaalt.
              </p>
              <p>
                © 2024 Algarve voor Bijna Niks. Alle rechten voorbehouden. | 
                <a href="#" className="hover:text-primary ml-1 transition-colors">Privacybeleid</a> | 
                <a href="#" className="hover:text-primary ml-1 transition-colors">Contact</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
