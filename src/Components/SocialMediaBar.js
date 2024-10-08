import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaBar = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook className="text-2xl md:text-3xl" />, url: 'https://www.facebook.com/profile.php?id=100064127590185&sk=photos_by' },
    { icon: <FaTwitter className="text-2xl md:text-3xl" />, url: 'https://www.twitter.com' },
    { icon: <FaInstagram className="text-2xl md:text-3xl" />, url: 'https://www.instagram.com' },
  ];

  return (
    <div className="bg-[#2A5276] py-4 flex justify-center items-center space-x-4">
    <span className="text-sm text-white">Follow us on Social Media</span>
    {socialMediaLinks.map((link, index) => (
      <a
        href={link.url}
        key={index}
        className="text-white hover:opacity-70"
        target="_blank" // Opens link in a new tab
        rel="noopener noreferrer" // Security best practice
      >
        {link.icon}
      </a>
    ))}
  </div>
  );
};

export default SocialMediaBar;