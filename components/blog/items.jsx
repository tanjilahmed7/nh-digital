import Link from 'next/link';
import Image from 'next/image';
import { shimmerBlurData } from '@/constants/shimmerBlurData';
import { Fragment } from 'react';

function Items({ posts }) {
  return (
    <div className='row g-4 mb-5 pb-4'>
      {posts && posts.nodes.length > 0 ? (
        posts.nodes.map((post, index) => (
          <div key={index} className='col-md-6 col-lg-4'>
            <div
              className='blog-posts-item'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              <Link href={`blog/${post.slug}`} className='blog-posts-img'>
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width='368'
                  height='246'
                  alt={post.title}
                  placeholder='blur'
                  blurDataURL={shimmerBlurData}
                />
              </Link>
              <div className='tags'>
                {post.categories.edges.map((tag, index, arr) => (
                  <Fragment key={index}>
                    <Link
                      href={`blog/${post.slug}`}
                      className='tags-link'
                      dangerouslySetInnerHTML={{ __html: tag.node.name }}
                    ></Link>
                    {arr.length - 1 !== index && ', '}
                  </Fragment>
                ))}
              </div>
              <h4>
                <Link href={`blog/${post.slug}`}>{post.title}</Link>
              </h4>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default Items;
