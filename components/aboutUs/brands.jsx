import Image from 'next/image';
import MagneticButton from '../magneticButton';
import Link from 'next/link';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const Brands = ({ data }) => {
  const { title, subtitle, button_title, button_url, items } = data || {};
  return (
    <section id='brands' className='brands brands-alt section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section_title'>
              <h2 data-aos='fade-up' data-aos-duration='200'>
                {title}
              </h2>
              <p data-aos='fade-up' data-aos-duration='400'>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className='row g-5 mb-5 pb-4 justify-content-center'>
          {items &&
            items.map((brand, index) => (
              <div key={brand._id} className='col-6 col-sm-4 col-lg-3'>
                <div className='brands_item'>
                  <Image
                    src={brand.image}
                    alt=''
                    width='138'
                    height='40'
                    priority={index === 0 ? true : false}
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
              </div>
            ))}
        </div>
        {button_title && button_url && (
          <div
            className='text-center'
            data-aos='fade-up'
            data-aos-duration='600'
          >
            <MagneticButton>
              <Link href='#' className='btn btn-stacked button--wayra'>
                {button_title}
              </Link>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
