import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

const QUERY = gql`
  query GET_CAREERS_SLUGS {
    careers {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export async function fetchCareesSlugs() {
  const client = createApolloClient();
  const data = await client.query({
    query: QUERY,
    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
        },
      },
    },
  });

  return {
    slugs: data?.data?.careers?.edges?.map((item) => item.node.slug) || [],
  };
}
