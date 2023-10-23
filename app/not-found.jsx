import MagneticButton from '@/components/magneticButton';
import Image from 'next/image';
import Link from 'next/link';

const image = {
  src: '/images/not-found/not-found.svg',
  title: 'UFO',
};

const NotFountPage = ({ className = '' }) => {
  return (
    <main>
      <section className={`page-hero hero section ${className}`}>
        <div className='container'>
          <div className='row gy-5 gy-lg-0 justify-content-between'>
            <div className='col-lg-7'>
              <div className='content'>
                <h2 data-aos='fade-up' data-aos-duration='200'>
                  404
                </h2>
                <p
                  className='leading'
                  data-aos='fade-up'
                  data-aos-duration='400'
                >
                  Page not found
                </p>
                <p data-aos='fade-up' data-aos-duration='400'>
                  Sorry, this page isn’t available. The link you followed may be
                  broken, or the page may been removed. If you have any query,
                  please contact us.
                </p>
                <MagneticButton>
                  <Link
                    href='/'
                    className='btn btn-primary button--wayra download'
                    data-aos='fade-up'
                    data-aos-duration='500'
                  >
                    Back to home
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='img' data-aos='fade-left' data-aos-duration='400'>
                <Image
                  src={image.src}
                  alt={image.title}
                  width='705'
                  height='469'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFountPage;
