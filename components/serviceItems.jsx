import ServiceItem from './serviceItem';
const ServiceItems = ({ items }) => {
  return (
    <div className='row g-4'>
      {items &&
        items.map((service, index) => (
          <div key={service._id} className='col-md-6'>
            <ServiceItem item={service} index={index} />
          </div>
        ))}
    </div>
  );
};

export default ServiceItems;
