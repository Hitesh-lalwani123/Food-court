import React, { useEffect, useRef, useState } from "react";
import "./MainCSS.css";
import Navbar from "./Navbar";
import { ComponentCarousel } from "./ComponentCarousel";
import { Menu } from "@material-tailwind/react";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <div className="main grid grid-rows-3">
        <div className="header row-span-1 row-start-1">
          <Navbar />
          <div className="h-screen w-full absolute top-0 backdrop-blur-md bg-transparent">
            <ComponentCarousel />
          </div>
        </div>
        <div className="content row-span-1 row-start-2">
          <Menu className = "absolute top-2"/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea tempore ut distinctio dolore ad, quia fugit repudiandae officia officiis reprehenderit cumque, eaque neque? Accusamus deleniti consequuntur similique impedit repellendus, nobis quis id vero commodi odio officia recusandae harum asperiores porro! Reiciendis voluptatum accusantium neque accusamus repudiandae voluptatibus blanditiis error dolorem ea aliquam explicabo esse, modi qui autem hic porro possimus aut recusandae odio tempora. Minima corporis adipisci nam voluptate fuga esse, fugit accusantium sunt totam. Totam, corporis!
        </div>
        <div className="footer row-span-1 row-start-3">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Main;
