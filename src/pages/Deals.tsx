import React from 'react';
import BookingWidget from '@/components/BookingWidget';
import CostCalculator from '@/components/CostCalculator';
import LocalExperiences from '@/components/LocalExperiences';
import WeatherWidget from '@/components/WeatherWidget';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';

const Deals = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Algarve Deals en Prijzen",
    "description": "Vind de beste deals en goedkoopste prijzen voor je Algarve vakantie."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="bg-gradient-to-br from-primary via-accent to-secondary py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Beste Algarve Deals
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              💰 Vergelijk prijzen en bespaar honderden euro's op jouw droomvakantie
            </p>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-lg mb-4">
                🎯 <strong>Gemiddelde besparing:</strong> €312 per vakantie
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>✅ Geen boekingskosten</span>
                <span>✅ Gratis annulering</span>
                <span>✅ Beste prijsgarantie</span>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">€199</div>
                  <p className="text-muted-foreground">Vanaf prijs per week</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">45%</div>
                  <p className="text-muted-foreground">Gemiddelde korting</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">Accommodaties</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Nederlandse support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Tools Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Widget */}
            <div className="lg:col-span-1">
              <BookingWidget destination="Algarve" priceFrom={199} discountPercent={45} />
            </div>
            
            {/* Weather Widget */}
            <div className="lg:col-span-1">
              <WeatherWidget />
            </div>
            
            {/* Quick Tips */}
            <Card className="lg:col-span-1 border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">💡 Bespaar Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">🗓️</span>
                    <span>Boek 2-3 maanden vooruit voor de beste deals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">🌙</span>
                    <span>Reis buiten de zomermaanden voor 50-70% korting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">🏠</span>
                    <span>Kies appartementen voor familie-vakanties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✈️</span>
                    <span>Vlieg op dinsdag of woensdag voor goedkopere tickets</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full mt-4">
                  Meer Bespaartips
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Calculator */}
        <section className="py-16 px-4 bg-muted/20">
          <CostCalculator />
        </section>

        {/* Local Experiences */}
        <LocalExperiences />

        {/* Seasonal Deals */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Seizoen Aanbiedingen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌸</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Lente (Mrt-Mei)</h3>
                  <p className="text-muted-foreground mb-4">
                    Mild weer, weinig drukte, bloeiende amandelbomen
                  </p>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="font-bold text-primary">Vanaf €159/week</p>
                    <p className="text-sm text-muted-foreground">50% korting t.o.v. zomer</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">☀️</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Zomer (Jun-Aug)</h3>
                  <p className="text-muted-foreground mb-4">
                    Topseizoen, perfect strandweer, alle faciliteiten open
                  </p>
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <p className="font-bold text-secondary">Vanaf €399/week</p>
                    <p className="text-sm text-muted-foreground">Vroeg boeken = besparen</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🍂</div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Herfst (Sep-Nov)</h3>
                  <p className="text-muted-foreground mb-4">
                    Nog steeds warm, zee op temperatuur, beste deals
                  </p>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="font-bold text-accent">Vanaf €199/week</p>
                    <p className="text-sm text-muted-foreground">Geheime tip van locals</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Deals;