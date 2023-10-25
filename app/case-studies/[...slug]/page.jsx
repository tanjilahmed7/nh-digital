import componentMap from '@/components';
import { fetchCaseStudyPostById } from '@/graphql/case-studies/GET_CASE_STUDY_POST_ID';
import { fetchCaseStudySlugs } from '@/graphql/case-studies/GET_CASE_STUDY_SLUGS';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { slugs } = (await fetchCaseStudySlugs()) || {};
  return slugs.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params: { slug } }) {
  const { pageInfo } = (await fetchCaseStudyPostById(slug[0])) || {};
  if (!pageInfo.slug || pageInfo.slug === '') {
    notFound();
  }
  return {
    title: pageInfo.title,
  };
}

const CaseStudyPage = async ({ params: slug }) => {
  const { blocks, pageInfo } =
    (await fetchCaseStudyPostById(slug['slug'][0])) || {};

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
            parent='Case Studies'
            tags={pageInfo.categories}
          />
        );
      })}
    </main>
  );
};

export default CaseStudyPage;
