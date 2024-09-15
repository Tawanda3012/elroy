import React from 'react';
import { MdFiberSmartRecord } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#006494] to-[#006494] text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="mb-8 sm:mb-0">
            <div className="flex items-center mb-4">
              <MdFiberSmartRecord className="mr-2 text-3xl" />
              <h2 className="text-2xl font-bold tracking-wider">Elroy</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Education is the key to a bright future. As parents, choose the best for your children, regardless of financial circumstances.
            </p>
            {/* Added Phone Number Section */}
            <p className="mt-4">
              <span className="font-semibold">Call Us:</span> 
              <a href="tel:+1234567890" className="ml-1 text-white transition-colors duration-300 hover:text-gray-300">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Gallery</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Get Help</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Subscribe to News</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Speak with Someone</a></li>
              <li><a href="#" className="transition-colors duration-300 hover:text-gray-300">Advise Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-white transition-colors duration-300 hover:text-gray-300">
                <ImFacebook2 className="text-3xl" />
              </a>
              <a href="/" className="text-white transition-colors duration-300 hover:text-gray-300">
                <FaWhatsappSquare className="text-3xl" />
              </a>
              <a href="/" className="text-white transition-colors duration-300 hover:text-gray-300">
                <FaTwitterSquare className="text-3xl" />
              </a>
              <a href="/" className="text-white transition-colors duration-300 hover:text-gray-300">
                <FaInstagramSquare className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-12 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Elroy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;