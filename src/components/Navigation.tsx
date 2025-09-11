import { Link, useLocation } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/bestemmingen', label: 'Bestemmingen', icon: '🏖️' },
    { href: '/deals', label: 'Deals & Prijzen', icon: '💰' },
    { href: '/gidsen', label: 'Reisgidsen', icon: '📖' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="text-2xl font-black text-primary">
              🌊 Algarve voor Bijna Niks
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent hover:text-accent-foreground",
                        "flex items-center gap-2 font-medium transition-all duration-200"
                      )}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu openen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-3">Snelle links</div>
                    <div className="flex flex-col gap-2">
                      <Link 
                        to="/deals" 
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-primary hover:underline"
                      >
                        🎯 Beste Deals van Nu
                      </Link>
                      <Link 
                        to="/gidsen" 
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-secondary hover:underline"
                      >
                        📖 Insider Tips & Gidsen
                      </Link>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;