
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Cake } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Cake className="h-6 w-6 mr-2 text-pastry-blue" />
          <span className="font-playfair text-xl font-semibold">Dolce Pastelaria</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">Sobre</NavItem>
          <NavItem href="#products">Produtos</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-4 space-y-6 text-center">
          <MobileNavItem href="#home" onClick={toggleMenu}>Home</MobileNavItem>
          <MobileNavItem href="#about" onClick={toggleMenu}>Sobre</MobileNavItem>
          <MobileNavItem href="#products" onClick={toggleMenu}>Produtos</MobileNavItem>
          <MobileNavItem href="#contact" onClick={toggleMenu}>Contato</MobileNavItem>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children }: NavItemProps) => (
  <a
    href={href}
    className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

const MobileNavItem = ({ href, children, onClick }: NavItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-lg font-medium py-3 border-b border-border"
  >
    {children}
  </a>
);

export default Navbar;
