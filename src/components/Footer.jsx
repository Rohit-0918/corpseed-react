import React, { useState } from "react";
import logo from "../assets/logo/image.png";
import { Link } from "react-router-dom";

<div>
  <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
  <ul className="text-sm mt-5 ml-3 text-black">
    {[
      { name: "About Us", path: "/about-us" },
      { name: "Become A Partner", path: "/partner" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Press Release", path: "/press-release" },
      { name: "Join Our Team", path: "/join-our-team" },
      { name: "Life At Corpseed", path: "/life-at-corpseed" },
    ].map((item, index) => (
      <li
        key={index}
        className="mt-2 transition hover:text-blue-500 hover:scale-[1.01]"
      >
        <Link to={item.path}>{item.name}</Link>
      </li>
    ))}
  </ul>
</div>


const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <footer className="bg-white border-t border-gray-300">
      {/* Top Section: Social + Newsletter */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 md:py-8 gap-4 md:gap-0">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-medium text-gray-800">Follow Us:</h1>
          <div className="flex gap-3 flex-wrap">
            {/* LinkedIn */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:[&>g>path]:fill-blue-500"
            >
              <g clipPath="url(#clip2)">
                <path
                  d="M44.4469 0.00164795H3.54375C1.58437 0.00164795 0 1.54852 0 3.46102V44.5329C0 46.4454 1.58437 48.0016 3.54375 48.0016H44.4469C46.4063 48.0016 48 46.4454 48 44.5423V3.46102C48 1.54852 46.4063 0.00164795 44.4469 0.00164795ZM14.2406 40.9048H7.11563V17.9923H14.2406V40.9048ZM10.6781 14.8704C8.39063 14.8704 6.54375 13.0235 6.54375 10.7454C6.54375 8.46727 8.39063 6.6204 10.6781 6.6204C12.9563 6.6204 14.8031 8.46727 14.8031 10.7454C14.8031 13.0141 12.9563 14.8704 10.6781 14.8704ZM40.9031 40.9048H33.7875V29.7673C33.7875 27.1141 33.7406 23.6923 30.0844 23.6923C26.3812 23.6923 25.8187 26.5891 25.8187 29.5798V40.9048H18.7125V17.9923H25.5375V21.1235H25.6312C26.5781 19.3235 28.9031 17.4204 32.3625 17.4204C39.5719 17.4204 40.9031 22.1641 40.9031 28.3329V40.9048V40.9048Z"
                  fill="#BEBEBE"
                ></path>
              </g>
              <defs>
                <clipPath id="clip2">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.00164795)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>

            {/* Facebook */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:[&>g>path]:fill-blue-500"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M48 24.0016C48 10.7468 37.2548 0.00164795 24 0.00164795C10.7452 0.00164795 0 10.7468 0 24.0016C0 35.9806 8.77641 45.9096 20.25 47.7101V30.9391H14.1562V24.0016H20.25V18.7141C20.25 12.6991 23.8331 9.37665 29.3152 9.37665C31.9402 9.37665 34.6875 9.8454 34.6875 9.8454V15.7516H31.6613C28.68 15.7516 27.75 17.6018 27.75 19.5016V24.0016H34.4062L33.3422 30.9391H27.75V47.7101C39.2236 45.9096 48 35.9806 48 24.0016Z"
                  fill="#BEBEBE"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.00164795)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>

            {/* YouTube */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:[&>path]:fill-blue-500"
            >
              <path
                d="M47.5219 7.28438C47.5219 7.28438 47.0531 3.975 45.6094 2.52188C43.7812 0.609375 41.7375 0.6 40.8 0.4875C34.0875 -2.68221e-07 24.0094 0 24.0094 0H23.9906C23.9906 0 13.9125 -2.68221e-07 7.2 0.4875C6.2625 0.6 4.21875 0.609375 2.39062 2.52188C0.946875 3.975 0.4875 7.28438 0.4875 7.28438C0.4875 7.28438 0 11.175 0 15.0563V18.6937C0 22.575 0.478125 26.4656 0.478125 26.4656C0.478125 26.4656 0.946875 29.775 2.38125 31.2281C4.20937 33.1406 6.60938 33.075 7.67813 33.2812C11.5219 33.6469 24 33.7594 24 33.7594C24 33.7594 34.0875 33.7406 40.8 33.2625C41.7375 33.15 43.7812 33.1406 45.6094 31.2281C47.0531 29.775 47.5219 26.4656 47.5219 26.4656C47.5219 26.4656 48 22.5844 48 18.6937V15.0563C48 11.175 47.5219 7.28438 47.5219 7.28438ZM19.0406 23.1094V9.61875L32.0062 16.3875L19.0406 23.1094Z"
                fill="#BEBEBE"
              ></path>
            </svg>

            {/* Instagram */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:[&>path]:fill-blue-500"
            >
              <path
                d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                fill="#BEBEBE"
              ></path>
              <path
                d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                fill="#BEBEBE"
              ></path>
              <path
                d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                fill="#BEBEBE"
              ></path>
            </svg>

            {/* Twitter */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:[&>g>path]:fill-blue-500"
            >
              <g clipPath="url(#clip1)">
                <path
                  d="M15.1003 43.5017C33.2091 43.5017 43.1166 28.4951 43.1166 15.4855C43.1166 15.0636 43.1072 14.6323 43.0884 14.2105C45.0157 12.8167 46.679 11.0902 48 9.11234C46.205 9.91094 44.2993 10.4325 42.3478 10.6592C44.4026 9.42756 45.9411 7.49268 46.6781 5.21327C44.7451 6.35885 42.6312 7.16696 40.4269 7.60296C38.9417 6.02486 36.978 4.97997 34.8394 4.62984C32.7008 4.27971 30.5064 4.64384 28.5955 5.66593C26.6846 6.68802 25.1636 8.31115 24.2677 10.2844C23.3718 12.2576 23.1509 14.471 23.6391 16.5823C19.725 16.3859 15.8959 15.3691 12.4 13.5979C8.90405 11.8267 5.81939 9.34061 3.34594 6.30077C2.0888 8.46823 1.70411 11.033 2.27006 13.4739C2.83601 15.9148 4.31013 18.0486 6.39281 19.4417C4.82926 19.3921 3.29995 18.9711 1.93125 18.2136V18.3355C1.92985 20.61 2.7162 22.8149 4.15662 24.5753C5.59704 26.3356 7.60265 27.5429 9.8325 27.9917C8.38411 28.388 6.86396 28.4457 5.38969 28.1605C6.01891 30.1166 7.24315 31.8275 8.89154 33.0544C10.5399 34.2813 12.5302 34.9629 14.5847 35.0042C11.0968 37.744 6.78835 39.23 2.35313 39.223C1.56657 39.2218 0.780798 39.1735 0 39.0786C4.50571 41.9692 9.74706 43.5045 15.1003 43.5017Z"
                  fill="#BEBEBE"
                ></path>
              </g>
              <defs>
                <clipPath id="clip1">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0 0.00164795)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
          <input
            type="text"
            id="myInput"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-300 rounded-l-md w-full sm:w-[300px] md:w-[350px] h-[35px] px-3 focus:outline-none hover:border-blue-400"
            placeholder="Email address..."
          />
          <button className="text-white bg-black h-[35px] px-4 rounded-r-md hover:bg-gray-900 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Middle Footer Sections */}
      <div className="bg-gray-50 border-t  border-gray-200 px-4 md:px-10 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {/* Waste Management */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Waste Management & Circulatory
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black">
              {[
                "Bio-Medical Waste",
                "Hazardous Waste Management",
                "Battery Waste Management",
                "Solid Waste Management",
                "DPCC Waste Management",
                "EPR Authorization",
                "Sustainability Consulting",
              ].map((item, index) => (
                <li
                  key={index}
                  className="mt-2 hover:text-blue-500 hover:scale-[1.01]"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Green Certification */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Green Certification & <br /> Eco-Labeling
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black">
              {[
                "Zero Carbon Certification",
                "Green Building Certification",
                "Eco Labelling Certification",
                "Energy Audits",
                "Green Building Design and Certification",
                "Sustainable Business Certification",
              ].map((item, index) => (
                <li
                  key={index}
                  className="mt-2 hover:text-blue-500 hover:scale-[1.01]"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Regulation */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Safety & Regulation
            </h3>
            <ul className="text-sm mt-5 ml-3 text-black">
              {[
                "Hallmark Registration",
                "ISI Registration",
                "BIS Registration",
                "Drone Registration",
                "Medical Devices Import",
                "Drug License",
                "WPC Import License",
              ].map((item, index) => (
                <li
                  key={index}
                  className="mt-2 hover:text-blue-500 hover:scale-[1.01]"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
     <div>
  <h3 className="text-xl font-semibold text-gray-700">About Us</h3>
  <ul className="text-sm mt-5 ml-3 text-black">
    {[
      { name: "About Us", path: "/about-us" },
      { name: "Become A Partner", path: "/partner" },
      { name: "Contact Us", path: "/contact-us" },
      { name: "Press Release", path: "/press-release" },
      { name: "Join Our Team", path: "/join-our-team" },
      { name: "Life At Corpseed", path: "/life-at-corpseed" },
    ].map((item, index) => (
      <li
        key={index}
        className="mt-2 transition hover:text-blue-500 hover:scale-[1.01]"
      >
        <a href={item.path}>{item.name}</a>
      </li>
    ))}
  </ul>
</div>


        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 rounded text-md cursor-pointer">
            All Services
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 gap-4 md:gap-0 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className=" " />
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-gray-600 hover:text-blue-600 cursor-pointer">
              corpseed
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Corpseed ITES Pvt Ltd
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-sm text-gray-500">
          {[
            "FAQ",
            "Sitemap",
            "Privacy Policy",
            "Terms of Service",
            "Refund Policy",
            "Cookies",
            "Terms of Use",
          ].map((item, index) => (
            <li key={index} className="hover:text-blue-700">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
