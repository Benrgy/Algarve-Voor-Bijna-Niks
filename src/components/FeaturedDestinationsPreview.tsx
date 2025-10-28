import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight, Star } from 'lucide-react';
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
  hero_image?: string;
  best_for?: string[];
}

const FeaturedDestinationsPreview = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      const { data } = await supabase
        .from('destinations')
        .select('id, slug, name, region, short_description, rating, hero_image, best_for')
        .eq('published', true)
        .order('visitor_count', { ascending: false })
        .limit(3);

      if (data) setDestinations(data);
      setLoading(false);
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-96" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            🏖️ Populaire Bestemmingen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ontdek de Mooiste Plekken van de Algarve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van verborgen stranden tot authentieke dorpjes - elke bestemming met insider tips en lokale expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                <Card className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="relative h-64">
                    <img
                      src={imgSrc || defaultHero}
                      alt={altText}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {destination.rating && (
                      <Badge className="absolute top-4 right-4 bg-white/95 text-foreground hover:bg-white">
                        <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                        {destination.rating}
                      </Badge>
                    )}

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{destination.region}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {destination.short_description}
                    </p>

                    {destination.best_for && destination.best_for[0] && (
                      <Badge variant="secondary" className="mb-4">
                        {destination.best_for[0]}
                      </Badge>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-semibold text-primary group-hover:gap-2 transition-all flex items-center gap-1">
                        Ontdek meer
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                        Bekijk →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/bestemmingen">
            <Button variant="default" size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <MapPin className="w-4 h-4 mr-2" />
              Bekijk Alle {destinations.length > 0 ? '50+' : ''} Bestemmingen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinationsPreview;
