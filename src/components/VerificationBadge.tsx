import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";
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
  const isVerified = !!verifiedBy;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge 
            variant={isVerified ? "default" : "secondary"}
            className="gap-1"
          >
            {isVerified ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                Geverifieerd
              </>
            ) : (
              <>
                <AlertCircle className="w-3 h-3" />
                Niet geverifieerd
              </>
            )}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            {isVerified ? (
              <>
                <p className="font-semibold">✓ Content geverifieerd</p>
                {verifiedAt && (
                  <p className="text-xs">
                    {new Date(verifiedAt).toLocaleDateString('nl-NL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
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
              </>
            ) : (
              <p className="text-xs">
                Deze content is nog niet geverifieerd door een expert
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
