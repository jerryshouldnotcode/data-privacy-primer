import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const Examples = () => {
  // Placeholder data for scam emails/ads
  const scamExamples = [
    { id: 1, caption: "Caption text for scam example 1" },
    { id: 2, caption: "Caption text for scam example 2" },
    { id: 3, caption: "Caption text for scam example 3" },
    { id: 4, caption: "Caption text for scam example 4" },
  ];

  return (
    <Layout>
      <HeroSection
        title="Examples"
        imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        imageAlt="Describe: Colorful software code representation"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout for iframe and YouTube */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left column: NYT iframe placeholder */}
            <div className="bg-gray-100 border border-gray-300 h-[400px] flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
                <iframe src="https://www.nytimes.com/interactive/2014/science/tracking-the-trackers.html" width="100%" height="100%" frameBorder="0" allowFullScreen>
                NYT's "Tracking the Trackers" interactive</iframe>
              </p>
            </div>
            
            {/* Right column: YouTube placeholder */}
            <div className="bg-gray-100 border border-gray-300 h-[400px] flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
              <iframe width="560" height="315"
              src="https://www.youtube.com/embed/HFyaW50GFOs?start=0&end=60"
              title="How ads follow you around the internet – Vox" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
              >Vox's 60-second explainer on data privacy</iframe>

              </p>
            </div>
          </div>
          
          {/* Masonry grid for scam examples */}
          <h2 className="text-2xl font-bold mb-6 text-primary">Real Scam Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scamExamples.map((example) => (
              <div key={example.id} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Screenshot placeholder */}
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <p className="text-gray-500 text-center p-2">
                    Redacted screenshot #{example.id}
                  </p>
                </div>
                {/* Caption */}
                <div className="p-4">
                  <p>{example.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Examples;
