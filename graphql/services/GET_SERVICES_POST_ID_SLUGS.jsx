import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

const QUERY = gql`
  query GET_SERVICES {
    services {
      nodes {
        title
        slug
      }
    }
  }
`;

export async function fetchServiceSlugs() {
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
    slugs: data?.data?.services?.nodes?.map((item) => item.slug) || [],
  };
}
