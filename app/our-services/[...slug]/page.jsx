import componentMap from '@/components';
import { fetchServicePostById } from '@/graphql/services/GET_SERVICES_POST_ID';
import { fetchServiceSlugs } from '@/graphql/services/GET_SERVICES_POST_ID_SLUGS';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { slugs } = (await fetchServiceSlugs()) || {};
  return slugs.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params: { slug } }) {
  const { pageInfo } = (await fetchServicePostById(slug[0])) || {};
  if (!pageInfo.slug || pageInfo.slug === '') {
    notFound();
  }
  return {
    title: pageInfo.title,
  };
}

const ServicePage = async ({ params: { slug } }) => {
  const slugID = slug[0] ? slug[0] : '';
  const { blocks, pageInfo } = (await fetchServicePostById(slugID)) || {};

  return (
    <main>
      {blocks.map((block, index) => {
        const Component = componentMap[block.name];
        if (!Component) {
          console.warn(`Component not found for block "${block.name}"`);
          return null;
        }
        const data = JSON.parse(block.attributesJSON)?.data;
        return (
          <Component
            key={index}
            data={data}
            parent='Our services'
            tags={pageInfo.categories}
          />
        );
      })}
    </main>
  );
};

export default ServicePage;
