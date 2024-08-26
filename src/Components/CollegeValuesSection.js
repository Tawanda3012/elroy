import React from 'react';
import { FaRegStar } from 'react-icons/fa'; // Assuming you're using react-icons for the star icon

const ValueItem = ({ text }) => (
  <li className="flex items-center mb-4">
    <FaRegStar className="text-yellow-400 mr-2" />
    <span>{text}</span>
  </li>
);

const CollegeValuesSection = () => {
  return (
    <div className="w-full py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pr-8">
            <img 
              src="https://www.falconcollege.com/wp-content/uploads/2023/12/Falcon-College-Values.webp"
              alt="Falcon College Values"
              className="w-full h-auto"
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