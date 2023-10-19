import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';

const GET_CAREER_BY_SLUG = gql`
  query ($slug: String!) {
    careerBy(slug: $slug) {
      id
      title
      slug
      position
      deadline
      applyLink
      content
    }
  }
`;

export async function getCareerBySlug(slug) {
  const client = createApolloClient();
  const data = await client.query({
    query: GET_CAREER_BY_SLUG,
    variables: { slug },
    context: {
      fetchOptions: {
        next: {
          tags: ['cms'],
        },
      },
    },
  });

  return {
    data: data?.data?.careerBy ?? [],
    loading: data.loading,
    error: data.error,
  };
}
