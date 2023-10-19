import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';
import CaseStudyDetails from '@/graphql/fragment/CaseStudyDetails';

const GET_CASE_STUDY_POST_ID = gql`
  query ($slug: String!) {
    caseStudyBy(slug: $slug) {
      ...CaseStudyDetails
      blocks {
        order
        name
        attributesJSON
      }
    }
  }
  ${CaseStudyDetails}
`;

export async function fetchCaseStudyPostById(slug) {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_CASE_STUDY_POST_ID,
    variables: { slug },

    context: {
      fetchOptions: {
        next: {
          // revalidate: 5
          tags: ['cms'],
        },
      },
    },
  });
  const blocks = data?.data?.caseStudyBy?.blocks ?? [];

  return {
    blocks: blocks,
    pageInfo: {
      title: data?.data?.caseStudyBy?.title ?? '',
      slug: data?.data?.caseStudyBy?.slug ?? '',
      featuredImage:
        data?.data?.caseStudyBy?.featuredImage?.node?.sourceUrl ?? '',
      categories: data?.data?.caseStudyBy?.caseStudyCategories?.nodes ?? [],
    },
    loading: data.loading,
    error: data.error,
  };
}
