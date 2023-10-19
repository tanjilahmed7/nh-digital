import Link from 'next/link';
import BlogPost from '@/components/blog/post';
import ContactUs from '@/components/contactUs';
import Hero from '@/components/global/hero';
import componentMap from '@/components';
import { getPostBySlug, getPostsSlug } from '@/graphql/blogs/GET_POST_BY_SLUG';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { posts } = (await getPostsSlug()) || {};
  return posts.nodes.map((post) => ({ slug: [post.slug] }));
}

export async function generateMetadata({ params }) {
  const { post } = await getPostBySlug({
    variables: {
      slug: params?.slug[0] ?? '',
    },
  });

  if (!post || !post?.slug || post?.slug === '') {
    notFound();
    return { title: '' }; // Provide a fallback value to avoid errors
  }

  return {
    title: post?.title ?? '',
  };
}
const BlogsPage = async ({ params }) => {
  const response = await getPostBySlug({
    variables: {
      slug: params?.slug[0] ?? '',
    },
  });

  if (!response.post || !response.post?.slug || response.post?.slug === '') {
    notFound();
    return { title: '' }; // Provide a fallback value to avoid errors
  }

  const {
    post: {
      title = '',
      slug = '',
      bannerImage = null,
      content = '',
      featuredImage = null,
      categories = [],
    } = {},
  } = response || {};

  // Check if slug is missing or empty
  if (!slug || slug === '') {
    notFound();
    return; // Exit the function or provide an appropriate fallback behavior
  }

  const heroData = {
    title,
    image: bannerImage,
  };

  const blocks = response?.post?.blocks;

  const filteredBlocks = blocks.filter(
    (block) => block.__typename !== 'CoreParagraphBlock'
  );

  return (
    <main>
      <Hero data={heroData}>
        <div className='tags'>
          {categories &&
            categories?.nodes?.map((category) => (
              <Link href='#' key={category.id}>
                {category.name}
              </Link>
            ))}
        </div>
      </Hero>
      <BlogPost content={content} categories={categories} />

      {filteredBlocks &&
        filteredBlocks.map((block, index) => {
          const Component = componentMap[block.name];
          if (!Component) {
            console.warn(`Component not found for block "${block.name}"`);
            return null;
          }
          const data = JSON.parse(block.attributesJSON)?.data;
          return <Component key={index} data={data} />;
        })}

      <ContactUs />
    </main>
  );
};

export default BlogsPage;
