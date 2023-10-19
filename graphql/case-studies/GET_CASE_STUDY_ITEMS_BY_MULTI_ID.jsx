import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';
import CaseStudyDetails from '@/graphql/fragment/CaseStudyDetails';
export async function fetchCaseStudyByGroupById(items) {
  const client = createApolloClient();
  const dataPromises = items.map((item) =>
    client.query({
      query: gql`
        query ($id: Int!) {
          caseStudies(where: { id: $id }) {
            nodes {
              ...CaseStudyDetails
            }
          }
        }
        ${CaseStudyDetails}
      `,
      variables: { id: parseInt(item.recent_case_studies_posts) },

      context: {
        fetchOptions: {
          next: {
            // revalidate: 5
            tags: ['cms'],
          },
        },
      },
    })
  );

  const data = await Promise.all(dataPromises);

  return data.map((result) => {
    const node = result?.data?.caseStudies?.nodes?.[0];
    const tags =
      result?.data?.caseStudies?.nodes?.[0].caseStudyCategories?.nodes;

    return {
      id: node?.id ?? '',
      title: node?.title ?? '',
      tags: tags,
      href: `/case-studies/${node?.slug ?? ''}`,
      img: {
        src: node?.featuredImage?.node?.sourceUrl ?? '',
        width: '350', // Static, as per your original code
        height: '350', // Static, as per your original code
      },
    };
  });
}
