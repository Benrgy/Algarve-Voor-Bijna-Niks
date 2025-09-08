import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/enhanced-button';
import { Clock, TrendingUp, Users, Zap, AlertCircle, Eye } from 'lucide-react';

const UrgencyIndicators: React.FC = () => {
  const [currentViewers, setCurrentViewers] = useState(234);
  const [recentBookings, setRecentBookings] = useState(12);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 18 });
  const [priceAlert, setPriceAlert] = useState(true);
  const [lastBooked, setLastBooked] = useState('3 minuten geleden in Utrecht');

  // Simulate real-time updates
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setCurrentViewers(prev => {
        const change = Math.floor(Math.random() * 20) - 10;
        return Math.max(180, Math.min(350, prev + change));
      });
    }, 8000);

    const bookingInterval = setInterval(() => {
      setRecentBookings(prev => prev + 1);
      const cities = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag', 'Eindhoven', 'Tilburg', 'Groningen', 'Breda'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setLastBooked(`Zojuist geboekt in ${randomCity}`);
    }, 12000);

    const timeInterval = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 };
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    // Price alert timeout
    const priceTimeout = setTimeout(() => {
      setPriceAlert(false);
    }, 45000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(bookingInterval);
      clearInterval(timeInterval);
      clearTimeout(priceTimeout);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm">
      {/* Live Activity Indicator */}
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-foreground">Live Activiteit</span>
        </div>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Bekijken nu:
            </span>
            <Badge variant="secondary" className="text-xs px-2 py-0">
              {currentViewers} personen
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Laatste uur:
            </span>
            <span className="font-semibold text-primary">{recentBookings} boekingen</span>
          </div>
        </div>
      </div>

      {/* Last Booking Alert */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-lg animate-scale-in">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
          <div>
            <p className="text-xs font-semibold text-green-800">Zojuist geboekt!</p>
            <p className="text-xs text-green-700">{lastBooked}</p>
            <p className="text-xs text-green-600">Algarve villa • 7 nachten • €489</p>
          </div>
        </div>
      </div>

      {/* Time-Limited Offer */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 shadow-lg animate-fade-in">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4" />
          <span className="font-bold text-sm">FLASH DEAL EINDIGT OVER:</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-xl font-black mb-2">
          <span className="bg-white/20 px-2 py-1 rounded text-center min-w-8">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-white/20 px-2 py-1 rounded text-center min-w-8">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span>:</span>
          <span className="bg-white/20 px-2 py-1 rounded text-center min-w-8">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
        </div>
        <p className="text-xs text-center opacity-90">Tot 75% korting op Algarve deals</p>
      </div>

      {/* Price Alert */}
      {priceAlert && (
        <Alert className="border-orange-200 bg-orange-50 animate-slide-in-right">
          <AlertCircle className="w-4 h-4 text-orange-600" />
          <AlertDescription className="text-xs">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-orange-800">Prijsstijging verwacht!</p>
                <p className="text-orange-700">Hotels verhogen prijzen met 15% vanaf morgen</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-6 px-2 border-orange-300 hover:bg-orange-100"
                onClick={() => setPriceAlert(false)}
              >
                Boek Nu
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Scarcity Indicator */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-3 h-3 text-yellow-600" />
          <span className="text-xs font-semibold text-yellow-800">Beperkte Beschikbaarheid</span>
        </div>
        <p className="text-xs text-yellow-700">
          Nog slechts <span className="font-bold">7 hotels</span> beschikbaar voor jouw data
        </p>
        <div className="mt-2 bg-yellow-200 rounded-full h-1">
          <div className="bg-yellow-500 h-1 rounded-full w-1/4"></div>
        </div>
      </div>

      {/* Social Proof Ticker */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-3 h-3 text-blue-600" />
          <span className="text-xs font-semibold text-blue-800">Vandaag Geboekt</span>
        </div>
        <div className="space-y-1 text-xs text-blue-700">
          <p>✓ Familie Jansen • Villa Lagos • €312 bespaard</p>
          <p>✓ Sandra M. • Hotel Faro • €189 bespaard</p>
          <p>✓ Rob & Lisa • Appartement • €156 bespaard</p>
        </div>
      </div>
    </div>
  );
};

export default UrgencyIndicators;