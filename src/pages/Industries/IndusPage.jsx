import React from "react";
import ScheduleACallback from "../../components/ScheduleACallback";
import AssociatedBrandsCarousel from "../../components/AssociatedBrandsCarousel";

const Page = () => {
  return (
    <>
      <div
        className="w-full bg-black h-64 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: `url('https://www.corpseed.com/assets/images/industry.webp')`,
        }}
      >
        <div className="w-full sm:w-4/5 lg:w-2/5 px-4 sm:px-10 md:px-20 flex flex-col gap-2 sm:gap-4 text-white">
          <button className="bg-blue-500 text-white p-1 sm:p-2 text-xs sm:text-sm w-max">
            Includes Free Support
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Industries
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            Industry is a group of diverse organizations involved in the
            manufacture, production, or processing of the same type of product
            and service. All industries are part of the goods- producing sector.
            Secondary or production converts all raw materials into products
            that are more beneficial to people.
          </p>
        </div>
      </div>
      <div className="w-[85%] mx-auto ">
        <div className="flex gap-6 justify-between py-13">
          {/* left  */}
          <div className="w-[60%]   py-4 ">
            <p className="text-justify leading-7">
              Industry is an economic branch that produces closely related raw
              materials,goods, or services. For example,you can refer to the
              agriculture industry or the insurance industry. Similar firms are
              grouped into industries based on the primary product they produce
              or sell. It creates industry groups that allow companies to
              differentiate themselves from different operating parties.
              Investors and economists often study industries to better
              understand the drivers and limits of companies’ profit growth.
              Companies in the same industry can also be compared to each other
              to gauge the relative attractiveness of a company in that
              industry. An industry can be privately owned, publicly owned, or
              jointly owned. The wealth of a nation is largely based on its
              industry. The more productive the industry, the greater the
              national wealth. A country standard of living can be measured by
              the number,cost and quality.
            </p>
          </div>
          {/* right  */}
          <div className="w-[35%]">
            <ScheduleACallback />
          </div>
        </div>

        {/* Change this With Industries */}
        <AssociatedBrandsCarousel/>

        
      </div>
    </>
  );
};

export default Page;
