import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

const GET_CATEGORIES = gql`
  query {
    categories(where: { exclude: "dGVybTox" }) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export async function getCategories() {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_CATEGORIES,
    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
        },
      },
    },
  });

  return {
    categories: data?.data?.categories?.nodes ?? [],
    loading: data.loading,
    error: data.error,
  };
}
