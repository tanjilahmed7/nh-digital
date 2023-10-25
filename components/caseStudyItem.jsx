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
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <ul className='tag'>
          {tags.slice(0, 3).map((tag, index) => (
            <li key={index}>
              <Link href={`/case-studies/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyItem;
