import Image from 'next/image';
import React from 'react';
import MagneticButton from './magneticButton';
import classNames from 'classnames';
import Link from 'next/link';

const GrowBusiness = ({ className = '', data }) => {
	const { title, description, button_text, button_url, image, custom_class } =
		data || {};

	className = classNames(className, custom_class);
	return (
    <section className={`business section ${className}`}>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-5'>
            <div className='content'>
              <h2 data-aos='fade-up' data-aos-delay='200'>
                {title}
              </h2>
              <p data-aos='fade-up' data-aos-delay='400'>
                {description}
              </p>
              <MagneticButton>
                <Link
                  href='#'
                  className='btn btn-primary button--wayra download'
                  data-aos='fade-up'
                  data-aos-delay='500'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.833984 17.5V19.1667H19.1673V17.5H0.833984ZM15.834 10L14.6673 8.83337L10.834 12.6667V0.833374H9.16732V12.6659L5.33398 8.83254L4.16732 10L10.0007 15.8334L15.834 10Z'
                      fill='white'
                    />
                  </svg>
                  {button_text}
                </Link>
              </MagneticButton>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='img' data-aos='fade-left' data-aos-delay='400'>
              <Image
                src={image}
                alt={title}
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
  );
};

export default GrowBusiness;
