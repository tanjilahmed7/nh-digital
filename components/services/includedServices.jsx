import Link from 'next/link';
import MagneticButton from '../magneticButton';
import IncludedServicesTab from './includedServicesTab';

const IncludedServices = ({ data }) => {
  const { title, description, button_title, button_url, services } = data || {};

  return (
    <section className='included-services section'>
      <div className='container'>
        <div className='section-header'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <IncludedServicesTab services={services} />
        {button_url && (
          <div className='text-center'>
            <MagneticButton>
              <Link
                href={button_url}
                className='btn btn-primary button--wayra'
                data-aos='fade-up'
                data-aos-duration='400'
              >
                {button_title}
              </Link>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default IncludedServices;
