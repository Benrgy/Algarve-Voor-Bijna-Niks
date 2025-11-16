import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, MapPin, LogOut, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    destinations: 0,
    posts: 0,
    verified: 0,
  });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
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
        toast({
          title: "Geen toegang",
          description: "Je hebt geen admin rechten.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await loadStats();
    } catch (error) {
      console.error('Admin check error:', error);
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const loadStats = async () => {
    const [destResult, postsResult, verifiedResult] = await Promise.all([
      supabase.from('destinations').select('id', { count: 'exact', head: true }),
      supabase.from('posts').select('id', { count: 'exact', head: true }),
      supabase.from('destinations').select('id', { count: 'exact', head: true }).not('verified_by', 'is', null),
    ]);

    setStats({
      destinations: destResult.count || 0,
      posts: postsResult.count || 0,
      verified: verifiedResult.count || 0,
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Uitloggen
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Bestemmingen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{stats.destinations}</div>
              <p className="text-sm text-muted-foreground">{stats.verified} geverifieerd</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{stats.posts}</div>
              <p className="text-sm text-muted-foreground">Totaal artikelen</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Bulk Import
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" onClick={() => navigate('/admin/import')}>
                Content Importeren
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Content Management */}
        <Tabs defaultValue="destinations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="destinations">Bestemmingen</TabsTrigger>
            <TabsTrigger value="posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="sources">Bronnen</TabsTrigger>
          </TabsList>

          <TabsContent value="destinations">
            <Card>
              <CardHeader>
                <CardTitle>Bestemmingen Beheer</CardTitle>
                <CardDescription>
                  Beheer alle bestemmingen, voeg nieuwe toe en verifieer content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/destinations')}>
                  Bestemmingen Bewerken
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts">
            <Card>
              <CardHeader>
                <CardTitle>Blog Posts Beheer</CardTitle>
                <CardDescription>
                  Schrijf en publiceer nieuwe blog posts met verificatie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/posts')}>
                  Posts Bewerken
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources">
            <Card>
              <CardHeader>
                <CardTitle>Content Bronnen</CardTitle>
                <CardDescription>
                  Beheer betrouwbare bronnen voor content verificatie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/admin/sources')}>
                  Bronnen Beheren
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
