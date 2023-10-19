'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const ClientSlider = ({ clients = [] }) => {
	return (
		<Swiper
			modules={[Autoplay]}
			speed={2000}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			loop={true}
			slidesPerView={'auto'}
			spaceBetween={50}
		>
			{clients.map((client) => (
				<SwiperSlide key={client._id}>
					<div className="client-images-item">
						<Image src={client.image} alt="" width="255" height="145" />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ClientSlider;
