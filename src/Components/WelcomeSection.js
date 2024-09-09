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
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 pr-8">
            <div className="relative mb-4">
              <div className="bg-[#006494] text-black px-4 py-2 inline-block transform -rotate-2">
                <p className="text-sm font-bold">Welcome to</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">Elroy FoundationPrimary School</h2>
            <div className="text-gray-700 mb-8">
              <p className="font-bold mb-4">We are so happy to welcome you to Elroy FoundationPrimary School, which serves a richly-diverse community.</p>
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
          <div className="lg:w-1/2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
            <div className="relative overflow-hidden rounded-lg shadow-lg " style={{ height:'300px'  }}>
              <img
                src="https://lusitaniaprimary.co.zw/wp-content/uploads/2023/10/Lusitania_Primary_School_05.jpg"
                alt="Lusitania Primary School"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-white opacity-50 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;