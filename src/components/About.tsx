
import React from 'react';
import { Utensils, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-pastry-cream/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa História</h2>
          <div className="w-24 h-1 bg-pastry-red mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra a paixão e dedicação por trás de cada uma de nossas criações
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=2080&auto=format&fit=crop"
                alt="Nossa pastelaria" 
                className="rounded-lg shadow-lg w-full object-cover h-[500px] border-4 border-black"
              />
              <div className="absolute -bottom-6 -right-6 bg-pastry-red text-white p-4 rounded-lg shadow-lg">
                <p className="font-playfair text-xl">Desde 2010</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-playfair">
              Tradição e inovação em cada receita
            </h3>
            <p className="mb-6 text-foreground/80">
              Nossa história começou com uma paixão pela confeitaria artesanal e o desejo de criar produtos que encantassem pelo sabor e pela apresentação. Com técnicas aprimoradas ao longo dos anos, criamos uma experiência gastronômica única.
            </p>
            <p className="mb-8 text-foreground/80">
              Hoje, combinamos tradição e inovação, utilizando ingredientes selecionados para criar doces e salgados que não são apenas deliciosos, mas verdadeiras obras de arte.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <FeatureCard icon={<Utensils />} title="Artesanal" description="Produção diária e caseira" />
              <FeatureCard icon={<Award />} title="Qualidade" description="Ingredientes premium" />
              <FeatureCard icon={<Users />} title="Experiência" description="Equipe especializada" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 bg-pastry-red/10 rounded-full flex items-center justify-center mb-3">
      <div className="text-pastry-red">{icon}</div>
    </div>
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default About;
