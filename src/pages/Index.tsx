import React from 'react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import algarveHeroBeach from '@/assets/algarve-hero-beach.jpg';
import TrustSignals from '@/components/TrustSignals';
import BookingWidget from '@/components/BookingWidget';
import WeatherWidget from '@/components/WeatherWidget';
import AIAssistant from '@/components/AIAssistant';
import FeaturedDestinationsPreview from '@/components/FeaturedDestinationsPreview';
import AffiliateServices from '@/components/AffiliateServices';
import TestimonialsSection from '@/components/TestimonialsSection';
import BenefitsSection from '@/components/BenefitsSection';
import PhotoShowcase from '@/components/PhotoShowcase';
import CTASection from '@/components/CTASection';


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
        
        {/* Enhanced Hero Section */}
        <header 
          className="relative py-16 md:py-24 px-4 text-center overflow-hidden min-h-screen flex items-center"
          style={{
            backgroundImage: `url(${algarveHeroBeach})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/20"></div>
          
          {/* Floating elements for immersion */}
          <div className="absolute top-20 left-10 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-700"></div>
          
          <div className="relative z-20 max-w-5xl mx-auto">
            <div className="mb-8 space-y-3">
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <span className="inline-block bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 shadow-warm">
                  🏆 #1 Goedkoopste Algarve Deals
                </span>
                <span className="inline-block bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 shadow-warm">
                  🌊 Authentieke Lokale Ervaringen
                </span>
              </div>
            <p className="text-white/90 text-sm font-medium">
              🌱 Nieuwe site met lokale kennis | 💼 Vind deals via affiliate partners | 🏖️ 60+ bestemmingen
            </p>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="block mb-2">Algarve voor</span>
              <span className="text-transparent bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text drop-shadow-2xl text-5xl md:text-8xl">
                Bijna Niks
              </span>
            </h1>
            
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed">
                🇳🇱 <strong>Exclusief voor Nederlanders:</strong> Ontdek geheime insider-deals en lokale tips 
                die je €500+ kunnen besparen op jouw Algarve-avontuur
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/85">
                <span>✅ Geen boekingskosten</span>
                <span>✅ Gratis annulering</span>
                <span>✅ Nederlandse klantenservice</span>
                <span>✅ Lokale insider tips</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/deals">
                <Button variant="cta" size="xl" className="backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  🎯 Ontdek Beste Deals
                </Button>
              </Link>
              <Link to="/bestemmingen">
                <Button variant="secondary" size="xl" className="backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                  🏖️ Bekijk Bestemmingen
                </Button>
              </Link>
            </div>
            <div className="text-center mb-6">
              <p className="text-white/95 text-sm drop-shadow-md font-semibold">
                💡 <span className="text-accent">Insider Tips:</span> Bespaar honderden euro's
              </p>
              <p className="text-white/80 text-xs">Met lokale kennis en slimme planning</p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span>🌟 Lokale Gidsen & Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒 SSL Beveiligd</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞 24/7 Nederlands Support</span>
              </div>
            </div>
          </div>
        </header>

        {/* Social Proof */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Insider locaties verzameld</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-muted-foreground">Lokale tips & gidsen</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-muted-foreground">Actuele informatie</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Booking & Weather Widgets */}
        <div className="py-16 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Begin Je Reis Planning</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vergelijk prijzen van de beste boekingsplatforms en check het weer in de Algarve
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BookingWidget destination="Algarve" priceFrom={199} discountPercent={45} />
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

        {/* Quick Navigation */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ontdek de Algarve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/bestemmingen" className="group">
                <Card className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">🏖️</div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Bestemmingen</h3>
                    <p className="text-muted-foreground mb-4">
                      Ontdek de mooiste stranden, steden en verborgen parels van de Algarve
                    </p>
                    <Button variant="outline" className="w-full">
                      Verken Bestemmingen
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/deals" className="group">
                <Card className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">💰</div>
                    <h3 className="text-2xl font-bold mb-4 text-secondary">Deals & Prijzen</h3>
                    <p className="text-muted-foreground mb-4">
                      Vergelijk prijzen en vind de beste deals voor jouw droomvakantie
                    </p>
                    <Button variant="outline" className="w-full">
                      Bekijk Deals
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/gidsen" className="group">
                <Card className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl mb-4">📖</div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">Reisgidsen</h3>
                    <p className="text-muted-foreground mb-4">
                      Insider tips, lokale geheimen en praktische reisinformatie
                    </p>
                    <Button variant="outline" className="w-full">
                      Lees Gidsen
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Final CTA */}
        <CTASection 
          title="Begin Je Algarve Avontuur Vandaag"
          description="Sluit je aan bij duizenden tevreden reizigers die al honderden euro's bespaard hebben"
          variant="accent"
        />

        {/* Trust Signals & AI Assistant */}
        <TrustSignals />
        <AIAssistant />
      </div>
    </>
  );
};

export default Index;
