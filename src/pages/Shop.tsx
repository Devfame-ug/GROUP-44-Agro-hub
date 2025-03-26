
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Search, Sliders } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique categories from products
  const categories = Array.from(new Set(PRODUCTS.map(product => product.category)));
  
  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setCategoryFilters(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Filter products based on search term and category filters
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      categoryFilters.length === 0 || 
      categoryFilters.includes(product.category);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-24 page-container">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop Our Products</h1>
          <p className="text-muted-foreground max-w-3xl">
            Discover our selection of premium organic agricultural products, each carefully chosen to help you grow sustainably and naturally.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar for medium+ screens */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24 bg-card rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">Filter Products</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Search</h3>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-8"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={categoryFilters.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile filter controls */}
          <div className="md:hidden space-y-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Sliders className="h-4 w-4" />
              </Button>
            </div>
            
            {showFilters && (
              <div className="bg-card rounded-lg shadow-sm p-4">
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`mobile-category-${category}`}
                        checked={categoryFilters.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={`mobile-category-${category}`}
                        className="ml-2 text-sm font-normal cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Products grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
