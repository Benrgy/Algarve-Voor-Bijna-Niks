import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function EnhancedBreadcrumbs() {
  const location = useLocation();
  
  // Generate breadcrumbs from current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // Format label: capitalize and replace hyphens
      let label = path.charAt(0).toUpperCase() + path.slice(1);
      label = label.replace(/-/g, ' ');
      
      // Custom labels for known routes
      const labelMap: Record<string, string> = {
        'bestemmingen': 'Bestemmingen',
        'deals': 'Deals & Prijzen',
        'gidsen': 'Reisgidsen',
        'blog': 'Blog',
      };
      
      label = labelMap[path] || label;
      
      breadcrumbs.push({ label, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-muted/30 border-b border-border py-3 px-4 sticky top-16 z-40 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;
            
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
                
                {isLast ? (
                  <span className="text-foreground font-semibold flex items-center gap-1">
                    {isHome && <Home className="w-4 h-4" />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors flex items-center gap-1",
                      "hover:underline underline-offset-4"
                    )}
                  >
                    {isHome && <Home className="w-4 h-4" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
