import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import { getPost } from '@/graphql/blogs/GET_POST';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
import { Fragment } from 'react';

const FeaturedBlogPost = async ({ data }) => {
  const id = parseInt(data?.post);

  const { post } = (await getPost(id)) || {};
  if (
    !post ||
    !post.slug ||
    !post.featuredImage ||
    !post.title ||
    !post.excerpt
  ) {
    return null; // Do not render if important data is missing
  }
  return (
    <section className='featured-blog'>
      <div className='container'>
        <div className='featured-post'>
          <Link href={`blog/${post.slug}`} className='blog-img'>
            <Image
              src={post.featuredImage}
              alt={post.title}
              width='558'
              height='432'
              priority={true}
              placeholder='blur'
              blurDataURL={shimmerBlurData}
            />
          </Link>
          <div className='content'>
            <div className='tags'>
              {post?.categories.map((category, index, arr) => (
                <Fragment key={index}>
                  <Link
                    href={`blog/${post.slug}`}
                    className='tags-link'
                    dangerouslySetInnerHTML={{ __html: category.name }}
                  ></Link>
                  {arr.length - 1 !== index && ', '}
                </Fragment>
              ))}
            </div>
            <h3>
              <Link href={`blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
            <MagneticButton>
              <Link
                href={`blog/${post.slug}`}
                className='btn btn-stacked button--wayra'
              >
                Read more
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogPost;
