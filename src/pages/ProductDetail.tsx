import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { ArrowLeft, Minus, Plus, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<typeof PRODUCTS[0] | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, items } = useCart();
  
  useEffect(() => {
    if (id) {
      const foundProduct = PRODUCTS.find(p => p.id === id);
      setProduct(foundProduct);
      
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-24 page-container">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const isInCart = items.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    setIsAdding(true);
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  
  const increaseQuantity = () => setQuantity(q => q + 1);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };
  
  const relatedProducts = PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-24 page-container">
        <div className="mb-6">
          <Link to="/shop">
            <Button variant="ghost" size="sm" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="aspect-square w-full rounded-xl overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">UGX {product.price.toLocaleString()}</p>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={decreaseQuantity}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-10 text-center mx-2">{quantity}</span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Added to Cart
                </>
              ) : isInCart ? (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add Again
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 md:w-fit">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>{product.details}</p>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Shipping</h3>
              <p>We ship all orders within 1-2 business days. Shipping times vary depending on your location, but typically take 3-7 business days within the United States.</p>
              
              <h3>Returns</h3>
              <p>We accept returns within 30 days of delivery. Products must be unused and in their original packaging. Please contact our customer service team to initiate a return.</p>
            </div>
          </TabsContent>
        </Tabs>
        
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
