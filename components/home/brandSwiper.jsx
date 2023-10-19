'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';

const BrandSwiper = ({ brands = [] }) => {
	return (
    <Swiper
      modules={[Autoplay]}
      speed={2000}
      autoplay={{ delay: 0, disableOnInteraction: false }}
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
              blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSwiper;
