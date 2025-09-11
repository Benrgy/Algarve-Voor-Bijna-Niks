import React from 'react';
import TravelGuides from '@/components/TravelGuides';
import AlgarveFAQ from '@/components/AlgarveFAQ';
import AlgarveInsights from '@/components/AlgarveInsights';
import ProfessionalTestimonials from '@/components/ProfessionalTestimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';

const Gidsen = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Algarve Reisgidsen",
    "description": "Uitgebreide reisgidsen en insider tips voor de perfecte Algarve vakantie."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-secondary via-primary to-accent py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Algarve Reisgidsen
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              📖 Ontdek insider tips, lokale geheimen en praktische reisinformatie
            </p>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-lg mb-4">
                🎯 <strong>Geschreven door locals:</strong> Authentieke tips van mensen die er wonen
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>✅ Altijd actueel</span>
                <span>✅ Insider informatie</span>
                <span>✅ Praktische tips</span>
              </div>
            </div>
          </div>
        </header>

        {/* Guide Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Reisgids Categorieën
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Strand & Zee</h3>
                  <p className="text-muted-foreground mb-4">
                    De mooiste stranden, watersporten en verborgen baaien
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Eten & Drinken</h3>
                  <p className="text-muted-foreground mb-4">
                    Lokale restaurants, traditionele gerechten en wijnbars
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Cultuur & Historie</h3>
                  <p className="text-muted-foreground mb-4">
                    Musea, kastelen, kerken en archeologische sites
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🥾</div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Natuur & Wandelen</h3>
                  <p className="text-muted-foreground mb-4">
                    Wandelpaden, natuurparken en buitenactiviteiten
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">Shopping & Markten</h3>
                  <p className="text-muted-foreground mb-4">
                    Lokale markten, souvenirwinkels en outlets
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Nachtleven</h3>
                  <p className="text-muted-foreground mb-4">
                    Bars, clubs, live muziek en gezellige terrassen
                  </p>
                  <Button variant="outline" className="w-full">
                    Bekijk Gids
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel Guides Component */}
        <TravelGuides />

        {/* Algarve Insights */}
        <AlgarveInsights />

        {/* Professional Testimonials */}
        <ProfessionalTestimonials />

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-4 bg-muted/20">
          <AlgarveFAQ />
        </section>

        {/* Quick Tips */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Snelle Tips voor je Algarve Trip
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">🚗 Transport Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Huur een auto voor maximale vrijheid</li>
                    <li>• Gebruik Eva Bus voor goedkoop openbaar vervoer</li>
                    <li>• Taxi's zijn duur - gebruik Uber of Bolt</li>
                    <li>• Parkeren in stadscentra kan lastig zijn</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-secondary">💡 Insider Secrets</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lunch tussen 12-14u voor verse vis</li>
                    <li>• Stranden zijn minder druk voor 10u en na 17u</li>
                    <li>• Donderdag is marktdag in de meeste steden</li>
                    <li>• 'Menu do Dia' is vaak de beste deal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">📱 Apps & Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Windy.com voor weer en wind voorspellingen</li>
                    <li>• Zomato voor restaurant reviews</li>
                    <li>• Via Verde voor tolwegen</li>
                    <li>• Citymapper voor navigatie in steden</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">🎒 Inpak Tips</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Zonnebrandcrème is duur in Portugal</li>
                    <li>• Neem waterschoenen mee voor rotskusten</li>
                    <li>• Lichte trui voor koele avonden</li>
                    <li>• Powerbank voor lange stranddagen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gidsen;