import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../toolkit/slices/HomeSlice";
import { motion, AnimatePresence } from "framer-motion";

const AllServices = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getHomeData());
  }, [dispatch]);

  const allServices =
    data?.data?.specialCategories?.flatMap((cat) => cat.services) || [];

  return (
    <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-5">
      {/* Left  */}
      <div className="w-full lg:w-[30%] gap-5 flex flex-col py-6">
        <div className="relative rounded-full text-gray-400 border border-gray-400 flex gap-2 p-2 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            className="flex my-auto"
          >
            <g fill="#1a1a1a">
              <g transform="scale(5.12,5.12)">
                <path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path>
              </g>
            </g>
          </svg>
          <p>This is the dynamic content......</p>
        </div>

        <div className="grid grid-cols-2  h-[400px] overflow-auto gap-4">
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
              className=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
          <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img
              src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/company.png"
              alt=""
            />
            <p>Start Business</p>
          </div>
        
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-4 py-6 w-full lg:w-[70%]">
        {/* Heading */}
        <div className="p-3 justify-between flex px-12">
          <h1 className="text-3xl text-gray-700">Our Exclusive Services</h1>
          <p className="text-gray-400 text-sm flex my-auto">
            Select service from our catalogue.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {loading && <p>Loading services...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Consult Now Card */}
          <div className="border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-blue-500 text-white flex flex-col justify-between h-[336px]">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-white line-clamp-2">
                GET NOW
              </h2>
              <p className="text-md text-white mt-2 line-clamp-6">
                Get a free 30 minutes consultation with our experts. We will
                guide you with the solutions to drive positive outcomes for
                better results.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setOpenModal(true)}
                className="p-2 bg-white cursor-pointer text-[#2b63f9] rounded"
              >
                Consult now!
              </button>
            </div>
          </div>

          {/* Service Cards */}
          {allServices.map((service, index) => (
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

      {/* Animated Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              className="bg-white w-[90%] max-w-3xl rounded-xl shadow-lg p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-3 border-b border-b-[border-[#444]">
                <h2 className="text-2xl text-[#444] font-semibold">
                  Consult Now
                </h2>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-xl text-gray-500 cursor-pointer "
                >
                  ✕
                </button>
              </div>
              <div>
                <p className="p-2 text-body text-[#444]">
                  Please Fill in the form and send us, we'll get back to you as
                  soon as possible.
                </p>
              </div>

              {/* Form */}
              <form className="mt-4 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="border text-sm border-[#444] px-3 py-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border text-sm border-[#444] px-3 py-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Mobile No *"
                  className="border text-sm border-[#444] px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="City *"
                  className="border text-sm border-[#444] px-3 py-2 rounded"
                  required
                />

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="col-span-2 text-sm border-[#444] border px-3 py-2 rounded"
                />

                <div className="col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllServices;
