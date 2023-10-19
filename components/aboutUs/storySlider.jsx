'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import MagneticButton from '../magneticButton';

const StorySlider = ({ stories = [] }) => {
	const [swiper, setSwiper] = useState(null);
	const swiperRef = useRef(null);

	const handleNavigate = (event) => {
		const slideIndex = event.target
			.closest('.swiper-slide')
			.getAttribute('data-swiper-slide-index');

		swiper.slideToLoop(parseInt(slideIndex), 300);
	};

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
        slidesPerView={'auto'}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          430: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        data-aos='fade-left'
        data-aos-duration='800'
      >
        <div className='swiper-wrapper'>
          {stories.map((story, index) => (
            <SwiperSlide key={story._id}>
              <div className='our-story-item'>
                <MagneticButton>
                  <button
                    className='btn btn-stacked button--wayra'
                    type='button'
                    onClick={handleNavigate}
                  >
                    {story.year}
                  </button>
                </MagneticButton>
                <h4>{story.title}</h4>
                <p>{story.description}</p>
                <div className='our-story-item-img'>
                  <Image
                    src={story.image}
                    alt={story.title}
                    width='290'
                    height='150'
                    priority={index === 0 ? true : false}
                    placeholder='blur'
                    blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
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

export default StorySlider;
