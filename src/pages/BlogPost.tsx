import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  category: string;
  featured_image: string;
  featured_image_alt: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
        
        // Fetch related posts if we have a post
        if (data) {
          const { data: related } = await supabase
            .from('posts')
            .select('*')
            .eq('status', 'published')
            .eq('category', data.category)
            .neq('id', data.id)
            .limit(3);
          
          setRelatedPosts(related || []);
        }
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link gekopieerd!",
        description: "De link is naar je klembord gekopieerd.",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Skeleton className="h-10 w-32 mb-6" />
          <Skeleton className="aspect-video w-full rounded-lg mb-8" />
          <Skeleton className="h-8 w-24 mb-4" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-64 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="py-20">
            <div className="text-6xl mb-6">📄</div>
            <h1 className="text-3xl font-bold mb-4">Artikel niet gevonden</h1>
            <p className="text-muted-foreground mb-8">
              Het artikel dat je zoekt bestaat niet of is verwijderd.
            </p>
            <Link to="/blog">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Terug naar blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const title = post.meta_title || `${post.title} - Algarve voor Bijna Niks`;
  const description = post.meta_description || post.excerpt;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <article className="container mx-auto px-4 max-w-4xl pt-24 pb-16">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 gap-2 -ml-4">
              <ArrowLeft className="w-4 h-4" />
              Terug naar blog
            </Button>
          </Link>

          {/* Featured Image */}
          {post.featured_image ? (
            <div className="aspect-video w-full overflow-hidden rounded-xl mb-8 shadow-elegant">
              <img
                src={post.featured_image}
                alt={post.featured_image_alt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video w-full overflow-hidden rounded-xl mb-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
              <BookOpen className="w-24 h-24 text-primary/40" />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            {post.category && (
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.published_at || post.created_at), 'dd MMMM yyyy', { locale: nl })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min lezen
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                <Share2 className="w-4 h-4" />
                Delen
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground prose-img:rounded-lg prose-img:shadow-soft">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
            )}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-muted-foreground">Vond je dit artikel nuttig?</p>
              <Button onClick={handleShare} className="gap-2">
                <Share2 className="w-4 h-4" />
                Deel dit artikel
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl font-bold mb-8">Gerelateerde Artikelen</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="h-full hover:shadow-elegant transition-all duration-300 overflow-hidden border-0 shadow-soft">
                      {relatedPost.featured_image ? (
                        <div className="aspect-video overflow-hidden bg-muted">
                          <img
                            src={relatedPost.featured_image}
                            alt={relatedPost.featured_image_alt || relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-primary/40" />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {relatedPost.category && (
                          <Badge variant="secondary" className="mb-2">
                            {relatedPost.category}
                          </Badge>
                        )}
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container mx-auto px-4 max-w-6xl py-16">
          <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ontdek meer van de Algarve</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Bekijk onze uitgebreide bestemmingsgidsen en vind de perfecte plek voor jouw vakantie
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/bestemmingen">
                  <Button size="lg" className="gap-2">
                    Bekijk Bestemmingen <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button size="lg" variant="outline" className="gap-2">
                    Meer Artikelen <BookOpen className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
