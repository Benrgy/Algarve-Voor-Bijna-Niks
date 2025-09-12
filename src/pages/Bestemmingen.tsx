import React from 'react';
import AlgarveDestinationGrid from '@/components/AlgarveDestinationGrid';
import InteractiveMap from '@/components/InteractiveMap';
import AlgarveGallery from '@/components/AlgarveGallery';
import { Card, CardContent } from '@/components/ui/card';
import SectionNav from '@/components/SectionNav';

const Bestemmingen = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Algarve Bestemmingen",
    "description": "Ontdek de mooiste bestemmingen van de Algarve in Portugal met onze uitgebreide gids."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-primary via-secondary to-accent py-16 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Algarve Bestemmingen
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              🏖️ Ontdek de verborgen parels van Portugal's mooiste kuststreek
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🌊</div>
                  <h3 className="font-bold mb-2">150+ Stranden</h3>
                  <p className="text-sm text-white/80">Van verborgen baaien tot levendige resorts</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🏛️</div>
                  <h3 className="font-bold mb-2">Rijke Geschiedenis</h3>
                  <p className="text-sm text-white/80">Duizenden jaren cultuur en tradities</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">🍽️</div>
                  <h3 className="font-bold mb-2">Lokale Keuken</h3>
                  <p className="text-sm text-white/80">Verse zeevruchten en authentieke smaken</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        <SectionNav items={[
          { href: '#kaart', label: 'Kaart' },
          { href: '#galerij', label: 'Galerij' },
          { href: '#bestemmingen', label: 'Bestemmingen' },
          { href: '#regios', label: "Regio's" },
        ]} />

        {/* Interactive Map */}
        <section id="kaart" className="py-12 px-4 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Interactieve Algarve Kaart
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Klik op een regio om specifieke informatie en insider tips te ontdekken
              </p>
            </div>
            <InteractiveMap />
          </div>
        </section>

        {/* Visual Gallery */}
        <section id="galerij" className="py-12 scroll-mt-24">
          <AlgarveGallery />
        </section>

        {/* Destination Grid */}
        <section id="bestemmingen" className="py-12 px-4 bg-muted/20 scroll-mt-24">
          <AlgarveDestinationGrid />
        </section>

        {/* Regional Information */}
        <section id="regios" className="py-12 px-4 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Regio's van de Algarve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* West Algarve */}
              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">🌊 West Algarve</h3>
                  <p className="text-muted-foreground mb-4">
                    Dramatische kliffen, surfersstrandjes en authentieke vissersdorpjes zoals Sagres en Lagos.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Ponta da Piedade</li>
                    <li>• Praia da Dona Ana</li>
                    <li>• Cabo de São Vicente</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Central Algarve */}
              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-secondary">🏖️ Centraal Algarve</h3>
                  <p className="text-muted-foreground mb-4">
                    Gouden zandstranden, levendige resorts en het bruisende nachtleven van Albufeira.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Praia da Falésia</li>
                    <li>• Vilamoura Marina</li>
                    <li>• Benagil Cave</li>
                  </ul>
                </CardContent>
              </Card>

              {/* East Algarve */}
              <Card className="border-0 shadow-soft hover:shadow-warm transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-accent">🏛️ Oost Algarve</h3>
                  <p className="text-muted-foreground mb-4">
                    Rustige lagunen, traditionele markten en de culturele hoofdstad Faro.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Ria Formosa</li>
                    <li>• Tavira Island</li>
                    <li>• Castro Marim</li>
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

export default Bestemmingen;