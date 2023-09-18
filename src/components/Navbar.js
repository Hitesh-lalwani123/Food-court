import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [shadow, setShadow] = useState(null);
  const [textColor, setTextColor] = useState("text-white");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 480) {
      setTextColor("text-gray-600");
    } else {
      setTextColor("text-white");
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
      <ul className={`grid grid-cols-4 mx-auto my-auto font-bold ${textColor}`}>
        <li className="cursor-pointer hover:text-gray-500">Home</li>
        <li className="cursor-pointer hover:text-gray-500">Menu</li>
        <li className="cursor-pointer hover:text-gray-500">About</li>
        <li className="cursor-pointer hover:text-gray-500">Contact Us</li>
      </ul>
      <ul className={`grid grid-cols-2 mr-2 ${textColor}`}>
        <button className="mx-2 border-2 rounded-md z-50 font-semibold p-2 hover:bg-white hover:text-black">
          <Login />
        </button>
        <button className="mx-2 border-2 rounded-md z-50 font-semibold p-2 bg-white text-black hover:bg-transparent hover:text-white">
          <Register />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
