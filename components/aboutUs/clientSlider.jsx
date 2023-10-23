'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const ClientSlider = ({ clients = [] }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      slidesPerView={'auto'}
      spaceBetween={50}
      data-aos='fade-left'
      data-aos-duration='800'
      watchOverflow={true}
    >
      {clients.map((client) => (
        <SwiperSlide key={client._id}>
          <div className='client-images-item'>
            <Image
              src={client.image}
              alt=''
              width='255'
              height='145'
              placeholder='blur'
              blurDataURL={shimmerBlurData}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;
