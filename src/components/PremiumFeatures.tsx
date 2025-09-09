import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock, 
  Star, 
  Shield,
  Zap,
  Target,
  Gift,
  TrendingUp,
  Heart
} from 'lucide-react';

interface TripPlan {
  day: number;
  title: string;
  activities: string[];
  budget: number;
  duration: string;
}

interface PriceComparison {
  provider: string;
  price: number;
  rating: number;
  features: string[];
  savings: number;
}

const PremiumFeatures = () => {
  const [selectedDuration, setSelectedDuration] = useState(7);
  const [budget, setBudget] = useState(1000);
  const [travelers, setTravelers] = useState(2);

  // Sample trip plans
  const tripPlans: TripPlan[] = [
    {
      day: 1,
      title: 'Aankomst & Lokale Oriëntatie',
      activities: ['Lokaal restaurant ontbijt', 'Strandwandeling Praia da Rocha', 'Zonsondergang bij Fortaleza'],
      budget: 85,
      duration: '8 uur'
    },
    {
      day: 2,
      title: 'Verborgen Grotten & Stranden',
      activities: ['Benagil Grot (lokale boot)', 'Praia da Marinha picknick', 'Carvoeiro dorpsverkenning'],
      budget: 120,
      duration: '10 uur'
    },
    {
      day: 3,
      title: 'Culturele Dieptduik',
      activities: ['Silves kasteel', 'Lokale wijnproeverij', 'Traditioneel restaurant'],
      budget: 95,
      duration: '7 uur'
    }
  ];

  // Price comparison data
  const priceComparisons: PriceComparison[] = [
    {
      provider: 'Onze Lokale Partners',
      price: 899,
      rating: 4.9,
      features: ['Nederlandse support', 'Lokale gidsen', 'Geheime locaties', 'Flexibel annuleren'],
      savings: 456
    },
    {
      provider: 'Booking.com',
      price: 1299,
      rating: 4.2,
      features: ['Standaard hotels', 'Basis support', 'Toeristische locaties'],
      savings: 0
    },
    {
      provider: 'Expedia',
      price: 1355,
      rating: 4.1,
      features: ['Package deals', 'Beperkte lokale kennis', 'Standaard routes'],
      savings: 0
    }
  ];

  const calculateSavings = () => {
    const basePrice = 1200;
    const localDiscount = 0.35;
    return Math.round(basePrice * localDiscount);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Premium Reisplanning
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Jouw Perfecte Algarve Trip
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Onze AI-gestuurde reisplanner combineert lokale insider kennis met jouw voorkeuren 
            voor een onvergetelijke en betaalbare Algarve ervaring.
          </p>
        </div>

        <Tabs defaultValue="planner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="planner" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Trip Planner
            </TabsTrigger>
            <TabsTrigger value="comparison" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Prijs Vergelijker
            </TabsTrigger>
            <TabsTrigger value="insider" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Insider Secrets
            </TabsTrigger>
          </TabsList>

          {/* Trip Planner Tab */}
          <TabsContent value="planner" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Configuration Panel */}
              <Card className="lg:col-span-1 border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Jouw Reis Configuratie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Aantal dagen</label>
                    <div className="flex gap-2">
                      {[3, 5, 7, 10, 14].map((days) => (
                        <Button
                          key={days}
                          variant={selectedDuration === days ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedDuration(days)}
                        >
                          {days}d
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Budget (totaal)</label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>€500</span>
                        <span className="font-bold">€{budget}</span>
                        <span>€3000</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="3000"
                        step="50"
                        value={budget}
                        onChange={(e) => setBudget(parseInt(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-sm text-green-800">
                        💰 <strong>Verwachte besparing:</strong> €{calculateSavings()}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Aantal reizigers</label>
                    <div className="flex gap-2">
                      {[1, 2, 4, 6].map((count) => (
                        <Button
                          key={count}
                          variant={travelers === count ? "default" : "outline"}
                          size="sm"
                          onClick={() => setTravelers(count)}
                        >
                          {count} <Users className="w-3 h-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button variant="cta" className="w-full" size="lg">
                    🎯 Genereer Mijn Trip
                  </Button>
                </CardContent>
              </Card>

              {/* Trip Itinerary */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold mb-4">Jouw Gepersonaliseerde Itinerarium</h3>
                
                {tripPlans.map((plan) => (
                  <Card key={plan.day} className="border-0 shadow-soft hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2">Dag {plan.day}</Badge>
                          <h4 className="text-lg font-bold">{plan.title}</h4>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">€{plan.budget}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {plan.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {plan.activities.map((activity, index) => (
                          <div key={index} className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">Aanpassen</Button>
                        <Button variant="outline" size="sm">Boek Activiteiten</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-2">+ Meer dagen toevoegen</div>
                    <p className="text-sm text-muted-foreground">
                      Verleng je reis met extra dagen vol lokale ervaringen
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Price Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Waarom Lokaal Boeken Slimmer Is</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vergelijk onze lokale partnerships met grote internationale platforms en zie hoeveel je bespaart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {priceComparisons.map((comparison, index) => (
                <Card key={comparison.provider} className={`border-0 ${index === 0 ? 'shadow-elegant ring-2 ring-primary/20' : 'shadow-soft'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{comparison.provider}</CardTitle>
                      {index === 0 && <Badge variant="default">🏆 Beste Deal</Badge>}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{comparison.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary">€{comparison.price}</div>
                      <div className="text-sm text-muted-foreground">per persoon, 7 dagen</div>
                      {comparison.savings > 0 && (
                        <Badge variant="destructive" className="mt-2">
                          Bespaar €{comparison.savings}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {comparison.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant={index === 0 ? "default" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      {index === 0 ? "🎯 Kies Deze Deal" : "Bekijk Aanbod"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-soft bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">100% Geld-Terug Garantie</h3>
                <p className="text-muted-foreground mb-4">
                  Niet tevreden? Krijg je geld terug binnen 24 uur, geen vragen gesteld.
                </p>
                <div className="flex justify-center gap-6 text-sm">
                  <div>✅ Nederlandse klantenservice</div>
                  <div>✅ 24/7 ondersteuning</div>
                  <div>✅ Lokale expertise</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insider Secrets Tab */}
          <TabsContent value="insider" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Geheime Strand Toegangen',
                  description: 'Ontdek 15+ verborgen strand toegangen die alleen locals kennen',
                  savings: '€50-150',
                  icon: '🏖️'
                },
                {
                  title: 'Lokale Restaurant Kaart',
                  description: 'GPS-coördinaten van authentieke restaurants buiten toeristische zones',
                  savings: '€100-300',
                  icon: '🍽️'
                },
                {
                  title: 'Transport Insider Tips',
                  description: 'Geheime bus routes, lokale taxi apps en carpool netwerken',
                  savings: '€80-200',
                  icon: '🚗'
                },
                {
                  title: 'Gratis Activiteiten Kalender',
                  description: 'Maandelijkse kalender met gratis lokale events en festivals',
                  savings: '€150-500',
                  icon: '🎭'
                },
                {
                  title: 'Lokale Markt Schema',
                  description: 'Wanneer en waar de beste lokale markten zijn voor verse producten',
                  savings: '€30-80',
                  icon: '🛒'
                },
                {
                  title: 'Fotografie Hotspots',
                  description: 'Instagram-waardige locaties die toeristen nooit vinden',
                  savings: 'Onbetaalbaar',
                  icon: '📸'
                }
              ].map((secret, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{secret.icon}</div>
                    <h3 className="font-bold mb-2">{secret.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{secret.description}</p>
                    <Badge variant="outline" className="mb-4">
                      Besparing: {secret.savings}
                    </Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      Ontgrendel →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-elegant bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Exclusieve Insider Toegang</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Krijg toegang tot onze volledige database van lokale geheimen, real-time tips van locals 
                  en een persoonlijke WhatsApp groep met onze Algarve experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button variant="cta" size="xl" className="hover:scale-105 transition-transform duration-200">
                    🔓 Krijg Volledige Toegang
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Normaal €197, nu <span className="font-bold text-primary">GRATIS</span> bij elke boeking
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PremiumFeatures;