import { useState } from 'react';
import { Heart, Share2, BookmarkPlus, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface QuickActionBarProps {
  destinationName: string;
  onBookmark?: () => void;
  onShare?: () => void;
  onWishlist?: () => void;
}

export default function QuickActionBar({
  destinationName,
  onBookmark,
  onShare,
  onWishlist,
}: QuickActionBarProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked ? 'Verwijderd van bladwijzers' : 'Toegevoegd aan bladwijzers'
    );
    onBookmark?.();
  };

  const handleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    toast.success(
      isInWishlist ? 'Verwijderd van verlanglijst' : 'Toegevoegd aan verlanglijst'
    );
    onWishlist?.();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${destinationName} - Algarve voor Bijna Niks`,
          text: `Ontdek ${destinationName} in de Algarve!`,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link gekopieerd naar klembord!');
    }
    onShare?.();
  };

  return (
    <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-y border-border py-3 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Info */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">{destinationName}</span>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWishlist}
              className={isInWishlist ? 'text-red-500' : ''}
            >
              <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
              <span className="ml-2 hidden sm:inline">Verlanglijst</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className={isBookmarked ? 'text-primary' : ''}
            >
              <BookmarkPlus className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="ml-2 hidden sm:inline">Bewaren</span>
            </Button>
            
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
              <span className="ml-2 hidden sm:inline">Delen</span>
            </Button>

            <Button variant="default" size="sm" className="ml-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Boek Nu</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
