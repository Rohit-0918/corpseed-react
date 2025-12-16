import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-4">
      {/* Error Code */}
      <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-4">
        404
      </h1>

      {/* Not Found Text */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-700 text-center">
        Page Not Found
      </h2>

      {/* Illustration */}
      <div className="max-w-md w-full mb-6">
        <img
          src="https://www.corpseed.com/assets/svg/undraw_back_home_nl5c.svg"
          alt="Page not found"
          className="w-full h-auto"
        />
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 mb-6 px-4">
        The page you were looking for doesn't exist. Make sure you entered the correct URL.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/contact-us")}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition w-auto"
        >
          Contact Us
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-auto"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
