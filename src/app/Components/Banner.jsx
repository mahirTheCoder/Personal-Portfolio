"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import banner from "../../app/Images/banner.jpg";
import Image from "next/image";
import CountUp from "react-countup";
const Banner = () => {
  return (
    <>
      <section id="home" className="container ">
        <div className="both flex justify-between items-center   flex-wrap py-15">
          <div className="flex flex-col  bg-black  px-3 ">
            <p className="text-lg text-gray-400 mb-2">Hi, I am</p>
            <h1 className="lg:text-5xl text-3xl  font-bold text-amber-500  mb-3">
              Mahir Chowdhury
            </h1>
            <p className="text-gray-400 max-w-xl text-sm lg:block ">
              I’m a passionate web developer who loves creating modern,
              responsive, and user-friendly web experiences. Let’s build
              something amazing!
            </p>

            <div className="flex gap-6 mb-8 pt-5 md:mb-12">
              <a
                href="https://www.instagram.com/apurbo_chowdhury_75/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mahirthecoder-nextgen-3b7779369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1Bnp8ss9CF/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl p-2 border border-gray-600 rounded-full transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              {/* You can add more icons like LinkedIn, Twitter, etc. */}
            </div>
            <div className="button-part flex gap-7">
              <a
                href="#Contact"
                className="hover:bg-amber-600  text-white border-2 border-gray-500  px-5 py-3 rounded-lg font-semibold  transition text-xs lg:text-lg"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="hover:bg-amber-600 text-white border-2 border-gray-500  px-5 py-3 rounded-lg font-semibold text-xs lg:text-lg  transition"
              >
                Download CV
              </a>
            </div>

            {/* ----------counter part----- */}
  

{/* ----------counter part----- */}
<div className="counter-part py-7 px-6 bg-gray-900 mt-20 rounded-2xl text-white">
  

  <div className="allCounter flex flex-wrap justify-center md:flex-nowrap md:justify-between items-center gap-y-6 md:gap-x-4">
    
    <div className="partOne text-center md:text-left w-full md:w-auto"> 
      <h2 className="text-3xl font-bold text-amber-500 mb-2">
        <CountUp end={5} duration={3} />+
      </h2>
      <p className="text-gray-300">Experiences</p>
    </div>
    
    <div className="partOne text-center md:text-left w-full md:w-auto 
                  border-t border-gray-600 pt-6 mt-6 
                  md:border-t-0 md:pt-0 md:mt-0 
                  md:border-l md:pl-6">
      <h2 className="text-3xl font-bold text-amber-500 mb-2">
        <CountUp end={5} duration={3} />+
      </h2>
      <p className="text-gray-300">Projects Done</p>
    </div>
    
    {/* Part Three: Happy Clients */}
    <div className="partOne text-center md:text-left w-full md:w-auto 
                  border-t border-gray-600 pt-6 mt-6 
                  md:border-t-0 md:pt-0 md:mt-0 
                  md:border-l md:pl-6">
      <h2 className="text-3xl font-bold text-amber-500 mb-2">
        <CountUp end={5} duration={3} />+
      </h2>
      <p className="text-gray-300">Happy Clients</p>
    </div>
    
  </div>
</div>




          </div>
          <div className="img-part  ">
            <Image
              className=" rounded-4xl"
              src={banner}
              width={500}
              height={600}
              alt="img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
