import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndustriesData } from "../../../toolkit/slices/IndustriesSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EnquiryForm = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { data, loading } = useSelector((state) => state.industries);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    message: "",
  });

  useEffect(() => {  
      dispatch(getIndustriesData(slug));
  }, [slug, dispatch]);

  const firstName = data?.data?.industryFirstName || "";
  const lastName = data?.data?.industryLastName || "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-[95%] mx-auto flex flex-col lg:flex-row gap-10">
      {/* FORM */}
      <div className="w-full lg:w-[40%] p-4 lg:p-6 bg-gray-50 shadow order-1">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col bg-white p-4"
        >
          <p className="text-xl md:text-2xl text-center mb-2 text-gray-700 font-semibold">
            Enquire Now for
          </p>
          <p className="text-xl md:text-2xl text-center mb-4 text-blue-500 font-semibold">
            <span>{firstName} </span> <span>{lastName}</span>
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
            required
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City *"
            required
            className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
          />

        
          <div className="w-fit">
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
    </div>
  );
};

export default EnquiryForm;
