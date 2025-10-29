import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  TrendingDown, 
  Calendar, 
  Thermometer, 
  Euro, 
  MapPin, 
  Clock,
  Utensils,
  Car,
  Waves
} from 'lucide-react';

const AlgarveInsights: React.FC = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  const monthlyInsights = [
    {
      month: 'Oktober',
      savings: '65%',
      temp: '22°C',
      highlights: ['Perfecte strandtemperatuur', 'Weinig toeristen', 'Lokale oogstfestivals'],
      icon: <TrendingDown className="w-5 h-5 text-green-600" />
    },
    {
      month: 'November', 
      savings: '70%',
      temp: '18°C',
      highlights: ['Laagste hotelprijzen', 'Ideaal voor wandelen', 'Authentieke ervaringen'],
      icon: <Euro className="w-5 h-5 text-primary" />
    },
    {
      month: 'Maart',
      savings: '55%',
      temp: '19°C', 
      highlights: ['Amandelbloesem', 'Milde temperaturen', 'Paasfeesten'],
      icon: <Waves className="w-5 h-5 text-blue-500" />
    }
  ];

  const localSecrets = [
    {
      title: 'Marisqueira do Eduardo',
      location: 'Lagos',
      tip: 'Verse zeevruchten voor halve prijs van toeristische restaurants',
      icon: <Utensils className="w-4 h-4" />,
      saving: '€15-25 per persoon'
    },
    {
      title: 'Praia da Cordoama',
      location: 'Vila do Bispo',
      tip: 'Verborgen strand zonder parkeerkosten en strandtenten',
      icon: <MapPin className="w-4 h-4" />,
      saving: 'Gratis parkeren'
    },
    {
      title: 'Continente Supermarkt',
      location: 'Overal',
      tip: 'Boodschappen 40% goedkoper dan hotelwinkels',
      icon: <Car className="w-4 h-4" />,
      saving: '€20-30 per dag'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight(prev => (prev + 1) % monthlyInsights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Insider Knowledge & Bespaartips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek wat locals weten en toeristen missen - echte geheimen voor een betaalbare Algarve ervaring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Monthly Insights Rotator */}
          <Card className="border-0 shadow-elegant overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Beste Reismaanden
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {monthlyInsights.map((insight, index) => (
                  <div 
                    key={insight.month}
                    className={`p-4 rounded-lg border transition-all duration-500 ${
                      index === currentInsight 
                        ? 'border-primary bg-primary/5 shadow-md scale-105' 
                        : 'border-border bg-background/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {insight.icon}
                        <span className="font-semibold">{insight.month}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {insight.savings} korting
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Thermometer className="w-3 h-3" />
                          {insight.temp}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {insight.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Local Secrets */}
          <Card className="border-0 shadow-elegant">
            <CardHeader className="bg-gradient-to-r from-accent to-secondary text-primary-foreground">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Lokale Geheimen
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {localSecrets.map((secret, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border bg-background/50 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="text-accent mt-1">
                        {secret.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">{secret.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {secret.location}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {secret.tip}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                          <Euro className="w-3 h-3" />
                          Besparing: {secret.saving}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-4 border-0 shadow-soft">
            <div className="text-2xl mb-2">🌊</div>
            <div className="text-xl font-bold text-primary">150+</div>
            <div className="text-xs text-muted-foreground">Geheime stranden</div>
          </Card>
          <Card className="text-center p-4 border-0 shadow-soft">
            <div className="text-2xl mb-2">🍽️</div>
            <div className="text-xl font-bold text-secondary">50+</div>
            <div className="text-xs text-muted-foreground">Lokale eetgelegenheden</div>
          </Card>
          <Card className="text-center p-4 border-0 shadow-soft">
            <div className="text-2xl mb-2">💼</div>
            <div className="text-xl font-bold text-accent">10+</div>
            <div className="text-xs text-muted-foreground">Affiliate partners</div>
          </Card>
          <Card className="text-center p-4 border-0 shadow-soft">
            <div className="text-2xl mb-2">📅</div>
            <div className="text-xl font-bold text-primary">24/7</div>
            <div className="text-xs text-muted-foreground">Actuele info</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AlgarveInsights;