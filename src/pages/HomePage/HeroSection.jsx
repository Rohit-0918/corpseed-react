import React from "react";
import Enviormental from "../../assets/HomePage/Cards/Enviormental.png";
import ImportExport from "../../assets/HomePage/Cards/ImportExport.png";
import Industry from "../../assets/HomePage/Cards/Industry.png";
import ProductCompliance from "../../assets/HomePage/Cards/ProductCompliance.png";
import Regulatory from "../../assets/HomePage/Cards/Regulatory.png";
import Sustainability from "../../assets/HomePage/Cards/Sustainability.png";
import LeftHalf from "../../assets/HomePage/Cards/LeftHalf.png";
import RIghtHalf from "../../assets/HomePage/Cards/RIghtHalf.png";

const HeroSection = () => {
  const cards = [
    {
      title: "Industry Setup Soultion",
      img: Industry,
      desc: "Bio-fuels / Medical / Electronics / Waste Management / Renewable",
    },
    {
      title: "Sustainability",
      img: Sustainability,
      desc: "ESG / ESDD / ESMS / Net Zero Waste Chanelization / Carbon Credits",
    },
    {
      title: "Regulatory Compliance",
      img: Regulatory,
      desc: "Factory / Fire / Trade FSSAI / CGWA / Labour & Other Compliance",
    },

    {
      title: "Import Export",
      img: ImportExport,
      desc: "IEC / DGFT / CHA / CDSCO / BIS / LMPC EPR / Custom Clearance",
    },
    {
      title: "Product Compliance",
      img: ProductCompliance,
      desc: "ISI / BIS / ISO / BEE / FDA / Meity CDSCO / TEC / WPC / OSP / etc.",
    },
    {
      title: "Enviormental",
      img: Enviormental,
      desc: "EPR / EIA / CTO / FSSAI / CTEEC / BWM / PWM / EWM  HWM / FSC / Wildlife",
    },
    {
      title: "",
      img: LeftHalf,
      desc: "",
    },
    {
      title: "",
      img: RIghtHalf,
      desc: "",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:pt-4 lg-pb-8 lg:px-15 ">
      {/* LEFT SECTION */}
      <div className="max-w-3xl mt-10 lg:mt-20 lg:ml-9 ">
        <button className="flex items-center gap-2 px-6 py-1 rounded-md cursor-pointer text-white text-[15px] font-normal shadow-md bg-blue-600 mb-4">
          <svg width="9" height="9" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" fill="white" />
          </svg>
          CALL FOR FREE CONSULTATION
          <svg fill="white" viewBox="0 0 24 24" width="20" height="20">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 12 19.54 19.5 19.5 0 0 1 3.28 10.8 19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.87 12.87 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.32-1.32a2 2 0 0 1 2.11-.45 12.87 12.87 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>

        <h1 className="text-4xl sm:text-5xl font-bold mt-1 leading-snug text-gray-800">
          Tailored Solutions
        </h1>
        <h1 className="text-4xl sm:text-5xl font-bold mt-1 leading-snug text-gray-800">
          For Your Business
        </h1>

        <p className="text-[16px] sm:text-[18px] mt-3 text-black leading-relaxed">
          <span className="text-blue-600">
            Regulatory, Sustainability, Environmental, Legal
          </span>{" "}
          & Plant Setup Compliance <br />
          Advisory Platform For Individuals, SME & Enterprise.
        </p>

        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <svg width="22" height="22" fill="#FFC107" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
          </svg>

          <p className="text-base text-black">
            [Rated <span className="font-bold">4.9 stars</span> by 15000+
            Customers like you]
          </p>
        </div>

        {/* 🔍 SEARCH BAR ADDED HERE */}
        <div className="mt-6 w-[80%] sm:justify-center">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>

            <input
              type="text"
              placeholder="Search services..."
              className="ml-3 w-full outline-none text-black"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex h-full flex-col items-end w-full">
        {/* 1st Row */}
        <div className="flex flex-row gap-6 w-full justify-center">
          {/* Card 1 */}
          <div className="w-[210px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] px-2 py-1">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[0].title}
            </p>
            <img
              src={cards[0].img}
              className="mx-auto mt-1 w-[100px] h-[60px]"
            />
            <p className="text-[11px] text-gray-500 text-center mt-1">
              {cards[0].desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[210px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] px-2 py-1">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[1].title}
            </p>
            <img
              src={cards[1].img}
              className="mx-auto mt-1 w-[100px] h-[60px]"
            />
            <p className="text-[11px] text-gray-500 text-center mt-1">
              {cards[1].desc}
            </p>
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex flex-row gap-6 w-full justify-center relative mt-4 py-4">
          {/* Left Card */}
          <div className="w-[150px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] px-2 py-1 mt-8">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[2].title}
            </p>
            <img
              src={cards[2].img}
              className="mx-auto mt-1 w-[120px] h-[70px]"
            />
            <p className="text-[11px] text-gray-500 text-center mt-1">
              {cards[2].desc}
            </p>
          </div>

          {/* Overlapping Center Cards */}
          <div className="flex flex-row  relative">
            {/* Back Card 1 */}
            <div className="w-[120px] h-[150px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] p-2">
              <img
                src={cards[6].img}
                className="w-full h-[90px] mx-auto object-contain mt-1"
              />
            </div>

            {/* Back Card 2 */}
            <div className="w-[120px] h-[150px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] p-2">
              <img
                src={cards[6].img}
                className="w-full h-[90px] mx-auto object-contain mt-1"
              />
            </div>

            {/* Front Card */}
            <div className="absolute flex flex-col mt-1 gap-0 left-1/2 -translate-x-1/2 -top-6 w-[160px] bg-white rounded-xl shadow-[0px_3px_10px_rgba(0,0,0,0.18)] px-2 py-1 z-10">
              <p className="font-bold text-gray-700 text-center">
                {cards[5].title}
              </p>
              <img
                src={cards[5].img}
                className="mx-auto mt-1 w-[90px] h-[80px]"
              />
              <p className="text-[11px] text-gray-500 text-center mt-1">
                {cards[5].desc}
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-[150px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] px-2 py-1 mt-8">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[3].title}
            </p>
            <img
              src={cards[3].img}
              className="mx-auto mt-1 w-[120px] h-[70px]"
            />
            <p className="text-[11px] text-gray-500 text-center mt-1">
              {cards[3].desc}
            </p>
          </div>
        </div>

        {/* 3rd Row */}
        <div className="flex justify-center w-full">
          <div className="w-[180px] rounded-xl shadow-[4px_4px_10px_rgba(0,0,0,0.18)] px-2 py-1">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[4].title}
            </p>
            <img src={cards[4].img} className="mx-auto  w-[120px] h-[100px]" />
            <p className="text-[11px] text-gray-500 text-center mt-1">
              {cards[4].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
