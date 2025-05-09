
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
    name: "Pastel de Carne",
    description: "Clássico pastel brasileiro recheado com carne moída temperada",
    price: "R$ 7,50",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 3,
    name: "Pastel de Queijo",
    description: "Delicioso pastel com recheio cremoso de queijo minas",
    price: "R$ 7,00",
    image: "https://images.unsplash.com/photo-1618219878829-8afd92751bed?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 4,
    name: "Pastel de Camarão",
    description: "Pastel gourmet recheado com camarão ao molho especial",
    price: "R$ 9,50",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    category: "salgado"
  },
  {
    id: 5,
    name: "Pastel de Chocolate",
    description: "Pastel doce com recheio generoso de chocolate meio amargo",
    price: "R$ 8,90",
    image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1000&auto=format&fit=crop",
    category: "doce"
  },
  {
    id: 6,
    name: "Pastel de Frango",
    description: "Suculento pastel recheado com frango desfiado temperado",
    price: "R$ 7,50",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
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
            Escolha entre nossa seleção de pastéis artesanais feitos diariamente
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
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 border-2 border-black"
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
