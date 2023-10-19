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
                <h2 data-aos='fade-up' data-aos-delay='200'>
                  404
                </h2>
                <p className='leading' data-aos='fade-up' data-aos-delay='400'>
                  Page not found
                </p>
                <p data-aos='fade-up' data-aos-delay='400'>
                  Sorry, this page isn’t available. The link you followed may be
                  broken, or the page may been removed. If you have any query,
                  please contact us.
                </p>
                <MagneticButton>
                  <Link
                    href='/'
                    className='btn btn-primary button--wayra download'
                    data-aos='fade-up'
                    data-aos-delay='500'
                  >
                    Back to home
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='img' data-aos='fade-left' data-aos-delay='400'>
                <Image
                  src={image.src}
                  alt={image.title}
                  width='705'
                  height='469'
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
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
