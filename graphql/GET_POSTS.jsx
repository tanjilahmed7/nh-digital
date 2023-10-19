import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const Query = gql`
  query GET_POSTS(
    $first: Int
    $after: String = null
    $excludeIds: [ID]
    $category: String = null
  ) {
    posts(
      first: $first
      after: $after
      where: { notIn: $excludeIds, categoryName: $category }
    ) {
      nodes {
        uri
        title
        slug
        content
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              id
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export async function fetchPosts({ variables } = {}) {
  return getFetch(Query, {
    variables,
  });
}
