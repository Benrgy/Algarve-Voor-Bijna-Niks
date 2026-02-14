import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  verifiedBy?: string;
  verifiedAt?: string;
  sourceName?: string;
  sourceUrl?: string;
}

export const VerificationBadge = ({ 
  verifiedBy, 
  verifiedAt, 
  sourceName,
  sourceUrl 
}: VerificationBadgeProps) => {
  // Only show badge when content IS verified
  if (!verifiedBy) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="default" className="gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Geverifieerd
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">✓ Content geverifieerd</p>
            {verifiedAt && (
              <p className="text-xs">
                {new Date(verifiedAt).toLocaleDateString('nl-NL', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </p>
            )}
            {sourceName && (
              <p className="text-xs">
                Bron: {sourceUrl ? (
                  <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    {sourceName}
                  </a>
                ) : sourceName}
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
