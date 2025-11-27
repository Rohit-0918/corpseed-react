import React, { useState } from "react";
import Header from "../../components/Header";

const Career = () => {
  const departments = [
    {
      id: 1,
      name: "Sales",
      desc: "Be a legal advisor to customers and help them to transform, develop, & boost their businesses.",
      jobs: [
        { id: 1, title: "Sales Executive" },
        { id: 2, title: "Business Development Manager" },
      ],
    },
    {
      id: 2,
      name: "Operations",
      desc: "Stand at the fore front of making business accessible. Every interaction is an opportunity to make a difference.",
      jobs: [
        { id: 1, title: "Operations Coordinator" },
        { id: 2, title: "Process Manager" },
      ],
    },
    {
      id: 3,
      name: "HR & Admin",
      desc: "We identify top talent, deliver rewarding benefits, and create tools to support employees.",
      jobs: [
        { id: 1, title: "HR Recruiter" },
        { id: 2, title: "Admin Supervisor" },
      ],
    },
    {
      id: 4,
      name: "Marketing",
      desc: "Connecting our solution-driven mission, world-class brands and customers.",
      jobs: [
        { id: 1, title: "Digital Marketing Specialist" },
        { id: 2, title: "Content Strategist" },
      ],
    },
    {
      id: 5,
      name: "IT",
      desc: "Build products from conception to launch. Thrive AI product strategy to deliver the next wave of dynamic services.",
      jobs: [
        { id: 1, title: "Frontend Developer" },
        { id: 2, title: "Backend Engineer" },
      ],
    },
    {
      id: 6,
      name: "Legal",
      desc: "Manage vital business relationships and troubleshoot complex legal problems for valuable customers.",
      jobs: [
        { id: 1, title: "Legal Associate" },
        { id: 2, title: "Corporate Lawyer" },
      ],
    },
  ];
   const [selectedDept, setSelectedDept] = useState("All");

  const filterData =
    selectedDept === "All"
      ? departments
      : departments.filter((dept) => dept.name === selectedDept);

  const tabs = ["All", "Sales", "Operations", "HR & Admin", "Marketing", "IT", "Legal"];
  return (
    <div>
      <Header />
      <div className=" flex justify-center p-8 w-[90%] border-b border-b-gray-200 mx-auto">
        <p className="text-6xl ">Career@</p>
        <p className="text-6xl text-blue-600">Corpseed</p>
      </div>

      <div className="w-[90%] mx-auto mt-5  flex gap-5 flex-col ">
         {/* Tabs Section */}
        <div className="flex justify-center gap-5 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedDept(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              selectedDept === tab
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:text-blue-600"
            }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <p className="text-xl font-semibold text-blue-600 mb-3">
                {item.name}
              </p>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              {/* JOBS LIST */}
              <div className="mt-4">
                <p className="font-medium text-gray-700 mb-2">Open Roles:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  {item.jobs.map((job) => (
                    <li key={job.id}>{job.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Career;
