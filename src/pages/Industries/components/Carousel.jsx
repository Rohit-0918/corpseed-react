import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIndustriesData } from "../../../toolkit/slices/IndustriesSlice";

const Carousel = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [scrolling, setScrolling] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (slug) dispatch(getIndustriesData(slug));
  }, [slug, dispatch]);

  const { data, loading, error } = useSelector((state) => state.industries);

  const formatImageUrl = (url) => {
    const BASE_URL =
      "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/";
    if (!url || url === "null" || url === null) return BASE_URL;
    return url.replace(/^null\/?|^null/, BASE_URL);
  };

  const clients =
    data?.data?.clients?.map((client) => ({
      image: formatImageUrl(client.image),
      name: client.name,
      alt: client.alt || client.name,
    })) || [];

  // AUTO SCROLL LOGIC
  useEffect(() => {
    if (!scrolling || !containerRef.current) return;

    const scrollContainer = containerRef.current;
    let frameId;

    const scrollStep = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      frameId = requestAnimationFrame(scrollStep);
    };

    frameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(frameId);
  }, [scrolling, clients]);

  // BUTTON HANDLERS
  const scrollRight = () => {
    containerRef.current.scrollLeft += 200;
  };

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= 200;
  };

  if (loading) return <p>Loading clients...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!clients.length) return <p>No clients found</p>;

  return (
    <div className="w-full py-10">
      <h1 className="text-xl font-bold mb-4">Our Clients</h1>

      <div className="w-full flex items-center gap-4">

        {/* LEFT BUTTON */}
        <button
          className="text-3xl font-bold px-3"
          onClick={scrollRight}
        >
          &#8249;
        </button>

        {/* MAIN SCROLLER */}
        <div
          className="relative overflow-hidden h-fit whitespace-nowrap w-[90%]"
          onMouseEnter={() => setScrolling(false)}
          onMouseLeave={() => setScrolling(true)}
          ref={containerRef}
          style={{ cursor: "grab" }}
        >
          {[...clients, ...clients].map((item, index) => (
            <div
              key={index}
              className="inline-block mx-4 relative group"
              style={{ width: "100px" }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-24 object-contain"
              />

              {/* Hover tooltip */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          className="text-3xl font-bold px-3"
          onClick={scrollRight}
        >
          &#8250;
        </button>

      </div>
    </div>
  );
};

export default Carousel;
