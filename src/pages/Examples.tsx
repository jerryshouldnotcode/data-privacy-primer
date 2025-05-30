import React, { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const Examples = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Placeholder data for scam emails/ads
  const scamExamples = [
    { id: 1, caption: "Regular spam email advertising Bitcoin" },
    { id: 2, caption: "Spam Japanese email advertising Bitcoin" },
    { id: 3, caption: "Spam text I got from number impersonating the USPS" },
    { id: 4, caption: "Spam text I got from number impersonating the US PS (2)" },
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/AU66C6HePfg?si=WMvcXL5AXd9bNRVd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"></iframe>
                <span></span>
                Murgia's personal reflection on data privacy - a TEDx Talk
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
              <span></span>
              Vox's 60-second explainer on data privacy
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
                  <img
                    src={`/scam-photos/IMG_696${example.id}.PNG`}
                    alt={`Scam example ${example.id}`}
                    className="object-cover h-full w-full cursor-pointer"
                    onClick={() => openModal(`/scam-photos/IMG_696${example.id}.PNG`)}
                  />
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

      {/* Modal for expanded image */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
          <img src={selectedImage} alt="Expanded view" className="max-w-full max-h-full" />
        </div>
      )}
    </Layout>
  );
};

export default Examples;
