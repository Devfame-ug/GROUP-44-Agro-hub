
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ARTICLES } from '@/data/articles';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<typeof ARTICLES[0] | undefined>(undefined);
  
  useEffect(() => {
    if (id) {
      const foundArticle = ARTICLES.find(a => a.id === id);
      setArticle(foundArticle);
      
      // Scroll to top when article changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-24 page-container">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/learn">
              <Button>Back to Learning Center</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-24">
        <div className="relative w-full h-[40vh] md:h-[50vh] mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 p-6 z-20">
            <Link to="/learn">
              <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center text-muted-foreground">
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
            </div>
          </div>
          
          <div 
            className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-foreground/90 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">Facebook</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Email</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
