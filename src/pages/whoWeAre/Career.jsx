import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCareerData } from "../../toolkit/slices/CareerSlice";

const Career = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.career);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    dispatch(getCareerData());
  }, [dispatch]);

  useEffect(() => {
    if (data?.data?.jobs) {
      const deptMap = {};
      data.data.jobs.forEach((job) => {
        const dept =
          job.jobTitle.charAt(0).toUpperCase() + job.jobTitle.slice(1);
        if (!deptMap[dept]) deptMap[dept] = [];
        deptMap[dept].push({ id: job.id, title: dept });
      });

      const deptArray = Object.keys(deptMap).map((key) => ({
        name: key,
        jobs: deptMap[key],
      }));

      setDepartments(deptArray);
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center p-6 md:p-8 w-[90%] border-b border-gray-200 mx-auto gap-2 md:gap-4">
        <p className="text-4xl md:text-6xl font-semibold">Career@</p>
        <p className="text-4xl md:text-6xl font-semibold text-blue-600">
          Corpseed
        </p>
      </div>

      <div className="w-[95%] md:w-[90%] mx-auto mt-5 flex flex-col gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl shadow-sm p-5 md:p-6 hover:shadow-lg transition"
          >
            <p className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
              {dept.name}
            </p>

            <ul className="list-disc pl-5 text-gray-600 text-sm md:text-base">
              {dept.jobs.map((job) => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
