import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../toolkit/slices/HomeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ServiceCarousel = () => {
  const dispatch = useDispatch();
  const { data: apiData, loading, error } = useSelector((state) => state.home);
  const [activeTab, setActiveTab] = useState("");
  const [showMobileCards, setShowMobileCards] = useState(false);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  useEffect(() => {
    if (apiData?.data?.specialCategories?.length > 0 && !activeTab) {
      setActiveTab(apiData.data.specialCategories[0].subCategoryName);
    }
  }, [apiData, activeTab]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const specialCategories = apiData?.data?.specialCategories || [];
  const activeServices = specialCategories.find(
    (cat) => cat.subCategoryName === activeTab
  )?.services;

  return (
    <div className="px-6 py-8 bg-blue-50">
      <h1 className="text-2xl md:text-3xl text-center text-gray-800 mb-6">
        Our Exclusive Services
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 ">
        {specialCategories.map((category) => (
          <button
            key={category.slug}
            onClick={() => {
              setActiveTab(category.subCategoryName);
              setShowMobileCards(true);
            }}
            className={`px-4 py-2 border-b-2 transition ${
              activeTab === category.subCategoryName
                ? "border-blue-600 text-blue-600 font-medium text-lg"
                : "border-transparent text-gray-800 text-lg hover:text-blue-600"
            }`}
          >
            {category.subCategoryName}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className="relative px-10">
        {/* reduced side padding */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {activeServices?.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center">
                {/* Card container made relative */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-xl transition flex flex-col w-[95%] h-[336px] relative">
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl text-[#212529] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-medium font-sans text-md line-clamp-6">
                      {service.summary}
                    </p>
                  </div>

                  {/* Fixed bottom link */}
                  <div className="absolute bottom-0 right-0 pb-5 pr-6">
                    <a
                      href={`/services/${service.slug}`}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Explore more &rsaquo;
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows closer to cards */}
        <div className="swiper-button-prev-custom absolute -left-1 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 text-2xl cursor-pointer flex items-center justify-center w-10 h-10 rounded-full shadow-md">
          &#8249;
        </div>
        <div className="swiper-button-next-custom absolute -right-1 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-600 text-2xl cursor-pointer flex items-center justify-center w-10 h-10 rounded-full shadow-md">
          &#8250;
        </div>
      </div>

      {/* See all services button */}
      <div className="flex justify-center mt-6">
        <a
          href="/category/all"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          SEE ALL SERVICES
        </a>
      </div>
    </div>
  );
};

export default ServiceCarousel;
