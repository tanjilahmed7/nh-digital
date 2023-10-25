import Link from 'next/link';
import Accordion from '../accordion';
import MagneticButton from '../magneticButton';

const GreatAttention = ({ data }) => {
  const { title, button_title, button_url, tabs } = data || {};
  return (
    <section className='great-attention section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-6'>
            <div
              className='section-content'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <h2 className='section-title'>{title}</h2>
              {button_title && button_url && (
                <MagneticButton className='d-none d-md-inline-block'>
                  <Link
                    href={button_url}
                    className='btn btn-primary button--wayra'
                  >
                    {button_title}
                  </Link>
                </MagneticButton>
              )}
            </div>
          </div>
          <div className='col-lg-6'>
            <Accordion items={tabs} />
            {button_title && button_url && (
              <div
                className='text-center d-md-none'
                data-aos='fade-up'
                data-aos-duration='600'
              >
                <MagneticButton>
                  <Link
                    href={button_url}
                    className='btn btn-primary button--wayra'
                  >
                    {button_title}
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

export default GreatAttention;
