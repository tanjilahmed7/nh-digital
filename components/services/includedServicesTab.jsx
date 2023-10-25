'use client';

import Image from 'next/image';
import { useState } from 'react';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const IncludedServicesTab = ({ services = [] }) => {
  const [isActive, setIsActive] = useState(services[0]._id);

  const handleClick = (value) => {
    setIsActive(isActive !== value ? value : 0);
  };

  return (
    <div className='row gx-0 gy-5 gx-md-4 mb-5 pb-4'>
      <div className='col-md-4 col-lg-3'>
        <div className='tabs tabs-v' data-aos='fade-up' data-aos-duration='800'>
          <ul>
            {services.map((service, index) => (
              <li key={`tabs` + service._id}>
                <button
                  type='button'
                  className={`tabs-btn ${
                    isActive === service._id ? 'active' : ''
                  }`}
                  onClick={() => handleClick(service._id)}
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='col-md-8 col-lg-9'>
        <div className='tabpanes'>
          {services.map((service, index) => (
            <div
              key={`tabpanes` + service._id}
              className={`tabpane ${isActive === service._id ? 'show' : ''}`}
            >
              <div className='service-item'>
                <div
                  className='img'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width='160'
                    height='200'
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
                <div
                  className='tab-content'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <h4>{service.subtitle}</h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncludedServicesTab;
