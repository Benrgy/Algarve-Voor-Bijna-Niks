import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Save, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

interface Destination {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  historical_context: string;
  local_stories: string;
  local_cuisine: string;
  practical_tips: string;
  verified_by: string | null;
}

const AdminDestinations = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [selectedSource, setSelectedSource] = useState<string>("");

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roles) {
      navigate("/");
      return;
    }

    await loadData();
  };

  const loadData = async () => {
    const [destResult, sourcesResult] = await Promise.all([
      supabase.from('destinations').select('id, name, slug, short_description, historical_context, local_stories, local_cuisine, practical_tips, verified_by').order('name'),
      supabase.from('content_sources').select('*').order('name'),
    ]);

    if (destResult.data) setDestinations(destResult.data);
    if (sourcesResult.data) setSources(sourcesResult.data);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!selectedDest) return;
    setSaving(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('destinations')
        .update({
          short_description: selectedDest.short_description,
          historical_context: selectedDest.historical_context,
          local_stories: selectedDest.local_stories,
          local_cuisine: selectedDest.local_cuisine,
          practical_tips: selectedDest.practical_tips,
          content_source_id: selectedSource || null,
          last_updated_by: user?.id,
        })
        .eq('id', selectedDest.id);

      if (error) throw error;

      toast({
        title: "Opgeslagen!",
        description: `${selectedDest.name} is succesvol bijgewerkt.`,
      });

      await loadData();
    } catch (error: any) {
      toast({
        title: "Fout bij opslaan",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleVerify = async () => {
    if (!selectedDest) return;
    setSaving(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase
        .from('destinations')
        .update({
          verified_by: user?.id,
          verified_at: new Date().toISOString(),
        })
        .eq('id', selectedDest.id);

      if (error) throw error;

      toast({
        title: "Geverifieerd!",
        description: `${selectedDest.name} is nu geverifieerd.`,
      });

      await loadData();
      setSelectedDest({ ...selectedDest, verified_by: user?.id || null });
    } catch (error: any) {
      toast({
        title: "Fout bij verificatie",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <Skeleton className="h-8 w-64 mb-8" />
        <div className="grid md:grid-cols-3 gap-6">
          <Skeleton className="h-96" />
          <Skeleton className="h-96 md:col-span-2" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/admin')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Terug naar Dashboard
        </Button>

        <h1 className="text-3xl font-bold mb-8">Bestemmingen Bewerken</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Destination List */}
          <Card>
            <CardHeader>
              <CardTitle>Selecteer Bestemming</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
              {destinations.map((dest) => (
                <Button
                  key={dest.id}
                  variant={selectedDest?.id === dest.id ? "default" : "outline"}
                  className="w-full justify-between"
                  onClick={() => {
                    setSelectedDest(dest);
                    setSelectedSource("");
                  }}
                >
                  <span className="truncate">{dest.name}</span>
                  {dest.verified_by && <CheckCircle className="w-4 h-4 ml-2 flex-shrink-0" />}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Editor */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>
                {selectedDest ? `${selectedDest.name} - Content Editor` : "Selecteer een bestemming"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {selectedDest ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="source">Content Bron</Label>
                    <Select value={selectedSource} onValueChange={setSelectedSource}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer bron..." />
                      </SelectTrigger>
                      <SelectContent>
                        {sources.map((source) => (
                          <SelectItem key={source.id} value={source.id}>
                            {source.name} ({source.type})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="short_desc">Korte Beschrijving</Label>
                    <Textarea
                      id="short_desc"
                      value={selectedDest.short_description || ""}
                      onChange={(e) => setSelectedDest({ ...selectedDest, short_description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="history">Historische Context</Label>
                    <Textarea
                      id="history"
                      value={selectedDest.historical_context || ""}
                      onChange={(e) => setSelectedDest({ ...selectedDest, historical_context: e.target.value })}
                      rows={5}
                      placeholder="Vertel het historische verhaal van deze plek..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stories">Lokale Verhalen</Label>
                    <Textarea
                      id="stories"
                      value={selectedDest.local_stories || ""}
                      onChange={(e) => setSelectedDest({ ...selectedDest, local_stories: e.target.value })}
                      rows={5}
                      placeholder="Deel authentieke verhalen van locals..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cuisine">Lokale Keuken</Label>
                    <Textarea
                      id="cuisine"
                      value={selectedDest.local_cuisine || ""}
                      onChange={(e) => setSelectedDest({ ...selectedDest, local_cuisine: e.target.value })}
                      rows={4}
                      placeholder="Wat zijn de culinaire highlights?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tips">Praktische Tips</Label>
                    <Textarea
                      id="tips"
                      value={selectedDest.practical_tips || ""}
                      onChange={(e) => setSelectedDest({ ...selectedDest, practical_tips: e.target.value })}
                      rows={4}
                      placeholder="Handige tips voor bezoekers..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={handleSave} disabled={saving} className="gap-2">
                      <Save className="w-4 h-4" />
                      {saving ? "Bezig met opslaan..." : "Opslaan"}
                    </Button>
                    {!selectedDest.verified_by && (
                      <Button onClick={handleVerify} disabled={saving} variant="outline" className="gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Verifiëren
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground text-center py-12">
                  Selecteer een bestemming om te bewerken
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDestinations;
