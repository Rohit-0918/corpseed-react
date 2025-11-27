import React, { useState } from "react";
import logo from "./../assets/logo/logo.png";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      {/* Head Section */}
      <div className="flex items-center gap-2 border-t border-gray-300 px-6 py-8 mx-6">
        <h1 className="text-xl font-md  text-grey-800">Follow Us :</h1>
        <div className="flex items-center gap-3">
          <svg
            role="img"
            aria-label="LinkedIn"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#6B7280"
            className="m-0 hover:cursor-pointer hover:bg-blue-400"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM0 8.5h4.98V24H0V8.5zM8.5 8.5h4.78v2.09h.07c.66-1.25 2.27-2.57 4.68-2.57 5 0 5.92 3.29 5.92 7.56V24h-4.98v-7.25c0-1.73-.03-3.96-2.42-3.96-2.42 0-2.79 1.89-2.79 3.84V24H8.5V8.5z" />
          </svg>
          {/* <!-- Facebook - grey --> */}
          <svg
            role="img"
            aria-label="Facebook"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#6B7280"
            xmlns="http://www.w3.org/2000/svg"
            className="m-0 hover:cursor-pointer hover:bg-blue-400"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.07h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.636h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
          {/* <!-- YouTube - grey --> */}
          <svg
            role="img"
            aria-label="YouTube"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#6B7280"
            xmlns="http://www.w3.org/2000/svg"
            className="m-0 hover:cursor-pointer hover:bg-blue-400"
          >
            <path d="M23.5 6.2s-.23-1.6-.93-2.31c-.89-.95-1.9-.96-2.36-1.02C16.5 2.6 12 2.6 12 2.6h-.01s-4.5 0-8.2.22c-.46.06-1.47.07-2.36 1.02C.73 4.6.5 6.2.5 6.2S.25 8.1.25 9.99v.02C.25 11.9.5 13.8.5 13.8s.23 1.6.93 2.31c.89.95 2.06.92 2.58 1.03 1.85.22 7.78.22 7.78.22s4.5 0 8.2-.22c.46-.06 1.47-.07 2.36-1.02.7-.71.93-2.31.93-2.31s.25-1.9.25-3.78v-.02C23.75 8.1 23.5 6.2 23.5 6.2zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
          </svg>
          {/* <!-- Instagram - grey --> */}
          <svg
            role="img"
            aria-label="Instagram"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#6B7280"
            xmlns="http://www.w3.org/2000/svg"
            className="m-0 hover:cursor-pointer hover:bg-blue-400"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.406a4.92 4.92 0 0 1 1.77 1.03 4.92 4.92 0 0 1 1.03 1.77c.166.46.35 1.26.406 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.406 2.43a4.92 4.92 0 0 1-1.03 1.77 4.92 4.92 0 0 1-1.77 1.03c-.46.166-1.26.35-2.43.406-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.406a4.92 4.92 0 0 1-1.77-1.03 4.92 4.92 0 0 1-1.03-1.77c-.166-.46-.35-1.26-.406-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.406-2.43a4.92 4.92 0 0 1 1.03-1.77 4.92 4.92 0 0 1 1.77-1.03c.46-.166 1.26-.35 2.43-.406C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.797.069-1.03.05-1.588.218-1.957.362-.497.187-.85.41-1.223.783-.373.373-.596.726-.783 1.223-.144.369-.312.927-.362 1.957-.057 1.249-.069 1.627-.069 4.797s.012 3.548.069 4.797c.05 1.03.218 1.588.362 1.957.187.497.41.85.783 1.223.373.373.726.596 1.223.783.369.144.927.312 1.957.362 1.249.057 1.627.069 4.797.069s3.548-.012 4.797-.069c1.03-.05 1.588-.218 1.957-.362.497-.187.85-.41 1.223-.783.373-.373.596-.726.783-1.223.144-.369.312-.927.362-1.957.057-1.249.069-1.627.069-4.797s-.012-3.548-.069-4.797c-.05-1.03-.218-1.588-.362-1.957a3.12 3.12 0 0 0-.783-1.223 3.12 3.12 0 0 0-1.223-.783c-.369-.144-.927-.312-1.957-.362-1.249-.057-1.627-.069-4.797-.069zM12 7.838a4.162 4.162 0 1 0 0 8.324 4.162 4.162 0 0 0 0-8.324zm0 6.838a2.676 2.676 0 1 1 0-5.352 2.676 2.676 0 0 1 0 5.352zm6.406-7.994a1.002 1.002 0 1 1-2.005 0 1.002 1.002 0 0 1 2.005 0z" />
          </svg>
          {/* <!-- Twitter - grey #6B7280 --> */}
          <svg
            role="img"
            aria-label="Twitter"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#6B7280"
            xmlns="http://www.w3.org/2000/svg"
            className="m-0 hover:cursor-pointer hover:bg-blue-400"
          >
            <path d="M24 4.56c-.89.39-1.85.65-2.86.77a4.98 4.98 0 0 0 2.18-2.75 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.67 3c-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.13 1.13C7.72 8.9 4.07 6.9 1.67 3.9c-.43.75-.68 1.62-.68 2.55 0 1.76.9 3.32 2.27 4.24a4.87 4.87 0 0 1-2.23-.62v.06c0 2.46 1.75 4.52 4.07 4.99-.43.12-.9.18-1.38.18-.34 0-.66-.03-.98-.09.66 2.08 2.57 3.59 4.83 3.63A9.9 9.9 0 0 1 0 19.54a13.95 13.95 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.98 9.98 0 0 0 24 4.56z" />
          </svg>
        </div>

        <div className="flex items-center ml-[480px]">
          <input
            type="text"
            id="myInput"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-300 rounded-l-md w-[350px] h-[35px] px-3 focus:outline-none hover:border-blue-400"
            placeholder="Email address..."
          />

          <button className="text-white bg-black h-[35px] px-4 rounded-r-md hover:bg-gray-900 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Body of Footer */}
      <div className="border border-gray-300 bg-gray-30 bg-pink-50 ">
        <div className="flex flex-row mx-auto px-7 justify-around py-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Waste Management & Circulatory
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black ">
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Bio-Medical Waste</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Hazardous Waste Management</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Battery Waste Management</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Solid Waste Management</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">DPCC Waste Management</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">EPR Authorization</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href=""> Sustainability Consulting</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Green Certfication & <br />
              Eco-Labeling
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black">
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Zero Carbon Certification</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Green Building Certification</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Eco Labelling Certification</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Energy Audits</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Green Building Design and Certification</a>
              </li>
              <li className="mt-2">
                <a href="">Sustainable Business Certification</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Safety & Regulation
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black ">
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Hallmark Registration</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">ISI Registration</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">BIS Registration</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Drone Registration</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Medical Devices Import</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Drug License</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">WPC Import License</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
            <ul className="text-sm mt-5 ml-3 text-black">
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Become A Partner</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Contact Us</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Knowledge Centre</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Change Your CA</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Life At Corpseed</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">MCA Calculator</a>
              </li>
              <li className="mt-2 hover:text-blue-500 hover:scale-[1.01] ">
                <a href="">Online Payment</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center  h-[100px]">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded text-md cursor-pointer">
            All Services
          </button>
        </div>
      </div>

      {/* footer */}

      <div className="flex flex-row ">
        <img
          src={logo}
          alt=""
          className="h-[60px] w-[60px] ml-[70px] mt-[25px] "
        />
        <div className="flex flex-row ">
          <p className="text-2xl font-bold text-gray-600 mt-[34px] hover:text-blue-600 cursor-pointer">
            corpseed
          </p>
          <p className="mt-[42px] text-sm ">@</p>
          <p className="mt-[42px] text-sm text-gray-500">2025</p>
          <p className="mt-[42px] text-sm ">Corpseed ITES Pvt Ltd</p>
        </div>

        <div>
          <ul className="list-none flex items-center text-sm text-gray-500 gap-6 mt-[38px] ml-[300px]">
            <li className="hover:text-blue-700 text-sm">
              <a href="">FAQ</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Sitemap</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Privacy Policy</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Terms of Service</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Refund Policy</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Cookies</a>
            </li>
            <li className="hover:text-blue-700 text-sm">
              <a href="">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
