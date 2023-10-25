import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
const Calendly = () => {
  return (
    <div className='text-center' data-aos='fade-up' data-aos-duration='800'>
      <Image
        src='https://digital.notionhive.com/images/book-consultation/calendly.png'
        alt='Consultation'
        className='img-fluid'
        width={635}
        height={400}
        placeholder='blur'
        blurDataURL={shimmerBlurData}
      />
    </div>
  );
};

export default Calendly;
