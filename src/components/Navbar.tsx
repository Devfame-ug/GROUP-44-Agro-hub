
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { user } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Learn', path: '/learn' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <span className="text-primary font-bold text-xl tracking-tight">Agro-hub</span>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            
            <Link to="/cart" className="ml-2 relative" onClick={closeMenu}>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-primary"
              onClick={toggleMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'nav-link',
                  location.pathname === link.path && 'text-primary after:scale-x-100'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end space-x-4 md:flex-1 lg:w-0">
            <ThemeToggle />
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {user ? (
              <Link to="/profile">
                <Button variant="outline" size="sm" className="ml-4">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm" className="ml-4">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-background/90 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-2 text-base font-medium transition-colors',
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-foreground'
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2 border-t border-border/50">
            {user ? (
              <Link
                to="/profile"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-foreground"
                onClick={closeMenu}
              >
                My Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="block py-2 text-base font-medium text-foreground/70 hover:text-foreground"
                onClick={closeMenu}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
