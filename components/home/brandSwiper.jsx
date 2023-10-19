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
			className="mySwiper"
		>
			{brands.map((brand) => (
				<SwiperSlide key={brand._id}>
					<div className="brands_item">
						<Image src={brand.image} alt="" width="138" height="40" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BrandSwiper;
