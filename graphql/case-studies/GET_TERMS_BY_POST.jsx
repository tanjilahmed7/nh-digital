import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';

const QUERY = gql`
  query GET_TERMS_BY_POST(
    $first: Int
    $after: String = null
    $category: [String!]!
  ) {
    caseStudies(
      first: $first
      after: $after
      where: {
        taxQuery: {
          relation: AND
          taxArray: {
            field: SLUG
            taxonomy: CASESTUDYCATEGORY
            terms: $category
          }
        }
      }
    ) {
      nodes {
        id
        databaseId
        title
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        caseStudyCategories {
          nodes {
            id
            name
          }
        }
      }

      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`;

export async function fetchTermsByPost({ variables } = {}) {
  console.log('fetchTermsByPost', variables);
  return getFetch(QUERY, {
    variables,
  });
}
