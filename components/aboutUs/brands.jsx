import Image from 'next/image';
import MagneticButton from '../magneticButton';
import Link from 'next/link';


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
                    blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
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
