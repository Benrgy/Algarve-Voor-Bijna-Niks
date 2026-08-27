import { ReactNode } from 'react';

interface PageHeaderProps {
  image: string;
  eyebrow?: string;
  title: string;
  intro: ReactNode;
}

/**
 * Editorial-style page hero with a full-width image, dark overlay
 * and a short intro. Used across all guide pages.
 */
export default function PageHeader({ image, eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="relative">
      <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-secondary/20" />
        <div className="relative z-10 h-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 sm:pb-14">
          {eyebrow && (
            <span className="inline-block w-fit mb-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 bg-primary/90 px-3 py-1 rounded-full">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight drop-shadow">
            {title}
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 relative z-20">
        <div className="bg-card rounded-2xl shadow-warm p-6 sm:p-8 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {intro}
        </div>
      </div>
    </header>
  );
}
