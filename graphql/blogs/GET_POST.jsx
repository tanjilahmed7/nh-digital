import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

// Get post by id, id type is database id
const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      id
      title
      slug
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

export async function getPost(id) {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_POST,
    variables: { id },
    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
        },
      },
    },
  });

  return {
    post: {
      title: data?.data?.post?.title ?? '',
      slug: data?.data?.post?.slug ?? '',
      excerpt: data?.data?.post?.excerpt ?? '',
      featuredImage: data?.data?.post?.featuredImage?.node?.sourceUrl ?? '',
      categories: data?.data?.post?.categories.nodes ?? [],
    },
    loading: data.loading,
    error: data.error,
  };
}
