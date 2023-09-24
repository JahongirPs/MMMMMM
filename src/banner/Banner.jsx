import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "../assests/banner1.svg"
import banner2 from "../assests/banner2.svg"

import 'swiper/css';
import 'swiper/css/pagination';
import "./Banner.scss"

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='container'>
         <div className="swiper-banner_container">
         <Swiper
            pagination={{
            dynamicBullets: true,
            clickable: true,
            }}
            autoplay={{delay: 5000}}
            spaceBetween={10}
            loop={true}
            slidesPerGroup={1}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="bannerSwiper"
        >
            <SwiperSlide><img src={banner1} alt="Banner1" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="Banner2" /></SwiperSlide>
        </Swiper>
         </div>
    </div>
  )
}

export default Banner