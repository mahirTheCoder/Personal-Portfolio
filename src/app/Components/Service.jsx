import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Service = () => {
  return (
    <>
      <section id="Service" className="container">
        <div className="content  mt-[110px]">
          <h2 className="text-4xl font-bold font text-center mb-20 font-sans">
            Tech Stack I Use
          </h2>

          <div className="skill-part flex justify-between mb-10 flex-wrap gap-10 lg:gap-0">
            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-amber-600 pb-8">
                <FaHtml5 />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                HTML & CSS
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Core building blocks of mordern web design with responsive
                layouts.{" "}
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-blue-400 pb-8">
                <FaReact />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                React.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Building first and dynamic user interface usingreact components
                and hooks.
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-white pb-8">
                <SiNextdotjs />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Next.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Creating SEO-friendly and high-performance web apps with Next.js
                framework
              </p>
            </div>
          </div>
          <div className="skill-part flex justify-between mb-10 flex-wrap gap-10 lg:gap-0">
            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-green-600 pb-8">
                <RiNodejsLine />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Node.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Server-side Javascript development for scable applications and
                Apis
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-amber-400 pb-8">
                <SiExpress />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Express.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Minimal and Flexibale Node.js framework for backend REST Apis.
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20 rounded-xl "
            >
              <button className="text-5xl text-green-600 pb-8">
                <SiMongodb />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                MongoDB
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                NoSQL database for managing and strong data efficiently.
              </p>
            </div>
          </div>
          <div className="skill-part flex justify-between mb-10 flex-wrap gap-10 lg:gap-0 ">
            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-blue-400 pb-8">
                <RiTailwindCssFill />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Tailwind CSS
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Moder utility-first css framework for and responsive UI design.
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20  rounded-xl "
            >
              <button className="text-5xl text-green-300 pb-8">
                <FaDatabase />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                REST APIs
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                designing structured and secure api endPoints for client-server
                communication
              </p>
            </div>

            <div
              className="partone w-[400px] h-[322px] px-7 flex flex-col justify-center  bg-gray-950 border border-gray-800 
                           hover:border-amber-500 hover:shadow-amber-500/20 shadow-xl rounded-xl "
            >
              <button className="text-5xl text-white pb-8">
                <FaGithub />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                GIT & Github
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] ">
                Version control and collaborative development using Git
                Workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
