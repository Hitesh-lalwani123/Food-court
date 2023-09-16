import React, { useState } from "react";

const Navbar = () => {
  const [shadow, setShadow] = useState(null);
  const [textColor, setTextColor] = useState('text-white');

  window.addEventListener("scroll", () => {

    if (window.scrollY >= 480) {
      setTextColor('text-gray-600')
      
    } else {
      setTextColor('text-white')
    }
    if (window.scrollY >= 2) {
      setShadow("shadow-sm shadow-white");
      
    } else {
      setShadow(null);
    }
  });
  return (
    <div
      className={`flex flex-row p-4 sticky z-10 scroll-m-2 top-0 transition-position duration-200 bg-transparent backdrop-blur-md ${shadow}`}
    >
      <ul className={`grid grid-cols-4 mx-auto font-bold ${textColor}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
