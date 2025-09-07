import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote, ThumbsUp, Globe } from 'lucide-react';

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
      name: 'Sandra & Mark',
      location: 'Amsterdam',
      rating: 5,
      text: 'Dankzij deze site hebben we €540 bespaard op onze familievakantie! De tips waren goud waard.',
      trip: 'Familie vakantie Lagos',
      savings: '€540 bespaard',
      avatar: '👩‍👨‍👧‍👦'
    },
    {
      id: '2',
      name: 'Lisa M.',
      location: 'Rotterdam',
      rating: 5,
      text: 'Fantastische deals in Vilamoura gevonden. Het hotel was nog mooier dan op de foto\'s!',
      trip: 'Romantisch weekend',
      savings: '€280 bespaard',
      avatar: '💑'
    },
    {
      id: '3',
      name: 'Familie Jansen',
      location: 'Utrecht',
      rating: 5,
      text: 'Al 3 jaar onze Algarve vakanties via deze site. Altijd de beste prijzen en betrouwbaar.',
      trip: 'Last minute Albufeira',
      savings: '€420 bespaard',
      avatar: '👨‍👩‍👧‍👦'
    },
    {
      id: '4',
      name: 'Miguel & Ana',
      location: 'Eindhoven',
      rating: 5,
      text: 'De lokale tips waren fantastisch! We hebben echt authentiek Portugal ervaren.',
      trip: 'Cultuur reis Tavira',
      savings: '€180 bespaard',
      avatar: '🧳'
    }
  ];

  const stats = [
    { label: 'Tevreden reizigers', value: '10.000+', icon: ThumbsUp },
    { label: 'Gemiddelde besparing', value: '€385', icon: Star },
    { label: 'Landen bereikt', value: '15+', icon: Globe },
    { label: 'Reviews score', value: '4.8/5', icon: Star }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Wat Zeggen Onze Reizigers?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meer dan 10.000 Nederlanders gingen je voor en besparen gemiddeld €385 per vakantie
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
              <span>SSL Beveiligd</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>ANVR Aangesloten</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Gratis Annulering</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;