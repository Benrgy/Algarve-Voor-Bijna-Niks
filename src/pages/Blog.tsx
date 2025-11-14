import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured_image: string;
  featured_image_alt: string;
  published_at: string;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Algarve Reisgidsen & Tips Blog",
    "description": "Ontdek de beste lokale geheimen, reistips en insider informatie over de Algarve"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-primary via-accent to-secondary py-20 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Lokale Insider Knowledge</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Algarve Reisgidsen & Tips
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 mb-8">
              📚 Ontdek de beste lokale geheimen, reistips en insider informatie rechtstreeks van Algarve experts
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                ✅ Geschreven door locals
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                ✅ Wekelijks nieuwe content
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                ✅ Gratis toegang
              </span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-20 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-6">📝</div>
                <h2 className="text-3xl font-bold mb-4">Binnenkort beschikbaar</h2>
                <p className="text-muted-foreground mb-8">
                  We werken hard aan geweldige content voor je. Check regelmatig terug voor nieuwe artikelen en insider tips over de Algarve!
                </p>
                <Link to="/bestemmingen">
                  <Button size="lg" className="gap-2">
                    Ontdek Bestemmingen <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <Card className="h-full hover:shadow-elegant transition-all duration-300 overflow-hidden border-0 shadow-soft">
                      {post.featured_image ? (
                        <div className="aspect-video overflow-hidden bg-muted">
                          <img
                            src={post.featured_image}
                            alt={post.featured_image_alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/40" />
                        </div>
                      )}
                      <CardHeader>
                        {post.category && (
                          <Badge variant="secondary" className="w-fit mb-2">
                            {post.category}
                          </Badge>
                        )}
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.published_at || post.created_at), 'dd MMM yyyy', { locale: nl })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            5 min
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                          Lees artikel <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
                  <CardContent className="p-12">
                    <h3 className="text-3xl font-bold mb-4">Mis geen nieuwe tips</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Wil je op de hoogte blijven van de nieuwste insider tips en bestemmingsgidsen? Bookmark deze pagina en check regelmatig terug!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/bestemmingen">
                        <Button size="lg" variant="default" className="gap-2">
                          Bekijk Bestemmingen <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to="/gidsen">
                        <Button size="lg" variant="outline" className="gap-2">
                          Reisgidsen <BookOpen className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
