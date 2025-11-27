import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ServicesCarousel = () => {
  const data = [
    {
      id: 1,
      name: "Recycling Plant",
      items: [
        {
          name: "Recycling Plant1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur a ",
        },
        {
          name: "Recycling Plant2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Recycling Plant3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Recycling Plant4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur",
        },
        {
          name: "Recycling Plant 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Recycling Plant 6",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur",
        },
        {
          name: "Recycling Plant 7",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
      ],
    },
    {
      id: 2,
      name: "EPR & EPCB Registration",
      items: [
        {
          name: "EPR & EPCB Registration 1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur",
        },
        {
          name: " EPR & EPCB Registration 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur",
        },
        {
          name: "EPR & EPCB Registration 3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "EPR & EPCB Registration 4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "EPR & EPCB Registration 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "EPR & EPCB Registration 6",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur",
        },
        {
          name: "EPR & EPCB Registration 7",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
      ],
    },
    {
      id: 3,
      name: "Safety and Regulatory",
      items: [
        {
          name: "ISO Certification ",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Hallmark Certification ",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Safety and Regulatory 1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Safety and Regulatory 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Safety and Regulatory 3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Safety and Regulatory 4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "Safety and Regulatory 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur a",
        },
      ],
    },
    {
      id: 4,
      name: "State Pollution Board / Committees Compliance",
      items: [
        {
          name: "State Pollution Board / Committees Compliance 1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur a",
        },
        {
          name: "State Pollution Board / Committees Compliance 2",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "State Pollution Board / Committees Compliance 3",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur.",
        },
        {
          name: "State Pollution Board / Committees Compliance 4",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntu",
        },
        {
          name: " State Pollution Board / Committees Compliance 5",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntur ",
        },
        {
          name: "State Pollution Board / Committees Compliance 8",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntu",
        },
        {
          name: "State Pollution Board / Committees Compliance 9",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam corporis maiores eum incidunt ullam, fugiat quidem dolores recusandae, quae quos voluptatem similique culpa consequuntu",
        },
      ],
    },
  ];

  const [activeId, setActiveId] = useState(data[0].id);
  const activeData = data.find((d) => d.id === activeId);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="flex justify-center text-3xl font-md text-gray-800">
        Our Exclusive Services
      </h1>

      {/* Carousel  */}
      <div className="w-full px-6 py-8 ">
        {/* FILTER TABS */}

        <div className="flex gap-4 pb-3 w-[70%] mx-auto justify-around">
          {data.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`
        relative w-fit cursor-pointer font-lg  pb-1 group 
        transition-all duration-300 font-2xl
        ${
          activeId === tab.id
            ? "text-blue-700"
            : "text-black hover:text-blue-600"
        }
      `}
            >
              {tab.name}

              {/* underline */}
              <span
                className={`
          absolute left-0 -bottom-1 h-[3px] transition-all duration-300
          ${
            activeId === tab.id
              ? "w-full bg-blue-700" 
              : "w-0 bg-blue-500 group-hover:w-full" 
          }
        `}
              ></span>
            </div>
          ))}
        </div>

        {/* CARD CONTENT — Swiper Carousel */}
        <div className="relative w-full mt-6">
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            &lt;
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-[100%] hover:bg-gray-100"
          >
            &gt;
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              300: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="px-10 w-[90%]"
          >
            {activeData.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="p-5 rounded-lg shadow-sm hover:scale-[1.01] 
            hover:shadow-lg cursor-pointer bg-white transition"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>

                  <p className="text-gray-700 text-md">{item.content}</p>

                  <div className="mt-8 flex justify-end">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      Explore more...
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-md cursor-pointer">
          SEE ALL SERVICES
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
