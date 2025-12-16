import React from "react";
import image from "../../assets/LifeAtCorpseed/image.png";
import first from "../../assets/LifeAtCorpseed/8492765481Meet-Our-Head-of-Digital-Marketing-shamshad-alam-corpseed.webp";
import second from "../../assets/LifeAtCorpseed/3192311537Charul_Gaur_Corpseed.webp";
import Third from "../../assets/LifeAtCorpseed/3138773948Ganesh_Jha_Corpseed.jpeg";
import fourth from "../../assets/LifeAtCorpseed/converted_image.png";
import img1 from "../../assets/LifeAtCorpseed/aerial-view-business-team.jpg";
import img2 from "../../assets/LifeAtCorpseed/SM_(226).jpg";

import { style } from "framer-motion/client";

const LifeAtCorpseed = () => {
  return (
    <div>
      <div className="flex gap-3 bg-pink-50 px-4 py-2">
        <p className="text-xl pr-5 border-r border-r-black ">Corpseed Life</p>
      </div>
      <div>
        <img src={image} alt="Corpseed Life" />
      </div>

      <div>
        <div className="py-10 flex justify-center text-center flex-col gap-4 px-4">
          <p className="text-2xl md:text-4xl text-gray-800 leading-snug">
            Meet the People Who power{" "}
            <span className="font-semibold">Corpseed</span>
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-lg md:text-xl text-gray-700">
              We are the{" "}
              <span className="font-semibold">#PeopleOfCorpseed-</span>
              employees representing communities and
            </p>

            <p className="text-lg md:text-xl text-gray-700">
              culture of the world, coming together to help others achieve more.
              That's our
            </p>

            <p className="text-lg md:text-xl text-gray-700">
              <span className="font-semibold">Corpseed</span>Life, and these are
              our stories.
            </p>
          </div>

          <div className="flex justify-center py-2">
            <button className="text-white flex items-center bg-black px-4 md:px-6 py-2 gap-2 rounded-md text-sm md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg my-auto"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
              </svg>
              COPY LINK TO PAGE
            </button>
          </div>
        </div>
      </div>

      {/* images */}
      <div>
        {/* first  */}
        <div className="flex flex-col md:flex-row border py-10 md:py-13 px-5 md:px-10 gap-8 bg-[#102e4a]">
          {/* Left  */}
          <div className="w-full md:w-1/2 h-full">
            <img src={first} alt="" className="w-full h-auto object-cover " />
          </div>

          {/* Right  */}
          <div className="w-full md:w-1/2 py-5 md:py-15 px-2 md:px-15">
            <h2 className="text-2xl md:text-3xl text-[#48aced] font-semibold pb-2 leading-snug">
              Leading the Charge: Meet Our Head of Digital Marketing
            </h2>

            <p className="text-white text-base md:text-[16px] pb-4">
              "The digital marketing team is sure to thrive and embody growth
              disguised with skyrocketing insights and metrics"
            </p>

            <p className="flex gap-2 text-lg text-white items-center cursor-pointer">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 19"
                className="mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>

            <div className="flex flex-wrap gap-3 md:gap-5 pt-6 md:pt-10">
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #DigitalMarketing
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #MarketingExperts
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #SocialMediaMarketing
              </p>
            </div>
          </div>
        </div>

        {/* Second  */}
        <div className="flex flex-col-reverse md:flex-row border py-10 md:py-13 px-5 md:px-10 gap-8 bg-purple-800">
          {/* Right  */}
          <div className="w-full md:w-1/2 py-5 md:py-15 px-2 md:px-15">
            <h2 className="text-2xl md:text-3xl text-[#48aced] font-semibold pb-2 leading-snug">
              "Empowering medical device innovation through expert regulatory
              strategy and compliance."
            </h2>

            <p className="text-white text-base md:text-[16px] pb-4">
              Navigating complexities to foster breakthrough solutions and
              industry growth.
            </p>

            <p className="flex items-center gap-2 text-lg text-white cursor-pointer">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 19"
                className="mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>

            <div className="flex flex-wrap gap-3 md:gap-5 pt-6 md:pt-10">
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #RegulatoryCompliance
              </p>

              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #ProductCompliance
              </p>

              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #MedicalDevice
              </p>
            </div>
          </div>

          {/* Left*/}
          <div className="w-full md:w-1/2 h-full">
            <img src={second} alt="" className="w-full h-auto object-cover " />
          </div>
        </div>

        {/* Third  */}
        <div className="flex flex-col md:flex-row border py-10 md:py-13 px-5 md:px-10 gap-8 bg-[#432534]">
          {/* Left */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src={Third}
              alt=""
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 py-5 md:py-15 px-2 md:px-15">
            <h2 className="text-2xl md:text-3xl text-[#48aced] font-semibold pb-2 leading-snug">
              From idea to industry - turning regulatory hurdles into smooth
              highways for business growth and success.
            </h2>

            <p className="text-white text-base md:text-[16px] pb-4">
              Empowering innovation through clarity, compliance, and strategic
              guidance.
            </p>

            <p className="flex items-center gap-2 text-lg text-white cursor-pointer">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 19"
                className="mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>

            <div className="flex flex-wrap gap-3 md:gap-5 pt-6 md:pt-10">
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #RegulatoryCompliance
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #EnviormentalConsultant
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #BusinessAdvisory
              </p>
            </div>
          </div>
        </div>

        {/* Fourth  */}
        <div className="flex flex-col-reverse md:flex-row border py-10 md:py-13 px-5 md:px-10 gap-8 bg-[#012622]">
          {/* Right  */}
          <div className="w-full md:w-1/2 py-5 md:py-15 px-2 md:px-15">
            <h2 className="text-2xl md:text-3xl text-[#48aced] font-semibold pb-2 leading-snug">
              Finance leadership is about more than just numbers, it's about
              empowering teams and driving strategic growth
            </h2>

            <p className="text-white text-base md:text-[16px] pb-4">
              "Beyond managing accounts, they inspire their teams to align
              financial strategies with the company’s vision for growth."
            </p>

            <p className="flex items-center gap-2 text-lg text-white cursor-pointer">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 19"
                className="mt-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>

            <div className="flex flex-wrap gap-3 md:gap-5 pt-6 md:pt-10">
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #Finance
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #FinanceLeadership
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #AccountHead
              </p>
              <p className="py-2 px-4 border text-sm border-white rounded-full text-white hover:text-black hover:bg-white">
                #AccountLead
              </p>
            </div>
          </div>

          {/* Left */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src={fourth}
              alt=""
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="flex py-16 justify-center">
        <button className="py-3 px-8 text-lg font-bold border cursor-pointer">
          Load More
        </button>
      </div>

      <div className="pt-12 md:pt-16 flex flex-col items-center px-4 text-center">
        <h2 className="pb-2 text-2xl md:text-3xl font-semibold">
          Our Communities inspire our Progress
        </h2>

        <p className="text-sm md:text-base pb-4 max-w-xl md:max-w-2xl">
          We strive to create an environment that brings the power of diversity
          to life—where people with different backgrounds and experiences thrive
          in both their professional and personal lives.
        </p>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-8">
        {/* Card 1 */}
        <div className="rounded-sm overflow-hidden bg-white shadow-sm">
          <img src={img1} alt="" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">
              Diversity and Inclusion
            </h2>
            <p className="text-gray-600 mb-4">
              We are a synonym for diversity – the way we glance, dress and
              speak...
            </p>
            <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="rounded-sm overflow-hidden bg-white shadow-sm">
          <img src={img2} alt="" className="w-full h-48 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Company Culture</h2>
            <p className="text-gray-600 mb-4">
              Culture is a common arrangement of convictions, values, and
              practices...
            </p>
            <div className="flex items-center gap-2 text-blue-500 cursor-pointer">
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Add more cards here */}
      </div>

      <div className=" flex py-15 justify-center">
        <button className="py-3 px-8 text-lg  font-bold border cursor-pointer">
          Load More
        </button>
      </div>
     
    </div>
  );
};

export default LifeAtCorpseed;
