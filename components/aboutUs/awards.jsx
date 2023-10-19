import Image from 'next/image';
import AwardItem from './awardItem';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

// awards data
const awards = [
  {
    id: 0,
    year: 2022,
    description:
      'We grow businesses by creating shopping experiences that turn everyday brands into industry leaders.',
  },
  {
    id: 1,
    year: 2022,
    description:
      'We grow businesses by creating shopping experiences that turn everyday brands into industry leaders.',
  },
];

const Awards = ({ data }) => {
  const { image, title, items } = data || {};
  return (
    <section className='awards-and-recognition section'>
      <div className='container'>
        <div className='row gy-5 gy-lg-0 align-items-center justify-content-end'>
          <div className='col-lg-5 order-1 order-lg-0'>
            <div className='award-img'>
              <Image
                src={image}
                alt=''
                width={402}
                height={585}
                placeholder='blur'
                blurDataURL={shimmerBlurData}
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <h2>{title}</h2>
            {items &&
              items.map((award) => <AwardItem key={award._id} award={award} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
