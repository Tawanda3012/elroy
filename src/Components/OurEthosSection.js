import React from "react";

const EthosItem = ({ imageSrc, altText, description }) => (
  <div className="flex flex-col items-center mb-8 md:mb-0">
    <img src={imageSrc} alt={altText} className="w-24 h-24 mb-4" />
    <p className="text-center">{description}</p>
  </div>
);

const OurEthosSection = () => {
  return (
    <div className="w-full py-12 mt-20 mb-4 bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Ethos</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <EthosItem
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Christian-Values.svg"
            altText="Elroy Foundation School Christian Values"
            description=" Christian values and morals, integrated with contemporary education"
          />
          <EthosItem
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Personal-Growth.svg"
            altText="Elroy FoundationPersonal Growth"
            description="Personal growth through motivation and goal-setting"
          />
          <EthosItem
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Balance.svg"
            altText="Elroy Foundation Balance"
            description="A balance of individual excellence and collaborative spirit, embracing diversity"
          />
          <EthosItem
            imageSrc="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-Postitive-Environment.svg"
            altText="Elroy Foundation Positive Environment"
            description="A nurturing environment enabling students to reach their full potential in life"
          />
        </div>
      </div>
    </div>
  );
};

export default OurEthosSection;
