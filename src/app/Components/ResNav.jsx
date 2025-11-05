"use client";
import React, { useState } from "react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { RiMenuSearchFill } from "react-icons/ri";
import { GiCrossedAirFlows } from "react-icons/gi";

import Link from "next/link";

const menuitem = [
 {
   menuName: "Home",
   navLink: "/",
 },
 {
   menuName: "Services",
   navLink: "#Service",
 },
 {
   menuName: "About Me",
   navLink: "#home",
 },
 {
   menuName: "Portfolio",
   navLink: "#Portfolio",
 },
 {
   menuName: "contact Us",
   navLink: "#Contact",
 },
];
const ResNav = () => {
  const [showMenu, setShowMenu] = useState(false);


  return (
    <>
      <div className="lg:hidden sticky  absolute left-0 top-0 z-50 w-full bg-black-bg">
        <div>
          <div className="main flex items-center justify-between px-5 py-7 bg-gray-950 rounded-lg ">

            {/* ------logo------ */}
            <div className="logo ">
              <h1 className="text-xl text-theme font-bold font-lato">mahirTheCoder</h1>
            </div>
            <div
              onClick={() => setShowMenu(true)}
              className="menu cursor-pointer text-amber-500 text-2xl"
            >
              <RiMenuSearchFill  />
            </div>

         
          </div>
        </div>

        {showMenu && (
          <div className="menu w-full bg-gray-950 absolute left-0 top-0 z-50">
            <div className="main flex items-center justify-between px-6 py-6 ">
              <div className="logo ">
                <h1 className="text-xl text-amber-600 font-bold font-lato">
                 mahirTheCoder
                </h1>
              </div>

              <div
                onClick={() => setShowMenu(!showMenu)}
                className="menu cursor-pointer text-amber-600 text-xl"
              >
                <GiCrossedAirFlows />

              </div>
            </div>

            <div className="flex flex-col items-center gap-7 py-6  ">
              {menuitem.map((item, id) => (
                <Link
                  className="text-sm text-white hover:text-theme font-medium font-playfair"
                  key={id}
                  href={item.navLink}
                >
                  {item.menuName}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResNav;
