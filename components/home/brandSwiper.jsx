'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

import 'swiper/scss';

const BrandSwiper = ({ brands = [] }) => {
  return (
    <Swiper
      watchOverflow={true}
      modules={[Autoplay]}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 8,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 9,
          spaceBetween: 30,
        },
        1900: {
          slidesPerView: 10,
          spaceBetween: 30,
        },
      }}
      className='mySwiper'
      data-aos='fade-left'
      data-aos-duration='800'
    >
      {brands.map((brand) => (
        <SwiperSlide key={brand._id}>
          <div className='brands_item'>
            <Image
              src={brand.image}
              alt=''
              width='138'
              height='40'
              placeholder='blur'
              blurDataURL={shimmerBlurData}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSwiper;
