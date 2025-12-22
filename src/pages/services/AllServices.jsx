import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../toolkit/slices/HomeSlice";

const AllServices = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);

  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  const categories = data?.data?.specialCategories || [];
  const activeServices = categories[activeTab]?.services || [];

  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-5">
      {/* Left Sidebar */}
      <div
        className="w-full lg:w-[30%] gap-5 flex flex-col py-6
                lg:sticky lg:top-20 lg:self-start"
      >
        <div className="relative rounded-full text-gray-400 border border-gray-400 flex gap-2 p-2 w-full">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.965 14.2549H15.755L20.745 19.2549L19.255 20.7449L14.255 15.7549V14.9649L13.985 14.6849C12.845 15.6649 11.365 16.2549 9.755 16.2549C6.165 16.2549 3.255 13.3449 3.255 9.75488C3.255 6.16488 6.165 3.25488 9.755 3.25488C13.345 3.25488 16.255 6.16488 16.255 9.75488C16.255 11.3649 15.665 12.8449 14.685 13.9849L14.965 14.2549ZM5.255 9.75488C5.255 12.2449 7.265 14.2549 9.755 14.2549C12.245 14.2549 14.255 12.2449 14.255 9.75488C14.255 7.26488 12.245 5.25488 9.755 5.25488C7.265 5.25488 5.255 7.26488 5.255 9.75488Z"
              fill="black"
              fillOpacity="0.54"
            />
          </svg>
          <p>This is the dynamic content......</p>
        </div>

        <div className="grid grid-cols-2 h-[500px] overflow-auto gap-4">
          {Array(16)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="p-4 hover:bg-gray-200 rounded-xl flex flex-col items-center"
              >
                <img
                  src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
                  alt=""
                />
                <p>Start Business</p>
              </div>
            ))}
        </div>
      </div>

      {/* Right Services Section */}
      <div className="flex flex-col gap-4 py-6 w-full lg:w-[70%]">
        {/* Heading + Tabs */}
        <div
          className={`transition-shadow duration-300 ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <div className="p-3 justify-between flex px-12 bg-white">
            <h1 className="text-3xl text-gray-700">Our Exclusive Services</h1>
            <p className="text-gray-400 text-sm flex my-auto">
              Select service from our catalogue.
            </p>
          </div>

          <div
            className="
            flex flex-col gap-3 px-5 mb-4
            sm:flex-row sm:gap-3
            sm:overflow-x-auto sm:whitespace-nowrap
          "
          >
            {categories.map((cat, index) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm border transition hover:cursor-pointer
                
                ${
                  activeTab === index
                    ? "text-[#007bff] bg-gray-100"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat.subCategoryName}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {loading && <p>Loading services...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {/* Example Cards */}
            {activeServices.map((service, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between h-[336px]"
              >
                <div>
                  <h2 className="text-lg font-semibold text-[#212529] line-clamp-2">
                    {service.title}
                  </h2>
                  <p className="text-medium text-[#212529] mt-2 line-clamp-6">
                    {service.summary}
                  </p>
                </div>
                <a
                  href={`/service/${service.slug}`}
                  className="mt-4 flex justify-end text-sm text-blue-600 font-medium hover:underline"
                >
                  Explore more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Moda */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white w-[90%] max-w-3xl rounded-xl shadow-lg p-6 animate-scaleFadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 border-b">
              <h2 className="text-2xl font-semibold">Consult Now</h2>
              <button onClick={() => setOpenModal(false)}>✕</button>
            </div>

            <p className="p-2">
              Please Fill in the form and send us, we'll get back to you as soon
              as possible.
            </p>

            <form className="mt-4 grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border px-3 py-2 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile No *"
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="City *"
                className="border px-3 py-2 rounded"
                required
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="col-span-2 border px-3 py-2 rounded"
              />
              <div className="col-span-2 flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Animation */}
      <style>
        {`
          @keyframes scaleFadeIn {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleFadeIn {
            animation: scaleFadeIn 0.25s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AllServices;
