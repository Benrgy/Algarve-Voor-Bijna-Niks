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

  // Mock live booking data
  const mockBookings: LiveBooking[] = [
    { id: '1', location: 'Lagos', hotel: 'Vila Galé Lagos', price: 89, timeAgo: '2 minuten', country: 'Nederland' },
    { id: '2', location: 'Albufeira', hotel: 'Hotel Apartamento Balaia Atlântico', price: 67, timeAgo: '5 minuten', country: 'België' },
    { id: '3', location: 'Vilamoura', hotel: 'Tivoli Marina Vilamoura', price: 145, timeAgo: '8 minuten', country: 'Nederland' },
    { id: '4', location: 'Sagres', hotel: 'Pousada de Sagres', price: 78, timeAgo: '12 minuten', country: 'Nederland' },
    { id: '5', location: 'Tavira', hotel: 'Vila Galé Tavira', price: 95, timeAgo: '15 minuten', country: 'Duitsland' }
  ];

  useEffect(() => {
    setLiveBookings(mockBookings);
    
    // Simulate real-time visitor count updates
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);

    // Rotate through live bookings
    const bookingInterval = setInterval(() => {
      setCurrentBookingIndex(prev => (prev + 1) % mockBookings.length);
    }, 5000);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(bookingInterval);
    };
  }, []);

  const currentBooking = liveBookings[currentBookingIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-3 max-w-sm">
      {/* Live Booking Notification */}
      {currentBooking && (
        <Card className="p-4 bg-background/95 backdrop-blur-sm border-l-4 border-l-primary shadow-warm animate-slide-up">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow mt-2"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Net geboekt!</span>
                <Badge variant="secondary" className="text-xs">
                  {currentBooking.country}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{currentBooking.hotel}</span> in {currentBooking.location}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-bold text-primary">€{currentBooking.price}/nacht</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {currentBooking.timeAgo} geleden
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Live Visitor Counter */}
      <Card className="p-3 bg-background/95 backdrop-blur-sm shadow-soft animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{visitorCount.toLocaleString()}</span> bezoekers vandaag
          </div>
        </div>
      </Card>

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