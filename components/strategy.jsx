import Counter from './counter';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from './magneticButton';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const Strategy = ({ data }) => {
  const { title, count_items, image, image_mobile, button_title, button_url } =
    data;
  return (
    <section className='strategy section pb-0'>
      <div className='container'>
        <div className='stragegy-item'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h2 data-aos='fade-up' data-aos-duration='800'>
                {title}
              </h2>
              {count_items && (
                <div className='row text-center'>
                  {count_items.map((counter) => (
                    <div
                      key={counter._id}
                      className='col-md-4'
                      data-aos='fade-up'
                      data-aos-duration='800'
                    >
                      <Counter
                        count={counter.number}
                        symbol={counter.prefix}
                        title={counter.title}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='text-center' data-aos='fade-up' data-aos-duration='600'>
          {button_url && (
            <MagneticButton>
              <Link href={button_url} className='btn btn-stacked button--wayra'>
                {button_title}
              </Link>
            </MagneticButton>
          )}
        </div>
      </div>
      <Image
        className='cta-image d-none d-md-block'
        src={image}
        alt='about-us'
        width={1400}
        height={400}
        placeholder='blur'
        blurDataURL={shimmerBlurData}
      />
      <Image
        className='cta-image block d-md-none'
        src={image_mobile}
        alt='about-us'
        width={1400}
        height={400}
        placeholder='blur'
        blurDataURL={shimmerBlurData}
      />
    </section>
  );
};

export default Strategy;
