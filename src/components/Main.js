import React, { useEffect, useRef, useState } from "react";
import "./MainCSS.css";
import Navbar from "./Navbar";
const Main = () => {
  const [background,setBackground] = useState(0)

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 480) {
      setBackground(1);
    }
    else{
      setBackground(0);
    }
  });
  return (
    <div className="main">
      <Navbar background = {background}/>
      <div className={`header`}></div>
    </div>
  );
};

export default Main;
