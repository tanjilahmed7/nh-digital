import Image from 'next/image';
import Link from 'next/link';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

export const renderPosts = (postsToRender, index) => {
  return postsToRender?.nodes?.map((study, index) => {
    const { title, slug, featuredImage, caseStudyCategories } = study;
    const { sourceUrl } = featuredImage?.node || {};
    const categories = caseStudyCategories?.nodes || {};
    return (
      <div className='col-10 col-md-6' key={index}>
        <div className='case_studies_item'>
          <div className='case_studies_img'>
            <Link href={`/case-studies/${slug}`}>
              {sourceUrl && (
                <Image
                  src={sourceUrl}
                  alt={title}
                  width={350}
                  height={350}
                  priority={index === 0 ? true : false}
                  placeholder='blur'
                  blurDataURL={shimmerBlurData}
                />
              )}
            </Link>
          </div>
          <div className='case_studies_content'>
            <Link href={`/case-studies/${slug}`}>{title}</Link>
            <ul className='tag'>
              {categories &&
                categories.slice(0, 3).map((category, index) => {
                  const { name, slug } = category;
                  return <li key={index}>{name}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
};
