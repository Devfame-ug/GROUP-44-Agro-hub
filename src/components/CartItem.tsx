
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType, useCart } from '@/contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem, updateQuantity } = useCart();
  
  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };
  
  return (
    <div className="flex items-center py-4 border-b border-border last:border-0 gap-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-primary transition-colors">
          {item.name}
        </Link>
        <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={handleDecreaseQuantity}
        >
          <Minus className="h-4 w-4" />
        </Button>
        
        <span className="w-8 text-center">{item.quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={handleIncreaseQuantity}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="w-20 text-right font-medium">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={() => removeItem(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
