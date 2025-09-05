import React from 'react';
import { Button } from './ui/enhanced-button';
import { Card, CardContent } from './ui/card';
import familyBeach from '@/assets/algarve-family-beach.jpg';
import sunsetBeach from '@/assets/algarve-sunset-beach.jpg';
import luxuryResort from '@/assets/algarve-luxury-resort.jpg';
import boutiqueHotel from '@/assets/algarve-boutique-hotel.jpg';
import beachResort from '@/assets/algarve-beach-resort.jpg';
import faroAirport from '@/assets/algarve-faro-airport.jpg';
import coastalRoad from '@/assets/algarve-coastal-road.jpg';
import villaPool from '@/assets/algarve-villa-pool.jpg';
import localMarket from '@/assets/algarve-local-market.jpg';

interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  searchUrl: string;
  priceRange: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "Goedkope gezinsvakantie Algarve vanaf €199",
    description: "Perfecte familiestranden met veilige zwemomstandigheden en uitstekende voorzieningen voor kinderen.",
    image: familyBeach,
    alt: "Gezinsstrand Algarve goedkope vakantie kinderen spelen gouden zand",
    searchUrl: "https://www.google.com/search?q=goedkope+gezinsvakantie+algarve+kinderen",
    priceRange: "vanaf €199"
  },
  {
    id: 2,
    title: "Algarve last minute zonvakanties tot 70% korting",
    description: "Exclusieve last-minute deals voor spontane zonnehongerige reizigers naar de Algarve.",
    image: sunsetBeach,
    alt: "Algarve zonsondergang strand last minute vakantie deals Portugal",
    searchUrl: "https://www.google.com/search?q=algarve+last+minute+zonvakanties+deals",
    priceRange: "tot 70% korting"
  },
  {
    id: 3,
    title: "All inclusive Algarve aanbiedingen luxe resorts",
    description: "Geniet zorgeloos van alles inbegrepen vakanties in premium resorts aan de Portugese kust.",
    image: luxuryResort,
    alt: "All inclusive luxury resort Algarve zwembad palm trees Portugal",
    searchUrl: "https://www.google.com/search?q=all+inclusive+algarve+aanbiedingen+resorts",
    priceRange: "all inclusive"
  },
  {
    id: 4,
    title: "Beste goedkope hotels Algarve authentiek verblijf",
    description: "Charmante boutique hotels met Portugese flair voor de bewuste reiziger met budget.",
    image: boutiqueHotel,
    alt: "Goedkoop boutique hotel Algarve traditioneel Portugal azulejo tegels",
    searchUrl: "https://www.google.com/search?q=beste+goedkope+hotels+algarve+portugal",
    priceRange: "budget hotels"
  },
  {
    id: 5,
    title: "Algarve strandresorts deals direct aan zee",
    description: "Wakker worden met het geluid van golven in deze fantastische strandresorts.",
    image: beachResort,
    alt: "Algarve beach resort zee strand terras Portugal vakantie deals",
    searchUrl: "https://www.google.com/search?q=algarve+strandresorts+deals+zee",
    priceRange: "stranddeals"
  },
  {
    id: 6,
    title: "Voordelige vliegtickets Faro Algarve rechtstreeks",
    description: "Bespaar honderden euro's met onze exclusieve vliegdeals naar Faro Airport.",
    image: faroAirport,
    alt: "Faro Airport vliegtickets goedkoop Algarve Portugal rechtstreekse vluchten",
    searchUrl: "https://www.google.com/search?q=voordelige+vliegtickets+faro+algarve",
    priceRange: "vanaf €89"
  },
  {
    id: 7,
    title: "Algarve autoverhuur lage prijs roadtrip avontuur",
    description: "Ontdek de verborgen pareltjes van de Algarve met je eigen huurauto tegen scherpe tarieven.",
    image: coastalRoad,
    alt: "Algarve coastal road autoverhuur goedkoop roadtrip Portugal kustweg",
    searchUrl: "https://www.google.com/search?q=algarve+autoverhuur+lage+prijs+roadtrip",
    priceRange: "vanaf €15/dag"
  },
  {
    id: 8,
    title: "Algarve vakantiehuis zwembad goedkoop privé villa",
    description: "Luxe vakantiehuizen met privézwembad voor onvergetelijke gezinsvakanties.",
    image: villaPool,
    alt: "Algarve vacation villa private pool goedkoop vakantiehuis zwembad Portugal",
    searchUrl: "https://www.google.com/search?q=algarve+vakantiehuis+zwembad+goedkoop",
    priceRange: "vanaf €49/nacht"
  },
  {
    id: 9,
    title: "Budget vakantie tips Algarve lokale geheimen",
    description: "Insider tips voor een authentieke en budgetvriendelijke Algarve ervaring zoals locals.",
    image: localMarket,
    alt: "Algarve local market budget tips traditional Portuguese culture Portugal",
    searchUrl: "https://www.google.com/search?q=budget+vakantie+tips+algarve+lokaal",
    priceRange: "budgettips"
  }
];

const AlgarveDestinationGrid: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            9 Manieren om de Algarve voor Bijna Niks te Ontdekken
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van gezinsstranden tot luxe resorts - vind jouw perfecte Algarve vakantie tegen onverslaanbare prijzen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.priceRange}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-foreground leading-tight">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>
                <Button 
                  asChild
                  variant="hero" 
                  className="w-full"
                >
                  <a 
                    href={destination.searchUrl} 
                    target="_blank" 
                    rel="noopener noreferrer sponsored"
                    aria-label={`Zoek ${destination.title} deals`}
                  >
                    Bekijk Aanbiedingen
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgarveDestinationGrid;