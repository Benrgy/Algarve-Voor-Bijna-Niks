import React from 'react';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Plane, Calendar, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import algarveFaroAirport from '@/assets/algarve-faro-airport.jpg';

const Vliegen = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        image={algarveFaroAirport}
        imageAlt="Luchthaven Faro in de Algarve, Portugal"
        title="Goedkoop Vliegen naar de Algarve"
        subtitle="Vind de voordeligste vluchten naar Faro. Wij delen onze eigen ervaringen en betrouwbare zoekstrategieën, geen loze beloftes."
      />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Plane className="w-4 h-4 mr-2" />
              Vluchten
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hoe je betaalbaar naar Faro komt
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De Algarve is goed bereikbaar vanaf Nederland en België. Hier lees je wat je kunt verwachten en hoe je zelf de beste prijs vindt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Rechtstreekse vluchten</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Vanaf Schiphol, Rotterdam en Eindhoven vlieg je rechtstreeks naar Faro. Vluchttijd is ongeveer 3 uur. In het hoogseizoen zijn er dagelijks meerdere vluchten.
                </p>
                <p className="text-sm text-muted-foreground">
                  Airlines die deze route vliegen: Transavia, KLM, easyJet, Ryanair, TUI fly en Vueling.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Calendar className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Beste boekmoment</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Vluchten naar de Algarve zijn in het laagseizoen (november-maart) vaak het goedkoopst. Boek 2-3 maanden voor vertrek voor de beste keuze aan tijden.
                </p>
                <p className="text-sm text-muted-foreground">
                  Vermijd schoolvakanties en augustus als je de laagste prijs zoekt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Aankomst in Faro</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Faro Airport ligt centraal in de Algarve. Vanaf hier kun je per bus, trein of huurauto verder. De bus naar Faro stad kost slechts €2,25.
                </p>
                <p className="text-sm text-muted-foreground">
                  Lees meer over vervoer vanaf het vliegveld op onze vervoerspagina.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/20">
                    <AlertCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Onze aanpak</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Wij vergelijken prijzen via betrouwbare zoekmachines en boeken zelf altijd rechtstreeks bij de luchtvaartmaatschappij. Zo voorkomen we extra boekingskosten.
                </p>
                <p className="text-sm text-muted-foreground">
                  Via onze affiliate links ontvangen we soms een kleine commissie, zonder extra kosten voor jou.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Zelf prijzen vergelijken</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Gebruik onze vergelijkingstool om actuele vluchtprijzen te bekijken. Wij tonen altijd de laagste beschikbare prijzen van onze partners.
            </p>
            <Button variant="cta" size="lg" onClick={() => window.location.href = '/deals'}>
              Bekijk vluchtdeals
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vliegen;
