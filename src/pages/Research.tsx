
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const Research = () => {
  return (
    <Layout>
      <HeroSection
        title="Research"
        subtitle="How data leaves your device and lands on a broker's desk"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
        imageAlt="Describe: Digital circuit board representing data flow"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">How data leaves your device and lands on a broker's desk</h2>
          
          {/* Google Slides placeholder */}
          <div className="bg-gray-100 border border-gray-300 h-[370px] w-full max-w-[650px] mx-auto mb-8 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">
              Embed-ready placeholder for a 5-slide narrated Google Slides deck (650 × 370 px)
            </p>
          </div>
          
          {/* Key findings */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-lg">[Finding 1]</li>
              <li className="text-lg">[Finding 2]</li>
              <li className="text-lg">[Finding 3]</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
