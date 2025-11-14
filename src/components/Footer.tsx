import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Over Ons</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Jouw expert voor goedkope en authentieke Algarve vakanties. Lokale kennis, Nederlandse service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bestemmingen" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  🏖️ Bestemmingen
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  💰 Deals & Prijzen
                </Link>
              </li>
              <li>
                <Link to="/gidsen" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  📖 Reisgidsen
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ✍️ Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Populaire Bestemmingen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bestemmingen/lagos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Lagos
                </Link>
              </li>
              <li>
                <Link to="/bestemmingen/albufeira" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Albufeira
                </Link>
              </li>
              <li>
                <Link to="/bestemmingen/tavira" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tavira
                </Link>
              </li>
              <li>
                <Link to="/bestemmingen/sagres" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sagres
                </Link>
              </li>
              <li>
                <Link to="/bestemmingen/faro" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Faro
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:info@algarve-voor-bijna-niks.nl" className="hover:text-primary transition-colors">
                  info@algarve-voor-bijna-niks.nl
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+31123456789" className="hover:text-primary transition-colors">
                  +31 (0)12 345 6789
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>
                  Amsterdam, Nederland<br />
                  & Algarve, Portugal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} Algarve voor Bijna Niks. Alle rechten voorbehouden.
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Voorwaarden</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              🌱 Deze site bevat affiliate links. Wij kunnen een commissie verdienen bij aankopen via onze partners. 
              Dit heeft geen invloed op de prijs die je betaalt en stelt ons in staat gratis content te blijven aanbieden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
