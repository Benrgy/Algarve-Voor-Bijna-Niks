import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  DollarSign, 
  Users, 
  Clock, 
  Shield, 
  Sparkles,
  TrendingUp,
  Heart,
  Camera,
  Award
} from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Lokale Insider Kennis",
    description: "Ontdek verborgen pareltjes en authentieke plekken die alleen locals kennen. Vermijd toeristenvallen en ervaar de echte Algarve.",
    color: "text-primary",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Maximale Besparing",
    description: "Bespaar gemiddeld €500+ op je vakantie met onze budget tips, insider deals en timing strategieën. Meer genieten, minder betalen.",
    color: "text-green-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Begeleiding",
    description: "Persoonlijk advies van lokale experts met jarenlange ervaring. Krijg antwoorden op al je vragen van mensen die de Algarve kennen.",
    color: "text-secondary",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Perfect Getimede Tips",
    description: "Weet precies wanneer je waar moet zijn: beste tijden, seizoenen en momenten voor de ultieme ervaring zonder drukte.",
    color: "text-accent",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Betrouwbare Informatie",
    description: "Alle tips en aanbevelingen zijn persoonlijk geverifieerd. Geen gesponsorde content, alleen échte ervaringen en eerlijke adviezen.",
    color: "text-blue-600",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Hidden Gems & Geheimen",
    description: "Exclusieve toegang tot geheime locaties, verborgen stranden en authentieke restaurants waar toeristen niet komen.",
    color: "text-purple-600",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Actuele Content",
    description: "Dagelijks bijgewerkte informatie over prijzen, openingstijden en seizoensgebonden tips. Altijd de meest recente insights.",
    color: "text-orange-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Authentieke Ervaringen",
    description: "Beleef de Algarve zoals locals dat doen. Van traditionele markten tot familie restaurants - echte cultuur, geen toeristen traps.",
    color: "text-red-600",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Visuele Inspiratie",
    description: "Duizenden authentieke foto's van elke bestemming. Zie exact wat je kunt verwachten en laat je inspireren voor je reis.",
    color: "text-pink-600",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Kwaliteit",
    description: "Hoogwaardige reisgidsen met ongekend detail. Van transport tot accommodatie, van eten tot activiteiten - alles wat je nodig hebt.",
    color: "text-yellow-600",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Waarom Algarve voor Bijna Niks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Jouw <span className="text-primary">Algarve Expert</span> in Nederland
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combineren lokale expertise met Nederlandse service voor de perfecte Algarve ervaring
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`mb-4 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Klaar voor je Perfecte Algarve Avontuur?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start vandaag met plannen en ontdek waarom duizenden Nederlanders hun Algarve reis bij ons beginnen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/bestemmingen">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                🏖️ Verken Bestemmingen
              </button>
            </a>
            <a href="/deals">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl">
                💰 Bekijk Beste Deals
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
