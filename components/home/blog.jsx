import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const Blog = ({ blog }) => {
  const { uri, slug, title, featuredImage, categories } = blog || {};
  const image = featuredImage?.node?.sourceUrl;
  const tags = categories?.edges?.map((edge) => edge.node.name);
  return (
    <div className='blog_item'>
      {image && (
        <div className='blog_img'>
          <Image
            src={image}
            alt={title}
            width='350'
            height='210'
            placeholder='blur'
            blurDataURL={shimmerBlurData}
          />
        </div>
      )}
      <div className='blog_content'>
        <span>
          {tags.map((tag, index, arr) =>
            arr.length !== index ? `${tag},` : tag
          )}
        </span>
        <Link href={`blog/${slug}`}>{title}</Link>
      </div>
    </div>
  );
};

export default Blog;
