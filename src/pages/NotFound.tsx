import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, MapPin, Search, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  const popularDestinations = [
    { name: "Lagos", slug: "lagos" },
    { name: "Albufeira", slug: "albufeira" },
    { name: "Tavira", slug: "tavira" },
    { name: "Faro", slug: "faro" },
    { name: "Sagres", slug: "sagres" },
    { name: "Carvoeiro", slug: "carvoeiro" },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Compass className="w-20 h-20 text-primary mx-auto mb-4 opacity-60" />
          <h1 className="text-6xl font-black text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Pagina niet gevonden
          </h2>
          <p className="text-muted-foreground text-lg">
            Deze pagina lijkt te zijn verdwenen, net als de zon achter de kliffen van de Algarve.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link to="/">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" /> Naar Homepage
            </Button>
          </Link>
          <Link to="/bestemmingen">
            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <MapPin className="w-4 h-4" /> Bekijk Bestemmingen
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-soft">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
              <Search className="w-4 h-4 text-primary" />
              Populaire bestemmingen
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {popularDestinations.map((dest) => (
                <Link key={dest.slug} to={`/bestemmingen/${dest.slug}`}>
                  <Button variant="secondary" size="sm">
                    {dest.name}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
