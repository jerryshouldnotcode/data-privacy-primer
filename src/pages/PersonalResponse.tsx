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
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="bg-gray-100 border border-gray-300 mb-8 flex items-center justify-center h-[350px] w-full max-w-[800px]">
            <iframe
              src="https://www.youtube.com/embed/kOZVNYvLZMU" // Embed link
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Personal Response Video"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalResponse;
