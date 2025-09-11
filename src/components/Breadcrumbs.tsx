import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: Record<string, { name: string; icon: string }> = {
    'bestemmingen': { name: 'Bestemmingen', icon: '🏖️' },
    'deals': { name: 'Deals & Prijzen', icon: '💰' },
    'gidsen': { name: 'Reisgidsen', icon: '📖' },
  };

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="ml-1 hidden sm:inline">Home</span>
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const breadcrumbInfo = breadcrumbNameMap[value];

            if (!breadcrumbInfo) return null;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                {isLast ? (
                  <span className="flex items-center font-medium text-foreground">
                    <span className="mr-1">{breadcrumbInfo.icon}</span>
                    {breadcrumbInfo.name}
                  </span>
                ) : (
                  <Link 
                    to={to}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="mr-1">{breadcrumbInfo.icon}</span>
                    {breadcrumbInfo.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;