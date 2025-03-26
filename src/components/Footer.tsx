
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-primary font-bold text-2xl mb-4">Agro-hub</h2>
            <p className="text-muted-foreground">
              Your one-stop shop for organic agricultural products and
              knowledge.
            </p>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-muted-foreground hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-foreground font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input-field flex-grow rounded-r-none"
                />
                <button className="btn-primary rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Agro-hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
