import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  short_description?: string;
  rating?: number;
  visitor_count?: string;
  hero_image?: string;
  best_for?: string[];
  highlights?: string[];
}

const AlgarveDestinationGrid = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      const { data } = await supabase
        .from('destinations')
        .select('*')
        .eq('published', true)
        .order('visitor_count', { ascending: false });

      if (data) setDestinations(data);
      setLoading(false);
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-96" />
          ))}
        </div>
      </div>
    );
  }

  const regionStats = {
    'West Algarve': destinations.filter(d => d.region === 'West Algarve').length,
    'Central Algarve': destinations.filter(d => d.region === 'Central Algarve').length,
    'East Algarve': destinations.filter(d => d.region === 'East Algarve').length,
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Ontdek de Algarve</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Bestemmingen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Van levendige kustplaatjes tot authentieke dorpjes - klik op een bestemming voor uitgebreide gidsen, insider tips en expert adviezen
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <Link 
            key={destination.id} 
            to={`/bestemmingen/${destination.slug}`}
            className="group"
          >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
              <div className="relative h-56">
                {destination.hero_image ? (
                  <img
                    src={destination.hero_image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {destination.rating && (
                  <Badge className="absolute top-4 right-4 bg-white/95 text-foreground hover:bg-white">
                    <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                    {destination.rating}
                  </Badge>
                )}

                {destination.best_for && destination.best_for[0] && (
                  <Badge className="absolute bottom-4 left-4 bg-primary/95 text-primary-foreground">
                    {destination.best_for[0]}
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{destination.region}</span>
                    </div>
                  </div>
                  {destination.visitor_count && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-xs">{destination.visitor_count}</span>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                  {destination.short_description}
                </p>

                {destination.highlights && destination.highlights.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <span className="text-sm font-semibold text-primary group-hover:gap-2 transition-all flex items-center gap-1">
                    Lees meer
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Ontdek
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Regional Quick Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="text-4xl mb-3">🌊</div>
            <h3 className="text-xl font-bold mb-2 text-primary">West Algarve</h3>
            <p className="text-3xl font-bold text-foreground mb-1">{regionStats['West Algarve']}</p>
            <p className="text-sm text-muted-foreground">Bestemmingen</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="text-4xl mb-3">🏖️</div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Central Algarve</h3>
            <p className="text-3xl font-bold text-foreground mb-1">{regionStats['Central Algarve']}</p>
            <p className="text-sm text-muted-foreground">Bestemmingen</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
          <CardContent className="p-8">
            <div className="text-4xl mb-3">🏛️</div>
            <h3 className="text-xl font-bold mb-2 text-accent">East Algarve</h3>
            <p className="text-3xl font-bold text-foreground mb-1">{regionStats['East Algarve']}</p>
            <p className="text-sm text-muted-foreground">Bestemmingen</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlgarveDestinationGrid;