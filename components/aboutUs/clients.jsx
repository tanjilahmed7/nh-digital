import ClientSlider from './clientSlider';

// clients data
const clients = [
	{
		id: 0,
		src: '/images/testimonial/images-01.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 1,
		src: '/images/testimonial/images-02.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 2,
		src: '/images/testimonial/images-03.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 3,
		src: '/images/testimonial/images-01.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 4,
		src: '/images/testimonial/images-02.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 5,
		src: '/images/testimonial/images-03.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 6,
		src: '/images/testimonial/images-01.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 7,
		src: '/images/testimonial/images-02.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 8,
		src: '/images/testimonial/images-03.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 9,
		src: '/images/testimonial/images-01.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 10,
		src: '/images/testimonial/images-02.png',
		alt: '',
		width: 255,
		height: 145,
	},
	{
		id: 11,
		src: '/images/testimonial/images-03.png',
		alt: '',
		width: 255,
		height: 145,
	},
];

const Clients = ({ data }) => {
	const { clients } = data || {};
	return (
		<div className="testimonials-images">
			<ClientSlider clients={clients} />
		</div>
	);
};

export default Clients;
