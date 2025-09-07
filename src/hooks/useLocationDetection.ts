import { useState, useEffect } from 'react';

interface LocationData {
  country: string;
  countryCode: string;
  city: string;
  currency: string;
  language: string;
  isNL: boolean;
  isBE: boolean;
}

export const useLocationDetection = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get location from browser timezone first
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const locale = navigator.language || 'nl-NL';
        
        // Mock location detection based on browser settings
        let locationData: LocationData = {
          country: 'Nederland',
          countryCode: 'NL',
          city: 'Amsterdam',
          currency: 'EUR',
          language: 'nl',
          isNL: true,
          isBE: false
        };

        // Detect Belgian users
        if (locale.includes('be') || timezone.includes('Brussels')) {
          locationData = {
            country: 'België',
            countryCode: 'BE',
            city: 'Brussel',
            currency: 'EUR',
            language: 'nl',
            isNL: false,
            isBE: true
          };
        }

        // Detect German users
        if (locale.includes('de') || timezone.includes('Berlin')) {
          locationData = {
            country: 'Duitsland',
            countryCode: 'DE',
            city: 'Berlin',
            currency: 'EUR',
            language: 'de',
            isNL: false,
            isBE: false
          };
        }

        setLocation(locationData);
      } catch (error) {
        // Fallback to Netherlands
        setLocation({
          country: 'Nederland',
          countryCode: 'NL',
          city: 'Amsterdam',
          currency: 'EUR',
          language: 'nl',
          isNL: true,
          isBE: false
        });
      } finally {
        setLoading(false);
      }
    };

    detectLocation();
  }, []);

  const getPriceAdjustment = () => {
    if (!location) return 1;
    
    // Price adjustments based on location
    switch (location.countryCode) {
      case 'BE':
        return 1.05; // Slightly higher prices for Belgium
      case 'DE':
        return 1.1; // Higher prices for Germany
      case 'NL':
      default:
        return 1; // Base prices for Netherlands
    }
  };

  const getLocalizedContent = () => {
    if (!location) return {};

    const baseContent = {
      currency: '€',
      phonePrefix: '+31',
      flightPrice: '89',
      popularDestination: 'Lagos'
    };

    switch (location.countryCode) {
      case 'BE':
        return {
          ...baseContent,
          phonePrefix: '+32',
          flightPrice: '95',
          popularDestination: 'Albufeira'
        };
      case 'DE':
        return {
          ...baseContent,
          phonePrefix: '+49',
          flightPrice: '120',
          popularDestination: 'Vilamoura'
        };
      default:
        return baseContent;
    }
  };

  return {
    location,
    loading,
    getPriceAdjustment,
    getLocalizedContent
  };
};