
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
    name: "Pastel de Nata",
    description: "Tradicional pastel português com creme de custard e canela",
    price: "R$ 8,90",
    image: "https://images.unsplash.com/photo-1579302628241-0d09aa27a037?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 2,
    name: "Bolo Red Velvet",
    description: "Macio bolo vermelho com cobertura de cream cheese",
    price: "R$ 15,50",
    image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 3,
    name: "Focaccia Italiana",
    description: "Pão italiano com azeite, alecrim e flor de sal",
    price: "R$ 18,90",
    image: "https://images.unsplash.com/photo-1586444248879-bc592f5dc4a0?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 4,
    name: "Croissant Francês",
    description: "Autêntico croissant francês com massa folhada amanteigada",
    price: "R$ 9,50",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 5,
    name: "Torta de Limão",
    description: "Torta fresca de limão com base crocante e merengue",
    price: "R$ 12,90",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 6,
    name: "Quiche de Espinafre",
    description: "Quiche com espinafre fresco, queijo e noz-moscada",
    price: "R$ 16,50",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
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
          <div className="w-24 h-1 bg-pastry-red mx-auto mb-6"></div>
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
          <Button className="bg-pastry-red hover:bg-pastry-red/90 text-white rounded-full px-8">
            Ver cardápio completo
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
        ? "bg-pastry-red text-white" 
        : "bg-secondary text-foreground/70 hover:bg-secondary/80"
    )}
  >
    {children}
  </button>
);

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
    <div className="h-60 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 border-2 border-pastry-red"
      />
    </div>
    <CardContent className="p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <span className="text-pastry-red font-medium">{product.price}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
      <Button variant="outline" size="sm" className="w-full border-pastry-red text-pastry-red hover:bg-pastry-red/10">
        Adicionar ao carrinho
      </Button>
    </CardContent>
  </Card>
);

export default Products;
