import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//import slider img
import slide1Img from "../assets/slide1.jpg";
import slide2Img from "../assets/slide2.jpg";
import slide3Img from "../assets/slide3.jpg";
import slide4Img from "../assets/slide4.jpg";
import slide5Img from "../assets/slide5.jpg";
import slide6Img from "../assets/slide6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="px-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-40 sm:h-60 md:h-80"
      >
        <SwiperSlide className="carousel-container">
          <img src={slide1Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Custom coat fitting and warm outfit options to keep your dog
              comfortable in the cold.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-container">
          <img src={slide2Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Soft, insulated blankets tailored to your pet’s size to retain
              warmth during winter nights.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-container">
          <img src={slide3Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Perfectly fitted booties that protect paws from snow, salt, and
              ice.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-container">
          <img src={slide4Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Install and configure a safe, heated bed system for your pet to
              rest cozy all winter.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-container">
          <img src={slide5Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Relaxing sauna session designed to improve circulation and joint
              health for pets.
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-container">
          <img src={slide6Img} alt="" className="w-full h-full object-cover" />
          <div className="carousel-content">
            <h1 className="carousel-title">
              Hydrating and detangling treatment to prevent fur dryness in cold
              climates.
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
