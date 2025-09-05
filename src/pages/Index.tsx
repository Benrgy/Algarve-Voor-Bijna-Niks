import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import AlgarveDestinationGrid from '@/components/AlgarveDestinationGrid';
import AlgarveFAQ from '@/components/AlgarveFAQ';
import { Card, CardContent } from '@/components/ui/card';

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
        <header className="relative bg-hero-gradient py-16 md:py-24 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ Al 10.000+ tevreden vakantiegangers gingen jou voor!
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Algarve voor <span className="text-yellow-300">Bijna Niks</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ontdek het geheim van goedkopere reizen naar Portugal's zonnigste kust. 
              Boek nu jouw Algarve-droomvakantie voor een fractie van de prijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <a href="#destinations" className="scroll-smooth">
                  Bekijk Beste Deals Nu 🌊
                </a>
              </Button>
              <p className="text-white/80 text-sm">
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

        {/* Main Content */}
        <main>
          <div id="destinations">
            <AlgarveDestinationGrid />
          </div>
          <AlgarveFAQ />
        </main>

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
