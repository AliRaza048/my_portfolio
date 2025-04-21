import React, { useEffect, useState } from "react";
import style from "../../style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { achievement,header } from "../../constant";
const Achievement = () => {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const breakpoints = {
    400: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getSlidesPerView = () => {
    return Object.keys(breakpoints)
      .sort((a, b) => b - a)
      .find((breakpoint) => screenWidth >= breakpoint);
  };

  const slidesPerView = breakpoints[getSlidesPerView()]?.slidesPerView || 1;
  return (
    <section className={`${style.maxWidth} mt-0 `}>
      <header>
        <h1
          className="
              font-poppins 
              font-semibold 
              text-[42px] 
              ss:text-[52px] 
              text-white 
              leading-[80px] 
              ss:leading-[80px]"
        >
          {header.achievementTitle}
        </h1>
      </header>
      <aside className="mt-10 mb-4">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation={{
            prevEl:
              ".arrowIcons__backward",
            nextEl:
              ".arrowIcons__forward",
          }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop={true}

          className="w-full"
        >
          {achievement.map((item, index) => (
            <SwiperSlide
              key={index}
              navigation={{
                prevEl: ".arrowIcons__backward",
                nextEl: ".arrowIcons__forward",
              }}
            >
              <article className="flex flex-shrink-0  justify-around rounded-[20px] flex-col mb-8 border border-gray cursor-pointer p-4 transition-colors duration-300">
                <img
                  src={item.img}
                  className="w-[62px] h-[62px] rounded-full z-[2] mb-4"
                />
                <h4 className="font-poppins font-semibold text-[17px] text-white leading-[22px] ml-2">
                  {item.event}
                </h4>
                <h5
                  className="
                    font-poppins font-normal text-gradient text-[15px] mb-1 ml-2 mb-2"
                >
                  {item.position}
                </h5>
                {item.content1 && (
                  <p className="font-poppins font-normal text-dimWhite text-sm ml-2 mb-2">
                    🚀 {item.content1}
                  </p>
                )}
                {item.content2 && (
                  <p className="font-poppins font-normal text-dimWhite text-sm ml-2 mb-2">
                    ⚡ {item.content2}
                  </p>
                )}
                {item.content3 && (
                  <p className="font-poppins font-normal text-dimWhite text-sm ml-2 mb-4">
                    🔥 {item.content3}
                  </p>
                )}
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="flex w-100 justify-end gap arrowIcons__backward gap-1 position-relative right-1">
          <ArrowBackIosNewIcon className="bg-dimWhite p-4 rounded-full arrowIcons__forward" />
          <ArrowForwardIosIcon className="bg-dimWhite p-4 e rounded-full arrowIcons__forward" />
        </div> */}
      </aside>
    </section>
  );
};

export default Achievement;
