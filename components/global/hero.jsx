import PageHeader from '../pageHeader';
import PageHero from '../pageHero';
import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

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
          {pagetitle && <h1>{pagetitle}</h1>}
          {subtitle && <p>{subtitle}</p>}
          {children}
        </PageHeader>
      </PageHero>
      {image && (
        <div
          className='ratio ratio-21x9'
          data-aos='fade-in'
          data-aos-duration='800'
        >
          <Image
            src={image}
            alt='banner'
            width={1110}
            height={625}
            placeholder='blur'
            blurDataURL={shimmerBlurData}
          />
        </div>
      )}
    </>
  );
};

export default Hero;
