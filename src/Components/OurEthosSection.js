import React from 'react';

const EthosItem = ({ imageSrc, altText, description }) => (
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <img 
      src={imageSrc} 
      alt={altText} 
      className="w-24 h-24 mb-4"
    />
    <p className="text-center">{description}</p>
  </div>
);

const OurEthosSection = () => {
  return (
    <div className="w-full bg-gray-100 py-12 mb-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Ethos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <EthosItem 
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Christian-Values.svg"
            altText="Falcon Christian Values"
            description="Enduring Christian values and morals, tempered by relevant 21st century education."
          />
          <EthosItem 
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Personal-Growth.svg"
            altText="Falcon Personal Growth"
            description="Personal growth through motivation and goal-setting."
          />
          <EthosItem 
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Balance.svg"
            altText="Falcon Balance"
            description="A balance of Western individual competitiveness and the African Ubuntu spirit of cooperation and teamwork."
          />
          <EthosItem 
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Postitive-Environment.svg"
            altText="Falcon Positive Environment"
            description="A positive, enabling environment in which students can grow into effective, respectable young people, capable of realising their full potential in life."
          />
        </div>
      </div>
    </div>
  );
};

export default OurEthosSection;