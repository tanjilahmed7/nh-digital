import Link from 'next/link';
import MagneticButton from './magneticButton';
import TestimonialSwiper from './testimonialSwiper';
import classNames from 'classnames';

const Testimonials = ({ className = '', data }) => {
  const { title, button_text, button_url, items, custom_class } = data || {};
  const classes = classNames(className, custom_class);

  console.log(button_url);

  return (
    <section className={`testimonials section ${classes}`}>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-5' data-aos='fade-up' data-aos-duration='800'>
            <div className='left'>
              <h2>{title}</h2>
              {button_url && (
                <MagneticButton>
                  <Link
                    href={button_url}
                    className='btn btn-primary button--wayra'
                  >
                    {button_text}
                  </Link>
                </MagneticButton>
              )}
            </div>
          </div>
          <div className='col-lg-7' data-aos='fade-up' data-aos-duration='1000'>
            <TestimonialSwiper items={items} />
            {button_url && (
              <div className='text-center block d-md-none'>
                <MagneticButton>
                  <Link
                    href={button_url}
                    className='btn btn-primary button--wayra'
                  >
                    {button_text}
                  </Link>
                </MagneticButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
