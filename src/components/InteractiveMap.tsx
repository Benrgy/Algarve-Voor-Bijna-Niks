import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { MapPin, Info, Star } from 'lucide-react';

const regions = {
  west: {
    name: 'West Algarve',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    destinations: ['Lagos', 'Sagres', 'Aljezur', 'Vila do Bispo', 'Carrapateira', 'Burgau'],
    highlights: ['Ponta da Piedade', 'Cabo São Vicente', 'Praia da Cordoama', 'Costa Vicentina', 'Benagil Grotten'],
    description: 'Ruige kliffen, authentieke vissersdorpen en wereldklasse surfstranden waar de Atlantische Oceaan de dramatische westkust geselt',
    bestFor: 'Surfers, natuurliefhebbers, avonturiers',
    activities: ['Surfen', 'Wandelen', 'Kajakken', 'Dolfijnen spotten'],
    localTip: 'Bezoek Sagres bij zonsondergang voor het meest spectaculaire uitzicht van Europa',
    averageCost: '€60-90/dag',
    bestTime: 'April-Juni, September-Oktober'
  },
  central: {
    name: 'Centraal Algarve',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    destinations: ['Albufeira', 'Vilamoura', 'Portimão', 'Silves', 'Carvoeiro', 'Armação de Pêra'],
    highlights: ['Marina Vilamoura', 'Benagil Cave', 'Praia da Falésia', 'Strip Albufeira', 'Zoomarine', 'Slide & Splash'],
    description: 'Gouden stranden, luxe resorts en het bruisende nachtleven - het toeristische hart van de Algarve met eindeloze faciliteiten',
    bestFor: 'Gezinnen, nachtleven, luxe vakantie',
    activities: ['Strandleven', 'Watersport', 'Golfen', 'Nachtleven', 'Boottrips'],
    localTip: 'Ontdek Silves, de oude Moorse hoofdstad, voor een culturele dag weg van de stranden',
    averageCost: '€80-120/dag',
    bestTime: 'Juni-September (hoogseizoen), Mei & Oktober (ideaal)'
  },
  east: {
    name: 'Oost Algarve',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    destinations: ['Faro', 'Tavira', 'Olhão', 'Castro Marim', 'Vila Real', 'Cacela Velha'],
    highlights: ['Ria Formosa Natuurpark', 'Tavira Island', 'Cacela Velha', 'Ilha Deserta', 'Olhão Vismarkt'],
    description: 'Rustige lagunen, traditionele markten en authentieke cultuur - het echte Portugal waar de traditie nog leeft',
    bestFor: 'Cultuurliefhebbers, rust-zoekers, foodies',
    activities: ['Vogels spotten', 'Eilandhoppen', 'Cultuurtoers', 'Lokale markten', 'Fietsen'],
    localTip: 'Neem de ferry naar Ilha Deserta voor een ongerepte strand ervaring zonder toeristen',
    averageCost: '€50-80/dag',
    bestTime: 'Maart-Juni, September-November (perfect weer, weinig mensen)'
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
            <>
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

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Perfect voor</p>
                        <p className="text-sm font-semibold">{regions[selectedRegion].bestFor}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Gemiddelde kosten</p>
                        <p className="text-sm font-semibold">{regions[selectedRegion].averageCost}</p>
                      </div>
                    </div>

                    <div className="bg-white/80 p-3 rounded-lg border-l-4 border-primary">
                      <p className="text-xs font-semibold text-primary mb-1">💡 Lokale Insider Tip</p>
                      <p className="text-sm text-muted-foreground">{regions[selectedRegion].localTip}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6 hover:scale-105 transition-transform">
                    Ontdek {regions[selectedRegion].name} →
                  </Button>
                </CardContent>
              </Card>

              {/* Activities */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">🎯 Populaire Activiteiten</h4>
                  <div className="flex flex-wrap gap-2">
                    {regions[selectedRegion].activities.map((activity, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {activity}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-1">🗓️ Beste reistijd</p>
                    <p className="text-sm font-semibold">{regions[selectedRegion].bestTime}</p>
                  </div>
                </CardContent>
              </Card>
            </>
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