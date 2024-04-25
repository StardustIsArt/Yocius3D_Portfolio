// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Interior Cleaning Specialists LLC",
          path: "/interiorCleaningLay.png",
          site: "https://www.interiorcleaningspecialists.net/",
        },
        {
          title: "Namaste Massage & Wellness LLC",
          path: "/printDesign.png",
        },
      ],
    },
    {
      images: [
        {
          title: "Yocius Productions Photography",
          path: "/photography.png",
        },
        {
          title: "UP Food Exchange",
          path: "/UPfoodExchangeOverview.png",
          site: "https://up-foodexchange.netlify.app/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[350px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-5 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <a href={image.site}>
                        {" "}
                        <Image
                          src={image.path}
                          width={400}
                          height={300}
                          alt=""
                          className="rounded-md"
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#00617D] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      </a>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
