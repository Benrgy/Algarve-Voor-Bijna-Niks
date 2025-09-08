import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote, MapPin, Calendar, Users } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  savings: string;
  rating: number;
  tripType: string;
  date: string;
  quote: string;
  details: string;
  verified: boolean;
  photoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sandra & Mark van der Berg",
    location: "Utrecht",
    savings: "€723 bespaard",
    rating: 5,
    tripType: "Gezinsvakantie",
    date: "September 2024",
    quote: "Ongelooflijk hoeveel we hebben bespaard zonder in te leveren op kwaliteit!",
    details: "Dankzij de lokale tips hebben we fantastische plekken ontdekt waar geen andere toeristen waren. Het hotel via jullie link was 60% goedkoper dan op andere sites, en de local food experiences waren het hoogtepunt van onze vakantie.",
    verified: true,
    photoUrl: "SB"
  },
  {
    id: 2, 
    name: "Jennifer Smits",
    location: "Amsterdam",
    savings: "€445 bespaard", 
    rating: 5,
    tripType: "Romantisch weekend",
    date: "Oktober 2024",
    quote: "De geheime strandjes tip heeft onze hele vakantie gemaakt!",
    details: "We hadden een privé strandje helemaal voor onszelf, terwijl andere toeristen in de drukte zaten. De villa booking via jullie site was verrassend luxe voor die prijs. Echt een onvergetelijke vakantie.",
    verified: true,
    photoUrl: "JS"
  },
  {
    id: 3,
    name: "Robert en Marieke Janssen", 
    location: "Eindhoven",
    savings: "€892 bespaard",
    rating: 5,
    tripType: "Groepsreis vrienden",
    date: "Augustus 2024", 
    quote: "Van sceptisch naar volledig overtuigd - dit werkt echt!",
    details: "Als ervaren reizigers waren we eerst sceptisch, maar jullie local network heeft ons echt verrast. De kooklessen bij Oma Maria en de vissersboot ervaring waren authentiek en onbetaalbaar. We boeken voortaan altijd via deze site.",
    verified: true,
    photoUrl: "RJ"
  },
  {
    id: 4,
    name: "Lisa Bakker",
    location: "Rotterdam", 
    savings: "€356 bespaard",
    rating: 5,
    tripType: "Solo travel",
    date: "November 2024",
    quote: "Solo reizen is nog nooit zo betaalbaar en veilig geweest.",
    details: "Als alleenreizende vrouw voelde ik me super veilig dankzij de local contacts. De budget tips hebben mijn vakantie 3 dagen langer gemaakt voor hetzelfde geld. En de hidden fado bars waren magisch!",
    verified: true,
    photoUrl: "LB"
  },
  {
    id: 5,
    name: "Tom & Emma Visser",
    location: "Den Haag",
    savings: "€1.247 bespaard", 
    rating: 5,
    tripType: "Huwelijksreis",
    date: "Juni 2024",
    quote: "Onze droomhuwelijksreis voor de helft van het budget!",
    details: "We dachten dat de Algarve te duur was voor onze honeymoon, maar deze site heeft alles veranderd. Luxe villa met zeezicht, romantische sunset dinners, en ervaringen die je nergens kunt boeken. Perfecte start van ons huwelijk.",
    verified: true,
    photoUrl: "TV"
  },
  {
    id: 6,
    name: "Familie Dekker (4 personen)",
    location: "Groningen",
    savings: "€934 bespaard",
    rating: 5, 
    tripType: "Familievakantie",
    date: "Juli 2024",
    quote: "Eindelijk een website die echt denkt aan gezinnen met een budget!",
    details: "Met 2 tieners verwachtten we een dure vakantie, maar jullie family deals zijn geweldig. De kids hebben nog nooit zo'n leuke vakantie gehad, en wij ook niet. De local activities hielden iedereen tevreden.",
    verified: true,
    photoUrl: "FD"
  }
];

const ProfessionalTestimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-semibold px-4 py-2">
            ⭐ Echte Verhalen van Echte Reizigers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Waarom <span className="text-primary">12.847+ Nederlanders</span> ons Vertrouwen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ontdek waarom families, stelletjes en solo reizigers uit heel Nederland 
            hun Algarve droomvakantie via ons boeken - en gemiddeld €687 besparen.
          </p>
          
          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 gemiddelde score</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-500" />
              <span>12.847+ geverifieerde reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Uit alle provincies van Nederland</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.photoUrl}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-300 text-xs">
                      {testimonial.savings}
                    </Badge>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Geverifieerd</span>
                  </div>

                  {/* Trip Details */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {testimonial.date}
                    </span>
                    <span>{testimonial.tripType}</span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="absolute -top-1 -left-1 w-4 h-4 text-primary/30" />
                    <p className="text-primary font-semibold text-sm italic pl-4">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Details */}
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {testimonial.details}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="bg-green-50 border-t border-green-100 p-4">
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-semibold">Geverifieerde boeking & review</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">€687</div>
              <p className="text-sm text-muted-foreground">Gemiddelde besparing per vakantie</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">4.9★</div>
              <p className="text-sm text-muted-foreground">Gemiddelde waardering</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Zou ons aanbevelen</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">12.8k+</div>
              <p className="text-sm text-muted-foreground">Tevreden reizigers</p>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-foreground">
            Sluit je aan bij duizenden tevreden Nederlandse reizigers
          </h3>
          <p className="text-muted-foreground text-sm mb-4 max-w-2xl mx-auto">
            Deze reviews zijn 100% echt en geverifieerd. Elke maand voegen we honderden nieuwe tevreden klanten toe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTestimonials;