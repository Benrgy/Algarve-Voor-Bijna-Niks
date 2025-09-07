import React, { useState, useEffect } from 'react';
import { Button } from './ui/enhanced-button';
import { Heart, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface WishlistButtonProps {
  itemId: string;
  itemTitle: string;
  itemPrice?: string;
  className?: string;
  variant?: 'icon' | 'full';
}

interface WishlistItem {
  id: string;
  title: string;
  price?: string;
  addedAt: Date;
  priceAlerts: boolean;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
  itemId,
  itemTitle,
  itemPrice,
  className,
  variant = 'icon'
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const wishlist = getWishlist();
    setIsWishlisted(wishlist.some(item => item.id === itemId));
    setWishlistCount(wishlist.length);
  }, [itemId]);

  const getWishlist = (): WishlistItem[] => {
    try {
      const stored = localStorage.getItem('algarve-wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const saveWishlist = (wishlist: WishlistItem[]) => {
    localStorage.setItem('algarve-wishlist', JSON.stringify(wishlist));
  };

  const toggleWishlist = () => {
    const wishlist = getWishlist();
    
    if (isWishlisted) {
      // Remove from wishlist
      const newWishlist = wishlist.filter(item => item.id !== itemId);
      saveWishlist(newWishlist);
      setIsWishlisted(false);
      setWishlistCount(newWishlist.length);
      
      toast({
        title: "Verwijderd uit verlanglijst",
        description: `${itemTitle} is verwijderd uit je verlanglijst.`,
      });
    } else {
      // Add to wishlist
      const newItem: WishlistItem = {
        id: itemId,
        title: itemTitle,
        price: itemPrice,
        addedAt: new Date(),
        priceAlerts: true
      };
      
      const newWishlist = [...wishlist, newItem];
      saveWishlist(newWishlist);
      setIsWishlisted(true);
      setWishlistCount(newWishlist.length);
      
      toast({
        title: "Toegevoegd aan verlanglijst! 💙",
        description: `${itemTitle} is opgeslagen. Je krijgt een melding bij prijsdalingen.`,
        action: (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              // Simple price alert simulation
              setTimeout(() => {
                toast({
                  title: "Prijsdaling! 🔥",
                  description: `${itemTitle} is nu 20% goedkoper!`,
                });
              }, 5000);
            }}
          >
            <Bell className="w-3 h-3 mr-1" />
            Test Alert
          </Button>
        ),
      });
    }
  };

  if (variant === 'icon') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleWishlist}
        className={cn(
          "p-2 hover:bg-primary/10 transition-colors",
          isWishlisted && "text-red-500 hover:text-red-600",
          className
        )}
      >
        <Heart 
          className={cn(
            "w-4 h-4 transition-all",
            isWishlisted && "fill-current"
          )} 
        />
        {wishlistCount > 0 && (
          <span className="sr-only">{wishlistCount} items in wishlist</span>
        )}
      </Button>
    );
  }

  return (
    <Button
      variant={isWishlisted ? "secondary" : "outline"}
      onClick={toggleWishlist}
      className={cn("gap-2", className)}
    >
      <Heart 
        className={cn(
          "w-4 h-4 transition-all",
          isWishlisted && "fill-current text-red-500"
        )} 
      />
      {isWishlisted ? "In verlanglijst" : "Bewaar deal"}
    </Button>
  );
};

export default WishlistButton;