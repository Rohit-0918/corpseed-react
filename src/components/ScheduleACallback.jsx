import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ScheduleACallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [getUpdatesOnWhatsApp, setGetUpdatesOnWhatsApp] = useState(false); // State for toggle

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppToggle = () => {
    setGetUpdatesOnWhatsApp((prev) => !prev); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert(`Form submitted successfully! Get updates on WhatsApp: ${getUpdatesOnWhatsApp ? 'Yes' : 'No'}`);
      setFormData({ name: "", phone: "" });
      setGetUpdatesOnWhatsApp(false); 
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
     
      <div className="w-full p-4 lg:p-6 bg-blue-50 shadow">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col bg-white p-4 w-full"
        >
          <p className="text-xl md:text-2xl text-center mb-4 text-gray-700 font-semibold">
            Schedule a call back
          </p>

          {/* Name Input */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name *"
            required
            className="w-full border-b border-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500"
          />

          {/* Phone Input */}
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

          {/* Slider Toggle: Get Updates on WhatsApp */}
          <div className="flex items-center gap-3 mt-4">
            <label htmlFor="whatsapp-toggle" className="">
              Get Updates on WhatsApp
            </label>
            <div className="relative">
              <input
                id="whatsapp-toggle"
                type="checkbox"
                checked={getUpdatesOnWhatsApp}
                onChange={handleWhatsAppToggle}
                className="toggle-checkbox"
              />
              <span
                className={`toggle-switch ${getUpdatesOnWhatsApp ? "bg-blue-600" : "bg-gray-300"}`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-20 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white rounded-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleACallback;
