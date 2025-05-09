
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
            Booth, B., & CNBC. (2024, October 11). What internet data brokers have on you — and how you can start to get it back. NBC Los Angeles; NBC Southern California.
            https://www.nbclosangeles.com/news/business/money-report/what-internet-data-brokers-have-on-you-and-how-you-can-start-to-get-it-back/3533513/
            </li>

            <li className="text-lg">
            Federal Trade Commission. (2024, September 18). FTC Staff Report Finds Large Social Media and Video Streaming Companies Have Engaged in Vast Surveillance of Users with Lax Privacy Controls and Inadequate Safeguards for Kids and Teens. Federal Trade Commission. 
            https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-staff-report-finds-large-social-media-video-streaming-companies-have-engaged-vast-surveillance 
            </li>

            <li className="text-lg">
              Ferraro, A. (2022). What are Data Brokers? Everything You Need to Know. Privacy.com. 
              https://www.privacy.com/blog/what-are-data-brokers
            </li>

            <li className="text-lg">
              Stouffer, C. (2023, October 19). What are data brokers? Tips to keep your data safe - Norton. Us.norton.com. 
              https://us.norton.com/blog/privacy/data-brokers
            </li>

            <li className="text-lg">
              Valle, G. D. (2024, September 19). FTC study: social media and video streaming companies are spying on users. The Verge. 
              https://www.theverge.com/2024/9/19/24249073/ftc-data-retention-privacy-report-facebook-meta-youtube-reddit?
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
