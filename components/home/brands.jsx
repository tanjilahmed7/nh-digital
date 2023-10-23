import Link from 'next/link';
import MagneticButton from '../magneticButton';
import BrandSwiper from './brandSwiper';

const Brands = async ({ data }) => {
  const { title, subtitle, items, view_more_text, view_more_url } = data || {};
  return (
    <section id='brands' className='brands section pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div
              className='section_title'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <BrandSwiper brands={items} />
      <div className='text-center' data-aos='fade-up' data-aos-duration='600'>
        <MagneticButton>
          <Link href='#' className='btn btn-stacked button--wayra'>
            {view_more_text}
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default Brands;
