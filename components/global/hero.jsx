import PageHeader from '../pageHeader';
import PageHero from '../pageHero';
import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
import PageBanner from '../pageBanner';

const Hero = ({ data, children, parent = {} }) => {
  const { title, subtitle, pagetitle, image } = data;
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    parent &&
      parent.length > 0 && {
        label: parent,
        href: '/' + parent.toLowerCase().split(' ').join('-'),
      },
    { label: title },
  ].filter(Boolean); // Removing null/undefined items
  return (
    <>
      <PageHero>
        <PageHeader breadcrumbs={breadcrumbs}>
          {pagetitle ? <h1>{pagetitle}</h1> : <h1>{title}</h1>}

          {subtitle && <p>{subtitle}</p>}
          {children}
        </PageHeader>
      </PageHero>
      {image && (
        <PageBanner>
          <div
            className='ratio ratio-16x9 rounded-3'
            data-aos='fade-in'
            data-aos-duration='800'
          >
            <Image
              src={image}
              alt='banner'
              className='banner-img rounded-3'
              width={1110}
              height={625}
              placeholder='blur'
              blurDataURL={shimmerBlurData}
            />
          </div>
        </PageBanner>
      )}
    </>
  );
};

export default Hero;
