
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/f6fcdee5-8df0-4553-84d6-5e892ccca3c6.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative z-10 py-32 md:py-40 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Grow with</span>
              <span className="text-primary block"> Nature's Wisdom</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Discover premium organic agricultural products and learn sustainable 
              farming techniques to nurture both your garden and the planet.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn-primary text-primary bg-white hover:bg-white/90 text-center">
                Shop Products
              </Link>
              <Link to="/learn" className="btn-outline text-white border-white hover:bg-white/10 text-center">
                Explore Guides
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform rotate-1 translate-x-4 md:translate-x-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-primary-300/50 dark:from-primary-800/50 dark:to-primary-600/50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white">
                  Agro-hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
