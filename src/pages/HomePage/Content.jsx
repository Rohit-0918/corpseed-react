import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import SmarterPlatform from "../../assets/HomePage/SmarterPlatform.png";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../toolkit/slices/HomeSlice";
import { useNavigate, useParams } from "react-router-dom";

const Content = () => {
  const supportersData = {
    investor: [
      {
        img: "https://www.corpseed.com/assets/img/logo.png",
        text: "We are a bootstrap organization based on the direct support of our clients themselves. It enables us to independently make decisions for the welfare of our clients and provide quality service at affordable rates. Our self-reliance and financial discipline promote efficiency and stimulate creativity.",
      },
    ],

    management: [
      {
        img: "https://www.corpseed.com/assets/img/management/viresh.png",
        text: "Mr. Viresh Oberoi is an exceptional entrepreneur and the driving force behind mjunction services limited. As the Founder and CEO, he has revolutionized India's largest eCommerce company and left an indelible mark on Tata Steel's market-facing processes. He helps Corpseed in its overall business growth with his unwavering determination and innovative approach.",
      },
      {
        img: "	https://www.corpseed.com/assets/img/management/vinay.png",
        text: "With over fifteen years of experience in financial innovation and technology, Mr. Vinay Singh advises and provides strategic guidance to our clients about banking, finance, and tech trends. Corpseed is implementing innovative digital finance solutions under his direction and evolving continuously.",
      },
      {
        img: "	https://www.corpseed.com/assets/img/management/vipan.png",
        text: "Mr. Vipan Singh is the visionary founder and CEO of Corpseed ITES Pvt Ltd. With his unbeatable passion, he advocates automation in compliance management for businesses. Under his astute guidance, Corpseed has become synonymous with excellence and efficiency. His unwavering focus on delivering cutting-edge solutions has empowered countless businesses to stay ahead of the curve.",
      },
      {
        img: "https://www.corpseed.com/assets/img/management/sakshi.png",
        text: "Mrs. Sakshi Jaggi is a passionate and data-driven HR Expert who revolutionises how Corpseed manages its human resources. With her invaluable insights and expertise in recruitment, data analytics, and operations, she brings a fresh perspective to the table. With her unparalleled commitment and deep understanding of the HR landscape, she has become an indispensable asset to Corpseed.",
      },
    ],

    members: [
      {
        img: "https://www.corpseed.com/assets/img/member/iso.png",
        text: "Corpseed is an ISO Certified Company for its Quality Management System, demonstrating its adherence to globally recognized and highly esteemed ISO standards. By aligning with these standards, Corpseed ensures the delivery of quality services that consistently fulfil customer expectations.",
      },
      {
        img: "	https://www.corpseed.com/assets/img/member/cii.png",
        text: "Corpseed is a member of CII - the Confederation of Indian Industry. CII helps companies enhance their competitiveness, expand market reach, and stay updated with industry trends and best practices. Its networking and training have contributed to our excellence giving us an edge over the competitors.",
      },
    ],
  };


  const fixImageUrl = (url) => {
    const BASE_URL =
      "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/";

    if (!url || url === "null" || url === null) return BASE_URL;
    return url.replace(/^null\/?|^null/, BASE_URL);
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  const pressReleases = data?.data?.pressReleases || [];
  const products = data?.data?.products || [];
  const blogs = data?.data?.blogs || [];

  const filters = [
    { key: "investor", label: "Investor" },
    { key: "management", label: "Management" },
    { key: "members", label: "Members" },
  ];

  const [activeFilter, setActiveFilter] = useState("investor");

  const getSupportersByFilter = (filter) => supportersData[filter] || [];
  const slides = getSupportersByFilter(activeFilter);
  let productsSwiperRef = null;
  const articlesSwiperRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div>
      {/* smarter platform for better results */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-5 lg:px-20 py-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-700 font-medium mt-2 md:mt-4 leading-snug text-center lg:text-left">
            A smarter platform for better <br className="hidden lg:block" />
            results.
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:gap-10">
            {/* ITEM 1 */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3">
                {/* Icon */}
                <svg
                  width="40"
                  height="40"
                  className="md:w-[45px] md:h-[45px] mb-2 lg:mb-0"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <circle
                    cx="32"
                    cy="32"
                    r="18"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <line
                    x1="32"
                    y1="32"
                    x2="32"
                    y2="22"
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32"
                    y1="32"
                    x2="42"
                    y2="32"
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <circle cx="32" cy="32" r="1.5" fill="#FFFFFF" />
                </svg>

                {/* Heading */}
                <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                  Legal built for you.
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-lg md:text-md mt-2">
                No complicated forms. Just answer some questions and we'll take
                care of the paperwork & compliance for you.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3">
                {/* Icon */}
                <svg
                  width="40"
                  height="40"
                  className="md:w-[45px] md:h-[45px] mb-2 lg:mb-0"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <g
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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

                {/* Heading */}
                <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                  CA/CS in all 28 States.
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-lg md:text-md mt-2">
                No matter where you are, a CA/CS who knows your state laws &
                compliance is here to help.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-4">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3">
                {/* Icon */}
                <svg
                  width="40"
                  height="40"
                  className="md:w-[45px] md:h-[45px] mb-2 lg:mb-0"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="30" fill="#2B6CE6" />
                  <g fill="#FFFFFF">
                    <circle cx="24" cy="24" r="6" />
                    <path d="M16 44c0-5.5 4.5-10 10-10s10 4.5 10 10v2H16v-2z" />
                    <circle cx="42" cy="26" r="4" />
                    <path d="M36 44c0-3.5 3.2-6.5 6.5-6.5S49 40.5 49 44v2H36v-2z" />
                  </g>
                </svg>

                {/* Heading */}
                <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                  Flat-fee pricing.
                </h2>
              </div>

              {/* Paragraph */}
              <p className="text-lg md:text-md mt-2">
                Whether you use a self-guided or CA/CS-supported service, you
                can always count on transparent pricing.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src={SmarterPlatform}
            alt="content"
            className="w-[90%] md:w-[70%] lg:w-full max-w-[500px] object-contain"
          />
        </div>
      </div>

      {/* Calendar Section */}
      <div className="mt-5 bg-blue-200 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-10 gap-10">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <img
            src="https://www.corpseed.com/assets/svg/calander.svg"
            alt=""
            className="mx-auto lg:mx-0 w-[200px] md:w-[260px] lg:w-[300px]"
          />

          <p className="text-black text-2xl md:text-3xl mt-4 font-semibold">
            Book a Virtual Meeting
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/book-meeting")}
              className="bg-blue-500 hover:bg-blue-700  text-white font-semibold py-2 px-6 mt-5 rounded-md mx-auto lg:mx-0 transition"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Card 1 */}
          <div className="bg-white w-full py-4 px-4 rounded-lg shadow">
            <div className="flex items-center gap-3 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="M6 9l6 6 6-6" />
                <path d="M5 20h14" />
              </svg>

              <h3 className="font-bold text-gray-700 hover:text-blue-500">
                Start Up Guide
              </h3>
            </div>
            <p className="text-md text-gray-600 mt-1">
              Download Your Legal Guide Now
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-full py-4 px-4 rounded-lg shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>

              <h3 className="font-bold text-gray-700 hover:text-blue-500">
                Your Order
              </h3>
            </div>
            <p className="text-md text-gray-600 mt-1">
              Feel Free To Ask Any Query
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white w-full py-4 px-4 rounded-lg shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B6CE6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
                <path d="M9 13l3 3 3-3" />
              </svg>

              <h3 className="font-bold text-gray-700 hover:text-blue-500">
                Become a Partner
              </h3>
            </div>
            <p className="text-md text-gray-600 mt-1">
              At Corpseed We Understand Our Responsibility
            </p>
          </div>
        </div>
      </div>

      {/* Supporters */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-pink-50 py-10 px-6 lg:px-16 gap-10 lg:gap-20">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl text-blue-600 font-bold text-center lg:text-left">
            Our Supporters
          </h1>

          {/* Tabs */}
          <div className="flex flex-row lg:flex-col justify-start gap-0 lg:gap-3 sm:gap-0  w-full mt-6  lg:px-0 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 font-medium rounded-md
        ${
          activeFilter === f.key
            ? "bg-blue-600 text-white"
            : "text-black hover:bg-gray-200"
        }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Swiper) */}
        <div className="w-full lg:w-2/3">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={30}
            className="pb-10"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="px-4 pb-10">
                  <img
                    src={item.img}
                    className="w-24 h-24 rounded-full mx-auto object-contain mt-6"
                  />
                  <p className="mt-4 mb-6 text-[15px] leading-relaxed w-full text-center ">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Press Release */}
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
            className="w-full pb-14"
          >
            {pressReleases.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3f7ff] p-6 rounded-xl shadow-md">
                  {/* LEFT — IMAGE */}
                  <div className="relative w-full h-[250px] md:h-[380px] overflow-hidden">
                    <p className="absolute top-0 left-0 bg-white px-5 py-3 shadow-lg text-sm font-semibold z-10">
                      In the News
                    </p>
                    <img
                      src={fixImageUrl(item.image)}
                      alt={item.alt || "image"}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* RIGHT — CONTENT */}
                  <div className="flex flex-col justify-center pr-0 md:pr-4">
                    <span className="text-xs text-blue-600 font-semibold tracking-wide mb-2">
                      PRESS RELEASE
                    </span>

                    <a
                    href={ `/press-release/${item.slug}`}
                    className="text-lg md:text-xl font-semibold text-blue-600 leading-snug mb-4">
                      {item.title}
                    </a>

                    <div className="flex gap-3 items-start">
                      <div className="w-[3px] h-full bg-yellow-400"></div>
                      <p className="text-gray-700 text-[15px] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="custom-pagination absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20"></div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="w-full bg-pink-50 mt-10 py-10">
        <div className="w-[90%] mx-auto relative">
          {/* Heading */}
          <div className="flex flex-row gap-2 mb-5">
            <p className="bg-blue-500 text-white text-xl px-3 py-1">Latest</p>
            <p className="text-gray-800 text-xl font-semibold">Articles</p>
          </div>

          {/* Left Button */}
          <button
            onClick={() => articlesSwiperRef.current?.slideNext()}
            className=" cursor-pointer absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-xl font-bold   z-30"
          >
            &lt;
          </button>

          {/* Right Button */}
          <button
            onClick={() => articlesSwiperRef.current?.slidePrev()}
            className=" cursor-pointer absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-xl font-bold  z-30"
          >
            &gt;
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (articlesSwiperRef.current = swiper)}
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
            {blogs.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow overflow-hidden h-[320px] hover:scale-[1.01] transition">
                  <img
                    src={fixImageUrl(item.image)}
                    alt={item.title || "image"}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <div className="flex justify-between items-center gap-3 mb-2">
                      <p className="bg-orange-500 text-white px-2 py-1 rounded cursor-pointer hover:text-blue-500 capitalize">
                        {item.categoryName}
                      </p>

                      <p className="bg-gray-200 text-xs px-3 py-1 rounded">
                        {item.postDate}
                      </p>
                    </div>

                    <a
                    href={`/products/${item.slug}`}
                     className="text-sm line-clamp-2 mt-2 hover:text-blue-500 cursor-pointer">
                      {item.title}
                    </a>
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
            <p className="bg-blue-500 text-white px-3 py-1 text-xl">Latest</p>
            <p className="text-gray-800 font-semibold text-xl">Products</p>
          </div>

          {/* Swiper Navigation Buttons */}
          <button
            onClick={() => productsSwiperRef.slidePrev()}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-2xl font-bold z-30"
          >
            &lt;
          </button>

          <button
            onClick={() => productsSwiperRef.slideNext()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-2xl font-bold z-30"
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
            {products.map((item) => (
              <SwiperSlide key={item.slug}>
                <a
                  href={`/products/${item.slug}`}
                  className=" bg-white rounded-xl shadow overflow-hidden hover:scale-[1.01] border-gray-200 border-2 transition-all h-[320px] flex flex-col"
                >
                  {/* Product Image */}
                  <div className="w-full h-[180px] flex items-center justify-center bg-white overflow-hidden">
                    <img
                      src={fixImageUrl(item.image)}
                      alt={item.name}
                      className="object-contain h-48 rounded-lg"
                    />
                  </div>

                  {/* Product Name */}
                  <div className="p-4 flex-1">
                    <p className="text-lg hover:text-blue-500 text-black line-clamp-2">
                      {item.name}
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Content;
