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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 sm:mb-0">
            <div className="flex items-center mb-4">
              <MdFiberSmartRecord className="text-3xl mr-2" />
              <h2 className="text-2xl font-bold tracking-wider">Elroy</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Education is the key to a bright future. As parents, choose the best for your children, regardless of financial circumstances.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Get Help</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Subscribe to News</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Speak with Someone</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Advise Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
                <ImFacebook2 className="text-3xl" />
              </a>
              <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaWhatsappSquare className="text-3xl" />
              </a>
              <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaTwitterSquare className="text-3xl" />
              </a>
              <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
                <FaInstagramSquare className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Elroy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;