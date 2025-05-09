
import React from 'react';
import { Utensils, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-pastry-cream/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-pastry-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra a paixão e dedicação por trás de cada uma de nossas criações
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2080&auto=format&fit=crop"
                alt="Nossa padaria" 
                className="rounded-lg shadow-lg w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-pastry-gold text-white p-4 rounded-lg shadow-lg">
                <p className="font-playfair text-xl">Desde 1998</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              Uma tradição de sabor e qualidade
            </h3>
            <p className="mb-6 text-foreground/80">
              Fundada há mais de 25 anos, a Dolce Pastelaria nasceu da paixão pela arte da confeitaria tradicional. Começamos como uma pequena loja familiar e crescemos graças ao carinho dos nossos clientes e ao compromisso com a qualidade.
            </p>
            <p className="mb-8 text-foreground/80">
              Hoje, continuamos fiéis às nossas raízes, combinando técnicas tradicionais com toques contemporâneos para criar doces e salgados que são verdadeiras obras de arte.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <FeatureCard icon={<Utensils />} title="Artesanal" description="Receitas exclusivas feitas à mão" />
              <FeatureCard icon={<Award />} title="Qualidade" description="Ingredientes premium selecionados" />
              <FeatureCard icon={<Users />} title="Tradição" description="Conhecimento passado por gerações" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-pastry-gold/10 rounded-full flex items-center justify-center mb-3">
      <div className="text-pastry-gold">{icon}</div>
    </div>
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default About;
