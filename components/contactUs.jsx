'use client';

import { useState } from 'react';
import ContactForm from './contactForm';
import { useIsClient } from '../hooks/useIsClient';
const ContactUs = () => {
  const [isActive, setIsActive] = useState(true);
  const isClient = useIsClient();

  const handleCollapsed = () => {
    setIsActive((prevState) => !prevState);
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className='contact-us'>
      <div
        className={`panel collapse-trigger ${isActive ? 'active' : ''}`}
        onClick={handleCollapsed}
      >
        <div className='container' data-aos='fade-left' data-aos-duration='800'>
          <span>
            Let&apos;s talk your project
            <span className='icon-down' style={{ transform: 'rotate(180deg)' }}>
              <svg
                width='18'
                height='10'
                viewBox='0 0 18 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.334 8.85417L9.00065 3.64262e-07L0.667316 8.80167L1.83898 10L9.00065 2.42167L16.1357 10L17.334 8.85417Z'
                  fill='white'
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div className={`panel-body nh-collapse ${isActive ? 'show' : ''}`}>
        <div className='container'>
          <div className='content'>
            <div className='row gy-5 gy-lg-0 justify-content-between'>
              <div
                className='col-lg-5'
                data-aos='fade-up'
                data-aos-duration='800'
              >
                <h2>Ready to team up?</h2>
                <p>
                  Are you ready to see visible results from your digital
                  advertising efforts?
                </p>
                <p>
                  We&apos;re not miracle workers. But we&apos;re pretty good at
                  what we do.
                </p>
                <p>
                  We help you grow your business organically, hit your marketing
                  objectives, as well as producing more leads and revenue. We do
                  all of this using practical marketing strategies that actually
                  work.
                </p>
              </div>
              <div className='col-lg-6'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
