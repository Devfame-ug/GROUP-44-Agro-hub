
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedProducts from '@/components/FeaturedProducts';
import LearningSection from '@/components/LearningSection';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <Hero />
        <Features />
        <FeaturedProducts />
        <LearningSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
