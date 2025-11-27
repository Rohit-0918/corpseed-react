import React from "react";
import Header from "../../components/Header";
import PressReleaseImg from "./../../assets/WhoWeAreImages/PressRelease.png";
import Footer from "../../components/Footer";
import CalendarImage from "./../../assets/contentImage/CalendarImage.png";

const PressRelease = () => {
  const data = [
    {
      id: 1,
      title:
        "adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      date: "2025-7-15",
    },
    {
      id: 2,
      title:
        "adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      date: "2025-7-15",
    },
    {
      id: 3,
      title:
        "adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      date: "2025-7-15",
    },
    {
      id: 4,
      title:
        "adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet ipsam itaque corporis sunt enim a eligendi tenetur dolorum veritatis.",
      date: "2025-7-15",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <img src={PressReleaseImg} alt="" className="w-full" />
      </div>

      <div className="flex w-[90%] h-full  mx-auto gap-7 py-11">
        {/* left  */}
        <div className="w-[63%] h-full">
          <div className="w-full mx-auto flex flex-col justify-between items-stretch  gap-6">
            {data.map((item, id) => (
              <div
                key={id}
                className="w-full bg-white border border-gray-200  p-6 flex flex-col gap-4 "
              >
                <div className="flex flex-col gap-1">
                  <div className="flex justify-start">
                    <button className="p-1 text-white bg-blue-600">
                      Press Release
                    </button>
                  </div>
                  <div className="mb-4 text-2xl text-gray-800">
                    {item.title}
                  </div>
                </div>

                <p className="text-md  text-black">{item.content}</p>

                <div className="flex items-center">
                  <p className="text-gray-600 text-xl mt-2 leading-relaxed items-center">
                    {item.date}
                  </p>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="320"
                    height="40"
                    viewBox="0 0 320 40"
                  >
                    <g
                      transform="translate(6,8)"
                      fill="none"
                      stroke="#6b7280"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="6" y1="8" x2="22" y2="2" />
                      <line x1="6" y1="8" x2="22" y2="14" />
                      <circle
                        cx="6"
                        cy="8"
                        r="3.5"
                        fill="#6b7280"
                        stroke="none"
                      />
                      <circle
                        cx="22"
                        cy="2"
                        r="3.5"
                        fill="#6b7280"
                        stroke="none"
                      />
                      <circle
                        cx="22"
                        cy="14"
                        r="3.5"
                        fill="#6b7280"
                        stroke="none"
                      />
                    </g>

                    <g transform="translate(60,2)">
                      <rect
                        x="0"
                        y="0"
                        rx="6"
                        ry="6"
                        width="36"
                        height="36"
                        fill="#1877F2"
                      />
                      <path
                        d="M20.5 10.2h-2.2c-1.0 0-1.2 0.5-1.2 1.0v2.0h3.4v2.8h-3.4V26h-3.1v-9.0h-2.6v-2.8h2.6V11c0-2.6 1.6-4.4 4.8-4.4h2.7v2.6z"
                        fill="#ffffff"
                        transform="translate(-3,0) scale(0.9)"
                      />
                    </g>

                    <g transform="translate(108,2)">
                      <rect
                        x="0"
                        y="0"
                        rx="6"
                        ry="6"
                        width="36"
                        height="36"
                        fill="#25D366"
                      />
                      <path
                        d="M18 9.5c-4.1 0-7.5 3.3-7.5 7.5 0 1.3.3 2.5.9 3.6L10 23.5l3-1c1 .5 2.2.8 3.5.8 4.1 0 7.5-3.3 7.5-7.5S22.1 9.5 18 9.5z"
                        fill="#ffffff"
                        opacity="0.06"
                      />
                      <path
                        d="M18.1 12.6c-2.4 0-4.4 2-4.4 4.4 0 .8.2 1.6.6 2.3l-.4 1.1 1.2-.4c.6.3 1.4.5 2.1.5 2.4 0 4.4-2 4.4-4.4s-2-4.4-4.5-4.4z"
                        fill="#ffffff"
                        transform="scale(0.95) translate(0.5,0)"
                      />
                      <path
                        d="M13.7 16.1c.5.9 1.3 1.7 2.3 2.2l.8-.8c.2-.2.5-.2.7 0l1.1 1.1c.2.2.2.5 0 .7l-1.1 1.1c-1.7 1.7-4 2.6-6.4 2.6-.5 0-1-.1-1.4-.2-1.6-.5-3-1.5-4-2.8C6.1 19.6 6 17.8 7 16l1.1-1.8c.2-.4.6-.6 1.1-.5 1.3.2 2.6.7 3.7 1.5.3.2.4.6.3 1l-.3 1.3z"
                        fill="#ffffff"
                        transform="translate(1,-1) scale(0.9)"
                      />
                    </g>

                    <g transform="translate(156,2)">
                      <rect
                        x="0"
                        y="0"
                        rx="6"
                        ry="6"
                        width="36"
                        height="36"
                        fill="#0A66C2"
                      />
                      <rect
                        x="9"
                        y="11"
                        width="3"
                        height="10"
                        rx="0.8"
                        fill="#ffffff"
                      />
                      <circle cx="10.5" cy="9.5" r="1.6" fill="#ffffff" />
                      <path
                        d="M17.8 11h3v1.6h.1c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8V21h-3v-4.6c0-1.1 0-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4V21h-3V11z"
                        fill="#ffffff"
                        transform="translate(-1.2,-0.6) scale(0.9)"
                      />
                    </g>

                    <g transform="translate(204,2)">
                      <rect
                        x="0"
                        y="0"
                        rx="6"
                        ry="6"
                        width="36"
                        height="36"
                        fill="#1976D2"
                      />
                      <rect
                        x="8.5"
                        y="11.2"
                        width="19"
                        height="12.6"
                        rx="1.2"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="1.6"
                      />
                      <path
                        d="M9 13l15 9 5-3.8"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 22V13l8.5 5.2"
                        fill="none"
                        stroke="#ffffff"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>

                    <rect x="0" y="0" width="320" height="40" fill="none" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right  */}
        <div className="w-[37%] h-full flex flex-col gap-15 ">
          {/* search  */}
          <div>
            <input
              type="text"
              placeholder="Type to search.."
              class="w-full px-4 py-2 outline-none border-none shadow-[3px_3px_6px_rgba(0,0,0,0.15)] focus:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] transition-shadow duration-200"
            />
          </div>

          {/* categories */}
          <div className="flex flex-col gap-2">
            <p className="text-xl">Categories</p>

            <div className="flex flex-col">
              <button className="w-full bg-gray-50 border-b border-b-gray-300 flex justify-start px-3 py-3 text-gray-600">
                Latest News
              </button>

              <button className="w-full bg-gray-50 flex justify-start px-3 py-3 text-gray-600">
                View All
              </button>
            </div>
          </div>

          {/* Top - Release */}
          <div>
            <p className="text-2xl">Top Press Release</p>

            <div className="bg-gray-50 p-3">
              <div className="flex  border-t border-t-gray-300 pt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ratione{" "}
                </p>
                <img
                  src={CalendarImage}
                  alt=""
                  className="h-[100px] w-[100px] flex justify-end"
                />
              </div>
              <div className="flex  border-t border-t-gray-300 pt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ratione
                </p>
                <img
                  src={CalendarImage}
                  alt=""
                  className="h-[100px] w-[100px] flex justify-end"
                />
              </div>
              <div className="flex border-t border-t-gray-300 pt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ratione
                </p>
                <img
                  src={CalendarImage}
                  alt=""
                  className="h-[100px] w-[100px] flex justify-end"
                />
              </div>
              <div className="flex border-t border-t-gray-300 border-b border-b-gray-300 pt-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ratione
                </p>
                <img
                  src={CalendarImage}
                  alt=""
                  className="h-[100px] w-[100px] flex justify-end"
                />
              </div>
            </div>
          </div>

          {/* Call back */}
          <div className="bg-blue-50 py-6">
            <div className="p-5 bg-white border-b border-gray-300 max-w-md mx-auto rounded-t-md px-2">
              <p className="text-2xl font-semibold mb-5 px-5 py-2">
                Schedule a Callback
              </p>

              <div className="px-5">
                {/* Name */}
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full outline-none border-none border-b border-gray-300 py-2 bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-5 flex items-center gap-3 border-b border-gray-300 py-2 bg-white">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India"
                    className="w-6 h-4 object-cover"
                  />
                  <span className="text-gray-600 text-sm">+91</span>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="flex-1 outline-none border-none bg-white"
                  />
                </div>

                {/* WhatsApp toggle */}
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-gray-600">Get updates on WhatsApp</p>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition"></div>
                    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-5"></div>
                  </label>
                </div>
              </div>
              {/* Submit Button */}
              <button className="w-[50%] flex mx-auto bg-blue-600 justify-center text-white py-3 rounded-md text-lg">
                Submit
              </button>
            </div>
          </div>

          {/* Follow us */}
          <div className="flex flex-row gap-3 items-center">
            <p className="text-3xl mx-auto">Follow us</p>
            <svg
              className="cursor-pointer my-auto mx-auto flex"
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="40"
              viewBox="0 0 320 40"
            >
              <g
                transform="translate(6,8)"
                fill="none"
                stroke="#6b7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="6" y1="8" x2="22" y2="2" />
                <line x1="6" y1="8" x2="22" y2="14" />
                <circle cx="6" cy="8" r="3.5" fill="#6b7280" stroke="none" />
                <circle cx="22" cy="2" r="3.5" fill="#6b7280" stroke="none" />
                <circle cx="22" cy="14" r="3.5" fill="#6b7280" stroke="none" />
              </g>

              <g transform="translate(60,2)">
                <rect
                  x="0"
                  y="0"
                  rx="6"
                  ry="6"
                  width="36"
                  height="36"
                  fill="#1877F2"
                />
                <path
                  d="M20.5 10.2h-2.2c-1.0 0-1.2 0.5-1.2 1.0v2.0h3.4v2.8h-3.4V26h-3.1v-9.0h-2.6v-2.8h2.6V11c0-2.6 1.6-4.4 4.8-4.4h2.7v2.6z"
                  fill="#ffffff"
                  transform="translate(-3,0) scale(0.9)"
                />
              </g>

              <g transform="translate(108,2)">
                <rect
                  x="0"
                  y="0"
                  rx="6"
                  ry="6"
                  width="36"
                  height="36"
                  fill="#25D366"
                />
                <path
                  d="M18 9.5c-4.1 0-7.5 3.3-7.5 7.5 0 1.3.3 2.5.9 3.6L10 23.5l3-1c1 .5 2.2.8 3.5.8 4.1 0 7.5-3.3 7.5-7.5S22.1 9.5 18 9.5z"
                  fill="#ffffff"
                  opacity="0.06"
                />
                <path
                  d="M18.1 12.6c-2.4 0-4.4 2-4.4 4.4 0 .8.2 1.6.6 2.3l-.4 1.1 1.2-.4c.6.3 1.4.5 2.1.5 2.4 0 4.4-2 4.4-4.4s-2-4.4-4.5-4.4z"
                  fill="#ffffff"
                  transform="scale(0.95) translate(0.5,0)"
                />
                <path
                  d="M13.7 16.1c.5.9 1.3 1.7 2.3 2.2l.8-.8c.2-.2.5-.2.7 0l1.1 1.1c.2.2.2.5 0 .7l-1.1 1.1c-1.7 1.7-4 2.6-6.4 2.6-.5 0-1-.1-1.4-.2-1.6-.5-3-1.5-4-2.8C6.1 19.6 6 17.8 7 16l1.1-1.8c.2-.4.6-.6 1.1-.5 1.3.2 2.6.7 3.7 1.5.3.2.4.6.3 1l-.3 1.3z"
                  fill="#ffffff"
                  transform="translate(1,-1) scale(0.9)"
                />
              </g>

              <g transform="translate(156,2)">
                <rect
                  x="0"
                  y="0"
                  rx="6"
                  ry="6"
                  width="36"
                  height="36"
                  fill="#0A66C2"
                />
                <rect
                  x="9"
                  y="11"
                  width="3"
                  height="10"
                  rx="0.8"
                  fill="#ffffff"
                />
                <circle cx="10.5" cy="9.5" r="1.6" fill="#ffffff" />
                <path
                  d="M17.8 11h3v1.6h.1c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8V21h-3v-4.6c0-1.1 0-2.5-1.5-2.5-1.5 0-1.7 1.2-1.7 2.4V21h-3V11z"
                  fill="#ffffff"
                  transform="translate(-1.2,-0.6) scale(0.9)"
                />
              </g>

              <g transform="translate(204,2)">
                <rect
                  x="0"
                  y="0"
                  rx="6"
                  ry="6"
                  width="36"
                  height="36"
                  fill="#1976D2"
                />
                <rect
                  x="8.5"
                  y="11.2"
                  width="19"
                  height="12.6"
                  rx="1.2"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1.6"
                />
                <path
                  d="M9 13l15 9 5-3.8"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22V13l8.5 5.2"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>

              <rect x="0" y="0" width="320" height="40" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PressRelease;
