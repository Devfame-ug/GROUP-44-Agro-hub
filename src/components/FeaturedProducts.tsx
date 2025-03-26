
import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = PRODUCTS.slice(0, 4);
  
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of premium organic agricultural products, 
            carefully chosen to help your garden thrive naturally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
