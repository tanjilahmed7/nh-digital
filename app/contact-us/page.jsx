import componentMap from '@/components';
import { fetchContact } from '@/graphql/pages/GET_CONTACT';

export async function generateMetadata({ params }) {
  const data = await fetchContact();
  const seo = data?.page?.seo || {};

  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

const ContactUsPage = async () => {
  const data = await fetchContact();
  const blocks = data?.page?.blocks || [];

  return (
    <main>
      {/* <ContactForm />
      <OfficeAddress /> */}
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
    </main>
  );
};

export default ContactUsPage;
