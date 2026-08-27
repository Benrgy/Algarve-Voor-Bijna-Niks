import React from 'react';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Bus, Train, Car, MapPin, ArrowRight } from 'lucide-react';
import algarveCoastalRoad from '@/assets/algarve-coastal-road.jpg';

const Vervoer = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        image={algarveCoastalRoad}
        imageAlt="Kustweg in de Algarve met uitzicht over de Atlantische Oceaan"
        title="Vervoer in de Algarve"
        subtitle="Bus, trein, huurauto of fiets? Ontdek de beste manier om de Algarve te verkennen zonder te veel uit te geven."
      />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Bus className="w-4 h-4 mr-2" />
              Vervoer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zo kom je overal in de Algarve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De Algarve heeft een goed bus- en treinnetwerk langs de kust. Voor de verborgen stranden en dorpjes is een huurauto echter onmisbaar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Bus vanaf Faro Airport</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  De bus van Faro Airport naar het centrum kost slechts €2,25. Dat is een flink stuk goedkoper dan een taxi, die voor hetzelfde traject ongeveer €25 rekent.
                </p>
                <p className="text-sm text-muted-foreground">
                  Vervoerder: Proximo / Vamus. Controleer actuele dienstregelingen voor vertrek.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Train className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Trein langs de kust</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  De trein van Faro naar Lagos is een van de mooiste routes van Portugal. De rit duurt ongeveer 1,5 uur en kost €5,25. Onderweg stop je in Tavira, Olhão en Portimão.
                </p>
                <p className="text-sm text-muted-foreground">
                  Ideaal voor een dagtrip langs de oostkust zonder files of parkeerstress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Car className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Huurauto</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Met een huurauto ontdek je de Algarve het beste. Wij huurden zelf tien dagen een auto voor ongeveer €220 buiten het hoogseizoen. Hiermee reden we de hele N125 van oost naar west.
                </p>
                <p className="text-sm text-muted-foreground">
                  Boek ruim van tevoren en neem volledige verzekering om verrassingen te voorkomen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">De N125-route</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  De N125 is de provinciale weg die parallel aan de kust loopt. Deze weg brengt je langs alle kleine dorpjes, lokale restaurants en verborgen stranden die je van de snelweg niet ziet.
                </p>
                <p className="text-sm text-muted-foreground">
                  Soms file in juli/augustus, maar altijd avontuurlijk en authentiek.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Vergelijk huurauto's</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Een auto geeft de meeste vrijheid. Bekijk prijzen van verschillende verhuurders via onze partners.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = '/deals'}>
              Bekijk autohuur-deals
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vervoer;
