import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting form data:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-pink-50   rounded-md shadow-sm">
      <div className="bg-white p-6">
        <div className="flex justify-center">
          <h2 className="text-xl font-semibold mb-2 ">
            BOOK A FREE CONSULTATION
          </h2>
        </div>
        <p className="mb-4 text-gray-700 text-center">
          Get help from an experienced legal adviser. Schedule your consultation
          at a time that works for you and it's absolutely FREE.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4 items-end">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
              className="flex-1 h-12 border-b border-gray-200 px-3 focus:outline-none focus:border-blue-500"
            />

            {/* Phone Input */}
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, phone: value }))
              }
              containerClass="flex-1"
              inputClass="!h-12 !w-full !border-0 !border-b !border-gray-200 !rounded-none !focus:outline-none !focus:border-blue-500 !pl-20 !pr-3 !py-0"
              buttonClass="!border-0 !bg-transparent !left-3 !top-1/2 !-translate-y-1/2 !scale-125"
              dropdownClass="!border-0"
              placeholder="Phone Number *"
              required
            />
          </div>

          <div className="w-fit mx-auto">
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

export default Consultation;
