
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ARTICLES } from '@/data/articles';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(ARTICLES.map(article => article.category)))];
  
  // Filter articles based on search and category
  const filteredArticles = ARTICLES.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = 
      activeCategory === 'all' || 
      article.category === activeCategory;
      
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-24 page-container">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Center</h1>
          <p className="text-muted-foreground max-w-3xl">
            Expand your knowledge with our expert guides and articles on sustainable, 
            organic growing methods.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              className="pl-10 py-6"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category === 'all' ? 'All Topics' : category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or selecting a different category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <Link 
                    key={article.id} 
                    to={`/learn/${article.id}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      
                      <div className="mt-4 text-sm font-medium text-primary">
                        Read more
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
