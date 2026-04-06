import React from 'react';
import AlgarveDestinationGrid from '@/components/AlgarveDestinationGrid';
import InteractiveMap from '@/components/InteractiveMap';
import AlgarveGallery from '@/components/AlgarveGallery';
import { FeaturedExperts } from '@/components/FeaturedExperts';
import { FeaturedInsiderTips } from '@/components/FeaturedInsiderTips';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionNav from '@/components/SectionNav';
import { ArrowRight, Waves, Landmark, UtensilsCrossed } from 'lucide-react';
import PageHero from '@/components/PageHero';
import algarveSunsetBeach from '@/assets/algarve-sunset-beach.jpg';

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
        <PageHero
          image={algarveSunsetBeach}
          imageAlt="Zonsondergang bij de Algarve kust"
          title="Algarve Bestemmingen"
          subtitle="Ontdek de verborgen parels van Portugal's mooiste kuststreek"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4">
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Waves className="w-5 h-5" />
              <span className="text-sm font-medium">150+ Stranden</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Landmark className="w-5 h-5" />
              <span className="text-sm font-medium">Rijke Geschiedenis</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <UtensilsCrossed className="w-5 h-5" />
              <span className="text-sm font-medium">Lokale Keuken</span>
            </div>
          </div>
        </PageHero>

        <SectionNav items={[
          { href: '#kaart', label: 'Kaart' },
          { href: '#experts', label: 'Experts' },
          { href: '#tips', label: 'Insider Tips' },
          { href: '#galerij', label: 'Galerij' },
          { href: '#bestemmingen', label: 'Bestemmingen' },
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

        {/* Featured Experts */}
        <section id="experts" className="scroll-mt-24">
          <FeaturedExperts />
        </section>

        {/* Featured Insider Tips */}
        <section id="tips" className="scroll-mt-24">
          <FeaturedInsiderTips />
        </section>

        {/* Visual Gallery */}
        <section id="galerij" className="py-12 scroll-mt-24">
          <AlgarveGallery />
        </section>

        {/* Destination Grid */}
        <section id="bestemmingen" className="py-16 px-4 bg-muted/20 scroll-mt-24">
          <AlgarveDestinationGrid />
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary via-secondary to-accent border-0 shadow-xl">
              <CardContent className="p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Klaar om de Algarve te Ontdekken?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Krijg gepersonaliseerd advies van onze lokale experts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg">
                    Bekijk alle bestemmingen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Plan je reis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regional Information */}
        <section id="regios" className="py-12 px-4 scroll-mt-24 bg-muted/10">
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