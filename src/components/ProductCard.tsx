
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
}) => {
  const { addItem, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const isInCart = items.some(item => item.id === id);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({ id, name, price, image });
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div 
      className={cn(
        "group relative bg-card rounded-xl shadow-sm overflow-hidden transition-all duration-300 card-hover",
        isAdding && "ring-2 ring-primary"
      )}
    >
      <Link to={`/product/${id}`} className="block aspect-square w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 z-20">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-medium text-foreground truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground truncate">
            {description}
          </p>
        </Link>
        
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-medium">${price.toFixed(2)}</p>
          
          <Button
            variant={isInCart ? "outline" : "default"}
            size="sm"
            className={cn(
              "transition-all duration-300",
              isInCart && "border-green-500 text-green-500"
            )}
            onClick={handleAddToCart}
          >
            {isAdding ? (
              <Check className="h-4 w-4 mr-1" />
            ) : isInCart ? (
              <Check className="h-4 w-4 mr-1" />
            ) : (
              <ShoppingCart className="h-4 w-4 mr-1" />
            )}
            {isAdding ? "Added" : isInCart ? "In Cart" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
