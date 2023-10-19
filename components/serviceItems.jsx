import ServiceItem from './serviceItem';
const ServiceItems = ({ items }) => {
	return (
		<div className="row g-4">
			{items &&
				items.map((service, index) => (
					<div
						key={service._id}
						className="col-md-6"
						data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
						data-aos-delay={index % 2 === 0 ? '500' : '200'}
					>
						<ServiceItem item={service} />
					</div>
				))}
		</div>
	);
};

export default ServiceItems;
