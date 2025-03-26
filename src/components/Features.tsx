
import React from 'react';
import { Leaf, Truck, Award, Sprout } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Organic Products',
    description: 'All our products are 100% organic, ethically sourced, and free from harmful chemicals.',
  },
  {
    icon: Sprout,
    title: 'Expert Guidance',
    description: 'Learn sustainable farming methods from our comprehensive guides and resources.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'We ensure your products reach you quickly and in perfect condition.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'We stand behind the quality of every product we sell with our satisfaction guarantee.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="section-padding bg-primary-50/50 dark:bg-primary-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Agro-hub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of shopping with us and joining our community of sustainable gardeners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
