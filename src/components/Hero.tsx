
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-background dark:from-primary-900/20 dark:to-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-32 md:py-40 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Grow with</span>
              <span className="text-primary block"> Nature's Wisdom</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Discover premium organic agricultural products and learn sustainable 
              farming techniques to nurture both your garden and the planet.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn-primary text-center">
                Shop Products
              </Link>
              <Link to="/learn" className="btn-outline text-center">
                Explore Guides
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
              {/* Hero image placeholder - replace with actual hero image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform rotate-1 translate-x-4 md:translate-x-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300 dark:from-primary-800 dark:to-primary-600"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary-foreground">
                  Agro-hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
