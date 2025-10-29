import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Clock, Euro, MapPin } from "lucide-react";

interface InsiderTip {
  id: string;
  category: string;
  title: string;
  content: string;
  tip_type: string;
  seasonal_relevance?: string[];
  practical_info?: {
    price_range?: string;
    duration?: string;
    best_time?: string;
    location?: string;
    [key: string]: any;
  };
}

interface InsiderTipCardProps {
  tip: InsiderTip;
}

const getTipTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    hidden_gem: "bg-primary/10 text-primary",
    timing: "bg-secondary/10 text-secondary",
    experience: "bg-accent/10 text-accent-foreground",
    local_culture: "bg-muted text-muted-foreground",
  };
  return colors[type] || "bg-muted text-muted-foreground";
};

const getTipTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    hidden_gem: "Verborgen Parel",
    timing: "Beste Tijd",
    experience: "Ervaring",
    local_culture: "Lokale Cultuur",
  };
  return labels[type] || type;
};

export const InsiderTipCard = ({ tip }: InsiderTipCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={getTipTypeColor(tip.tip_type)}>
            <Lightbulb className="w-3 h-3 mr-1" />
            {getTipTypeLabel(tip.tip_type)}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {tip.category}
          </Badge>
        </div>
        <CardTitle className="text-lg">{tip.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{tip.content}</p>
        
        {tip.practical_info && (
          <div className="space-y-2 pt-4 border-t">
            {tip.practical_info.price_range && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Euro className="w-3 h-3" />
                <span>{tip.practical_info.price_range}</span>
              </div>
            )}
            {tip.practical_info.duration && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{tip.practical_info.duration}</span>
              </div>
            )}
            {tip.practical_info.best_time && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Beste tijd: {tip.practical_info.best_time}</span>
              </div>
            )}
            {tip.practical_info.location && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{tip.practical_info.location}</span>
              </div>
            )}
          </div>
        )}
        
        {tip.seasonal_relevance && tip.seasonal_relevance.length > 0 && (
          <div className="flex gap-1 flex-wrap mt-3">
            {tip.seasonal_relevance.map((season) => (
              <Badge key={season} variant="secondary" className="text-xs capitalize">
                {season}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
