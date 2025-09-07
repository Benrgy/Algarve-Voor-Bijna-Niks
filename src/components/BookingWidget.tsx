import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Users, Percent, ExternalLink } from 'lucide-react';

interface BookingWidgetProps {
  destination?: string;
  priceFrom?: number;
  discountPercent?: number;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ 
  destination = "Algarve", 
  priceFrom = 199,
  discountPercent = 45 
}) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const params = new URLSearchParams({
      destination: destination,
      checkin: checkIn,
      checkout: checkOut,
      guests: guests.toString(),
      utm_source: 'algarve-voor-bijna-niks',
      utm_campaign: 'booking-widget'
    });

    // Multi-provider search - open multiple booking sites
    const providers = [
      `https://www.booking.com/searchresults.html?ss=${destination}&${params}`,
      `https://www.expedia.nl/Hotel-Search?destination=${destination}&${params}`,
      `https://www.hotels.com/search.do?destination-id=${destination}&${params}`
    ];

    providers.forEach((url, index) => {
      setTimeout(() => {
        window.open(url, `_blank_${index}`, 'noopener,noreferrer');
      }, index * 200);
    });
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-warm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="w-5 h-5 text-primary" />
            {destination} Deals
          </CardTitle>
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            -{discountPercent}% korting
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Vergelijk prijzen van alle top sites tegelijk
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="checkin" className="text-xs font-medium">Check-in</Label>
            <Input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <Label htmlFor="checkout" className="text-xs font-medium">Check-out</Label>
            <Input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="guests" className="text-xs font-medium">Gasten</Label>
          <div className="flex items-center gap-2 mt-1">
            <Users className="w-4 h-4 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min="1"
              max="8"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="flex-1"
            />
          </div>
        </div>

        <div className="bg-muted/50 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Vanaf</span>
            <div className="text-right">
              <span className="text-lg font-bold text-primary">€{priceFrom}</span>
              <span className="text-xs text-muted-foreground">/nacht</span>
            </div>
          </div>
        </div>

        <Button
          onClick={handleSearch}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold"
          size="lg"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Vergelijk Alle Prijzen
        </Button>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Percent className="w-3 h-3" />
          <span>Gratis annulering bij meeste hotels</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;