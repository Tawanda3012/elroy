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
        backgroundImage="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/367459103_695936412553939_8317097444518948852_n.jpg?stp=c216.0.864.864a_dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=ABb6lqJvrUcQ7kNvgHjyyDT&_nc_ht=scontent-mad2-1.xx&oh=00_AYBitrPqV0eczBPtfqNVdWtvFtSgRfOI3e3Y-h-EiDWS_A&oe=66E9D180"
      />
      <HoverBox 
        title="Sports"
        link="https://www.stgeorges.co.zw/sport-at-a-glance/"
        backgroundImage="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/367473213_695936289220618_6061502960364702976_n.jpg?stp=c0.143.864.864a_dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=3w3aPnck4uEQ7kNvgHC1rDp&_nc_ht=scontent-mad2-1.xx&_nc_gid=ASRl9wbUZqay6A5UFh8xuoD&oh=00_AYCTwf7ENmC_sXTd_eAzDLhVyiQR2BcXvGmS02qSk7XPkA&oe=66E9D83F"
      />
    </div>
    <div className="flex flex-col w-full md:w-1/2 ">
      <HoverBox 
        title="Campus Life"
        link="https://www.stgeorges.co.zw/our-student-life/"
        backgroundImage="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/367454869_695931789221068_4838954063985536553_n.jpg?stp=c228.0.913.913a_dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=tnw8N4C1kB4Q7kNvgFEm244&_nc_ht=scontent-mad1-1.xx&_nc_gid=ASRl9wbUZqay6A5UFh8xuoD&oh=00_AYAfs8ilcLtEi-t3CUiZ0Fdg2X7IkNPbKbJ4D-aXuMJA0A&oe=66E9E4B4"
      />
      <HoverBox 
        title="Sports"
        link="https://www.stgeorges.co.zw/sport-at-a-glance/"
        backgroundImage="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/367457266_695936382553942_1240451291122721671_n.jpg?stp=c216.0.864.864a_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=oxjTg7G8svoQ7kNvgG5UtfF&_nc_ht=scontent-mad2-1.xx&oh=00_AYBGa9G5ZXFSYkV_i_ACKDERGwyR2DCi75nBDWhXe-JKKw&oe=66E9BC08"
      />
    </div>
    </div>
  );
};

export default HoverBoxContainer;