import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight, MapPin, Camera, Star } from 'lucide-react';

// Import images
import algarveHeroBeach from '@/assets/algarve-hero-beach.jpg';
import algarveBeachResort from '@/assets/algarve-beach-resort.jpg';
import algarveBoutiqueHotel from '@/assets/algarve-boutique-hotel.jpg';
import algarveCoastalRoad from '@/assets/algarve-coastal-road.jpg';
import algarveFamilyBeach from '@/assets/algarve-family-beach.jpg';
import algarveLuxuryResort from '@/assets/algarve-luxury-resort.jpg';
import algarveSunsetBeach from '@/assets/algarve-sunset-beach.jpg';
import algarveVillaPool from '@/assets/algarve-villa-pool.jpg';
import algarveLocalMarket from '@/assets/algarve-local-market.jpg';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  description: string;
  priceFrom: number;
  rating: number;
  insider: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Verborgen Paradijs Strand',
    location: 'Praia da Marinha',
    image: algarveHeroBeach,
    category: 'Stranden',
    description: 'Een van Europa\'s mooiste stranden, alleen bekend bij locals',
    priceFrom: 89,
    rating: 4.9,
    insider: true
  },
  {
    id: '2',
    title: 'Authentiek Vissersdorp',
    location: 'Ferragudo',
    image: algarveBeachResort,
    category: 'Cultuur',
    description: 'Ontdek het echte Portugal in dit ongerepte vissersdorpje',
    priceFrom: 125,
    rating: 4.8,
    insider: true
  },
  {
    id: '3',
    title: 'Luxury Beach Resort',
    location: 'Vale do Lobo',
    image: algarveLuxuryResort,
    category: 'Luxe',
    description: 'Premium resort met exclusieve golf en spa faciliteiten',
    priceFrom: 289,
    rating: 4.7,
    insider: false
  },
  {
    id: '4',
    title: 'Familiestrand Paradise',
    location: 'Praia de Tavira',
    image: algarveFamilyBeach,
    category: 'Familie',
    description: 'Perfect voor gezinnen met kinderen, veilig en schoon',
    priceFrom: 67,
    rating: 4.6,
    insider: false
  },
  {
    id: '5',
    title: 'Kliffen Wandelroute',
    location: 'Ponta da Piedade',
    image: algarveCoastalRoad,
    category: 'Natuur',
    description: 'Spectaculaire wandeling langs dramatische kustlijnen',
    priceFrom: 45,
    rating: 4.9,
    insider: true
  },
  {
    id: '6',
    title: 'Lokale Food Market',
    location: 'Mercado de Olhão',
    image: algarveLocalMarket,
    category: 'Cultuur',
    description: 'Proef verse zeevruchten en lokale delicatessen',
    priceFrom: 25,
    rating: 4.8,
    insider: true
  },
  {
    id: '7',
    title: 'Sunset Villa Retreat',
    location: 'Sagres',
    image: algarveVillaPool,
    category: 'Accommodatie',
    description: 'Privé villa met zwembad en adembenemende zonsondergangen',
    priceFrom: 199,
    rating: 4.9,
    insider: false
  },
  {
    id: '8',
    title: 'Romantic Sunset Spot',
    location: 'Cabo de São Vicente',
    image: algarveSunsetBeach,
    category: 'Romance',
    description: 'De meest romantische plek voor zonsondergang in Europa',
    priceFrom: 35,
    rating: 4.8,
    insider: true
  }
];

const categories = ['Alle', 'Stranden', 'Cultuur', 'Luxe', 'Familie', 'Natuur', 'Accommodatie', 'Romance'];

const AlgarveGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'Alle' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Exclusieve Algarve Galerij
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ontdek Verborgen Parels
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Van geheime insider-locaties tot luxe bestemmingen - ontdek de Algarve zoals locals dat doen. 
            Elke foto vertelt een verhaal van onvergetelijke momenten.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Insider Badge */}
                    {item.insider && (
                      <Badge className="absolute top-3 left-3 bg-accent/90 text-white border-0">
                        🔥 Insider Tip
                      </Badge>
                    )}

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {item.rating}
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center text-sm text-white/90 mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-bold">vanaf €{item.priceFrom}</span>
                        <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{item.category}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {item.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <div className="text-2xl font-bold text-primary">vanaf €{item.priceFrom}</div>
                        <div className="text-sm text-muted-foreground">per persoon</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm">
                          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                          {item.rating} waardering
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="default" className="flex-1">
                        Bekijk Aanbiedingen
                      </Button>
                      <Button variant="outline">
                        Meer Info
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto border-0 shadow-soft bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Persoonlijke Reisadvies Gewenst?</h3>
              <p className="text-muted-foreground mb-6">
                Onze lokale experts helpen je de perfecte Algarve ervaring samen te stellen, 
                afgestemd op jouw budget en voorkeuren.
              </p>
              <Button variant="cta" size="lg" className="hover:scale-105 transition-transform duration-200">
                🎯 Gratis Persoonlijk Advies
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AlgarveGallery;