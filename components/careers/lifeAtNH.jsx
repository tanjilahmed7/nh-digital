import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';

const LifeAtNH = ({ data }) => {
  const {
    title,
    description,
    button_title,
    button_url,
    short_description,
    items,
  } = data || {};
  return (
    <section className='life-at-nh section'>
      <div className='container'>
        <div className='section-header'>
          <h4>{description}</h4>
          <div className='text-center'>
            {button_url && button_title && (
              <MagneticButton>
                <Link href='#' className='btn btn-stacked button--wayra'>
                  {button_title}
                </Link>
              </MagneticButton>
            )}
          </div>
        </div>
        <div className='section-header'>
          <h2>{title}</h2>
          <p>{short_description}</p>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            {items &&
              items.map((item, index) => {
                const { title, description, image } = item || {};
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className='row g-4 align-items-center justify-content-center justify-content-lg-between mb-4 pb-4'
                  >
                    {isEven ? (
                      <>
                        <div className='col-lg-5'>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                        <div className='col-sm-10 col-lg-6'>
                          <div className='section-img'>
                            <Image
                              src={image}
                              alt={title}
                              width={445}
                              height={455}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='col-sm-10 col-lg-6'>
                          <div className='section-img'>
                            <Image
                              src={image}
                              alt={title}
                              width={445}
                              height={455}
                            />
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtNH;
