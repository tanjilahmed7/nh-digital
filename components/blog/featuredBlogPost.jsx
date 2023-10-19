import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import { getPost } from '@/graphql/blogs/GET_POST';

const FeaturedBlogPost = async ({ data }) => {
  const id = parseInt(data?.post);

  const { post } = (await getPost(id)) || {};
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
            />
          </Link>
          <div className='content'>
            <div className='tags'>
              {post?.categories.map((category, index) => (
                <Link
                  key={index}
                  href={`blog/${post.slug}`}
                  className='tags-link'
                  dangerouslySetInnerHTML={{ __html: category.name }}
                ></Link>
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