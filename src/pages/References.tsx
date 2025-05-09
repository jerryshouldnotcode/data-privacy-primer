
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const References = () => {
  return (
    <Layout>
      <HeroSection
        title="References"
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        imageAlt="Describe: Computer with data visualization"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-primary">References</h2>
          
          <ol className="list-decimal pl-6 space-y-6">
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
            <li className="text-lg">
              [Author Last Name], [First Initial]. ([Year]). [Title of article]. [Name of Journal or Publication], [Volume](Issue), [Page range]. [DOI or URL]
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default References;
