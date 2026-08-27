import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Section({
  children,
  title,
  intro,
  muted = false,
  className,
}: {
  children: ReactNode;
  title?: string;
  intro?: ReactNode;
  muted?: boolean;
  className?: string;
}) {
  return (
    <section className={cn(muted && 'bg-muted/50', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            {title}
          </h2>
        )}
        {intro && (
          <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
            {intro}
          </p>
        )}
        <div className={cn(title || intro ? 'mt-8' : '')}>{children}</div>
      </div>
    </section>
  );
}

export function InfoCard({
  emoji,
  title,
  children,
}: {
  emoji?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-warm transition-shadow h-full">
      {emoji && <div className="text-3xl mb-3">{emoji}</div>}
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <div className="mt-2 text-muted-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export function Callout({
  title,
  children,
  tone = 'primary',
}: {
  title?: string;
  children: ReactNode;
  tone?: 'primary' | 'secondary' | 'warning';
}) {
  const tones = {
    primary: 'border-primary bg-primary/5',
    secondary: 'border-secondary bg-secondary/5',
    warning: 'border-destructive bg-destructive/5',
  };
  return (
    <div className={cn('border-l-4 rounded-r-xl p-5', tones[tone])}>
      {title && <div className="font-bold text-foreground mb-1">{title}</div>}
      <div className="text-muted-foreground leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-0">
      <span className="text-foreground">{label}</span>
      <span className="font-bold text-primary whitespace-nowrap">{price}</span>
    </div>
  );
}
