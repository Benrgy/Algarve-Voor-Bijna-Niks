import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Badge } from './ui/badge';
import { MapPin, Clock, Users, Utensils, Camera, Heart, Star, TrendingUp } from 'lucide-react';

interface LocalExperience {
  id: number;
  title: string;
  description: string;
  localTip: string;
  savings: string;
  duration: string;
  groupSize: string;
  category: 'food' | 'culture' | 'nature' | 'hidden';
  difficulty: 'Easy' | 'Moderate' | 'Adventurous';
  priceRange: string;
  insiderSecret: string;
  affiliateHint: string;
}

const experiences: LocalExperience[] = [
  {
    id: 1,
    title: "Geheime Strandjes van Locals",
    description: "Ontdek de verborgen paradise stranden waar alleen locals komen - geen toeristenmassa's, pure natuur en kristalhelder water.",
    localTip: "Vraag bij Café Central in Sagres naar 'Praia do Tonel's geheime ingang'",
    savings: "Bespaar €45 vs commerciële strandclubs",
    duration: "Halve dag",
    groupSize: "2-6 personen",
    category: 'hidden',
    difficulty: 'Easy',
    priceRange: "Gratis toegang",
    insiderSecret: "Breng eigen picknick mee van lokale Mercado Municipal",
    affiliateHint: "Book nabijgelegen authentieke pousadas via onze partners"
  },
  {
    id: 2, 
    title: "Portugese Kookles bij Oma Maria",
    description: "Leer authentieke Algarve gerechten maken in het huis van een 78-jarige local. Inclusief marktbezoek en familierecepten.",
    localTip: "Oma Maria spreekt ook Nederlands - ze woonde 5 jaar in Amsterdam!",
    savings: "€120 goedkoper dan toeristische kooklessen",
    duration: "4 uur",
    groupSize: "Max 4 personen", 
    category: 'food',
    difficulty: 'Easy',
    priceRange: "€35 per persoon",
    insiderSecret: "Je krijgt haar geheime cataplana recept mee naar huis",
    affiliateHint: "Combineer met lokale food tour boekingen"
  },
  {
    id: 3,
    title: "Zonsondergang Vissersboot Experience", 
    description: "Vaar mee met lokale vissers, leer netten uitwerpen en geniet van verse vis terwijl de zon ondergaat achter de klippen.",
    localTip: "Kapitein João neemt je mee naar zijn geheime visplekken",
    savings: "€80 vs toeristische sunset cruises",
    duration: "3 uur",
    groupSize: "2-8 personen",
    category: 'nature',
    difficulty: 'Moderate', 
    priceRange: "€42 per persoon",
    insiderSecret: "Soms zie je dolfijnen als je stil bent",
    affiliateHint: "Perfect te combineren met waterfront hotels"
  },
  {
    id: 4,
    title: "Verstopte Fado Bars Crawl",
    description: "Ontdek authentieke fado muziek in kleine lokale bars waar geen tourist komt. Inclusief traditionele petiscos en local wines.",
    localTip: "Begin bij 'Taberna Real Fado' - vraag naar Paulo, hij kent alle musicians",
    savings: "€60 vs commerciële fado shows",
    duration: "Hele avond",
    groupSize: "2-12 personen",
    category: 'culture',
    difficulty: 'Easy',
    priceRange: "€28 per persoon",
    insiderSecret: "Op donderdag is er altijd een spontane jam sessie",
    affiliateHint: "Book centraal gelegen boutique hotels voor korte loopafstand"
  },
  {
    id: 5,
    title: "Local Market & Home Dining",
    description: "Shop samen met locals op de weekly mercado, koop verse ingrediënten en eet mee bij een Portugese familie thuis.",
    localTip: "Ga vroeg (8:00) voor de beste verse vis en groenten",
    savings: "€90 vs restaurant dining",
    duration: "5 uur", 
    groupSize: "2-6 personen",
    category: 'food',
    difficulty: 'Easy',
    priceRange: "€38 per persoon",
    insiderSecret: "Familia Santos maakt de beste pastéis de nata ter wereld",
    affiliateHint: "Ideaal voor gasten in appartementen met keuken"
  },
  {
    id: 6,
    title: "Geheime Hiking Trails & Viewpoints",
    description: "Wandel onbekende paden naar spectaculaire uitzichtpunten die niet in guidebooks staan. Inclusief picknick spot tips.",
    localTip: "Start bij sunrise voor de mooiste foto's en minder warmte",
    savings: "€150 vs commerciële hiking tours",
    duration: "6 uur",
    groupSize: "2-10 personen", 
    category: 'nature',
    difficulty: 'Adventurous',
    priceRange: "Gratis (zelf-guide)",
    insiderSecret: "Trail naar 'Ponta da Piedade' geheime grot via oude visserspath",
    affiliateHint: "Recommend hiking-friendly accommodaties"
  }
];

const categoryIcons = {
  food: Utensils,
  culture: Heart, 
  nature: MapPin,
  hidden: Camera
};

const categoryColors = {
  food: 'bg-orange-500',
  culture: 'bg-purple-500',
  nature: 'bg-green-500', 
  hidden: 'bg-blue-500'
};

const LocalExperiences: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-semibold px-4 py-2">
            💎 Exclusieve Lokale Ervaringen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Leef als een Echte <span className="text-primary">Algarviaan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ontdek geheimen die alleen locals kennen. Bespaar honderden euro's en krijg 
            authentieke ervaringen die je nergens anders vindt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>Lokale tips van echte bewoners</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <span>Authentieke ervaringen</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            💡 Prijzen zijn indicatief en kunnen variëren per seizoen
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => {
            const IconComponent = categoryIcons[experience.category];
            const categoryColor = categoryColors[experience.category];
            
            return (
              <Card key={experience.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${categoryColor} text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs font-medium">
                          {experience.difficulty}
                        </Badge>
                        <p className="text-sm font-bold text-primary mt-1">{experience.priceRange}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {experience.description}
                    </p>
                  </div>
                  
                  {/* Local Tip */}
                  <div className="px-6 pb-4">
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 border-l-4 border-accent">
                      <p className="text-xs font-semibold text-accent mb-1">💡 INSIDER TIP:</p>
                      <p className="text-sm text-foreground font-medium">{experience.localTip}</p>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="px-6 pb-4">
                    <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        <span>{experience.groupSize}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Savings Badge */}
                  <div className="px-6 pb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <p className="text-green-800 font-semibold text-sm">
                        💰 {experience.savings}
                      </p>
                    </div>
                  </div>
                  
                  {/* Secret */}
                  <div className="px-6 pb-6">
                    <div className="bg-muted/50 rounded-lg p-3 border border-dashed border-muted-foreground/30">
                      <p className="text-xs font-semibold text-muted-foreground mb-1">🤫 GEHEIM:</p>
                      <p className="text-xs text-foreground">{experience.insiderSecret}</p>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="px-6 pb-6">
                    <Button variant="hero" className="w-full group-hover:scale-105 transition-all duration-200">
                      Boek Lokale Ervaring
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      {experience.affiliateHint}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Krijg Toegang tot Alle Geheime Local Experiences
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Word lid van onze exclusieve community en ontvang wekelijks nieuwe insider tips, 
              geheime locaties en lokale contacten die je €1000+ kunnen besparen.
            </p>
            <Button variant="cta" size="xl" className="shadow-lg hover:scale-105 transition-all">
              🎯 Ja, Ik Wil Alle Geheimen Ontdekken
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              ✅ 100% Gratis • ✅ Geen spam • ✅ Direct toegang tot Local Network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExperiences;