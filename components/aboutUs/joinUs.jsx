import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const JoinUs = ({ data }) => {
  const { title, description, image_one, image_two, button_text, button_url } =
    data || {};
  return (
    <section className='join-our-team section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0 align-items-center'>
          <div className='col-lg-7'>
            <div
              className='d-flex align-items-center justify-content-center justify-content-lg-center gap-3'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <div className='join-our-team-img'>
                <Image
                  src={image_one}
                  alt=''
                  width={310}
                  height={278}
                  placeholder='blur'
                  blurDataURL={shimmerBlurData}
                />
              </div>
              <div className='join-our-team-img'>
                <Image src={image_two} alt='' width={310} height={278} />
              </div>
            </div>
          </div>
          <div className='col-lg-5' data-aos='fade-up' data-aos-duration='800'>
            <h2>{title}</h2>
            <p>{description}</p>
            {button_text && button_url && (
              <MagneticButton>
                <Link
                  href='/careers'
                  className='btn btn-primary button--wayra download'
                >
                  {button_text}
                </Link>
              </MagneticButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
