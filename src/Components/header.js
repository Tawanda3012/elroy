import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white text-black py-2.5 px-5 flex flex-wrap md:justify-center items-center border-b border-gray-200 sticky top-0 transition-all duration-300 justify-between z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="flex items-center justify-between md:w-auto">
        {/* Logo can be added here */}
        {/* <div className="logo">
          <Link to="/">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
          </Link>
        </div> */}
        
        {/* Hamburger menu - only visible on mobile */}
        <div className="hamburger-menu cursor-pointer md:hidden z-[1000]" onClick={handleToggle}>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Navigation - full width on mobile when open, normal on desktop */}
      <nav className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
        <ul className="flex flex-col p-0 m-0 list-none md:flex-row">
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-[#2A5276]">Home</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/about" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-[#2A5276]">ABOUT</Link>
          </li>
         
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/news" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-[#2A5276]">NewsEventsPage</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/admissions" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-[#2A5276]">ENROLL</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-[#2A5276]">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      {/* <div className="mt-4 cta-buttons md:mt-0">
        <button className="donate border-none bg-[#2A5276] text-white text-decoration-none py-2 px-4 font-bold tracking-wider uppercase cursor-pointer hover:bg-green-500 transition-colors duration-300 rounded-md" onClick={closeMenu}>DONATE</button>
      </div> */}
    </header>
  );
};

export default Header;