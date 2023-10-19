import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
const Calendly = () => {
  return (
    <div className='text-center'>
      <Image
        src='/images/book-consultation/calendly.png'
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
