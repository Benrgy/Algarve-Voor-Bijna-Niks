import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, MapPin, Star } from 'lucide-react';

// Import photos
import algarveSunset from '@/assets/algarve-sunset-beach.jpg';
import algarveVilla from '@/assets/algarve-villa-pool.jpg';
import algarveFamily from '@/assets/algarve-family-beach.jpg';
import algarveMarket from '@/assets/algarve-local-market.jpg';
import algarveCoastal from '@/assets/algarve-coastal-road.jpg';
import algarveLuxury from '@/assets/algarve-luxury-resort.jpg';

interface Photo {
  src: string;
  title: string;
  location: string;
  category: string;
  description: string;
}

const photos: Photo[] = [
  {
    src: algarveSunset,
    title: "Gouden Zonsondergang",
    location: "Praia da Marinha",
    category: "Stranden",
    description: "Adembenemende zonsondergangen aan de kust",
  },
  {
    src: algarveVilla,
    title: "Luxe Villa's",
    location: "Vale do Lobo",
    category: "Accommodatie",
    description: "Premium villa's met privé zwembaden",
  },
  {
    src: algarveFamily,
    title: "Familie Strand",
    location: "Albufeira",
    category: "Activiteiten",
    description: "Perfect voor gezinnen met kinderen",
  },
  {
    src: algarveMarket,
    title: "Lokale Markten",
    location: "Loulé",
    category: "Cultuur",
    description: "Authentieke Portuguese markten",
  },
  {
    src: algarveCoastal,
    title: "Kustroutes",
    location: "Lagos to Sagres",
    category: "Routes",
    description: "Spectaculaire kustpanorama's",
  },
  {
    src: algarveLuxury,
    title: "Luxury Resorts",
    location: "Quinta do Lago",
    category: "Resorts",
    description: "5-sterren luxe accommodaties",
  },
];

export default function PhotoShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Visuele Inspiratie</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ontdek de <span className="text-secondary">Schoonheid</span> van de Algarve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Laat je inspireren door authentieke foto's van de mooiste plekken, van verborgen stranden tot luxe resorts
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.src}
                  alt={`${photo.title} - ${photo.location}`}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  )}
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-white/95 text-foreground hover:bg-white">
                  {photo.category}
                </Badge>

                {/* Rating Badge */}
                <Badge className="absolute top-4 right-4 bg-primary/95 text-primary-foreground flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.8
                </Badge>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{photo.location}</span>
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-2">
                    {photo.title}
                  </h3>
                  
                  <p className={cn(
                    "text-white/80 text-sm transition-all duration-300",
                    hoveredIndex === index 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  )}>
                    {photo.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Wil je meer zien? Ontdek onze complete fotogallerij met duizenden authentieke foto's
          </p>
          <a href="/bestemmingen">
            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl">
              📸 Bekijk Alle Foto's
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
