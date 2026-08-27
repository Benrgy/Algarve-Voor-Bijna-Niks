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
    if (!checkIn || !checkOut) {
      return;
    }

    const params = new URLSearchParams({
      ss: destination,
      checkin: checkIn,
      checkout: checkOut,
      group_adults: guests.toString(),
      group_children: '0',
      no_rooms: '1',
      selected_currency: 'EUR'
    });

    const bookingUrl = `https://www.booking.com/searchresults.html?${params}`;
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-warm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="w-5 h-5 text-primary" />
            {destination} accommodaties
          </CardTitle>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            Prijsvergelijking
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Vergelijk prijzen van boekingsplatforms in één zoekopdracht
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

        <Button
          onClick={handleSearch}
          disabled={!checkIn || !checkOut}
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold disabled:opacity-50"
          size="lg"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Vergelijk Prijzen op Booking.com
        </Button>

        <div className="space-y-1">
          <div className="text-xs text-muted-foreground text-center">
            ℹ️ Wij ontvangen mogelijk een commissie via affiliate links. Jij betaalt hetzelfde of minder dan direct bij het platform.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;