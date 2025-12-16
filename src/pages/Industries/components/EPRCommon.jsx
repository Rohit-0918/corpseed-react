import React from "react";

const EPRCommon = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 sm:gap-10 px-4 sm:px-6 md:px-0">
      {/* Image */}
      <div className="w-full">
        <img
          src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/Epr_Authorization_Ewaste_corpseed.webp"
          alt="EPR Image"
          className="w-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col ">
        {/* Stats Section */}
        <div className="flex flex-row flex-nowrap items-center justify-between gap-4 sm:gap-10">
          {/* Stat 1 */}
          <div className="flex flex-col justify-center sm:pr-6 sm:border-r gap-1 border-gray-300 shrink">
            <p className="text-xl sm:text-2xl font-semibold text-blue-500">
              1000+
            </p>
            <p className="text-gray-600 whitespace-nowrap text-sm sm:text-base">
              Happy Customers
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center sm:pr-6 sm:border-r gap-1 border-gray-300 shrink">
            <p className="text-xl sm:text-2xl font-semibold text-blue-500">
              500+
            </p>
            <p className="text-gray-600 whitespace-nowrap text-sm sm:text-base">
              CA, CS &amp; Lawyers
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center gap-1 shrink">
            <p className="text-xl sm:text-2xl font-semibold text-blue-500">
              7+
            </p>
            <p className="text-gray-600 whitespace-nowrap text-sm sm:text-base">
              Offices
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex items-center gap-2 mt-4 flex-nowrap">
          <img
            src="https://www.corpseed.com/assets/img/circled-play-video.png"
            className="w-8 h-8 sm:w-10 sm:h-10"
            alt="Play Icon"
          />
          <span className="text-gray-700 text-sm sm:text-base whitespace-nowrap">
            Click To Watch &amp; Know More
          </span>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-2 mt-2 flex-nowrap">
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
          <small className="text-xs sm:text-sm md:text-base whitespace-nowrap">
            [ Rated <b>4.9</b> Stars By <b>1203+</b> Customers Globally ]
          </small>
        </div>
      </div>
    </div>
  );
};

export default EPRCommon;
