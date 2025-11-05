import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

import { FaInstagram, FaDribbble, FaBehance, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section id='footer' className=" bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20   py-10 md:py-16 mt-20 md:mt-25"> {/* Adjusted background and padding */}
        <footer className="container mx-auto px-4 text-center"> {/* Centered container */}
          {/* Logo Section */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-600 logo-text">mahirTheCoder</h3> {/* Red text for LOGO */}
          </div>

          {/* Navigation Links */}
          <div className="mb-8 md:mb-12">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg md:text-xl font-medium">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                About me
              </a>
              <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                Portfolio
              </a>
              <a href="#Contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                Contact me
              </a>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8 md:mb-12">
            <a href="https://www.instagram.com/apurbo_chowdhury_75/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mahirthecoder-nextgen-3b7779369" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300">
              <CiLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1Bnp8ss9CF/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300">
              <FaFacebookF />
            </a>
            {/* You can add more icons like LinkedIn, Twitter, etc. */}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12 text-gray-400 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <FaEnvelope className="lg:text-xl text-sm" />
              <span>mahirchowdhury518@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="lg:text-xl text-sm" />
              <span>+880 1894 277 518</span>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-700 w-full max-w-xl mx-auto mb-6 md:mb-8" />

          {/* Designed by / Copyright */}
          <div className="text-gray-500 text-sm md:text-base">
            <p>All rights reseurved by @mahir</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;