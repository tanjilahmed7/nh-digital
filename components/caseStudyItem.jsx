import Image from 'next/image';
import Link from 'next/link';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const CaseStudyItem = ({ href, img, title, tags }) => {
  return (
    <div className='case_studies_item'>
      <Link href={href} className='case_studies_img'>
        <Image
          src={img.src}
          alt={title}
          width={img.width}
          height={img.height}
          placeholder='blur'
          blurDataURL={shimmerBlurData}
        />
      </Link>
      <div className='case_studies_content'>
        <Link href={href}>{title}</Link>
        <ul className='tag'>
          {tags.map((tag, index) => (
            <li key={index}>{tag.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyItem;
