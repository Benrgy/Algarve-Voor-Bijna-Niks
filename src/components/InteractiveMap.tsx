import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Badge } from './ui/badge';
import { MapPin, Navigation, Star, Camera } from 'lucide-react';

interface AlgarveRegion {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  priceRange: string;
  bestFor: string;
  position: { x: number; y: number };
  color: string;
}

const InteractiveMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<AlgarveRegion | null>(null);

  const regions: AlgarveRegion[] = [
    {
      id: 'lagos',
      name: 'Lagos & West',
      description: 'Dramatische kliffen, gouden stranden en historische charme',
      highlights: ['Ponta da Piedade', 'Praia Dona Ana', 'Historisch centrum'],
      priceRange: '€45-85/nacht',
      bestFor: 'Natuurliefhebbers & geschiedenis',
      position: { x: 15, y: 45 },
      color: 'bg-blue-500'
    },
    {
      id: 'portimao',
      name: 'Portimão & Alvor',
      description: 'Levendige strandresorts en uitstekende restaurants',
      highlights: ['Praia da Rocha', 'Marina', 'Sardine festivals'],
      priceRange: '€55-95/nacht',
      bestFor: 'Strandvakantie & nachtleven',
      position: { x: 30, y: 50 },
      color: 'bg-orange-500'
    },
    {
      id: 'albufeira',
      name: 'Albufeira',
      description: 'Het toeristische hart met de beste stranden',
      highlights: ['Oude stad', 'Strip nightlife', 'Zoomarine'],
      priceRange: '€40-120/nacht',
      bestFor: 'Gezinnen & jongeren',
      position: { x: 45, y: 55 },
      color: 'bg-yellow-500'
    },
    {
      id: 'vilamoura',
      name: 'Vilamoura & Quarteira',
      description: 'Luxe marina en premium golfbanen',
      highlights: ['Marina', 'Golf courses', 'Casino'],
      priceRange: '€70-150/nacht',
      bestFor: 'Luxe & golf',
      position: { x: 60, y: 50 },
      color: 'bg-green-500'
    },
    {
      id: 'faro',
      name: 'Faro & Olhão',
      description: 'Authentiek Portugal en natuurparken',
      highlights: ['Ria Formosa', 'Historisch Faro', 'Lokale markten'],
      priceRange: '€35-70/nacht',
      bestFor: 'Cultuur & natuur',
      position: { x: 75, y: 45 },
      color: 'bg-purple-500'
    },
    {
      id: 'tavira',
      name: 'Tavira & Oost',
      description: 'Rustige traditionele dorpjes en ongerepte stranden',
      highlights: ['Ilha de Tavira', 'Romeinse brug', 'Zoutpannen'],
      priceRange: '€30-65/nacht',
      bestFor: 'Rust & authenticiteit',
      position: { x: 85, y: 40 },
      color: 'bg-teal-500'
    }
  ];

  const handleRegionClick = (region: AlgarveRegion) => {
    setSelectedRegion(region);
  };

  const searchDeals = (region: AlgarveRegion) => {
    const searchQuery = `${region.name} algarve hotels deals`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Interactive Map */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Interactieve Algarve Kaart
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Klik op een regio om deals en informatie te bekijken
          </p>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-blue-100 to-yellow-100 rounded-lg p-4 h-64 overflow-hidden">
            {/* Simplified Algarve coastline SVG background */}
            <svg 
              viewBox="0 0 100 70" 
              className="absolute inset-0 w-full h-full opacity-20"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5"
            >
              <path d="M5,35 Q25,30 45,35 Q65,40 85,35 Q95,30 100,35 L100,60 Q85,55 65,60 Q45,65 25,60 Q15,55 5,60 Z" fill="rgba(59,130,246,0.1)" />
            </svg>
            
            {/* Clickable Region Points */}
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleRegionClick(region)}
                className={`absolute w-4 h-4 rounded-full ${region.color} hover:scale-150 transition-all duration-200 border-2 border-white shadow-lg animate-pulse-glow cursor-pointer`}
                style={{
                  left: `${region.position.x}%`,
                  top: `${region.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                title={region.name}
              >
                <span className="sr-only">{region.name}</span>
              </button>
            ))}
            
            {/* Region Labels */}
            {regions.map((region) => (
              <div
                key={`${region.id}-label`}
                className="absolute text-xs font-medium text-foreground pointer-events-none"
                style={{
                  left: `${region.position.x}%`,
                  top: `${region.position.y + 8}%`,
                  transform: 'translate(-50%, 0)'
                }}
              >
                {region.name.split(' ')[0]}
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={`legend-${region.id}`}
                onClick={() => handleRegionClick(region)}
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border hover:bg-muted transition-colors ${
                  selectedRegion?.id === region.id ? 'bg-muted' : ''
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${region.color}`}></div>
                {region.name}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Region Details */}
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            {selectedRegion ? selectedRegion.name : 'Selecteer een regio'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedRegion ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">{selectedRegion.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Hoogtepunten
                </h4>
                <ul className="space-y-1">
                  {selectedRegion.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Camera className="w-3 h-3" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm">Prijsklasse</h5>
                  <Badge variant="outline" className="mt-1">
                    {selectedRegion.priceRange}
                  </Badge>
                </div>
                <div>
                  <h5 className="font-medium text-sm">Ideaal voor</h5>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedRegion.bestFor}
                  </p>
                </div>
              </div>
              
              <Button 
                onClick={() => searchDeals(selectedRegion)}
                className="w-full"
                variant="default"
              >
                Bekijk {selectedRegion.name} Deals
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Klik op een regio op de kaart om deals en informatie te bekijken
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveMap;