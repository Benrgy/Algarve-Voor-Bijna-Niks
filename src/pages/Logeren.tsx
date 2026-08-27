import React from 'react';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Home, Tent, Building, MapPin, ArrowRight } from 'lucide-react';
import algarveBoutiqueHotel from '@/assets/algarve-boutique-hotel.jpg';

const Logeren = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        image={algarveBoutiqueHotel}
        imageAlt="Authentiek boutique hotel in de Algarve, Portugal"
        title="Goedkoop Logeren in de Algarve"
        subtitle="Van camping tot quinta en van guesthouse tot appartement. Ontdek hoe je comfortabel slaapt zonder je reisbudget te breken."
      />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Home className="w-4 h-4 mr-2" />
              Accommodatie
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Betaalbaar overnachten in de Algarve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De Algarve biedt voor elk budget een slaapplaats. Wij delen de opties die wij zelf hebben geprobeerd of die consistent goede reviews krijgen van andere reizigers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Tent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Campings</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Campings in de Algarve zijn vaak goed onderhouden en liggen dicht bij zee. In Olhão en Sagres vind je campings met schaduwrijke plekken en zwembad.
                </p>
                <p className="text-sm text-muted-foreground">
                  Prijsindicatie laagseizoen: €15-25 per nacht voor een tent of camperplek.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Quinta's & guesthouses</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Een quinta of guesthouse geeft je het meest authentieke Algarve-gevoel. Buiten het hoogseizoen betaal je soms minder dan voor een standaard hotel.
                </p>
                <p className="text-sm text-muted-foreground">
                  Prijsindicatie buiten het seizoen: €45-75 per nacht voor een kamer of klein appartement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Appartementen</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Een eigen appartement is ideaal als je langer blijft of zelf wilt koken. Platforms als Airbnb en Booking.com bieden veel keuze, maar vergelijk altijd meerdere sites.
                </p>
                <p className="text-sm text-muted-foreground">
                  Een studio in Tavira of Olhão is vaak voordeliger dan in Lagos of Albufeira.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Locatie bepaalt de prijs</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  De Oost-Algarve en het binnenland zijn over het algemeen goedkoper dan de drukke westkust. Een auto geeft je de vrijheid om verder van de hotspots te verblijven.
                </p>
                <p className="text-sm text-muted-foreground">
                  Met de N125 reis je gemakkelijk tussen oost en west.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vind jouw ideale verblijf</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vergelijk accommodaties op onze deals-pagina. Wij tonen opties van betrouwbare partners waar we zelf mee werken.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = '/deals'}>
              Bekijk accommodatie-deals
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logeren;
