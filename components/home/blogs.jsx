import { fetchPosts } from '@/graphql/GET_POSTS';
import MagneticButton from '../magneticButton';
import BlogContent from './blogContent';
import Link from 'next/link';

const Blogs = async ({ data }) => {
  const { posts: nodes } = await fetchPosts({
    variables: {
      first: 15,
    },
  });
  const { title } = data || {};

  return (
    <section className='blog section'>
      <BlogContent title={title} blogs={nodes} />
      <div className='text-center' data-aos='fade-up' data-aos-duration='600'>
        <MagneticButton>
          <Link href='/blog' className='btn btn-stacked button--wayra'>
            Read more on our blog
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default Blogs;
