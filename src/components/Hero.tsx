
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/adcbdd78-fecc-41b7-a87c-db2a758cb2ae.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-wider border-4 border-white/80 px-6 py-4">
                ALTERNATIVE
                <br />
                FARMING
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mt-4 tracking-wide">
                - HIGH QUALITY BRAND -
              </p>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/shop" 
                className="btn-primary bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
              >
                Shop Products
              </Link>
              <Link 
                to="/learn" 
                className="btn-outline text-white border-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
