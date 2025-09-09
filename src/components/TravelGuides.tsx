import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Clock, Users, MapPin, Bookmark, TrendingUp } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Gevorderd';
  location: string;
  savings: number;
  image: string;
  trending: boolean;
}

const guides: Guide[] = [
  {
    id: '1',
    title: '10 Geheime Stranden die Toeristen Missen',
    description: 'Ontdek verborgen parels langs de Algarve kust waar je in alle rust kunt genieten van kristalhelder water en gouden zand.',
    category: 'Natuur & Stranden',
    readTime: 8,
    difficulty: 'Makkelijk',
    location: 'Hele Algarve',
    savings: 150,
    image: '/api/placeholder/400/200',
    trending: true
  },
  {
    id: '2',
    title: 'Lokaal Eten voor €10 per Dag',
    description: 'De beste tascas, mercados en lokale restaurants waar je authentiek Portugees eten kunt proeven zonder toeristische prijzen.',
    category: 'Eten & Drinken',
    readTime: 12,
    difficulty: 'Makkelijk',
    location: 'Alle Steden',
    savings: 200,
    image: '/api/placeholder/400/200',
    trending: true
  },
  {
    id: '3',
    title: 'Transport Hacks: Reis voor de Helft',
    description: 'Insider tips voor goedkoop reizen door de Algarve: van lokale bussen tot autodelen en fietsverhuur deals.',
    category: 'Transport',
    readTime: 6,
    difficulty: 'Gemiddeld',
    location: 'Regionaal',
    savings: 180,
    image: '/api/placeholder/400/200',
    trending: false
  },
  {
    id: '4',
    title: 'Villa Huren: Groepsdeals tot 80% Korting',
    description: 'Strategieën voor het vinden en boeken van luxe villa\'s voor groepen met enorme kortingen buiten het seizoen.',
    category: 'Accommodatie',
    readTime: 15,
    difficulty: 'Gevorderd',
    location: 'Kusstreek',
    savings: 500,
    image: '/api/placeholder/400/200',
    trending: false
  },
  {
    id: '5',
    title: 'Culturele Bezienswaardigheden Gratis',
    description: 'Museum-free days, gratis festivals en verborgen historische locaties die je niets kosten maar alles geven.',
    category: 'Cultuur',
    readTime: 10,
    difficulty: 'Makkelijk',
    location: 'Historische Steden',
    savings: 80,
    image: '/api/placeholder/400/200',
    trending: false
  },
  {
    id: '6',
    title: 'Wijn Proeven als een Local',
    description: 'Bezoek familiewijnhuizen en quintas waar je authentieke Algarve wijnen kunt proeven voor een fractie van de toeristische prijzen.',
    category: 'Eten & Drinken',
    readTime: 9,
    difficulty: 'Gemiddeld',
    location: 'Binnenland',
    savings: 120,
    image: '/api/placeholder/400/200',
    trending: true
  }
];

const categories = ['Alle Gidsen', 'Natuur & Stranden', 'Eten & Drinken', 'Transport', 'Accommodatie', 'Cultuur'];

const TravelGuides = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Alle Gidsen');

  const filteredGuides = selectedCategory === 'Alle Gidsen' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Makkelijk': return 'bg-green-100 text-green-800';
      case 'Gemiddeld': return 'bg-yellow-100 text-yellow-800';
      case 'Gevorderd': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Bookmark className="w-4 h-4 mr-2" />
            Insider Reisgidsen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Lokale Geheimen Onthuld
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Geschreven door locals die de Algarve als hun broekzak kennen. Deze gidsen bevatten tips die je 
            honderden euro's kunnen besparen en ervaringen geven die onbetaalbaar zijn.
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

        {/* Featured Trending Guide */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <h3 className="text-xl font-bold">🔥 Trending Nu</h3>
          </div>
          
          {guides.filter(guide => guide.trending).slice(0, 1).map((guide) => (
            <Card key={guide.id} className="overflow-hidden border-0 shadow-elegant bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1">
                  <div 
                    className="h-48 lg:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${guide.image})` }}
                  ></div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="destructive" className="animate-pulse">
                      🔥 HOT
                    </Badge>
                    <Badge variant="outline">{guide.category}</Badge>
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{guide.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {guide.readTime} min lezen
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {guide.location}
                    </div>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      💰 Bespaar tot €{guide.savings}
                    </div>
                  </div>
                  
                  <Button variant="cta" size="lg" className="hover:scale-105 transition-transform duration-200">
                    📖 Lees Volledige Gids
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.filter(guide => !guide.trending || guides.filter(g => g.trending).indexOf(guide) > 0).map((guide) => (
            <Card key={guide.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${guide.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="outline" className="bg-white/90 text-gray-800 border-0">
                    {guide.category}
                  </Badge>
                  {guide.trending && (
                    <Badge variant="destructive" className="animate-pulse">
                      🔥
                    </Badge>
                  )}
                </div>

                {/* Savings */}
                <div className="absolute top-3 right-3 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold">
                  -€{guide.savings}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getDifficultyColor(guide.difficulty)} variant="outline">
                    {guide.difficulty}
                  </Badge>
                </div>
                
                <h3 className="font-bold text-lg mb-3 line-clamp-2">{guide.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{guide.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {guide.readTime} min
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {guide.location}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Lees Gids →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-soft bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Wekelijkse Insider Tips</h3>
              <p className="text-muted-foreground mb-6">
                Ontvang elke week nieuwe geheime tips, last-minute deals en lokale insider informatie 
                rechtstreeks in je inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="je@email.com" 
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button variant="cta" className="hover:scale-105 transition-transform duration-200">
                  ✨ Meld me Aan
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Geen spam, alleen waardevolle tips. Uitschrijven kan altijd.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;