import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { MapPin, Star, Camera, Users } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Lagos',
    region: 'West Algarve',
    description: 'Spectaculaire kliffen, grottentours en het beroemde Ponta da Piedade',
    highlights: ['Praia Dona Ana', 'Ponta da Piedade', 'Historisch centrum'],
    rating: 4.8,
    visitors: '2.3M/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Avontuur & Natuur'
  },
  {
    id: 2,
    name: 'Albufeira',
    region: 'Centraal Algarve',
    description: 'Levendig nachtleven, gouden stranden en waterparken voor families',
    highlights: ['Praia da Falésia', 'Strip nachtleven', 'Zoomarine'],
    rating: 4.6,
    visitors: '3.1M/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Nachtleven & Families'
  },
  {
    id: 3,
    name: 'Tavira',
    region: 'Oost Algarve',
    description: 'Authentiek vissersdorp met Romeinse brug en ongerepte stranden',
    highlights: ['Tavira Island', 'Romeinse brug', 'Oude stad'],
    rating: 4.7,
    visitors: '890K/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Cultuur & Rust'
  },
  {
    id: 4,
    name: 'Sagres',
    region: 'West Algarve',
    description: 'Het einde van Europa met dramatische kliffen en surfersstrandjes',
    highlights: ['Cabo São Vicente', 'Fortaleza', 'Surfen'],
    rating: 4.5,
    visitors: '650K/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Surfen & Natuur'
  },
  {
    id: 5,
    name: 'Vilamoura',
    region: 'Centraal Algarve',
    description: 'Luxe marina, golfbanen en exclusieve resorts',
    highlights: ['Marina', 'Golfbanen', 'Falesia Beach'],
    rating: 4.4,
    visitors: '1.8M/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Luxe & Golf'
  },
  {
    id: 6,
    name: 'Faro',
    region: 'Oost Algarve',
    description: 'Hoofdstad met luchthaven, Ria Formosa natuurpark en historie',
    highlights: ['Oude stad', 'Ria Formosa', 'Kathedraal'],
    rating: 4.3,
    visitors: '1.2M/jaar',
    image: '/api/placeholder/300/200',
    bestFor: 'Cultuur & Transit'
  }
];

const AlgarveDestinationGrid = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Bestemmingen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Van levendige kustplaatjes tot authentieke dorpjes - ontdek wat elke bestemming uniek maakt
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105">
            <div className="relative">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-bold">{destination.rating}</span>
              </div>

              {/* Best For Badge */}
              <div className="absolute bottom-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                {destination.bestFor}
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold">{destination.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {destination.visitors}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{destination.region}</span>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {destination.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                  <Camera className="w-4 h-4" />
                  Hoogtepunten:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {destination.highlights.map((highlight, index) => (
                    <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Ontdek {destination.name} →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Regional Quick Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-soft text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-primary">🌊 West Algarve</h3>
            <p className="text-2xl font-bold text-muted-foreground mb-1">8</p>
            <p className="text-sm text-muted-foreground">Top Bestemmingen</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-soft text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-secondary">🏖️ Centraal Algarve</h3>
            <p className="text-2xl font-bold text-muted-foreground mb-1">12</p>
            <p className="text-sm text-muted-foreground">Top Bestemmingen</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-soft text-center">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-accent">🏛️ Oost Algarve</h3>
            <p className="text-2xl font-bold text-muted-foreground mb-1">6</p>
            <p className="text-sm text-muted-foreground">Top Bestemmingen</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlgarveDestinationGrid;