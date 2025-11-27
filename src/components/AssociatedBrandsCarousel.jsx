import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

import image1 from "../assets/carouselImages/image1.png";
import image2 from "../assets/carouselImages/image2.png";
import image3 from "../assets/carouselImages/image3.png";
import image4 from "../assets/carouselImages/image4.png";
import image5 from "../assets/carouselImages/image5.png";
import image6 from "../assets/carouselImages/image6.png";
import image7 from "../assets/carouselImages/image7.png";
import image8 from "../assets/carouselImages/image8.png";
import image9 from "../assets/carouselImages/image9.png";
import image10 from "../assets/carouselImages/image10.png";
import image11 from "../assets/carouselImages/image11.png";
import image12 from "../assets/carouselImages/image12.png";
import image13 from "../assets/carouselImages/image13.png";
import image14 from "../assets/carouselImages/image14.png";
import image15 from "../assets/carouselImages/image15.png";

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
];

const AssociatedBrandsCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-[90%] mx-auto">

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={10}
        spaceBetween={10}
        loop={true}
        loopedSlides={images.length * 2}   
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1000} 
        allowTouchMove={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          transitionTimingFunction: "linear",
        }}
      >

        {[...images, ...images].map((src, index) => (   // duplicate slides
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={src}
                className="w-[60px] h-[60px] object-contain rounded-md"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

      <div className="mt-[50px]"></div>
    </div>
  );
};

export default AssociatedBrandsCarousel;
