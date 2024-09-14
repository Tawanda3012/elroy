import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const ValueItem = ({ text }) => (
  <li className="flex items-start mb-6">
    <FaRegStar className="flex-shrink-0 w-6 h-6 mt-1 mr-3 text-yellow-400" />
    <span className="flex-grow text-sm md:text-base">{text}</span>
  </li>
);

const CollegeValuesSection = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="w-full mt-8 md:w-1/2 md:mt-0 md:pr-8 h-[250px] flex items-center justify-center">
            <img 
              src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/369856174_695931739221073_2852282382575580093_n.jpg?stp=c0.150.913.913a_dst-jpg_s206x206&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=z8YJqo9-k0YQ7kNvgFPhSZz&_nc_ht=scontent-mad1-1.xx&oh=00_AYBTMsfBgR78sDANEzbzKDKp6wo3PaZJxwnxJmA8qykISA&oe=66E9D70B"
              alt="Elroy Foundation Values"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-4 list-none">
              <ValueItem text="To provide holistic learning opportunity to all" />
              <ValueItem text="To strive for academic excellence in holistic learning, becoming the best in the community and to God." />
              <ValueItem text="Christian education is the backbone of our conceptual framework." />
              <ValueItem text="Each child is a unique individual who fully develops at his/her own natural pace depending on unique family environment and the level of support from the school and at home." />
              <ValueItem text="Cheerful, confident and generous in spirit" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeValuesSection;