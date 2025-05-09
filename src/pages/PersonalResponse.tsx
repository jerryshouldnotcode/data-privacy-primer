
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const PersonalResponse = () => {
  return (
    <Layout>
      <HeroSection
        title="Personal Response"
        imageSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        imageAlt="Describe: Person reflecting on digital privacy"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column: video placeholder */}
            <div className="bg-gray-100 border border-gray-300 h-[350px] flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
                Placeholder for a 2-minute selfie video embed (YouTube unlisted)
              </p>
            </div>
            
            {/* Right column: text box */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">What surprised me most</h2>
              <div className="prose">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus nulla, vel fermentum nibh tincidunt et. Phasellus accumsan tellus ut libero. 
                </p>
                <p>
                  Aliquam semper felis nec turpis accumsan, quis pharetra augue efficitur. Praesent lacinia magna in massa efficitur, vitae blandit quam molestie. Donec ac ante et tellus interdum consectetur. Nulla facilisi. Morbi ac gravida ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nisl felis, hendrerit a blandit quis, feugiat quis mauris.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vestibulum libero in tellus malesuada, eu faucibus risus posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalResponse;
