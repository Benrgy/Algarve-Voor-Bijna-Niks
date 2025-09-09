import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote, ThumbsUp, Globe, Users } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  savings: string;
  avatar: string;
}

const SocialProof: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Local Insights',
      location: 'Tavira Insider',
      rating: 5,
      text: 'Tavira heeft de mooiste kerk van de Algarve - Igreja do Carmo. Ga vroeg in de ochtend voor de beste foto\'s.',
      trip: 'Culturele ontdekking',
      savings: 'Gratis toegang tip',
      avatar: '🏛️'
    },
    {
      id: '2',
      name: 'Beach Expert',
      location: 'Sagres Local',
      rating: 5,
      text: 'Praia do Beliche is het best bewaarde geheim. Fantastisch voor surfen en veel minder druk dan andere stranden.',
      trip: 'Strand geheim',
      savings: 'Parking tip included',
      avatar: '🏄‍♂️'
    },
    {
      id: '3',
      name: 'Food Guide',
      location: 'Olhão Market',
      rating: 5,
      text: 'Voor de beste verse vis ga je naar Mercado de Olhão op zaterdag ochtend. Vraag naar de "catch of the day".',
      trip: 'Kulinarische ontdekking',
      savings: 'Local prices',
      avatar: '🦐'
    },
    {
      id: '4',
      name: 'Nature Lover',
      location: 'Costa Vicentina',
      rating: 5,
      text: 'De wandelroute Rota Vicentina biedt de mooiste kustlijn views. Start in Odeceixe voor de beste ervaring.',
      trip: 'Natuur wandeling',
      savings: 'Gratis natuurbeleving',
      avatar: '🌿'
    }
  ];

  const stats = [
    { label: 'Lokale tips verzameld', value: '100+', icon: ThumbsUp },
    { label: 'Geheime locaties', value: '50+', icon: Star },
    { label: 'Steden verkend', value: '25+', icon: Globe },
    { label: 'Actuele informatie', value: '24/7', icon: Star }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Lokale Kennis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Echte Verhalen uit de Algarve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdekkingen en ervaringen die laten zien hoe locals de Algarve beleven
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{review.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative mb-4">
                      <Quote className="absolute -top-1 -left-1 w-4 h-4 text-primary/30" />
                      <p className="text-sm text-muted-foreground italic pl-4">
                        "{review.text}"
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {review.trip}
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {review.savings}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Affiliate Transparantie</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Lokale Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Actuele Content</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Onafhankelijk Advies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;