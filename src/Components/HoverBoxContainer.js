import React from 'react';

const HoverBox = ({ title, link, backgroundImage }) => {
  return (
    <div className="w-full px-4 pb-4">
    <a href={link} className="block cursor-pointer">
      <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
        <div
          className="h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white bg-black bg-opacity-50">
            <p className="mb-0 text-xl font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
  );
};

const HoverBoxContainer = () => {
  return (
    <div className='flex justify-center md:w-1/3'>
        <div className="flex flex-col w-full md:w-1/2 ">
      <HoverBox 
        title="Campus Life"
        link="https://www.stgeorges.co.zw/our-student-life/"
        backgroundImage="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kIJ7HlV8h0sQ7kNvgFs27FL&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAD49e5vfEHp5VyZS5ivy2N2Cd0XCwRS5H0gDBi42A6DA&oe=66CF8AC8"
      />
      <HoverBox 
        title="Sports"
        link="https://www.stgeorges.co.zw/sport-at-a-glance/"
        backgroundImage="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/424599617_794323522715227_1705046749253830577_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9r5fNSFDlKIQ7kNvgGlySjt&_nc_ht=scontent.fhre2-2.fna&oh=00_AYCvIF6X7gXErb9-pCdoJk4lJ56S5WAUtRb2p1LInoW9gg&oe=66CF8E9D"
      />
    </div>
    <div className="flex flex-col w-full md:w-1/2 ">
      <HoverBox 
        title="Campus Life"
        link="https://www.stgeorges.co.zw/our-student-life/"
        backgroundImage="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kIJ7HlV8h0sQ7kNvgFs27FL&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAD49e5vfEHp5VyZS5ivy2N2Cd0XCwRS5H0gDBi42A6DA&oe=66CF8AC8"
      />
      <HoverBox 
        title="Sports"
        link="https://www.stgeorges.co.zw/sport-at-a-glance/"
        backgroundImage="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/424599617_794323522715227_1705046749253830577_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9r5fNSFDlKIQ7kNvgGlySjt&_nc_ht=scontent.fhre2-2.fna&oh=00_AYCvIF6X7gXErb9-pCdoJk4lJ56S5WAUtRb2p1LInoW9gg&oe=66CF8E9D"
      />
    </div>
    </div>
  );
};

export default HoverBoxContainer;