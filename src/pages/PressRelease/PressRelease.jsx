import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PressReleaseImg from "./assets/PressRelease.png"
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../toolkit/slices/HomeSlice"
import Call from "../../components/Call";
import ScheduleACallback from "../../components/ScheduleACallback"


const PressRelease = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  const fixImageUrl = (url) => {
    const BASE_URL =
      "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/";

    if (!url || url === "null") return BASE_URL;
    return url.replace(/^null\/?|^null/, BASE_URL);
  };

  const pressReleases = data?.data?.pressReleases || [];

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10">Something went wrong</p>;

  return (
    <div>
      {/* Hero Image */}
      <img
        src={PressReleaseImg}
        alt="Press Release"
        className="w-full h-auto object-cover"
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-7 py-10">
        {/* Left Column */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {pressReleases.map((item) => (
            <div
              key={item.slug}
              className="w-full bg-white border border-gray-200 p-6 flex flex-col gap-4"
            >
              {/* Category */}
              <div className="flex justify-start">
                <span className="px-3 py-1 text-white bg-blue-600 rounded-md text-sm">
                  Press Release
                </span>
              </div>

              {/* Title */}
              <Link to={`/press-release/${item.slug}`}>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800  hover:text-[#2b63f9]">
                  {item.title}
                </h2>
              </Link>

              {/* Summary */}
              <p className="text-gray-700">{item.summary}</p>

              <div className="flex gap-5 items-center">
                <span>2024-08-05</span>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-share"
                    viewBox="0 0 19 19"
                  >
                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                  </svg>
                </div>

                <div className="flex gap-3 my-auto">
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 29 26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.7833 0.282227H2.21667C1.3 0.282227 0.75 0.948893 0.75 1.61556V23.7822C0.75 24.6156 1.48333 25.1156 2.21667 25.1156H15.4167V15.4489H11.75V11.7822H15.4167V9.11556C15.4167 5.94889 17.6167 4.11556 20.7333 4.11556C22.2 4.11556 23.4833 4.28223 23.85 4.28223V7.61556H21.65C20 7.61556 19.6333 8.28223 19.6333 9.44889V11.7822H23.6667L23.1167 15.6156H19.6333V25.2822H26.6C27.5167 25.2822 28.0667 24.6156 28.0667 23.9489V1.61556C28.25 0.948893 27.5167 0.282227 26.7833 0.282227Z"
                        fill="#2b63f9"
                      ></path>
                    </svg>
                  </button>

                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 38 38"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8 2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z"
                        fill="#2b63f9"
                      ></path>
                    </svg>
                  </button>

                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 29 26"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.2333 0.332275H2.76667C1.66667 0.332275 0.75 1.18228 0.75 2.20228V23.9623C0.75 24.9823 1.66667 25.8323 2.76667 25.8323H26.2333C27.3333 25.8323 28.25 24.9823 28.25 23.9623V2.20228C28.25 1.18228 27.3333 0.332275 26.2333 0.332275ZM4.96667 9.85228H9V22.0923H4.96667V9.85228ZM6.98333 8.15228C5.7 8.15228 4.6 7.13228 4.6 5.94228C4.6 4.75228 5.7 3.73228 6.98333 3.73228C8.26667 3.73228 9.36667 4.75228 9.36667 5.94228C9.36667 7.30228 8.26667 8.15228 6.98333 8.15228ZM24.5833 22.0923H20.3667V16.1423C20.3667 14.7823 20.3667 12.9123 18.1667 12.9123C15.9667 12.9123 15.6 14.4423 15.6 15.9723V21.9223H11.5667V9.85228H15.6V11.5523C16.15 10.5323 17.4333 9.51228 19.45 9.51228C23.6667 9.51228 24.4 12.0623 24.4 15.2923V22.0923H24.5833Z"
                        fill="#2b63f9"
                      ></path>
                    </svg>
                  </button>

                  <button>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 29 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 9.44963L3.5 3.28296H25.5L14.5 9.44963ZM25.5 18.283H3.5V5.78296L14.5 12.1163L25.5 5.78296V18.283ZM25.5 0.782959H3.5C2.03333 0.782959 0.75 1.94963 0.75 3.28296V18.283C0.75 19.6163 2.03333 20.783 3.5 20.783H25.5C26.9667 20.783 28.25 19.6163 28.25 18.283V3.28296C28.25 1.94963 26.9667 0.782959 25.5 0.782959Z"
                        fill="#2b63f9"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Type to search.."
            className="w-full px-4 py-2 rounded-md outline-none border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500"
          />

          {/* Categories */}
          <div>
            <p className="text-lg font-semibold mb-2">Categories</p>
            <button
              onClick={() => navigate("/press-release")}
              className="w-full cursor-pointer bg-[#f3f3f391] border-b text-gray-500 border-b-gray-200 px-3 py-2 text-left"
            >
              Latest News
            </button>
            <button
              onClick={() => navigate("/press-release")}
              className="w-full cursor-pointer bg-[#f3f3f391] text-gray-500 px-3 py-2 text-left"
            >
              View All
            </button>
          </div>

          {/* Top Press Release */}
          <div>
            <p className="text-lg font-semibold mb-4">Top Press Release</p>
            <div className="bg-[#f3f3f391] p-3 flex flex-col gap-4">
              {pressReleases.slice(0, 4).map((item) => (
                <Link
                  key={item.slug}
                  to={`/press-release/${item.slug}`}
                  className="flex items-center gap-3 border-t border-t-gray-200 pt-3 hover:text-blue-500"
                >
                  <p className="text-sm flex-1">{item.title}</p>
                  <img
                    src={fixImageUrl(item.image)}
                    alt={item.title}
                    className="h-20 w-20 object-cover rounded"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Callback Form */}
          <div className="bg-blue-50 py-6 px-4 rounded-md">
            <ScheduleACallback />
          </div>

          <div className="hidden sm:flex sm:flex-col gap-3">
            <div>
              <p className="text-lg">Follow Us</p>
            </div>
            <div className="flex gap-3 w-full h-auto bg-[#f3f3f391] sm:hidden py-2 px-2">
              <a href="https://www.facebook.com/CorpseedGroup/" target="_blank">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 14.5C3.63401 14.5 0.5 11.366 0.5 7.5C0.5 3.63401 3.63401 0.5 7.5 0.5C11.366 0.5 14.5 3.63401 14.5 7.5C14.5 11.366 11.366 14.5 7.5 14.5ZM7.5 14.5V6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H10M5 8.5H10"
                    stroke="black"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/corpseed/" target="_blank">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z"
                    stroke="black"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/corpseed/"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 6V11M10.5 11V8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5V11V6M4 4.5H5M1.5 0.5H13.5C14.0523 0.5 14.5 0.947715 14.5 1.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V1.5C0.5 0.947716 0.947715 0.5 1.5 0.5Z"
                    stroke="black"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCk19GzvT2hLrGQsskedcn2w"
                target="_blank"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.61087 12.738L1.5061 13.2269H1.5061L1.61087 12.738ZM13.3891 12.738L13.4939 13.2269L13.3891 12.738ZM13.3891 2.26196L13.4939 1.77306V1.77306L13.3891 2.26196ZM1.61087 2.26196L1.71563 2.75086L1.61087 2.26196ZM6.5 5.5L6.77735 5.08398C6.62392 4.98169 6.42665 4.97215 6.26407 5.05916C6.10149 5.14617 6 5.3156 6 5.5H6.5ZM6.5 9.5H6C6 9.6844 6.10149 9.85383 6.26407 9.94084C6.42665 10.0278 6.62392 10.0183 6.77735 9.91603L6.5 9.5ZM9.5 7.5L9.77735 7.91603C9.91645 7.82329 10 7.66718 10 7.5C10 7.33282 9.91645 7.17671 9.77735 7.08398L9.5 7.5ZM0 3.63609V11.3639H1V3.63609H0ZM15 11.3639V3.63609H14V11.3639H15ZM1.5061 13.2269C5.45719 14.0736 9.54281 14.0736 13.4939 13.2269L13.2844 12.2491C9.4714 13.0662 5.5286 13.0662 1.71563 12.2491L1.5061 13.2269ZM13.4939 1.77306C9.54281 0.926396 5.45719 0.926396 1.5061 1.77306L1.71563 2.75086C5.5286 1.9338 9.4714 1.9338 13.2844 2.75086L13.4939 1.77306ZM15 3.63609C15 2.73766 14.3724 1.9613 13.4939 1.77306L13.2844 2.75086C13.7018 2.84031 14 3.20919 14 3.63609H15ZM14 11.3639C14 11.7908 13.7018 12.1597 13.2844 12.2491L13.4939 13.2269C14.3724 13.0387 15 12.2623 15 11.3639H14ZM0 11.3639C0 12.2623 0.627614 13.0387 1.5061 13.2269L1.71563 12.2491C1.29821 12.1597 1 11.7908 1 11.3639H0ZM1 3.63609C1 3.20919 1.29821 2.84031 1.71563 2.75086L1.5061 1.77306C0.627614 1.9613 0 2.73766 0 3.63609H1ZM6 5.5V9.5H7V5.5H6ZM6.77735 9.91603L9.77735 7.91603L9.22265 7.08398L6.22265 9.08398L6.77735 9.91603ZM9.77735 7.08398L6.77735 5.08398L6.22265 5.91603L9.22265 7.91603L9.77735 7.08398Z"
                    fill="black"
                  ></path>
                </svg>
              </a>

              <a href="skype:live:corpseedindia?chat" target="_blank">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                  fill="currentColor"
                >
                  <path
                    d="M13.8292 8.34061L13.3337 8.27388C13.3174 8.39507 13.346 8.51804 13.4143 8.61953L13.8292 8.34061ZM6.65938 1.17017L6.38046 1.58515C6.48133 1.65295 6.60344 1.68168 6.72396 1.66599L6.65938 1.17017ZM1.17018 6.65939L1.66585 6.72504C1.68186 6.60419 1.65316 6.48165 1.58515 6.38047L1.17018 6.65939ZM8.34 13.8298L8.61874 13.4147C8.51759 13.3468 8.39513 13.3182 8.27435 13.3342L8.34 13.8298ZM14.3247 8.40733C14.3638 8.11707 14.3913 7.81433 14.3913 7.5H13.3913C13.3913 7.75662 13.3689 8.01267 13.3337 8.27388L14.3247 8.40733ZM14.3913 7.5C14.3913 3.694 11.3053 0.608696 7.5 0.608696V1.6087C10.7531 1.6087 13.3913 4.24635 13.3913 7.5H14.3913ZM7.5 0.608696C7.18522 0.608696 6.88264 0.636873 6.59481 0.674361L6.72396 1.66599C6.98761 1.63165 7.24382 1.6087 7.5 1.6087V0.608696ZM6.93831 0.755201C6.22907 0.278494 5.37403 0 4.45652 0V1C5.1691 1 5.83091 1.21577 6.38046 1.58515L6.93831 0.755201ZM4.45652 0C1.99516 0 0 1.99516 0 4.45652H1C1 2.54745 2.54745 1 4.45652 1V0ZM0 4.45652C0 5.37468 0.278526 6.22912 0.755209 6.93831L1.58515 6.38047C1.21575 5.83088 1 5.16966 1 4.45652H0ZM0.674511 6.59374C0.636172 6.8832 0.608696 7.18572 0.608696 7.5H1.6087C1.6087 7.24332 1.63115 6.98706 1.66585 6.72504L0.674511 6.59374ZM0.608696 7.5C0.608696 11.306 3.69403 14.3913 7.5 14.3913V13.3913C4.24632 13.3913 1.6087 10.7537 1.6087 7.5H0.608696ZM7.5 14.3913C7.81368 14.3913 8.11621 14.3638 8.40565 14.3255L8.27435 13.3342C8.01231 13.3689 7.75605 13.3913 7.5 13.3913V14.3913ZM8.06127 14.2449C8.77094 14.7215 9.62528 15 10.5435 15V14C9.83037 14 9.16907 13.7843 8.61874 13.4147L8.06127 14.2449ZM10.5435 15C13.0042 15 15 13.0049 15 10.5435H14C14 12.4525 12.452 14 10.5435 14V15ZM15 10.5435C15 9.62506 14.7207 8.77067 14.2442 8.06169L13.4143 8.61953C13.7838 9.16933 14 9.83059 14 10.5435H15ZM7 8H8V7H7V8ZM9.94721 5.27639C9.55608 4.49413 8.75656 4 7.88197 4V5C8.37778 5 8.83105 5.28013 9.05279 5.72361L9.94721 5.27639ZM9 9C9 9.55229 8.55229 10 8 10V11C9.10457 11 10 10.1046 10 9H9ZM8 8C8.55228 8 9 8.44772 9 9H10C10 7.89543 9.10457 7 8 7V8ZM7.11803 10C6.62221 10 6.16895 9.71987 5.94721 9.27639L5.05279 9.72361C5.44392 10.5059 6.24344 11 7.11803 11V10ZM5 6C5 7.10457 5.89543 8 7 8V7C6.44772 7 6 6.55228 6 6H5ZM6 6C6 5.44772 6.44772 5 7 5V4C5.89543 4 5 4.89543 5 6H6ZM8 10H7.11803V11H8V10ZM7.88197 4H7V5H7.88197V4Z"
                    fill="black"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PressRelease;
