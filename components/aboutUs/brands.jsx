'use client';

import Image from 'next/image';
import MagneticButton from '../magneticButton';
import Link from 'next/link';
import { useState } from 'react';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
const itemsPerPage = parseInt(process.env.NEXT_PUBLIC_BRANDS_LIMIT);

const Brands = ({ data }) => {
  const { title, subtitle, button_title, button_url, items } = data || {};

  const [visibleItems, setVisibleItems] = useState(
    items.slice(0, itemsPerPage)
  );
  const [showMore, setShowMore] = useState(true);

  const handleLoadMore = () => {
    const currentVisibleCount = visibleItems.length;
    const nextVisibleItems = items.slice(
      currentVisibleCount,
      currentVisibleCount + itemsPerPage
    );

    if (nextVisibleItems.length < itemsPerPage) {
      setShowMore(false);
    }

    setVisibleItems([...visibleItems, ...nextVisibleItems]);
  };

  return (
    <section id='brands' className='brands brands-alt section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div
              className='section_title'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div
          className='row g-5 pb-4 justify-content-center'
          data-aos='fade-up'
          data-aos-duration='800'
        >
          {visibleItems &&
            visibleItems.map((brand, index) => (
              <div key={brand._id} className='col-6 col-sm-4 col-lg-3'>
                <div className='brands_item'>
                  <Image
                    src={brand.image}
                    alt=''
                    width='138'
                    height='40'
                    priority={index === 0 ? true : false}
                    placeholder='blur'
                    blurDataURL={shimmerBlurData}
                  />
                </div>
              </div>
            ))}
        </div>
        {button_title && button_url && showMore && (
          <div
            className='text-center'
            data-aos='fade-up'
            data-aos-duration='600'
          >
            <MagneticButton>
              <button
                type='button'
                className='btn btn-stacked button--wayra'
                onClick={handleLoadMore}
              >
                {button_title}
              </button>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
