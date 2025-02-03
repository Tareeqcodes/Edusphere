import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Social Icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 hidden md:block font-poppins text-black p-6">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 md:justify-start">
          <a href="/" className="hover:text-orange-600 transition-all">About</a>
          <a href="/" className="hover:text-orange-600 transition-all">Contact</a>
          <a href="/" className="hover:text-orange-600 transition-all">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex mt-4 md:mt-0 space-x-4">
          <a href="#" className="text-gray-500 hover:text-orange-600 transition-all">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-600 transition-all">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-600 transition-all">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center mt-4">
        &copy; {currentYear} Edusphere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
