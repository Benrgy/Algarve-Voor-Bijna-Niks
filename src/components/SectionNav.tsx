import React from 'react';

interface SectionNavItem {
  href: string;
  label: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
}

const SectionNav: React.FC<SectionNavProps> = ({ items }) => {
  return (
    <nav
      aria-label="Sectie navigatie"
      className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex gap-2 overflow-x-auto py-3">
          {items.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNav;
