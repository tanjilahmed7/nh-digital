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
              {image && (
                <Image
                  src={image}
                  alt=''
                  width={635}
                  height={381}
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              )}
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
