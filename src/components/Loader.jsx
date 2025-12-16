import React from "react";
import logo from "../assets/logo/image.png"; 

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-32 animate-bounce" 
      />
    </div>
  );
};

export default Loader;
