import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../../toolkit/slices/HomeSlice";
import { useParams, Link } from "react-router-dom";

const LatestPressRelease = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHomeData()); // call as a function
  }, [dispatch]);

  const pressReleases = data?.data?.pressReleases || [];

  if (loading) {
    return <p>Loading press releases...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="mt-5">
      <p className="text-xl font-semibold mb-4"><span className="py-1 px-3 text-white bg-[#4caf50]">Latest</span> Press Releases</p>
      <div className="bg-[#f3f3f391] p-3 flex flex-col gap-4">
        {pressReleases.slice(0, 4).map((item) => (
          <Link
            key={item.slug}
            to={`/press-release/${item.slug}`}
            className="flex items-center gap-3 border-t border-t-gray-200 pt-3 hover:text-blue-500"
          >
            <p className="text-sm flex-1">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestPressRelease;
