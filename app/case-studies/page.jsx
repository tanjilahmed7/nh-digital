import ContactUs from '@/components/contactUs';
import componentMap from '@/components';
import { fetchCaseStudyItem } from '@/graphql/pages/GET_STUDIES';


export async function generateMetadata() {
    const data = (await fetchCaseStudyItem()) || {};
   const seo = data?.page?.seo || {};

   return {
     title: seo.title,
     description: seo.metaDesc,
     metaDesc: seo.metaDesc,
     metaKeywords: seo.metaKeywords,
     canonical: seo.canonical,
   };
}

const CaseStudiesPage = async () => {
  const data = (await fetchCaseStudyItem()) || {};
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

export default CaseStudiesPage;
