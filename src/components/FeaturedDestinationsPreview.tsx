import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';

import taviraIsland from '@/assets/destinations/tavira-island-hero.jpg';
import coastalRoad from '@/assets/algarve-coastal-road.jpg';
import sagres from '@/assets/destinations/sagres-hero.jpg';
import loule from '@/assets/destinations/loule-hero.jpg';

interface RegionCard {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  link: string;
}

const regions: RegionCard[] = [
  {
    slug: 'oost-algarve',
    name: 'De Oost-Algarve',
    subtitle: 'Tavira, Olhão, Manta Rota. Rustig, authentiek, betaalbaar.',
    image: taviraIsland,
    imageAlt: 'Tavira Island in de Oost-Algarve met rustige stranden en authentieke dorpjes',
    link: '/bestemmingen'
  },
  {
    slug: 'n125-route',
    name: 'De N125-route',
    subtitle: 'De provinciale weg van oost naar west. Het echte Algarve-verhaal.',
    image: coastalRoad,
    imageAlt: 'Kustweg door de Algarve, de N125 provinciale route',
    link: '/vervoer'
  },
  {
    slug: 'west-algarve',
    name: 'De West-Algarve',
    subtitle: 'Sagres, Aljezur, Costa Vicentina. Wilde kust, weinig toeristen.',
    image: sagres,
    imageAlt: 'Sagres aan de westkust van de Algarve met wilde kliffen',
    link: '/bestemmingen'
  },
  {
    slug: 'binnenland',
    name: 'Het binnenland',
    subtitle: 'Loulé, Silves, Alte. Markten, kastelen en lokale geheimen.',
    image: loule,
    imageAlt: 'Loulé in het binnenland van de Algarve met lokale markt en cultuur',
    link: '/bestemmingen'
  }
];

const FeaturedDestinationsPreview = () => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <MapPin className="w-4 h-4 mr-2" />
            Ontdek de Algarve
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ontdek de hele Algarve — niet alleen de toeristische delen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wij nemen je mee langs vier regio's die samen het echte Algarve-verhaal vertellen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {regions.map((region) => (
            <Link
              key={region.slug}
              to={region.link}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="relative h-64">
                  <img
                    src={region.image}
                    alt={region.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {region.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{region.subtitle}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
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
          ))}
        </div>

        <div className="text-center">
          <Link to="/bestemmingen">
            <Button variant="default" size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <MapPin className="w-4 h-4 mr-2" />
              Bekijk Alle Bestemmingen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinationsPreview;
