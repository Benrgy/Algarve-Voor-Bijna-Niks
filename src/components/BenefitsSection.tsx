import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  DollarSign, 
  Users, 
  Clock, 
  Shield, 
  Sparkles,
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
    description: "Ontdek authentieke plekken en lokale gewoontes die je niet in een standaard reisgids vindt. Gebaseerd op eigen ervaring in de Algarve.",
    color: "text-primary",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Budgetbewust Reizen",
    description: "Praktische tips om kosten laag te houden: goedkope vervoersopties, lokale menu's en betaalbare accommodaties zonder comfort in te leveren.",
    color: "text-green-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Begeleiding",
    description: "Advies van mensen die de Algarve daadwerkelijk kennen. Geen anonieme tips, maar inzichten van locals en ervaren reizigers.",
    color: "text-secondary",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Seizoensgebonden Tips",
    description: "Informatie over het beste reismoment, rustige periodes en seizoensgebonden evenementen zodat je de Algarve op jouw manier beleeft.",
    color: "text-accent",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Betrouwbare Informatie",
    description: "We delen alleen tips die we zelf hebben gecontroleerd of die van betrouwbare bronnen afkomstig zijn. Geen loze beloftes.",
    color: "text-blue-600",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Hidden Gems & Geheimen",
    description: "Tips voor minder bekende stranden, dorpjes en restaurants waar je niet meteen als toerist wordt herkend.",
    color: "text-purple-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Authentieke Ervaringen",
    description: "Beleef de Algarve zoals locals dat doen. Van traditionele markten tot familie restaurants: echte cultuur, geen toeristenmassa.",
    color: "text-red-600",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Visuele Inspiratie",
    description: "Foto's en beelden van bestemmingen om je een realistisch beeld te geven van wat je kunt verwachten tijdens je reis.",
    color: "text-pink-600",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Gedegen Reisgidsen",
    description: "Uitgebreide gidsen met praktische informatie over vervoer, accommodatie, eten en activiteiten in de Algarve.",
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
            Jouw <span className="text-primary">Algarve Gids</span> in Nederland
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lokale kennis, eerlijke prijstips en praktische informatie voor een ontspannen Algarve reis
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
            Klaar om de Algarve te Verkennen?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start met plannen en ontdek bestemmingen, budgettips en lokale adressen voor jouw reis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/bestemmingen">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                Verken Bestemmingen
              </button>
            </a>
            <a href="/gidsen">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg hover:shadow-xl">
                Bekijk Gidsen
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

