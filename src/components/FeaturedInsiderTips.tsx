import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Sparkles, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface InsiderTip {
  id: string;
  category: string;
  title: string;
  content: string;
  tip_type: string;
  seasonal_relevance?: string[];
}

const getTipTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    hidden_gem: "bg-primary/10 text-primary",
    timing: "bg-secondary/10 text-secondary-foreground",
    experience: "bg-accent/10 text-accent-foreground",
    local_culture: "bg-muted text-muted-foreground",
  };
  return colors[type] || "bg-muted text-muted-foreground";
};

const getTipTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    hidden_gem: "Hidden Gem",
    timing: "Beste Timing",
    experience: "Ervaring",
    local_culture: "Lokale Cultuur",
  };
  return labels[type] || type;
};

export const FeaturedInsiderTips = () => {
  const [tips, setTips] = useState<InsiderTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      const { data } = await supabase
        .from('insider_tips')
        .select('*')
        .limit(6)
        .order('created_at', { ascending: false });

      if (data) setTips(data);
      setLoading(false);
    };

    fetchTips();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  if (tips.length === 0) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-semibold text-accent-foreground">Trending Nu</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Insider Tips van Locals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ontdek geheime plekken en expert adviezen die je niet in gewone reisgidsen vindt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <Card key={tip.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge className={getTipTypeColor(tip.tip_type)}>
                    <Lightbulb className="w-3 h-3 mr-1" />
                    {getTipTypeLabel(tip.tip_type)}
                  </Badge>
                  <Badge variant="outline" className="capitalize text-xs">
                    {tip.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                  {tip.content}
                </p>
                
                {tip.seasonal_relevance && tip.seasonal_relevance.length > 0 && (
                  <div className="flex gap-1 flex-wrap">
                    {tip.seasonal_relevance.slice(0, 3).map((season) => (
                      <Badge key={season} variant="secondary" className="text-xs capitalize">
                        {season === 'all_year' ? 'Hele jaar' : season}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
