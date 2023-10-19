'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import CaseStudyItem from './caseStudyItem';

import 'swiper/scss';

// case studies data
const caseStudies = [
  {
    id: 0,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/01.png',
      width: '350',
      height: '350',
    },
    title: 'Online video campaign for Noir',
    tags: ['Branding', 'Video', 'Web'],
  },
  {
    id: 1,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/02.png',
      width: '350',
      height: '350',
    },
    title: 'Telenor Health website',
    tags: ['Branding', 'Video', 'Web'],
  },
  {
    id: 2,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/03.png',
      width: '350',
      height: '350',
    },
    title: 'IELTS- Brand awareness campaign',
    tags: ['Branding', 'Video', 'Web'],
  },
  {
    id: 3,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/01.png',
      width: '350',
      height: '350',
    },
    title: 'Online video campaign for Noir',
    tags: ['Branding', 'Video', 'Web'],
  },
  {
    id: 4,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/02.png',
      width: '350',
      height: '350',
    },
    title: 'Telenor Health website',
    tags: ['Branding', 'Video', 'Web'],
  },
  {
    id: 5,
    href: '/case-studies/a',
    img: {
      src: '/images/case-studies/03.png',
      width: '350',
      height: '350',
    },
    title: 'IELTS- Brand awareness campaign',
    tags: ['Branding', 'Video', 'Web'],
  },
];

const CaseStudies = ({ className = '', children }) => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(swiperRef.current.swiper);
    }
  }, []);

  return (
    <section className={`case_studies section ${className}`}>
      <div className='container'>
        {children}
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
            }}
            className='mySwiper'
            data-aos='fade-left'
            data-aos-duration='800'
          >
            {caseStudies.map((caseSduty) => (
              <SwiperSlide key={caseSduty.id}>
                <CaseStudyItem
                  href={caseSduty.href}
                  title={caseSduty.title}
                  img={caseSduty.img}
                  tags={caseSduty.tags}
                />
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
                fill='black'
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
                fill='black'
                fillOpacity='0.8'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
