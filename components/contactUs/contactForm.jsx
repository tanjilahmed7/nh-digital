'use client';
import Link from 'next/link';
import Breadcrumbs from '../breadcrumbs';
import MagneticButton from '../magneticButton';

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Contact Us' }];
import { useIsClient } from '../../hooks/useIsClient';
import ContactForm from '../contactForm';

const ContactUs = ({ data }) => {
  const {
    title,
    email,
    phone,
    calendly_title,
    calendly_subtitle,
    button_title,
    button_url,
  } = data || {};
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }
  return (
    <section className='contact-form section'>
      <div className='container'>
        <div className='section-header'>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h2>{title}</h2>
        </div>
        <div className='row g-4 align-items-center justify-content-between'>
          <div className='col-lg-6'>
            <ContactForm />
          </div>
          <div className='col-lg-5'>
            <div className='contact-block'>
              <h4>Email</h4>
              <p>
                <Link href={`mailto:${email}`}>{email}</Link>
              </p>
            </div>
            <div className='contact-block'>
              <h4>Phone</h4>

              {phone &&
                phone.map((item, index) => (
                  <p key={index}>
                    {item.title && <span>{item.title}: </span>}
                    <Link href={`tel:${item.number}`}>{item.number}</Link>
                  </p>
                ))}
            </div>
            <div className='contact-block'>
              <h4>{calendly_title}</h4>
              <p>{calendly_subtitle}</p>
              {button_title && button_url && (
                <div className='magnetic'>
                  <Link
                    href={button_url}
                    className='btn btn-stacked button--wayra'
                  >
                    {button_title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
