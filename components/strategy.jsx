import Counter from './counter';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from './magneticButton';

const Strategy = ({ data }) => {
  const { title, count_items, image, image_mobile } = data;
  return (
    <section className='strategy section pb-0'>
      <div className='container'>
        <div className='stragegy-item'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <h2 data-aos='fade-up' data-aos-duration='200'>
                {title}
              </h2>
              {count_items && (
                <div className='row text-center'>
                  {count_items.map((counter) => (
                    <div
                      key={counter._id}
                      className='col-md-4'
                      data-aos='fade-up'
                      data-aos-duration='200'
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
        <div className='text-center' data-aos='fade-up' data-aos-duration='500'>
          <MagneticButton>
            <Link href='/about-us' className='btn btn-stacked button--wayra'>
              About us
            </Link>
          </MagneticButton>
        </div>
      </div>
      <Image
        className='cta-image d-none d-md-block'
        src={image}
        alt='about-us'
        width={1400}
        height={400}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
      />
      <Image
        className='cta-image block d-md-none'
        src={image_mobile}
        alt='about-us'
        width={1400}
        height={400}
        placeholder='blur'
        blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
      />
    </section>
  );
};

export default Strategy;
