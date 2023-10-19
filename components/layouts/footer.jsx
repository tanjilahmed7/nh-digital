import Image from 'next/image';
import Link from 'next/link';
import FooterNewsletter from '../footerNewsletter';
import MenuLink from '../MenuLink';

const Footer = ({ servicesMenus, QuickLinksMenus }) => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='row gy-5 gy-xl-0 gx-3 justify-content-between'>
            <div className='col-xl-3'>
              <h3 className='title'>Stay connected</h3>
              <FooterNewsletter />
              <h4 className='sub-title'>Awards & Recognition</h4>
              <div className='awards'>
                <Image
                  src='/images/award01.png'
                  alt='title'
                  width={46}
                  height={50}
                />
                <Image
                  src='/images/award02.png'
                  alt=''
                  width={46}
                  height={50}
                />
              </div>
            </div>
            <div className='col-xl-8'>
              <div className='row gy-5 gy-md-0 gx-md-3'>
                <div className='col-md-4'>
                  <div className='footer-item'>
                    <div
                      className='d-flex align-items-center footer-widget'
                      data-toggle='collapse'
                      data-target='#collapseFooterMenu1'
                      role='button'
                      aria-expanded='false'
                      aria-controls='collapseFooterMenu1'
                    >
                      <div className='col-6'>
                        <h3 className='title'>Service</h3>
                      </div>
                      <div className='col-6 block d-md-none'>
                        <div className='icon-down text-end'>
                          <svg
                            width='16'
                            height='10'
                            viewBox='0 0 16 10'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.5 1.53125L8 9.5L0.5 1.5785L1.5545 0.499999L8 7.3205L14.4215 0.5L15.5 1.53125Z'
                              fill='white'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <MenuLink
                      id='collapseFooterMenu1'
                      navLinks={servicesMenus}
                    />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='footer-item'>
                    <div
                      className='d-flex align-items-center footer-widget'
                      data-toggle='collapse'
                      data-target='#collapseFooterMenu2'
                      role='button'
                      aria-expanded='false'
                      aria-controls='collapseFooterMenu2'
                    >
                      <div className='col-6'>
                        <h3 className='title'>Quick links</h3>
                      </div>
                      <div className='col-6 block d-md-none'>
                        <div className='icon-down text-end'>
                          <svg
                            width='16'
                            height='10'
                            viewBox='0 0 16 10'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M15.5 1.53125L8 9.5L0.5 1.5785L1.5545 0.499999L8 7.3205L14.4215 0.5L15.5 1.53125Z'
                              fill='white'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <MenuLink
                      id='collapseFooterMenu2'
                      navLinks={QuickLinksMenus}
                    />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='footer-item'>
                    <h3 className='title'>Contact</h3>
                    <ul>
                      <li>
                        <Link
                          className='mail'
                          href='mailto:hello@notionhive.com'
                        >
                          hello@notionhive.com
                        </Link>
                      </li>
                      <li>
                        <span>Bangladesh:</span>
                        <Link href='tel:+880-1305-303120'>
                          +880-1305-303120
                        </Link>
                      </li>
                      <li>
                        <span>Canada: </span>
                        <Link href='tel:+1-613-262-5809'>+1-613-262-5809</Link>
                      </li>
                    </ul>
                    <div className='follow-us'>
                      <h3 className='title'>Follow us</h3>
                      <ul className='social'>
                        <li>
                          <Link href='http://linkedin.com/company/notionhive'>
                            <Image
                              src='/images/linkedin.svg'
                              alt='Follow us on LinkedIn'
                              width='14'
                              height='14'
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href='https://www.youtube.com/channel/UCfhCjkQh9kgfl3SvcUTEYfQ/featured'>
                            <Image
                              src='/images/youtube.svg'
                              alt='Visit our YouTube channel'
                              width='14'
                              height='14'
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href='https://www.facebook.com/notionhive'>
                            <Image
                              src='/images/facebook.svg'
                              alt='Like us on Facebook'
                              width='14'
                              height='14'
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href='https://www.instagram.com/hellonotionhive/'>
                            <Image
                              src='/images/instagram.svg'
                              alt='Follow us on Instagram'
                              width='14'
                              height='14'
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <p className='copy'>© 2023 Notionhive</p>
            </div>
            <div className='col-md-6'>
              <ul className='nav'>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/terms-of-use'>Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <svg className='cursor' width='25' height='25' viewBox='0 0 25 25'>
        <circle className='cursor__inner' cx='12.5' cy='12.5' r='6.25' />
      </svg>
    </footer>
  );
};

export default Footer;
