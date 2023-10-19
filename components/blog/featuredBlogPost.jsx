import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '../magneticButton';
import { getPost } from '@/graphql/blogs/GET_POST';

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
              blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
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
