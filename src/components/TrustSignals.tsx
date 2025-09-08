import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Clock, Star, MapPin } from 'lucide-react';

interface LiveBooking {
  id: string;
  location: string;
  hotel: string;
  price: number;
  timeAgo: string;
  country: string;
}

const TrustSignals: React.FC = () => {
  const [liveBookings, setLiveBookings] = useState<LiveBooking[]>([]);
  const [visitorCount, setVisitorCount] = useState(2847);
  const [currentBookingIndex, setCurrentBookingIndex] = useState(0);

  // Real helpful tips data
  const helpfulTips = [
    { id: '1', tip: 'Bezoek lokale markten voor verse producten en goedkope souvenirs', icon: '🛒', category: 'Lokaal' },
    { id: '2', tip: 'Reis in oktober-november voor 50% lagere hotelprijzen', icon: '💰', category: 'Besparing' },
    { id: '3', tip: 'Huur een auto om verborgen stranden te ontdekken', icon: '🚗', category: 'Transport' },
    { id: '4', tip: 'Eet waar de locals eten: tasca\'s en marisqueiras', icon: '🍽️', category: 'Eten' },
    { id: '5', tip: 'Koop boodschappen bij Continente voor de beste prijzen', icon: '🏪', category: 'Budget' }
  ];

  useEffect(() => {
    // Rotate through helpful tips
    const tipInterval = setInterval(() => {
      setCurrentBookingIndex(prev => (prev + 1) % helpfulTips.length);
    }, 4000);

    return () => {
      clearInterval(tipInterval);
    };
  }, []);

  const currentTip = helpfulTips[currentBookingIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3 max-w-sm">
      {/* Helpful Travel Tip */}
      {currentTip && (
        <Card className="p-4 bg-background/95 backdrop-blur-sm border-l-4 border-l-primary shadow-warm animate-slide-up max-w-xs">
          <div className="flex items-start gap-3">
            <div className="text-2xl">{currentTip.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-foreground">Insider Tip</span>
                <Badge variant="secondary" className="text-xs">
                  {currentTip.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentTip.tip}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Social Proof Badges */}
      <div className="flex gap-2">
        <Badge variant="outline" className="bg-background/95 backdrop-blur-sm">
          <Star className="w-3 h-3 mr-1 text-yellow-500" />
          4.8/5 ★★★★★
        </Badge>
        <Badge variant="outline" className="bg-background/95 backdrop-blur-sm">
          <MapPin className="w-3 h-3 mr-1 text-primary" />
          10.000+ tevreden
        </Badge>
      </div>
    </div>
  );
};

export default TrustSignals;