import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Lightbulb } from 'lucide-react';

interface LocalTip {
  id: string;
  category: string;
  location: string;
  tip: string;
  icon: string;
  type: string;
}

const LocalKnowledge: React.FC = () => {
  const localTips: LocalTip[] = [
    {
      id: '1',
      category: 'Culturele Ontdekking',
      location: 'Tavira',
      tip: 'Tavira heeft de mooiste kerk van de Algarve - Igreja do Carmo. Ga vroeg in de ochtend voor de beste foto\'s.',
      icon: '🏛️',
      type: 'Gratis toegang tip'
    },
    {
      id: '2',
      category: 'Strand Geheim',
      location: 'Sagres',
      tip: 'Praia do Beliche is het best bewaarde geheim. Fantastisch voor surfen en veel minder druk dan andere stranden.',
      icon: '🏄‍♂️',
      type: 'Lokale kennis'
    },
    {
      id: '3',
      category: 'Eten & Drinken',
      location: 'Olhão',
      tip: 'Voor de beste verse vis ga je naar Mercado de Olhão op zaterdag ochtend. Vraag naar de "catch of the day".',
      icon: '🦐',
      type: 'Insider tip'
    },
    {
      id: '4',
      category: 'Natuur',
      location: 'Costa Vicentina',
      tip: 'De wandelroute Rota Vicentina biedt de mooiste kustlijn views. Start in Odeceixe voor de beste ervaring.',
      icon: '🌿',
      type: 'Wandel route'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            Lokale Kennis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tips & Inzichten uit de Algarve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algemene tips en lokale kennis die je helpen de Algarve beter te ontdekken
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {localTips.map((tip) => (
            <Card key={tip.id} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{tip.category}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {tip.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {tip.tip}
                    </p>
                    
                    <Badge variant="outline" className="text-xs">
                      {tip.type}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparency Section */}
        <div className="bg-gradient-to-r from-muted/50 to-background rounded-xl p-8 border border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              🌱 Bouw Mee aan Deze Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Dit is een nieuwe site gewijd aan de prachtige Algarve. We verzamelen lokale kennis, 
              affiliate deals en bestemmings-informatie om je te helpen de beste ervaring te krijgen.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Affiliate Transparantie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Lokale Tips</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>60+ Bestemmingen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>Onafhankelijk Advies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalKnowledge;
