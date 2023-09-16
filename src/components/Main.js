import React, { useEffect, useRef, useState } from "react";
import "./MainCSS.css";
import Navbar from "./Navbar";
import { ComponentCarousel } from "./ComponentCarousel";
const Main = () => {
  return (
    <div className="main">
      <Navbar />
      {/* <img src={images[1]} className="header" alt="" /> */}
      {/* <div className="header"></div> */}
      <div className="!h-screen w-full absolute top-0 backdrop-blur-md bg-transparent">
        <ComponentCarousel/>
      </div>
    </div>
  );
};

export default Main;
