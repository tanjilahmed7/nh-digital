import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';
import ServiceDetails from '../fragment/ServiceDetails';

const GET_SERVICES_POST_ID = gql`
  query ($slug: String!) {
    serviceBy(slug: $slug) {
      ...ServiceDetails
      blocks {
        order
        name
        attributesJSON
      }
      seo {
        canonical
        cornerstone
        metaDesc
        metaKeywords
        title
      }
    }
  }
  ${ServiceDetails}
`;

export async function fetchServicePostById(slug) {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_SERVICES_POST_ID,
    variables: { slug },

    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
        },
      },
    },
  });
  const blocks = data?.data?.serviceBy?.blocks ?? [];

  return {
    blocks: blocks,
    pageInfo: {
      title: data?.data?.serviceBy?.title ?? '',
      slug: data?.data?.serviceBy?.slug ?? '',
      featuredImage:
        data?.data?.serviceBy?.featuredImage?.node?.sourceUrl ?? '',
      categories: data?.data?.serviceBy?.serviceCategories?.nodes ?? [],
    },
    loading: data.loading,
    error: data.error,
  };
}
