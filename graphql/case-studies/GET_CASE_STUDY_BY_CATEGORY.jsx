import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';
import CaseStudyDetails from '@/graphql/fragment/CaseStudyDetails';

export async function fetchCaseStudyByCategory({
  variables = { categorySlug: null },
} = {}) {
  const Query = gql`
    query GET_CASE_STUDIES($after: String, $categorySlug: [String] = null) {
      caseStudyCategories(where: { slug: $categorySlug }) {
        nodes {
          name
          slug
          caseStudies(first: 2, after: $after) {
            nodes {
              ...CaseStudyDetails
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    }
    ${CaseStudyDetails}
  `;

  return getFetch(Query, {
    variables,
  });
}
