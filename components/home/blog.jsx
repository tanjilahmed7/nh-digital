import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { shimmerBlurData } from '@/constants/shimmerBlurData';

const Blog = ({ blog }) => {
  const { uri, slug, title, featuredImage, categories } = blog || {};
  const image = featuredImage?.node?.sourceUrl;
  const tags = categories?.edges?.map((edge) => edge.node.name);
  return (
    <div className='blog-posts-item' data-aos='fade-up' data-aos-duration='800'>
      <Link href={`blog/${slug}`} className='blog-posts-img'>
        <Image
          src={image}
          width='368'
          height='246'
          alt={title}
          placeholder='blur'
          blurDataURL={shimmerBlurData}
        />
      </Link>
      <div className='tags'>
        {tags.map((tag, index, arr) => (
          <Fragment key={index}>
            <Link href={`blog/${slug}`} className='tags-link'>
              {tag}
            </Link>
            {arr.length - 1 !== index && ', '}
          </Fragment>
        ))}
      </div>
      <h4>
        <Link href={`blog/${slug}`}>{title}</Link>
      </h4>
    </div>
  );
};

export default Blog;
