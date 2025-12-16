import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKnowledgeCenterData } from "../../toolkit/slices/KnowledgeCenterSlice";
import { useParams } from "react-router-dom";

const KnowledgeCenterPage = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data, loading, error } = useSelector(
    (state) => state.knowledgeCenter
  );

  useEffect(() => {
    if (slug) dispatch(getKnowledgeCenterData(slug));
  }, [slug, dispatch]);

  const formatImageUrl = (url) => {
    const BASE_URL =
      "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/";
    if (!url || url === "null" || url === null) return BASE_URL;
    return url.replace(/^null\/?|^null/, BASE_URL);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data?.data?.blogs) return <p>No blog data available</p>;

  const blog = data.data.blogs;

  return (
    <div className="p-4 md:p-8">
      <p>blog?.title</p>
    </div>
  );
};

export default KnowledgeCenterPage;
