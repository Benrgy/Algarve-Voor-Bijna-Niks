import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'accent' | 'secondary';
}

export default function CTASection({
  title = "Klaar om je Droomvakantie te Boeken?",
  description = "Start vandaag met plannen en bespaar honderden euro's met onze lokale insider tips",
  primaryButtonText = "🏖️ Ontdek Bestemmingen",
  primaryButtonLink = "/bestemmingen",
  secondaryButtonText = "💰 Bekijk Deals",
  secondaryButtonLink = "/deals",
  variant = 'default',
}: CTASectionProps) {
  const gradients = {
    default: 'from-primary/10 via-accent/10 to-secondary/10',
    accent: 'from-accent/10 via-secondary/10 to-primary/10',
    secondary: 'from-secondary/10 via-primary/10 to-accent/10',
  };

  return (
    <section className={`py-16 bg-gradient-to-r ${gradients[variant]} rounded-2xl mx-4 md:mx-8 my-12 border border-primary/20`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Begin Je Avontuur</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to={primaryButtonLink}>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group">
              {primaryButtonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to={secondaryButtonLink}>
            <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group">
              {secondaryButtonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Trust Line */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">✅ Gratis Annulering</span>
          <span className="flex items-center gap-1">✅ Beste Prijsgarantie</span>
          <span className="flex items-center gap-1">✅ 24/7 Support</span>
          <span className="flex items-center gap-1">✅ Lokale Expertise</span>
        </div>
      </div>
    </section>
  );
}
