import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { resolveDestinationHeroImage } from '@/utils/imageResolver';
import defaultHero from '@/assets/algarve-hero-beach.jpg';

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
  historical_context?: string;
  best_time_to_visit?: string;
}

const AlgarveDestinationGrid = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      const { data } = await supabase
        .from('destinations')
        .select('id, slug, name, region, short_description, rating, visitor_count, hero_image, best_for, highlights, historical_context, best_time_to_visit')
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
        {destinations.map((destination) => {
          const imgSrc = resolveDestinationHeroImage(destination);
          const altText = destination.short_description
            ? `${destination.name} – ${destination.short_description}`
            : `${destination.name} Algarve reisfotografie`;

          return (
            <Link 
              key={destination.id} 
              to={`/bestemmingen/${destination.slug}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="relative h-56">
                  <img
                    src={imgSrc || defaultHero}
                    alt={altText}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
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
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-primary mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{destination.region}</span>
                      </div>
                    </div>
                    {destination.visitor_count && (
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-xs">{destination.visitor_count}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">Populair</Badge>
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {destination.short_description}
                  </p>

                  {destination.historical_context && (
                    <div className="mb-4 p-3 bg-accent/5 rounded-lg border-l-2 border-accent">
                      <p className="text-xs font-semibold text-accent-foreground mb-1">🏛️ Geschiedenis</p>
                      <p className="text-xs text-muted-foreground line-clamp-2 italic">
                        {destination.historical_context}
                      </p>
                    </div>
                  )}

                  {destination.highlights && destination.highlights.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-2">✨ Hoogtepunten</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 4).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {destination.best_time_to_visit && (
                    <div className="mb-4 p-2 bg-secondary/5 rounded">
                      <p className="text-xs">
                        <span className="text-muted-foreground">🗓️ Beste reistijd:</span>
                        <span className="ml-1 font-medium text-secondary-foreground">
                          {destination.best_time_to_visit.split('.')[0]}
                        </span>
                      </p>
                    </div>
                  )}

                  {destination.best_for && destination.best_for.length > 0 && (
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-xs font-semibold text-primary mb-1">🎯 Perfect voor</p>
                      <div className="flex flex-wrap gap-1">
                        {destination.best_for.slice(0, 3).map((item, index) => (
                          <span key={index} className="text-xs text-muted-foreground">
                            {item}{index < Math.min(2, destination.best_for!.length - 1) ? ' • ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <span className="text-sm font-semibold text-primary group-hover:gap-2 transition-all flex items-center gap-1">
                      Lees het volledige verhaal
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      Ontdek →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
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