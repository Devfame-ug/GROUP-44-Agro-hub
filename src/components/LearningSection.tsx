
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ARTICLES } from '@/data/articles';

const LearningSection: React.FC = () => {
  // Get 3 featured articles
  const featuredArticles = ARTICLES.slice(0, 3);
  
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn Organic Farming</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expand your knowledge with our expert guides and articles on sustainable, 
            organic growing methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link 
              key={article.id} 
              to={`/learn/${article.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link to="/learn">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
