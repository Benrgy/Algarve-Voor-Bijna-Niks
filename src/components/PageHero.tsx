import React from 'react';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ image, imageAlt, title, subtitle, children }) => {
  return (
    <header className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-6 drop-shadow">
          {subtitle}
        </p>
        {children}
      </div>
    </header>
  );
};

export default PageHero;
