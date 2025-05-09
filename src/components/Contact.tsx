
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-pastry-cream/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-pastry-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre disponíveis para lhe atender e responder suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-background/95 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <form>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Nome</label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Assunto</label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                      <Textarea 
                        id="message" 
                        placeholder="Como podemos ajudar?"
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-pastry-blue hover:bg-pastry-blue/90 text-white">
                      Enviar mensagem
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 font-playfair">Informações de Contato</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<MapPin />}
                  title="Endereço"
                  content={<>Rua das Flores, 123<br/>Centro - São Paulo, SP</>}
                />
                
                <ContactInfo 
                  icon={<Clock />}
                  title="Horário de Funcionamento"
                  content={<>Seg - Sex: 7h às 20h<br/>Sábados: 8h às 15h<br/>Domingos: 8h às 12h</>}
                />
                
                <ContactInfo 
                  icon={<Phone />}
                  title="Telefone"
                  content={<>(11) 9999-9999<br/>contato@dolcepastelaria.com</>}
                />
              </div>
            </div>
            
            <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Encomendas Especiais</h3>
              <p className="text-foreground/80 mb-4">
                Planejando um evento especial? Entre em contato para encomendas personalizadas para casamentos, aniversários e eventos corporativos.
              </p>
              <Button variant="outline" className="border-pastry-blue text-pastry-blue hover:bg-pastry-blue/10">
                Fazer uma encomenda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-pastry-blue/10 rounded-full flex items-center justify-center shrink-0">
      <div className="text-pastry-blue">{icon}</div>
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-foreground/70">{content}</p>
    </div>
  </div>
);

export default Contact;
