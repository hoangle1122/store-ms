import React from "react";
import { genres } from "../mock-data";
import GenreCard from "./GenreCard";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import CSS của Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./GenreSection.css";

const GenreSection = () => {
  return (
    <>
      <h2 className="section-title">
        Find Your <span className="gradient-text">Vibe</span>
      </h2>
      <Swiper
        effect={"coverflow"} // Hiệu ứng 3D Coverflow
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="genre-slider"
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreCard genre={genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GenreSection;
