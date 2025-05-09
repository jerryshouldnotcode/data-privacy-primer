
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <div className="relative">
      <div 
        className="h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
