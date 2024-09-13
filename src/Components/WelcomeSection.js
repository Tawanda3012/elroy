import React from 'react';
import { ChevronRight } from 'lucide-react';

// CSS for the floating animation
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

const WelcomeSection = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="px-4 py-16 bg-gray-100">
        <div className="container flex flex-col items-center mx-auto lg:flex-row">
          <div className="pr-8 mb-8 lg:w-1/2 lg:mb-0">
            <div className="relative mb-4">
              <div className="bg-[#006494] text-black px-4 py-2 inline-block">
                <p className="text-sm font-bold">Welcome to</p>
              </div>
            </div>
            <h2 className="mb-6 text-4xl font-bold">Elroy FoundationPrimary School</h2>
            <div className="mb-8 text-gray-700">
              <p className="mb-4 font-bold">We are so happy to welcome you to Elroy FoundationPrimary School, which serves a richly-diverse community.</p>
              <p className="mb-4">Elroy Foundationbelongs to the Association of Trust Schools (ATS). The Head and Board Members attend various gatherings, meetings and conferences to promote quality education within our schools.</p>
              <p>Elroy Foundationcurrently enrolls students from ECD up to Grade 7 for pupils between the ages of 3 to 13. As a member of ATS and CHISZ, Elroy FoundationSchool shares the values and ethos of other like-minded schools.</p>
            </div>
            <div className="space-x-4">
            <button className="px-4 py-2 text-white transition duration-300 bg-[#006494] rounded-md shadow fb-btn-reveal--primary-green hover:bg-green-600">
                Read More <ChevronRight className="inline-block ml-2" size={16} />
              </button>
              <button className="px-4 py-2 text-white transition duration-300 bg-[#006494] rounded-md shadow fb-btn-reveal--primary-green hover:bg-green-600">
                Contact <ChevronRight className="inline-block ml-2" size={16} />
              </button>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg " style={{ height:'300px'  }}>
              <img
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?stp=c228.0.913.913a_dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_HdsR5vbbBEQ7kNvgFjoVhW&_nc_ht=scontent-mad1-1.xx&_nc_gid=ASRl9wbUZqay6A5UFh8xuoD&oh=00_AYD97drJ3AOhL3c0PBD57ljZLVQd3oueY5QA4XwZIio6dw&oe=66E9E8C8"
                alt="Elroy Foundation Primary School"
                className="absolute top-0 left-0 object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 border-4 border-white opacity-50 h-3/4 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;