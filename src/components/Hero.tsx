
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1964&auto=format&fit=crop')` }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Arte e sabor em cada criação
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Descubra o prazer de uma pastelaria artesanal feita com ingredientes selecionados e muito amor.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-pastry-blue hover:bg-pastry-blue/90 text-white rounded-full px-8"
            >
              Ver produtos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-pastry-blue text-pastry-blue hover:bg-pastry-blue/10 rounded-full px-8"
            >
              Fazer pedido
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-pastry-cream/20 -z-10 rounded-tl-[100px]" />
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-pastry-blue/10 -z-10" />
    </section>
  );
};

export default Hero;
