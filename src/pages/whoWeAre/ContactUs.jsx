import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  city: '',
  message: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};


  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-col gap-5 py-10">
          <div>
            <p className="text-6xl  text-center">Contact us</p>
          </div>
          <div>
            <p className="text-2xl text-gray-600 text-center">
              Thanks for your intrest in Corpseed
            </p>
          </div>
        </div>

        <div className="w-[90%] flex mx-auto  border">
          {/* form */}
          <div className="w-[40%] border h-full p-8">
            <p className="mx-auto text-2xl text-center text-gray-700">
              Leave us a message
            </p>

            <div>
              <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Contact Us
                </h2>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone No
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* City */}
                <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* right part */}
          
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default ContactUs;
