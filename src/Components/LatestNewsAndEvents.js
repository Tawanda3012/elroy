import React from 'react';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const SectionCard = ({ title, buttonText, buttonLink, bgColor, textColor, icon: Icon }) => (
  <section className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} h-full flex flex-col justify-between`}>
    <div>
      <Icon className="w-12 h-12 mb-4" />
      <h2 className="mb-4 text-2xl font-bold leading-tight">{title}</h2>
    </div>
    <div>
      <a
        href={buttonLink}
        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 transition duration-200 bg-white rounded-full hover:bg-blue-100"
      >
        {buttonText}
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </section>
);

const LatestNewsAndEvents = () => {
  return (
    <div className="container px-4 mx-auto my-20">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full p-4 md:w-3/4">
          <SectionCard 
            title="Latest news"
            buttonText="Browse more"
            buttonLink="https://peterhousegroup.co.zw/blog/"
            bgColor="bg-[#D6D6D4]"
            textColor="text-[#2A5276]"
            icon={Newspaper}
          />
        </div>
        <div className="w-full p-4 md:w-1/4">
          <SectionCard 
            title="Elroy Foundation Events"
            buttonText="View now"
            buttonLink="https://peterhousegroup.co.zw/events/"
            bgColor="bg-gradient-to-r from-[#006494] to-[#006494]"
            textColor="text-white"
            icon={Calendar}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndEvents;