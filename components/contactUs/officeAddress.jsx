import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OfficeAddress = ({ data }) => {
  const { title, image, addresses } = data || {};
  return (
    <section className='contact-address section'>
      <div className='container'>
        <div className='row g-4 align-items-center justify-content-center justify-content-lg-between'>
          <div className='col-sm-10 col-lg-6'>
            <div className='section-img'>
              {image && <Image src={image} alt='' width={635} height={381} />}
            </div>
          </div>
          <div className='col-lg-5'>
            <h2>{title}</h2>

            {addresses &&
              addresses.map((item, index) => (
                <div className='contact-address-item' key={index}>
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.address }} />

                  {item.google_map_url && (
                    <Link href={item.google_map_url}>View in Google Map</Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeAddress;
