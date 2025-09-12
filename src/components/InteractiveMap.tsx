import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { MapPin, Info, Star } from 'lucide-react';

const regions = {
  west: {
    name: 'West Algarve',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    destinations: ['Lagos', 'Sagres', 'Aljezur', 'Vila do Bispo'],
    highlights: ['Ponta da Piedade', 'Cabo São Vicente', 'Praia da Cordoama'],
    description: 'Ruige kliffen, authentieke vissersdorpen en wereldklasse surfstranden'
  },
  central: {
    name: 'Centraal Algarve',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    destinations: ['Albufeira', 'Vilamoura', 'Portimão', 'Silves'],
    highlights: ['Marina Vilamoura', 'Benagil Cave', 'Praia da Falésia'],
    description: 'Gouden stranden, luxe resorts en het bruisende nachtleven'
  },
  east: {
    name: 'Oost Algarve',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    destinations: ['Faro', 'Tavira', 'Olhão', 'Castro Marim'],
    highlights: ['Ria Formosa', 'Tavira Island', 'Cacela Velha'],
    description: 'Rustige lagunen, traditionele markten en authentieke cultuur'
  }
};

const InteractiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof regions | null>('central');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Interactive Map Visual */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 aspect-[4/3] relative overflow-hidden">
            
            {/* Simplified Algarve Shape */}
            <div className="relative w-full h-full">
              
              {/* West Region */}
              <button
                onClick={() => setSelectedRegion('west')}
                className={`absolute left-2 top-8 w-24 h-16 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedRegion === 'west' 
                    ? 'bg-primary border-primary text-white shadow-lg' 
                    : 'bg-white border-primary/30 hover:border-primary hover:bg-primary/10'
                }`}
              >
                <div className="text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1" />
                  <div className="text-xs font-bold">West</div>
                </div>
              </button>

              {/* Central Region */}
              <button
                onClick={() => setSelectedRegion('central')}
                className={`absolute left-28 top-12 w-32 h-20 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedRegion === 'central'
                    ? 'bg-secondary border-secondary text-white shadow-lg'
                    : 'bg-white border-secondary/30 hover:border-secondary hover:bg-secondary/10'
                }`}
              >
                <div className="text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1" />
                  <div className="text-xs font-bold">Centraal</div>
                </div>
              </button>

              {/* East Region */}
              <button
                onClick={() => setSelectedRegion('east')}
                className={`absolute right-2 top-16 w-28 h-18 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedRegion === 'east'
                    ? 'bg-accent border-accent text-white shadow-lg'
                    : 'bg-white border-accent/30 hover:border-accent hover:bg-accent/10'
                }`}
              >
                <div className="text-center">
                  <MapPin className="w-4 h-4 mx-auto mb-1" />
                  <div className="text-xs font-bold">Oost</div>
                </div>
              </button>

              {/* Ocean indicators */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="text-blue-600 font-medium text-sm">🌊 Atlantische Oceaan 🌊</div>
              </div>

              {/* Compass */}
              <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2">
                <div className="text-xs font-bold text-center">N<br/>↑</div>
              </div>
            </div>
          </div>

          {/* Map Legend */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span>West Algarve</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-secondary rounded"></div>
              <span>Centraal Algarve</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-4 h-4 bg-accent rounded"></div>
              <span>Oost Algarve</span>
            </div>
          </div>
        </div>

        {/* Region Information Panel */}
        <div className="space-y-4">
          {selectedRegion && (
            <Card className={`border-0 shadow-soft ${regions[selectedRegion].bgColor} transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className={`w-6 h-6 ${regions[selectedRegion].color}`} />
                  <h3 className={`text-2xl font-bold ${regions[selectedRegion].color}`}>
                    {regions[selectedRegion].name}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {regions[selectedRegion].description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Top Bestemmingen:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {regions[selectedRegion].destinations.map((dest, index) => (
                        <span key={index} className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Must-See Hoogtepunten:
                    </h4>
                    <ul className="space-y-1">
                      {regions[selectedRegion].highlights.map((highlight, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6 hover:scale-105 transition-transform">
                  Ontdek {regions[selectedRegion].name} →
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Tips */}
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3">💡 Regio Keuze Tips</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">🌊</span>
                  <span><strong>Eerste keer?</strong> Start in Centraal voor alle faciliteiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">🏄</span> 
                  <span><strong>Avontuur?</strong> West heeft de beste golven en natuur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">🏛️</span>
                  <span><strong>Cultuur?</strong> Oost is het meest authentiek Portugees</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;