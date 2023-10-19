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
                      placeholder='blur'
                      blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
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
