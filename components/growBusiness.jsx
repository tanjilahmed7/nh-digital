'use client';

import Image from 'next/image';
import React from 'react';
import MagneticButton from './magneticButton';
import classNames from 'classnames';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
import DownloadModal from './downloadModal';
import { useModal } from '@/context/modalContext';
const GrowBusiness = ({ className = '', data }) => {
  const { handleModal } = useModal();

  const { title, description, button_text, button_url, image, custom_class } =
    data || {};

  className = classNames(className, custom_class);
  return (
    <section className={`business section ${className}`}>
      <div className='container'>
        <div className='row gy-5 gy-lg-0'>
          <div className='col-lg-5' data-aos='fade-up' data-aos-duration='800'>
            <div className='content'>
              <h2>{title}</h2>
              <p>{description}</p>
              <MagneticButton>
                <button
                  type='button'
                  className='btn btn-primary button--wayra download'
                  data-bs-toggle='modal'
                  data-bs-target={button_url}
                  onClick={handleModal}
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
                </button>
              </MagneticButton>
            </div>
          </div>
          <div className='col-lg-7' data-aos='fade-up' data-aos-duration='1000'>
            <div className='img'>
              <Image
                src={image}
                alt={title}
                width='705'
                height='469'
                placeholder='blur'
                blurDataURL={shimmerBlurData}
              />
            </div>
          </div>
        </div>
      </div>
      <DownloadModal downloadFor='ebook' modalID={button_url} />
    </section>
  );
};

export default GrowBusiness;
