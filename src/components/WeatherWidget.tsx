import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Sun, Cloud, CloudRain, Thermometer, Wind, Droplets } from 'lucide-react';

interface WeatherData {
  location: string;
  current: {
    temp: number;
    condition: string;
    icon: string;
    humidity: number;
    windSpeed: number;
  };
  forecast: Array<{
    day: string;
    temp: { min: number; max: number };
    condition: string;
    icon: string;
  }>;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock weather data for Algarve
    const mockWeatherData: WeatherData = {
      location: "Algarve, Portugal",
      current: {
        temp: 24,
        condition: "Zonnig",
        icon: "sun",
        humidity: 65,
        windSpeed: 12
      },
      forecast: [
        { day: "Vandaag", temp: { min: 18, max: 26 }, condition: "Zonnig", icon: "sun" },
        { day: "Morgen", temp: { min: 19, max: 27 }, condition: "Deels bewolkt", icon: "cloud" },
        { day: "Overmorgen", temp: { min: 20, max: 25 }, condition: "Lichte regen", icon: "rain" },
        { day: "Zondag", temp: { min: 18, max: 24 }, condition: "Bewolkt", icon: "cloud" },
        { day: "Maandag", temp: { min: 19, max: 26 }, condition: "Zonnig", icon: "sun" },
        { day: "Dinsdag", temp: { min: 21, max: 28 }, condition: "Zonnig", icon: "sun" },
        { day: "Woensdag", temp: { min: 20, max: 27 }, condition: "Deels bewolkt", icon: "cloud" }
      ]
    };

    // Simulate API call delay
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sun':
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-500" />;
    }
  };

  const getSmallWeatherIcon = (iconType: string) => {
    switch (iconType) {
      case 'sun':
        return <Sun className="w-4 h-4 text-yellow-500" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-gray-500" />;
      case 'rain':
        return <CloudRain className="w-4 h-4 text-blue-500" />;
      default:
        return <Sun className="w-4 h-4 text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-yellow-50 border-0 shadow-soft">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-muted rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  const isGoodWeather = weather.current.temp > 20 && weather.current.icon === 'sun';

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-yellow-50 border-0 shadow-soft overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-primary" />
            Weer in Algarve
          </span>
          {isGoodWeather && (
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Perfect strandweer! 🏖️
            </Badge>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {getWeatherIcon(weather.current.icon)}
            <div>
              <div className="text-2xl font-bold text-foreground">
                {weather.current.temp}°C
              </div>
              <div className="text-sm text-muted-foreground">
                {weather.current.condition}
              </div>
            </div>
          </div>
          
          <div className="text-right text-sm text-muted-foreground space-y-1">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3" />
              {weather.current.humidity}%
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3" />
              {weather.current.windSpeed} km/h
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">7-daagse voorspelling</h4>
          <div className="space-y-2">
            {weather.forecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2 flex-1">
                  {getSmallWeatherIcon(day.icon)}
                  <span className="text-sm text-foreground font-medium min-w-[80px]">
                    {day.day}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{day.temp.min}°</span>
                  <span className="font-semibold text-foreground">{day.temp.max}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather-based recommendations */}
        <div className="bg-white/50 p-3 rounded-lg">
          <h5 className="text-sm font-semibold text-foreground mb-1">Reisadvies</h5>
          <p className="text-xs text-muted-foreground">
            {isGoodWeather 
              ? "Perfecte omstandigheden voor strandactiviteiten en outdoor uitstapjes!" 
              : "Prima weer om de culturele bezienswaardigheden te bezoeken."
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;