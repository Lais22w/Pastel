
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Éclair de Chocolate",
    description: "Massa choux recheada com creme de chocolate belga",
    price: "R$ 12,90",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 2,
    name: "Croissant de Amêndoas",
    description: "Croissant artesanal coberto com amêndoas e açúcar",
    price: "R$ 15,50",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 3,
    name: "Quiche Lorraine",
    description: "Quiche tradicional com bacon, queijo e creme fresco",
    price: "R$ 18,90",
    image: "https://images.unsplash.com/photo-1605716857594-73aca1ea4e22?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 4,
    name: "Macaron de Framboesa",
    description: "Delicado macaron com recheio de framboesa fresca",
    price: "R$ 9,50",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 5,
    name: "Pão de Fermentação Natural",
    description: "Pão artesanal com fermentação de 24 horas",
    price: "R$ 16,90",
    image: "https://images.unsplash.com/photo-1585478259715-4d3f5955df01?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 6,
    name: "Tartelete de Frutas",
    description: "Base crocante com creme e frutas frescas da estação",
    price: "R$ 14,50",
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  }
];

const Products = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  
  const filteredProducts = activeFilter 
    ? products.filter(product => product.category === activeFilter)
    : products;

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
          <div className="w-24 h-1 bg-pastry-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossa seleção de produtos artesanais feitos diariamente
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <FilterButton 
              active={activeFilter === null} 
              onClick={() => setActiveFilter(null)}
            >
              Todos
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'doce'} 
              onClick={() => setActiveFilter('doce')}
            >
              Doces
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'salgado'} 
              onClick={() => setActiveFilter('salgado')}
            >
              Salgados
            </FilterButton>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-pastry-gold hover:bg-pastry-gold/90 text-white rounded-full px-8">
            Ver todo o cardápio
          </Button>
        </div>
      </div>
    </section>
  );
};

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ children, active, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "px-5 py-2 rounded-full transition-all",
      active 
        ? "bg-pastry-gold text-white" 
        : "bg-secondary text-foreground/70 hover:bg-secondary/80"
    )}
  >
    {children}
  </button>
);

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="h-60 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <span className="text-pastry-gold font-medium">{product.price}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
      <Button variant="outline" size="sm" className="w-full border-pastry-gold text-pastry-gold hover:bg-pastry-gold/10">
        Encomendar
      </Button>
    </CardContent>
  </Card>
);

export default Products;
