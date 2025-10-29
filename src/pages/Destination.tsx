import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExpertProfileCard } from "@/components/ExpertProfileCard";
import { InsiderTipCard } from "@/components/InsiderTipCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Users, MapPin, Calendar, TrendingUp, Euro } from "lucide-react";
import { resolveDestinationHeroImage } from "@/utils/imageResolver";
import defaultHero from "@/assets/algarve-hero-beach.jpg";

interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  title: string;
  meta_description: string;
  hero_image?: string;
  hero_image_alt?: string;
  short_description?: string;
  historical_context?: string;
  beach_guides?: string;
  attractions?: string;
  dining_scene?: string;
  transportation?: string;
  budget_tips?: string;
  luxury_options?: string;
  hidden_gems?: string;
  best_time_to_visit?: string;
  accessibility_info?: string;
  average_costs?: any;
  rating?: number;
  visitor_count?: string;
  best_for?: string[];
  highlights?: string[];
}

interface ExpertProfile {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  years_experience: number;
  location: string;
  avatar_url?: string;
  verification_status?: string;
}

interface InsiderTip {
  id: string;
  category: string;
  title: string;
  content: string;
  tip_type: string;
  seasonal_relevance?: string[];
  practical_info?: any;
}

export default function Destination() {
  const { slug } = useParams<{ slug: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [experts, setExperts] = useState<ExpertProfile[]>([]);
  const [tips, setTips] = useState<InsiderTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;

      setLoading(true);

      // Fetch destination
      const { data: destData } = await supabase
        .from("destinations")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (destData) {
        setDestination(destData);

        // Fetch insider tips for this destination
        const { data: tipsData } = await supabase
          .from("insider_tips")
          .select("*")
          .eq("destination_id", destData.id)
          .order("created_at", { ascending: false });

        if (tipsData) setTips(tipsData);

        // Fetch expert profiles who have tips for this destination
        const { data: expertsData } = await supabase
          .from("expert_profiles")
          .select("*")
          .in(
            "id",
            tipsData?.map((tip) => tip.expert_id).filter(Boolean) || []
          );

        if (expertsData) setExperts(expertsData);
      }

      setLoading(false);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-96 w-full mb-8" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Bestemming niet gevonden</h1>
        <p className="text-muted-foreground">
          Sorry, we konden de bestemming die je zoekt niet vinden.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{destination.title}</title>
        <meta name="description" content={destination.meta_description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20">
        <img
          src={resolveDestinationHeroImage(destination) || defaultHero}
          alt={destination.hero_image_alt || `${destination.name} Algarve reisfotografie`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {destination.region}
              </Badge>
              {destination.rating && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {destination.rating}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {destination.short_description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destination.visitor_count && (
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{destination.visitor_count}</p>
                  <p className="text-sm text-muted-foreground">Bezoekers/jaar</p>
                </div>
              </div>
            )}
            {destination.rating && (
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-primary fill-current" />
                <div>
                  <p className="text-2xl font-bold">{destination.rating}/5</p>
                  <p className="text-sm text-muted-foreground">Beoordeling</p>
                </div>
              </div>
            )}
            {destination.average_costs?.daily && (
              <div className="flex items-center gap-3">
                <Euro className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">€{destination.average_costs.daily}</p>
                  <p className="text-sm text-muted-foreground">Per dag</p>
                </div>
              </div>
            )}
            {destination.best_time_to_visit && (
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-sm font-bold">{destination.best_time_to_visit}</p>
                  <p className="text-sm text-muted-foreground">Beste tijd</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Hoogtepunten</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm">{highlight}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Historical Context */}
            {destination.historical_context && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Geschiedenis & Cultuur</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {destination.historical_context}
                  </p>
                </div>
              </section>
            )}

            {/* Beach Guides */}
            {destination.beach_guides && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Strandgids</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {destination.beach_guides}
                  </p>
                </div>
              </section>
            )}

            {/* Attractions */}
            {destination.attractions && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Top Attracties</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {destination.attractions}
                  </p>
                </div>
              </section>
            )}

            {/* Dining Scene */}
            {destination.dining_scene && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Eten & Drinken</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {destination.dining_scene}
                  </p>
                </div>
              </section>
            )}

            {/* Insider Tips */}
            {tips.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Insider Tips</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tips.map((tip) => (
                    <InsiderTipCard key={tip.id} tip={tip} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Best For */}
            {destination.best_for && destination.best_for.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Perfect Voor</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.best_for.map((item, index) => (
                      <Badge key={index} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Budget Tips */}
            {destination.budget_tips && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Budget Tips</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {destination.budget_tips}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Hidden Gems */}
            {destination.hidden_gems && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Verborgen Parels</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {destination.hidden_gems}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Transportation */}
            {destination.transportation && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Vervoer</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {destination.transportation}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Expert Profiles */}
            {experts.length > 0 && (
              <div>
                <h3 className="font-bold mb-4">Lokale Experts</h3>
                <div className="space-y-4">
                  {experts.map((expert) => (
                    <ExpertProfileCard key={expert.id} expert={expert} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
