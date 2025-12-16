import React from "react";
import AssociatedBrandsCarousel from "../../components/AssociatedBrandsCarousel";

const ServicePage = () => {
  return (
    <>
      <div className=" px-20 py-20  w-full border flex">
        {/* Left part  */}
        <div className="w-[60%] border flex flex-col gap-7">
          <div className="bg-blue-600 inline-flex px-2 py-1 self-start ">
            <span className="text-white text-sm whitespace-nowrap">
              Includes Free Support
            </span>
          </div>

          <h1>
            <span className="font-semibold text-5xl text-blue-500">
              EPR Credits
            </span>{" "}
            <span className="text-5xl font-semibold text-gray-800">
              From Plastic Waste Recyclers
            </span>
          </h1>

          <div>
            <p className="text-lg">
              Are you also struggling to fulfil your EPR Obligations for Plastic
              Waste? If so, Corpseed is offering to manage your EPR Compliances
              and fulfilling EPR Liabilities in the most efficient manner by
              providing EPR Credits for plastic waste Recyclers at a minimum
              price.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-10">
            <div className="flex flex-col justify-center pr-10 border-r gap-2 border-gray-300">
              <p className="text-xl font-semibold text-blue-500">1000+</p>
              <p className="text-gray-600 whitespace-nowrap">Happy Customers</p>
            </div>

            <div className="flex flex-col justify-center pr-10 border-r gap-2  border-gray-300">
              <p className="text-xl font-semibold text-blue-500">500+</p>
              <p className="text-gray-600 whitespace-nowrap">
                CA, CS &amp; Lawyers
              </p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-xl font-semibold text-blue-500">7+</p>
              <p className="text-gray-600 whitespace-nowrap">Offices</p>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              src="https://www.corpseed.com/assets/img/circled-play-video.png"
              className="w-[38px] h-[38px]"
              alt=""
            />
            <span className="flex my-auto text-gray-700">
              Click To Watch &amp; Know More
            </span>
          </div>

          <div className="flex gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 14.0938L4.08594 17.375L5.52148 11.2227L0.763672 7.08008L7.03906 6.54688L9.5 0.763672L11.9609 6.54688L18.2363 7.08008L13.4785 11.2227L14.9141 17.375L9.5 14.0938Z"
                fill="#FFC20F"
              ></path>
            </svg>

            <small className="text-lg">
              [ Rated <b>4.9</b>
              Stars By <b>1203+</b> Customers Globally ]
            </small>
          </div>
        </div>
        {/* Right Part */}
        <div className="w-[40%] border"></div>
      </div>
     <AssociatedBrandsCarousel/>
    </>
  );
};

export default ServicePage;
