import Newsletter from '../newsletter';
import TagSlider from './tagSlider';
import StickyElement from '../stickyItem';
import { getCategories } from '@/graphql/blogs/GET_CATEGORIES';
import { fetchPosts } from '@/graphql/GET_POSTS';

const Posts = async ({ data }) => {
  const excludePosts = parseInt(data?.exclude_posts);
  const categories = await getCategories();

  const { posts } = await fetchPosts({
    variables: {
      first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
      excludeIds: [excludePosts],
    },
  });

  return (
    <section className='blog-posts section pt-0'>
      <div className='container'>
        {/* <div className='row g-4'> */}
        {/* <div className='col-lg-8'> */}
        <TagSlider
          tags={categories}
          initialPosts={posts}
          excludeIds={excludePosts}
        />
        {/* </div> */}
        {/* <div className='col-lg-4'>
            <StickyElement> <Newsletter /> </StickyElement>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Posts;
