'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import 'swiper/scss';

const OurProcess = ({ data }) => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  const { title, description, items } = data;

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(swiperRef.current.swiper);
    }
  }, []);

  return (
    <section className='our-process section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='swiper-container'>
          <Swiper
            watchOverflow={true}
            ref={swiperRef}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2.25,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            data-aos='fade-left'
            data-aos-duration='300'
          >
            {items &&
              items.map((item, index) => (
                <SwiperSlide key={item._id}>
                  <div className='our-process-item'>
                    <span className='digit'>0{`${index + 1}`}</span>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div
            className='swiper-button-prev'
            onClick={() => swiper.slidePrev()}
          >
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
              ></path>
            </svg>
          </div>
          <div
            className='swiper-button-next'
            onClick={() => swiper.slideNext()}
          >
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
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
