import React, { useState } from "react";
import contentImage from "./../assets/contentImage/contentImage.png";
import CalendarImage from "./../assets/contentImage/CalendarImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import image11 from "../assets/carouselImages/image11.png";
import { latestArticles, news, latestProducts } from "./Data";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";

const Content = () => {
  const supportersData = {
    investor: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
    ],

    management: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
    ],

    members: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSob4Ob6z9WYJQ3k2OXvVz9igOjy0lGUIpV8TjxvBgBQ9r3YQTPA77ZsF8HGgMApnWH7Em3N7rGBO3Md5BA2zJJHhYmdNHqc6sFqtRNAo&s",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae laudantium! Iure, quia facere sit reiciendis non ducimus earum pariatur.",
      },
    ],
  };

  const filters = [
    { key: "investor", label: "Investor" },
    { key: "management", label: "Management" },
    { key: "members", label: "Members" },
  ];

  const [activeFilter, setActiveFilter] = useState("investor");

  const getSupportersByFilter = (filter) => supportersData[filter] || [];

  const slides = getSupportersByFilter(activeFilter);
  let articlesSwiperRef = null;
  let productsSwiperRef = null;

  return (
    <div>
      {/* smarter platfrom for better results*/}
      <div className=" flex row justify-around ">
        {/* left */}
        <div className="ml-8 ">
          <h1 className="text-3xl text-blue-700 font-md mt-7">
            A smarter platfrom for better <br />
            results.
          </h1>
          <div className="mt-6 flex flex-col gap-8">
            <div>
              <div className="flex flex-row gap-4">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <circle
                    cx="32"
                    cy="32"
                    r="18"
                    stroke="#FFFFFF"
                    stroke-width="2.5"
                    fill="none"
                  />
                  <line
                    x1="32"
                    y1="32"
                    x2="32"
                    y2="22"
                    stroke="#FFFFFF"
                    stroke-width="2.8"
                    stroke-linecap="round"
                  />
                  <line
                    x1="32"
                    y1="32"
                    x2="42"
                    y2="32"
                    stroke="#FFFFFF"
                    stroke-width="2.8"
                    stroke-linecap="round"
                  />
                  <circle cx="32" cy="32" r="1.5" fill="#FFFFFF" />
                </svg>
                <h2 className="text-2xl font-md text-gray-700">
                  Legal built for you.
                </h2>
              </div>
              <div>
                <p className="text-md">
                  No Complicated Forms. No Robots. Just answer some questions
                  and we'll take care of <br />
                  the paper work & compliance for you.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-4">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <g
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="14" y1="20" x2="50" y2="20" />
                    <circle cx="22" cy="20" r="3.6" fill="#FFFFFF" />
                    <line x1="14" y1="32" x2="50" y2="32" />
                    <rect
                      x="34"
                      y="28"
                      width="6.8"
                      height="8"
                      rx="2"
                      ry="2"
                      fill="#FFFFFF"
                    />
                    <line x1="14" y1="44" x2="50" y2="44" />
                    <circle cx="40" cy="44" r="3.6" fill="#FFFFFF" />
                  </g>
                </svg>

                <h2 className="text-2xl font-md text-gray-700">
                  CA/CS in all 28 States.
                </h2>
              </div>
              <div>
                <p className="text-md">
                  No matter where are you in the country, an independent CA/CS
                  who knows your <br /> state law's and business compliance is
                  here to help.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-4">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <g fill="#FFFFFF">
                    <circle cx="24" cy="24" r="6" />
                    <path d="M16 44c0-5.5 4.5-10 10-10s10 4.5 10 10v2H16v-2z" />
                    <circle cx="42" cy="26" r="4" />
                    <path d="M36 44c0-3.5 3.2-6.5 6.5-6.5S49 40.5 49 44v2H36v-2z" />
                  </g>
                </svg>

                <h2 className="text-2xl font-md text-gray-700">
                  Flat-fee pricing.
                </h2>
              </div>
              <div>
                <p className="text-md">
                  Whether you use a self-guided or CA/CS - supported service,
                  you can always count <br /> us to be upfront about pricing &
                  financial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="h-[700px] w-[600px] mt-15">
          <img src={contentImage} alt="" />
        </div>
      </div>

      {/* Calendar part */}
      <div className=" mt-2 ml-25 mr-25 rounded-xl bg-blue-200  flex flex-row justify-between items-center">
        {/* left Calendar*/}
        <div className="py-23 ml-30 ">
          <img src={CalendarImage} alt="" className="mx-auto" />

          <p className="text-black text-3xl mt-3 font-medium">
            Book a Virtual Meeting
          </p>

          <div className=" mt-3 flex ml-20">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-md cursor-pointer">
              Book Now
            </button>
          </div>
        </div>

        {/* right calendar */}
        <div className="mt-8 flex flex-col gap-3 mr-10 ">
          <div className="bg-white w-[500px] py-4 pl-2 rounded-lg ">
            <div className="flex flex-row gap-3  hover:text-blue-500 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="cursor-pointer"
              >
                <path d="M12 3v12" />
                <path d="M6 9l6 6 6-6" />
                <path d="M5 20h14" />
              </svg>

              <h3 className="hover:text-blue-500 font-bold text-gray-700">
                <a href="">Start Up Guide</a>
              </h3>
            </div>
            <p className="text-md text-gray-600">
              Download Your Legal Guide Now
            </p>
          </div>
          <div className="bg-white w-[500px] py-4 pl-2 rounded-lg">
            <div className="flex flex-row gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="cursor-pointer"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>

              <h3 className="hover:text-blue-500 font-bold text-gray-700">
                <a href="">Your Order</a>
              </h3>
            </div>
            <p className="text-md text-gray-600">Feel Free To Ask Any Query</p>
          </div>
          <div className="bg-white w-[500px] py-4 pl-2 rounded-lg">
            <div className="flex flex-row gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="cursor-pointer"
              >
                <circle cx="12" cy="7" r="4" />

                <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />

                <path d="M9 13l3 3 3-3" />
              </svg>

              <h3 className="hover:text-blue-500 font-bold text-gray-700">
                <a href="">Become a Partner</a>
              </h3>
            </div>
            <p className="text-md text-gray-600">
              At Corpseed We Understand Our Responsibilty
            </p>
          </div>
        </div>
      </div>

      {/* Supporters  */}
      <div className="flex flex-row mt-15  bg-pink-50">
        {/* left  */}

        <div className="mt-10">
          <h1 className="text-4xl text-blue-600 font-bold ml-20">
            Our Supporters
          </h1>
          {/* LEFT FILTER BUTTONS */}
          <div className="flex flex-col gap-3 w-60 ml-20 mt-10 mb-20 ">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 text-left font-medium rounded cursor-pointer
            ${
              activeFilter === f.key
                ? "bg-blue-600 text-white"
                : "text-black hover:bg-gray-200"
            }
          `}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* right  */}
        <div className="w-[50%] pr-12  mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            spaceBetween={40}
            className="pb-10"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="text-center pb-12">
                  {" "}
                  {/* FIX: Add pb-12 */}
                  <img
                    src={item.img}
                    className="w-25 h-25 rounded-full mx-auto object-cover mt-15"
                  />
                  <p className="mt-6 text-gray-700 text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* News */}
      <div className="w-[90%] mx-auto mt-10">
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000 }}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            className="w-full"
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid grid-cols-2 gap-6 bg-[#f3f7ff] p-6 rounded-xl shadow-md">
                  {/* LEFT — IMAGE */}
                  <div className="relative w-full h-[380px]">
                    <p className="absolute top-3 left-3 bg-white px-3 py-1 text-sm font-semibold shadow z-10">
                      In the News
                    </p>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* RIGHT — CONTENT */}
                  <div className="flex flex-col justify-center pr-4">
                    <span className="text-xs text-blue-600 font-semibold tracking-wide mb-2">
                      PRESS RELEASE
                    </span>

                    <h2 className="text-xl font-semibold text-blue-600 leading-snug mb-4">
                      {item.title}
                    </h2>

                    <div className="flex gap-4 items-start">
                      <div className="w-[3px] h-full bg-yellow-400"></div>
                      <p className="text-gray-700 text-[15px] leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots — MUST be outside SwiperSlide */}
          <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20"></div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="w-full bg-pink-50 mt-10 h-[400px]">
        <div className="w-[90%] mx-auto relative">
          <div className="flex flex-row gap-2 mb-5 ">
            <p className="bg-blue-500 text-white px-3 py-1 ">
              Latest
            </p>
            <p className="text-gray-800 font-semibold">Articles</p>
          </div>

          {/* Articles Buttons */}
          <button
            onClick={() => articlesSwiperRef.slidePrev()}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex cursor-pointer items-center justify-center text-xl font-bold z-30"
          >
            &lt;
          </button>

          <button
            onClick={() => articlesSwiperRef.slideNext()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex cursor-pointer items-center justify-center text-xl font-bold z-30"
          >
            &gt;
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (articlesSwiperRef = swiper)}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="pb-10 w-[95%]"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {latestArticles.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow overflow-hidden hover:scale-[1.01]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-orange-500 text-white text-s px-3 py-1 rounded cursor-pointer hover:text-blue-500">
                        {item.title}
                      </span>
                      <span className="bg-gray-200 text-xs px-3 py-1 rounded">
                        {item.Date}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mt-2 hover:text-blue-500 cursor-pointer">
                      {item.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Latest Products */}
      <div className="w-full mt-10 h-[400px]">
        <div className="w-[90%] mx-auto relative">
          <div className="flex flex-row gap-2 mb-5">
            <p className="bg-blue-500 text-white px-3 py-1 ">
              Latest
            </p>
            <p className="text-gray-800 font-semibold">Products</p>
          </div>

          {/* Products Buttons */}
          <button
            onClick={() => productsSwiperRef.slidePrev()}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 
           flex cursor-pointer items-center justify-center 
           text-2xl font-bold  z-30"
          >
            &lt;
          </button>

          <button
            onClick={() => productsSwiperRef.slideNext()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 
           flex cursor-pointer items-center justify-center 
           text-2xl font-bold z-30"
          >
            &gt;
          </button>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (productsSwiperRef = swiper)}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="pb-10 w-[95%]"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {latestProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 border-gray-200 border-2 transition-all">
                  <img
                    src={item.image}
                    alt={item.content}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-lg hover:text-blue-500 text-black line-clamp-2 cursor-pointer">
                      {item.content}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Content;
