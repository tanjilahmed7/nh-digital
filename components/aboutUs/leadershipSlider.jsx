'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const LeadershipSlider = ({ leaders }) => {
	const [swiper, setSwiper] = useState(null);
	const swiperRef = useRef(null);

	useEffect(() => {
		if (swiperRef.current) {
			setSwiper(swiperRef.current.swiper);
		}
	}, []);

	return (
    <div className='swiper-container'>
      <Swiper
        ref={swiperRef}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        data-aos='fade-left'
        data-aos-duration='800'
      >
        {leaders.map((leader) => (
          <SwiperSlide key={leader._id}>
            <div className='leadership-item'>
              <div className='leadership-img'>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width='300'
                  height='300'
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              </div>
              <h3>{leader.name}</h3>
              <small>{leader.position}</small>
              <p>{leader.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
            fill='black'
            fillOpacity='0.8'
          ></path>
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
            fill='black'
            fillOpacity='0.8'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default LeadershipSlider;
