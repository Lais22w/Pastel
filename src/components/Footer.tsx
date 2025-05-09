
import React from 'react';
import { cn } from '@/lib/utils';
import { Cake, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto">
        <div className="py-12 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <Cake className="h-6 w-6 mr-2 text-pastry-gold" />
              <span className="font-playfair text-xl font-semibold text-white">Dolce Pastelaria</span>
            </div>
            <p className="text-background/70 text-sm">
              Trazendo momentos de felicidade através de sabores únicos desde 1998.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">Sobre Nós</FooterLink>
              <FooterLink href="#products">Produtos</FooterLink>
              <FooterLink href="#contact">Contato</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Produtos</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Pães Artesanais</FooterLink>
              <FooterLink href="#">Doces Gourmets</FooterLink>
              <FooterLink href="#">Salgados</FooterLink>
              <FooterLink href="#">Bolos Especiais</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Newsletter</h3>
            <p className="text-background/70 text-sm mb-4">
              Inscreva-se para receber novidades, promoções e receitas exclusivas.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-foreground/20 border border-background/20 text-white py-2 px-3 rounded-l-md focus:outline-none focus:ring-1 focus:ring-pastry-gold focus:border-pastry-gold w-full text-sm"
              />
              <button className="bg-pastry-gold hover:bg-pastry-gold/90 text-white py-2 px-4 rounded-r-md text-sm">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 py-6 px-4 text-center text-background/50 text-sm">
          <p>&copy; {year} Dolce Pastelaria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-background/70 hover:text-pastry-gold transition-colors duration-200 text-sm"
    >
      {children}
    </a>
  </li>
);

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}

const SocialLink = ({ href, children, ...props }: SocialLinkProps) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-background/10 hover:bg-pastry-gold hover:text-foreground transition-colors duration-200"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
