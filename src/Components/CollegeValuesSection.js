import React from 'react';
import { FaRegStar } from 'react-icons/fa'; // Assuming you're using react-icons for the star icon

const ValueItem = ({ text }) => (
  <li className="flex items-center mb-4">
    <FaRegStar className="mr-2 text-yellow-400" />
    <span>{text}</span>
  </li>
);

const CollegeValuesSection = () => {
  return (
    <div className="w-full py-12 mt-20">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col-reverse items-center md:flex-row">
          <div className="w-full mt-8 md:w-1/2 md:mt-0 md:pr-8 h-[450px] ">
            <img 
              src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/367455901_695936475887266_3692020753916654816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JeMfWciomEUQ7kNvgEe5iwu&_nc_ht=scontent-fra5-2.xx&oh=00_AYB8dd-ATTLAfeCWPfWtFifwk2xz9tepcvsAZPA13Zw-6A&oe=66D3498A"
              alt="Elroy Foundation Values"
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <ul className="list-none">
              <ValueItem text="Vital, disciplined and persevering in body" />
              <ValueItem text="Curious, enthusiastic and fair in thinking" />
              <ValueItem text="Sensitive, helpful and respectful in relationships" />
              <ValueItem text="Humble, honest and wise in leadership" />
              <ValueItem text="Cheerful, confident and generous in spirit" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeValuesSection;