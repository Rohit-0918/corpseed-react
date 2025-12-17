import React, { useState } from "react";
import excellent from "../assets/excellent.png";
import good from "../assets/good.png";
import neutral from "../assets/neutral.png";
import bad from "../assets/bad.png";
import veryBad from "../assets/very-bad.png";

const Feedback = () => {
  const [openModal, setOpenModal] = useState(null); 

  const reactions = [
    { label: "Excellent", icon: excellent },
    { label: "Good", icon: good },
    { label: "Neutral", icon: neutral },
    { label: "Bad", icon: bad },
    { label: "Very Bad", icon: veryBad },
  ];

  const handleClick = (label) => {
    setOpenModal(label === "Excellent" ? "excellent" : "other");
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div>
      <div className="news_review my-4 relative">
        <h4 className="text-dark text-center text-2xl">
          Give us your feedback
        </h4>
        <h5 className="text-dark text-xl font-light mb-4 text-center">
          What do you think about this article?
        </h5>

        <div className="flex gap-6 justify-center">
          {reactions.map((reaction) => (
            <div
              key={reaction.label}
              className="group flex flex-col items-center relative cursor-pointer"
              onClick={() => handleClick(reaction.label)}
            >
              <img
                src={reaction.icon}
                alt={reaction.label}
                className="h-8 w-8 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <span className="absolute top-full mt-1 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {reaction.label}
              </span>
            </div>
          ))}
        </div>

        {openModal === "excellent" && (
          <div className="fixed top-20 p-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="modal-content bg-white rounded p-6 max-w-md w-full shadow-lg border border-gray-200 relative">
              <button
                className="absolute top-2 right-2 mb-5 text-2xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="page-body text-center">
                <div className="head mb-4">
                  <h5 className="text-green-600">
                    Thanks so much for sharing your experience with us!!
                  </h5>
                  <h6 className="text-blue-600">
                    We hope to see you again soon!!
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )}

        {openModal === "other" && (
          <div className="fixed inset-0 flex items-start justify-center z-50 pointer-events-auto">
            <div className="modal-content bg-white rounded max-w-md w-full shadow-lg border border-gray-200 relative mt-20">
              <button
                className="absolute top-3 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="modal-header text-center p-6">
                <h5 className="modal-title text-lg font-medium mb-4">
                  Thank you for your vote! Would you have any suggestions for
                  improvements?
                </h5>
                <textarea
                  placeholder="Your comments..."
                  rows={5}
                  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
