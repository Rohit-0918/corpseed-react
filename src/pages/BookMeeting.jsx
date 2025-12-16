import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { postBookMeetingData } from "../toolkit/slices/HomeSlice";

const BookMeeting = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        date: "",
        message: "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBookMeetingData(formData));
  };

  const getStepsDetails = [
    {
      id: 1,
      title: "Connect With Corpseed",
      content: (
        <>
          Connect with the team corpseed to discuss specific requirements for
          your business at IVR:{" "}
          <span className="text-blue-600 cursor-pointer">7558640644</span> or{" "}
          <span className="text-blue-600 cursor-pointer">hello@corpseed.com</span>.
          It takes 20-25 minutes to discuss requirement.
        </>
      ),
    },
    {
      id: 2,
      title: "Dedicated Manager",
      content:
        "Once you discuss the requirement, we will align a dedicated Account manager to understand your business needs and provide solutions and assist entire process.",
    },
    {
      id: 3,
      title: "Real Time Update",
      content:
        "Use our platform to track progress of application and many more. Always know what is going on with your project, what is in progress, and what is done.",
    },
    {
      id: 4,
      title: "Job Completed",
      content:
        "Once job is completed, you will receive complete registrations & certifications directly to your email ID and at your doorstep",
    },
  ];

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col gap-4 py-10">
        <p className="text-4xl md:text-6xl text-center">Book Meeting Now</p>
        <p className="text-lg md:text-2xl text-gray-600 text-center px-4">
          Thanks for your interest in Corpseed
        </p>
      </div>

      {/* Main Section */}
      <div className="w-[95%] mx-auto flex flex-col lg:flex-row gap-10">
        {/* FORM */}
        <div className="w-full h-fit lg:w-[40%] p-4 lg:p-6 bg-gray-50 shadow order-1 flex flex-col justify-start">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col bg-white p-4"
          >
            <p className="text-xl md:text-2xl text-center mb-4 text-gray-700 font-semibold">
              Leave us a message
            </p>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
              containerClass="!w-full"
              inputClass="!w-full !border-0 !border-b !border-gray-200 !rounded-none !py-2 !pl-16 !pr-3 !focus:outline-none !focus:border-blue-500"
              buttonClass="!border-0 !bg-transparent !left-3 !top-1/2 !-translate-y-1/2 !scale-125"
              dropdownClass="!border-0"
              placeholder="Phone Number *"
            />

            <input
              type="text"
              placeholder="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message *"
              rows="5"
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <div className="w-fit ">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-md"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        {/* Steps */}
        <div className="w-full lg:w-[60%] flex flex-col   gap-6 p-4 lg:p-6  order-2">
          {loading && <p>Submitting...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {getStepsDetails.map((item, index) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-md p-3 md:p-12 flex gap-4"
            >
              <div className="flex flex-col gap-2">
                <p className="text-blue-600 font-semibold text-xl">
                  STEP {index + 1}
                </p>

                <p className="text-xl md:text-xl">{item.title}</p>

                <p className="text-sm md:text-base text-gray-600">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full px-4 md:px-20 p-20 flex flex-col gap-4 order-3">
        <p className="text-base md:text-lg">
          Have questions? Visit our{" "}
          <a className="text-blue-600" href="/faq">
            FAQs
          </a>
          . If you're our existing customer and have feedback, please let us
          know.
        </p>
        <p className="text-base md:text-lg">
          For job opportunities, view our{" "}
          <a className="text-blue-600" href="/join-our-team">
            open roles
          </a>
          .
        </p>
        <p className="text-base md:text-lg">
          For business partnerships, visit our{" "}
          <a className="text-blue-600" href="/partner">
            forum
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default BookMeeting;
