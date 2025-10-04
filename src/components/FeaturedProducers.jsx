// src/components/FeaturedProducers.jsx
import React from "react";
import { producers } from "../mock-data";
import ProducerCard from "./ProducerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./FeaturedProducers.css";

const FeaturedProducers = () => {
  return (
    // Bỏ thẻ <section> vì nó đã có ở App.jsx
    <>
      <h2 className="section-title">
        <span className="gradient-text">Featured</span> Stores
      </h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30} // Khoảng cách giữa các slide
        slidesPerView={"auto"} // Hiển thị số lượng slide tự động
        navigation // Bật nút điều hướng
        className="producers-slider"
      >
        {producers.map((producer) => (
          <SwiperSlide key={producer.id}>
            <ProducerCard producer={producer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedProducers;
