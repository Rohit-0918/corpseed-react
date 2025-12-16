import React, { useState, useEffect } from "react";

const StepsCorpseed = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getStepsDetails = [
    {
      id: 1,
      title: "Connect With Corpseed",
      content: (
        <>
          Connect with the team Corpseed to discuss specific requirements for
          your business at IVR:{" "}
          <span className="text-blue-600 cursor-pointer">7558640644</span> or{" "}
          <span className="text-blue-600 cursor-pointer">
            hello@corpseed.com
          </span>
          . It takes 20-25 minutes to discuss your requirement.
        </>
      ),
    },
    {
      id: 2,
      title: "Dedicated Manager",
      content:
        "Once you discuss the requirement, we will align a dedicated Account Manager to understand your business needs, provide solutions, and assist with the entire process.",
    },
    {
      id: 3,
      title: "Real-Time Update",
      content:
        "Use our platform to track the progress of your application and more. Always know what is going on with your project, what is in progress, and what has been completed.",
    },
    {
      id: 4,
      title: "Job Completed",
      content:
        "Once the job is completed, you will receive all registrations & certifications directly to your email and at your doorstep.",
    },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full">
      {/* Steps */}
      <div className="w-full lg:w-full flex flex-col gap-6 p-4 lg:p-6 ">
        {loading && <p className="text-blue-600">Submitting...</p>}{" "}
        {/* Loading state */}
        {error && <p className="text-red-500">{error}</p>} {/* Error state */}
        {getStepsDetails.map((item, index) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-md p-6 md:p-12 flex gap-4"
          >
            <div className="flex flex-col gap-2">
              <p className="text-blue-600 font-semibold text-xl">
                STEP {index + 1}
              </p>

              <p className="text-xl">{item.title}</p>

              <p className="text-sm md:text-base text-gray-600">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsCorpseed;
