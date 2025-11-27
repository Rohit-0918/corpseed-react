import React from "react";
import logo from "./../../src/assets/logo/logo.png";

const Header = () => {
  return (
    <header className="w-full flex items-center px-10 py-4 shadow justify-between bg-white sticky top-0 z-50">
      <div className="flex flex-row">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Corpseed Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </div>

        <div className="ml-10">
          <nav className=" flex">
            <ul className="flex gap-8 font-semibold text-gray-800 ">
              <li className=" text-center relative w-fit group cursor-pointer">
                Who <br /> We Are
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="text-center relative w-fit group cursor-pointer">
                Environment <br /> & Sustainability
                 <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="text-center relative w-fit group cursor-pointer">
                Project <br /> Planning & Setup
                 <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="text-center relative w-fit group cursor-pointer">
                Compliance <br /> Solutions
                 <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li className="text-center relative w-fit group cursor-pointer">
                Industries <br /> Solutions
                 <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex  font-semibold text-gray-800 items-center gap-10 ">
        <div className="gap-3 flex  flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="cursor-pointer"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <p className="cursor-pointer">Search</p>
        </div>

        <li className="cursor-pointer text-center  list-none">
          All <br /> Corpseed
        </li>
      </div>
    </header>
  );
};

export default Header;
