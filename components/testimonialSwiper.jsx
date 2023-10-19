'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import useSwiperSlider from '../hooks/useSwiperSlider';
import Image from 'next/image';

import 'swiper/scss';

const TestimonialSwiper = ({ items }) => {
  const [swiperRef, swiper] = useSwiperSlider();

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        data-aos='fade-up'
        data-aos-duration='400'
      >
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={item._id}>
              <div className='card'>
                <div className='card-body'>
                  <p>{item.description}</p>
                  <div className='d-flex align-items-center'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                    <div className='info'>
                      <span className='name'>{item.name}</span>
                      <p>{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='d-flex gap-3'>
        <div className='swiper-button-prev' onClick={() => swiper.slidePrev()}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.3125 1L3 6L8.281 11L9 10.297L4.453 6L9 1.719L8.3125 1Z'
              fill='white'
              fillOpacity='0.8'
            />
          </svg>
        </div>
        <div className='swiper-button-next' onClick={() => swiper.slideNext()}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.6875 11L9 6L3.719 1L3 1.703L7.547 6L3 10.281L3.6875 11Z'
              fill='white'
              fillOpacity='0.8'
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TestimonialSwiper;
