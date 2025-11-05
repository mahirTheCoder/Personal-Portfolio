import React  from "react";
import { RiMenuSearchFill } from "react-icons/ri";
const Navbar = () => {



  return (
    <>
      <section id="navbar">
        <nav className=" hidden lg:block w-full border-b py-10 border-gray-800">
          <div className="container mx-auto px-6 py-8  flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-3xl font-semibold text-white hover:text-amber-500 duration-700">
              mahirTheCoder
            </h1>

            {/* Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-amber-500 transition">
                Home
              </a>
              <a href="#services" className="hover:text-amber-500 transition">
                Service
              </a>
              <a href="#about" className="hover:text-amber-500 transition">
                About
              </a>
              <a href="#portfolio" className="hover:text-amber-500 transition">
                Portfolio
              </a>
              <a href="#contact" className="hover:text-amber-500 transition">
                Contact Me
              </a>
            </div>

            {/* Hire Me Button */}
            <a
              href="#Contact"
              className="bg-amber-600 text-white px-5 py-2 rounded-sm font-semibold hover:bg-amber-600 transition"
            >
              Hire Me
            </a>
          </div>
        </nav>

        {/* <nav id="Responsive">
          <div className="content py-5 px-4">
            <div className="logo flex justify-between">
              <h1 className="text-xl font-semibold text-white hover:text-amber-500 duration-700">
                mahirTheCoder
              </h1>
              <button className="text-3xl text-amber-600">
                <RiMenuSearchFill />
              </button>
            </div>
          </div>
        </nav> */}
      </section>
    </>
  );
};

export default Navbar;
