'use client';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import TypedText from '../typedText';
import HeroMedia from './heroMedia';

// typed strings

const HeroHome = ({ data }) => {
  // Use the spread operator to create a new object with the parsed data
  const {
    title,
    subtitle,
    button_text,
    button_url,
    banner_video,
    description,
    highlights,
  } = data || {};
  const typedStrings = highlights.map((highlight) => highlight.title);

  return (
    <section className='hero section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0 align-items-center justify-content-between'>
          <div
            className='col-lg-6 order-1 order-lg-0'
            data-aos='fade-up'
            data-aos-duration='800'
          >
            <div className='hero__content'>
              <h1 className='hero__title'>
                {title}
                <br />
                <TypedText strings={typedStrings} /> <br />
                {subtitle}
              </h1>
              <p className='hero__text'>{description}</p>
              <MagneticButton>
                <Link href={button_url} className='btn hero__btn button--wayra'>
                  {button_text}
                </Link>
              </MagneticButton>
            </div>
          </div>
          <div className='col-lg-6'>
            <HeroMedia videoId='L61p2uyiMSo' video={banner_video} />
            {/* youtube video id need to be passed as a prop */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
