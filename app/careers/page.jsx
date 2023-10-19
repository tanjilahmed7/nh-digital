import ContactUs from '@/components/contactUs';
import componentMap from '@/components';
import { fetchCareers } from '@/graphql/pages/GET_CAREERS';

export async function generateMetadata({ params }) {
  const data = await fetchCareers();
  const seo = data?.page?.seo || {};

  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

const CareersPage = async () => {
  const data = await fetchCareers();
  const blocks = data?.page?.blocks || [];

  return (
    <main>
      {blocks &&
        blocks.map((block, index) => {
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

export default CareersPage;
