'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

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
                    blurDataURL={shimmerBlurData}
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
