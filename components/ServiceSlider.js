// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxCrop, RxPencil2, RxDesktop, RxArrowTopRight } from "react-icons/rx";
import { FaUserSecret } from "react-icons/fa";

// import required modules
import { FreeMode, Pagination } from "swiper";

// Service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Let's create a brand that shows off your unique qualities and attributes.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Hand drawn idea or one in your mind? Let's collaborate on designs together.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Feeling a little 'Web'-by? Open up the world of web to your ideas and proposals.",
  },
  {
    icon: <FaUserSecret />,
    title: "Security",
    description:
      "Networks · SIEM tools · Python · Linux · Intrusion Detection · Threat Analysis",
  },
  {
    icon: <FaUserSecret />,
    title: "Photography",
    description:
      "Choices are Senior · Family · Pet · Wedding · Always Candid, Always Real",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 xm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
