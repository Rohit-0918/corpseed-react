import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactData } from "../../toolkit/slices/ContactUs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContactData());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const getContact = data?.data?.addresses || [];
  const phone = getContact?.[0]?.mobile || "";

  const formattedNumber = `+91 ${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 10)}`;

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col gap-4 py-10">
        <p className="text-4xl md:text-6xl text-center">Contact Us</p>
        <p className="text-lg md:text-2xl text-gray-600 text-center px-4">
          Thanks for your interest in Corpseed
        </p>
      </div>

      {/* Main Section */}
      <div className="w-[95%] mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* FORM – Mobile First */}
        <div className="w-full lg:w-[40%] p-4 lg:p-6 bg-gray-50 shadow order-1">
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
              onChange={(value) => setFormData({ ...formData, phone: value })}
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

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message *"
              rows="5"
              className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <div className="w-fit">
              <button
                type="submit"
                className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* OFFICE DETAILS */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6 p-4 lg:p-6 max-h-[520px] overflow-y-auto order-2">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {getContact.map((office) => (
            <div
              key={office.uuid}
              className="bg-white shadow rounded-md p-6 md:p-12 flex gap-4"
            >
              <div>
                <svg
                  className="mr-3"
                  width="22"
                  height="30"
                  viewBox="0 0 22 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 0C17.0738 0 22 4.7025 22 10.5C22 18.375 11 30 11 30C11 30 0 18.375 0 10.5C0 4.7025 4.92617 0 11 0ZM11 6.315C8.39667 6.315 6.2865 8.4375 6.2865 11.0531C6.2865 13.6669 8.39667 15.7875 11 15.7875C13.6033 15.7875 15.7135 13.665 15.7135 11.0512C15.7135 8.4375 13.6033 6.315 11 6.315Z"
                    fill="#4A4A4A"
                  />
                </svg>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg md:text-xl">{office.title}</p>
                <p className="text-gray-500">Call: {office.mobile}</p>
                <p className="text-gray-500">(Toll free: {formattedNumber})</p>
                <p className="text-gray-500">
                  Email: <span className="text-blue-600">{office.email}</span>
                </p>
                <p className="text-gray-500 whitespace-pre-line">
                  {office.address}
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
          <a className="text-blue-600" href="/faq">FAQs</a>. If you're our existing
          customer and have feedback, please let us know.
        </p>
        <p className="text-base md:text-lg">
          For job opportunities, view our{" "}
          <a className="text-blue-600" href="/join-our-team">open roles</a>.
        </p>
        <p className="text-base md:text-lg">
          For business partnerships, visit our{" "}
          <a className="text-blue-600" href="/partner">forum</a>.
        </p>
        <p className="text-base md:text-lg">
          For complaints, mail us at{" "}
          <a className="text-blue-600" href="mailto:escalation@corpseed.com">
            escalation@corpseed.com
          </a>.
        </p>
      </div>
    </>
  );
};

export default ContactUs;
