
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <HeroSection
        title="Someone knows you're on this site. Without you knowing."
        imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
        imageAlt="Describe: Abstract digital representation of data mining"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto tech-border backdrop-blur-sm">
          <div className="prose lg:prose-xl">
            <p className="text-lg text-gray-700 mb-8">
             
              The apps we use everyday come at a cost - every click, photo, and shopping cart item is a data point that converges on our identity. 
              What if the people and companies we trust with this info are the figures we need to be wary of?
              
              Enter the world of data brokers, customized ads, and why we should be more cautious about what we put online.
 
            </p>
            
            <div className="flex justify-center">
              <Button
                className="tech-button"
                size="lg"
                asChild
              >
                <Link to="/quick-facts">Jump to Quick Facts</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
