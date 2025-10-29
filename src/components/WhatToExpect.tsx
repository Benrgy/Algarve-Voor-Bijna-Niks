import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Euro, Search, Heart, Info, MessageCircle } from 'lucide-react';
import { Button } from './ui/enhanced-button';

const WhatToExpect: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8" />,
      title: "60+ Bestemmingen in Detail",
      description: "Uitgebreide informatie over alle belangrijke plaatsen in de Algarve, van bekende steden tot verborgen pareltjes.",
      benefits: ["Lokale tips en geheimen", "Praktische reisinformatie", "Foto's en beschrijvingen"]
    },
    {
      id: 2,
      icon: <Euro className="w-8 h-8" />,
      title: "Affiliate Deals & Vergelijkingen",
      description: "Vergelijk prijzen van toonaangevende boekingsplatforms. We verdienen commissie als je boekt via onze links.",
      benefits: ["Transparante prijsvergelijking", "Links naar Booking.com, Expedia", "Geen verborgen kosten"]
    },
    {
      id: 3,
      icon: <Search className="w-8 h-8" />,
      title: "Lokale Kennis & Insider Tips",
      description: "Algemene tips en lokale inzichten die je helpen om de Algarve authentiek te ervaren.",
      benefits: ["Beste reistijden", "Lokale restaurants en cafés", "Verborgen stranden en routes"]
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: "Nederlandse Content & Support",
      description: "Alle informatie in het Nederlands, speciaal voor Nederlandse reizigers naar de Algarve.",
      benefits: ["Nederlandse gidsen", "Budget tips", "Praktisch reisadvies"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-semibold px-4 py-2">
            🌱 Nieuwe Site - Bouw Mee!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Wat Kun Je <span className="text-primary">Verwachten</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We zijn transparant over wat we bieden: lokale kennis, affiliate deals en uitgebreide 
            bestemmingsinformatie om je Algarve reis te plannen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <Card key={feature.id} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 pl-20">
                  {feature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparency Box */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-background rounded-full px-4 py-2 shadow-sm mb-4">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Eerlijkheid Voorop</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Dit is een Nieuwe Site
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We bouwen deze community op met eerlijke informatie en transparante affiliate partnerships. 
              Geen valse beloften of nep-reviews - alleen echte lokale kennis en nuttige vergelijkingen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-background rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">✅</div>
              <p className="text-sm font-semibold text-foreground mb-1">Affiliate Transparantie</p>
              <p className="text-xs text-muted-foreground">We verdienen commissie aan boekingen</p>
            </div>
            <div className="bg-white dark:bg-background rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">🏖️</div>
              <p className="text-sm font-semibold text-foreground mb-1">Echte Informatie</p>
              <p className="text-xs text-muted-foreground">Lokale tips en praktisch advies</p>
            </div>
            <div className="bg-white dark:bg-background rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">🌱</div>
              <p className="text-sm font-semibold text-foreground mb-1">Groeiende Community</p>
              <p className="text-xs text-muted-foreground">Help ons groeien met je feedback</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Deel Je Algarve Ervaring
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Heb je tips of verhalen? We horen graag van echte reizigers!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
