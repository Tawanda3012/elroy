import React from 'react';
import { ChevronRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="px-4 py-8 bg-gray-100 md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mb-8 md:w-1/2 md:pr-8 md:mb-0">
            <div className="bg-[#006494] text-white px-3 py-1 inline-block mb-4">
              <p className="text-sm font-bold">Welcome to</p>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Elroy Foundation Primary School</h2>
            <div className="mb-6 text-gray-700">
              <p className="mb-4">We are happy to welcome you to Elroy Foundation Primary School, serving a richly-diverse community from ECD to Grade 7 for pupils aged 3 to 13.</p>
              <p>As a member of the Association of Trust Schools (ATS) and CHISZ, we share values and ethos with like-minded schools, promoting quality education.</p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button className="px-4 py-2 text-white bg-[#006494] rounded-md shadow hover:bg-[#005480] transition duration-300 flex items-center justify-center">
                Read More <ChevronRight className="ml-2" size={16} />
              </button>
              <button className="px-4 py-2 text-white bg-[#006494] rounded-md shadow hover:bg-[#005480] transition duration-300 flex items-center justify-center">
                Contact <ChevronRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
              <img
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?stp=c228.0.913.913a_dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_HdsR5vbbBEQ7kNvgFjoVhW&_nc_ht=scontent-mad1-1.xx&_nc_gid=ASRl9wbUZqay6A5UFh8xuoD&oh=00_AYD97drJ3AOhL3c0PBD57ljZLVQd3oueY5QA4XwZIio6dw&oe=66E9E8C8"
                alt="Elroy Foundation Primary School"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;