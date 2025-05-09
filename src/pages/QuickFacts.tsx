
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Progress } from '@/components/ui/progress';

const QuickFacts = () => {
  return (
    <Layout>
      <HeroSection
        title="Quick Facts"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        imageAlt="Describe: Person looking at data on laptop screen"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Canva infographic placeholder */}
          <div className="bg-gray-100 border border-gray-300 h-[2000px] w-full max-w-[800px] mb-8 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">
              Center a vertical Canva infographic placeholder (800 × 2000 px)
            </p>
          </div>
          
          {/* PDF download */}
          <div className="mb-12">
            <p className="text-center mb-2">
              Download a printable PDF version
            </p>
            <a 
              href="#" 
              className="text-primary hover:text-primary/80 underline"
              aria-label="Download PDF version of infographic"
            >
              Download PDF
            </a>
          </div>
          
          {/* Progress bar */}
          <div className="w-full max-w-lg">
            <p className="text-center mb-2">
              Average data points a broker holds on one person
            </p>
            <Progress value={1000} max={1500} className="h-4" />
            <p className="text-right text-sm mt-1">0 / 1500</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuickFacts;
