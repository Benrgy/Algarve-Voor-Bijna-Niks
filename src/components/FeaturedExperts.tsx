import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, MapPin, Sparkles, Quote } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Expert {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  years_experience: number;
  location: string;
  favorite_tip?: string;
  verification_status?: string;
}

export const FeaturedExperts = () => {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperts = async () => {
      const { data } = await supabase
        .from('expert_profiles')
        .select('*')
        .eq('verification_status', 'verified')
        .limit(3);

      if (data) setExperts(data);
      setLoading(false);
    };

    fetchExperts();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  if (experts.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Lokale Experts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ontmoet Onze Algarve Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Krijg insider tips van locals die de Algarve door en door kennen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Card key={expert.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">
                      {expert.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-lg">{expert.name}</h3>
                      {expert.verification_status === 'verified' && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Award className="w-3 h-3" />
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{expert.role}</p>
                    <Badge variant="outline" className="text-xs">
                      {expert.specialty}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {expert.bio}
                </p>

                {expert.favorite_tip && (
                  <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-start gap-2">
                      <Quote className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p className="text-sm italic text-muted-foreground line-clamp-3">
                        "{expert.favorite_tip}"
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {expert.location}
                  </div>
                  <div>
                    {expert.years_experience} jaar ervaring
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
