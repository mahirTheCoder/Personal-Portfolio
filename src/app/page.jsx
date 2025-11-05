import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ResNav from "./Components/ResNav";

const page = () => {
  return (
    <>
      <Navbar />
      <ResNav/>
      <Banner />
      <Service />
      <Portfolio/>
      <Contact />
      <Footer />
    </>
  );
};

export default page;
