import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar?: string;
  date: string;
  savings?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophie van den Berg",
    location: "Amsterdam",
    rating: 5,
    text: "Dankzij de insider tips hebben we €650 bespaard op onze vakantie! De lokale restaurant aanbevelingen waren fenomenaal. Lagos was precies zoals beschreven - authentiek en betaalbaar.",
    date: "Oktober 2024",
    savings: "€650",
  },
  {
    name: "Mark Janssen",
    location: "Rotterdam",
    rating: 5,
    text: "Als frequente Algarve-bezoeker dacht ik alles te weten, maar deze site toonde me verborgen pareltjes die zelfs de locals niet delen. Tavira's verborgen stranden waren adembenemend!",
    date: "September 2024",
  },
  {
    name: "Lisa de Vries",
    location: "Utrecht",
    rating: 5,
    text: "De reisgidsen zijn zo gedetailleerd! We volgden de budget tips en hadden een luxe ervaring voor een fractie van de prijs. De hidden gems in Albufeira waren het hoogtepunt.",
    date: "Augustus 2024",
    savings: "€420",
  },
  {
    name: "Johan Peters",
    location: "Den Haag",
    rating: 5,
    text: "Perfecte timing tips voor Sagres - we hebben de drukte vermeden en zagen de meest spectaculaire zonsondergangen. De lokale visrestaurants aanbevelingen waren top!",
    date: "Juli 2024",
  },
  {
    name: "Emma Bakker",
    location: "Eindhoven",
    rating: 5,
    text: "De expert adviezen over transport en accommodatie waren goud waard. We hebben een authentieke ervaring gehad zonder toeristenvallen. Zeer aan te raden voor elke Algarve reiziger!",
    date: "Juni 2024",
    savings: "€380",
  },
  {
    name: "Tom Visser",
    location: "Groningen",
    rating: 5,
    text: "De interactieve kaart en fotogalerijen hielpen ons perfect te plannen. De hidden gems sectie leidde ons naar plaatsen waar we de enige toeristen waren. Onvergetelijk!",
    date: "Mei 2024",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-semibold text-primary">Beoordeeld met 4.9/5</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Wat <span className="text-primary">Reizigers</span> Zeggen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ontdek waarom duizenden Nederlanders vertrouwen op onze lokale expertise voor hun Algarve avontuur
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Savings Badge */}
                {testimonial.savings && (
                  <div className="mb-4 inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    💰 Bespaard: {testimonial.savings}
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
            <p className="text-muted-foreground text-sm">Tevreden Reizigers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary mb-2">4.9/5</div>
            <p className="text-muted-foreground text-sm">Gemiddelde Beoordeling</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">€500+</div>
            <p className="text-muted-foreground text-sm">Gemiddelde Besparing</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground text-sm">Lokale Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
}
