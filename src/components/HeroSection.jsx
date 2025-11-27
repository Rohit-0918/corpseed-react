import React from "react";

import EnviormentImg from "./../assets/Card/Enviorment.png";
import ImportExportImg from "./../assets/Card/ImportExport.png";
import IndustryImg from "./../assets/Card/Industry.png";
import ProductComplianceImg from "./../assets/Card/ProductCompliance.png";
import RegulatoryComplianceImg from "./../assets/Card/RegulatoryCompliance.png";
import GlobeImg from "./../assets/Card/Globe.png";
import FormImg from "./../assets/Card/Form.png";

const HeroSection = () => {
  const cards = [
    {
      title: "Environmental",
      img: EnviormentImg,
      desc: "EPR / EIA / CTO / CTE / EC / BWM / PWM / EWM / HWM / FSC / Wildlife",
    },
    {
      title: "Import Export",
      img: ImportExportImg,
      desc: "IEC / DGFT / CHA / CDSCO / BIS / LMPC / EPR / Custom Clearance",
    },
    {
      title: "Industry Setup",
      img: IndustryImg,
      desc: "Bio-fuels / Medical / Electronics / Waste Management / Renewable",
    },
    {
      title: "Product Compliance",
      img: ProductComplianceImg,
      desc: "ISI / BIS / ISO / BEE / FDA / Meity / CDSCO / TEC / WPC / OSP",
    },
    {
      title: "Regulatory Compliance",
      img: RegulatoryComplianceImg,
      desc: "Factory / Fire / Trade / FSSAI / CGWA / Labour & Other Compliance",
    },
    {
      title: "Sustainability",
      img: GlobeImg,
      desc: "EPR / EIA / CTO / FSSAI / CTEEC / BWM / PWM / EWM  HWM / FSC / Wildlife",
    },
    // 2 bg image
    {
      tile: "External Factors",
      img: FormImg,
      desc: "EPR / EIA / CTO / FSSAI / CTEEC / BWM / PWM / EWM  HWM / FSC / Wildlife",
    },
    {
      tile: "Advisory",
      img: FormImg,
      desc: "EPR / EIA / CTO / FSSAI / CTEEC / BWM / PWM / EWM  HWM / FSC / Wildlife",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-6 p-16  mt-0">
      {/* LEFT SECTION */}
      <div className="max-w-3xl mt-20 ml-9 ">
        <button className="flex items-center gap-2 px-6 py-1 rounded-md cursor-pointer text-white text-[15px] font-normal shadow-md bg-blue-600">
          <svg width="9" height="9" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" fill="white" />
          </svg>
          CALL FOR FREE CONSULTATION
          <svg fill="white" viewBox="0 0 24 24" width="20" height="20">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 12 19.54 19.5 19.5 0 0 1 3.28 10.8 19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 12.87 12.87 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.32-1.32a2 2 0 0 1 2.11-.45 12.87 12.87 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>

        <h1 className="text-5xl font-bold mt-1 leading-snug text-gray-800">
          Tailored Solutions
        </h1>
        <h1 className="text-5xl font-bold mt-1 leading-snug text-gray-800">
          For Your Business
        </h1>

        <p className="text-[18px] mt-3 text-black leading-relaxed">
          <span className="text-blue-600">
            Regulatory, Sustainability, Environmental, Legal
          </span>{" "}
          & Plant Setup Compliance <br />
          Advisory Platform For Individuals, SME & Enterprise.
        </p>

        <div className="flex items-center gap-2 mt-3">
          <svg width="22" height="22" fill="#FFC107" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
          </svg>

          <p className="text-base text-black">
            [Rated <span className="font-bold">4.9 stars</span> by 15000+
            Customers like you]
          </p>
        </div>
       
      </div>

      {/* Right Section*/}

      <div className="h-full flex flex-col items-end ">
        {/* first row*/}
        <div className="flex flex-row gap-10 justify-center">
          <div className=" ml-20 w-[30%] rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2">
            <p className="font-bold text-md text-gray-700 text-center ">
              {cards[0].title}
            </p>
            <img
              src={cards[0].img}
              alt={cards[0].title}
              className="w-15 h-15 text mx-auto"
            />
            <p className="text-[11px] text-gray-500 text-center max-auto">
              {cards[0].desc}
            </p>
          </div>

          <div className="mr-20 w-[30%] rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[1].title}
            </p>
            <img
              src={cards[1].img}
              alt={cards[1].title}
              className="w-15 h-15 mx-auto"
            />
            <p className="text-[11px] text-gray-500 text-center mx-auto">
              {cards[1].desc}
            </p>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-row gap-3 justify-center">
          {/* Left part */}
          <div className="w-[35%] mt-12 rounded-xl items-center shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[2].title}
            </p>

            <img
              src={cards[2].img}
              alt={cards[2].title}
              className="w-[60px] h-[60px] object-contain mx-auto"
            />

            <p className="text-[12px] text-gray-500 text-center mx-auto">
              {cards[2].desc}
            </p>
          </div>

          {/* Central Part */}
          <div className="relative w-full flex justify-center items-center ">
            {/* Background images wrapper */}
            <div className="flex flex-row gap-3">
              {/* BG Image 1 */}
              <div className="w-[120px] h-[150px] rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] p-2">
                <p className="text-[11px] text-gray-500 text-center">
                  {cards[2].title}
                </p>

                <img
                  src={cards[6].img}
                  alt={cards[6].title}
                  className="w-full h-[90px] object-contain mx-auto"
                />
              </div>

              {/* BG Image 2 */}
              <div className="w-[120px] h-[150px] rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] p-2">
                <p className="text-[11px] text-gray-500 text-center">
                  {cards[2].title}
                </p>

                <img
                  src={cards[6].img}
                  alt={cards[6].title}
                  className="w-full h-[90px] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Forward Image */}
            <div
              className="absolute top-1/2 -translate-y-1/2 z-10 
                    w-[40%] bg-white rounded-xl 
                    shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2"
            >
              <p className="font-bold text-gray-700 text-center">
                {cards[5].title}
              </p>

              <img
                src={cards[5].img}
                alt={cards[5].title}
                className="w-[60px] h-[60px] object-contain mx-auto mt-2"
              />

              <p className="text-[11px] mt-3 text-gray-500 text-center mx-auto">
                {cards[5].desc}
              </p>
            </div>
          </div>

          {/* Right part */}
          <div className="w-[35%] mt-12 rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[3].title}
            </p>

            <img
              src={cards[3].img}
              alt={cards[3].title}
              className="w-[60px] h-[60px] object-contain mx-auto"
            />

            <p className="text-[11px] text-gray-500 text-center mx-auto">
              {cards[3].desc}
            </p>
          </div>
        </div>

        {/* Third row*/}
        <div className="flex justify-center">
          <div className="ml-40 mr-40 w-[35%] rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.18)] px-3 py-2">
            <p className="font-bold text-md text-gray-700 text-center">
              {cards[4].title}
            </p>
            <img
              src={cards[4].img}
              alt={cards[4].title}
              className="w-15 h-15 mx-auto"
            />
            <p className="text-[11px] text-gray-500 text-center mx-auto">
              {cards[4].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
