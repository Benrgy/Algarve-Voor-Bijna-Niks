import { Link } from 'react-router-dom';

const navLinks = [
  { href: '/vliegen', label: 'Vliegen' },
  { href: '/logeren', label: 'Logeren' },
  { href: '/vervoer', label: 'Vervoer' },
  { href: '/eten', label: 'Eten' },
  { href: '/bestemmingen', label: 'Bestemmingen' },
  { href: '/n125', label: 'De N125-route' },
  { href: '/tips', label: 'Tips' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div>
            <div className="text-xl font-black mb-3">Algarve voor Bijna Niks</div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Reis zoals de locals. Geen massa-toerisme, geen all-inclusive.
              Wél échte ervaringen voor een fractie van de prijs.
            </p>
          </div>

          {/* Middle - nav links */}
          <div className="md:justify-self-center">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-secondary-foreground/70">
              Ontdek
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/85 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - about */}
          <div className="md:justify-self-end md:max-w-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-secondary-foreground/70">
              Over ons
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Geen reisbureau, geen affiliate-marketeer. Gewoon iemand die
              verliefd is op de Algarve en die kennis gratis deelt.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 text-center text-sm text-secondary-foreground/70">
          © 2025 Algarve voor Bijna Niks
        </div>
      </div>
    </footer>
  );
}
