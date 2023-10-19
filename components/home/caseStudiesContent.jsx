'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CaseStudyItem from '../caseStudyItem';
import useSwiperSlider from '../../hooks/useSwiperSlider';

import 'swiper/scss';

const CaseStudiesContent = ({ title, caseStudies }) => {
  const [swiperRef, swiper] = useSwiperSlider();
  return (
    <>
      <div className='container'>
        <div className='section_header'>
          <div className='section_title'>
            <h2>{title}</h2>
          </div>
          <div className='d-flex justify-content-end gap-3 ms-auto'>
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
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        className='mySwiper'
        data-aos='fade-left'
        data-aos-duration='800'
      >
        {caseStudies.map((caseSduty, index) => (
          <SwiperSlide key={index + caseSduty.id}>
            <CaseStudyItem
              href={caseSduty.href}
              title={caseSduty.title}
              img={caseSduty.img}
              tags={caseSduty.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CaseStudiesContent;
