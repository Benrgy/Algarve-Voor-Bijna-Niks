import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Plane, Car, Home, Ticket, Sparkles } from 'lucide-react';

const AffiliateServices = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Vliegtickets',
      description: 'Vergelijk vluchten van Nederlandse en Europese maatschappijen naar Faro Airport.',
      partners: ['Transavia', 'KLM', 'EasyJet'],
      color: 'from-blue-500/10 to-blue-600/10',
      textColor: 'text-blue-600',
      link: '/vliegen'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Autohuur',
      description: 'Vind een huurauto met volledige verzekering en onbeperkte kilometers voor je roadtrip.',
      partners: ['Sunny Cars', 'Hertz', 'Europcar'],
      color: 'from-green-500/10 to-green-600/10',
      textColor: 'text-green-600',
      link: '/vervoer'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Accommodatie',
      description: 'Van betaalbare campings en guesthouses tot villa\'s en authentieke lokale verblijven.',
      partners: ['Airbnb', 'Booking.com', 'Lokale Partners'],
      color: 'from-orange-500/10 to-orange-600/10',
      textColor: 'text-orange-600',
      link: '/logeren'
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: 'Activiteiten & Tours',
      description: 'Boek excursies, boottochten en lokale ervaringen direct bij betrouwbare aanbieders.',
      partners: ['GetYourGuide', 'Viator', 'Lokale Tours'],
      color: 'from-purple-500/10 to-purple-600/10',
      textColor: 'text-purple-600',
      link: '/gidsen'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Praktische Reisonderdelen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alles Voor Jouw Algarve Reis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vergelijk betrouwbare aanbieders voor vluchten, verblijf, vervoer en activiteiten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card 
              key={service.title}
              className={`border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-to-br ${service.color}`}
            >
              <CardContent className="p-6">
                <div className={`mb-4 ${service.textColor}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Aanbieders die je kunt vergelijken:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.partners.map((partner) => (
                      <Badge key={partner} variant="secondary" className="text-xs">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  onClick={() => window.location.href = service.link}
                >
                  Meer Informatie
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto">
            <strong>Transparantie:</strong> Wij werken samen met betrouwbare partners en ontvangen mogelijk een commissie 
            wanneer je via onze links boekt. Dit heeft geen invloed op de prijs die je betaalt. Onze commissies helpen ons 
            deze gratis reisgidsen en tips te blijven aanbieden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffiliateServices;

