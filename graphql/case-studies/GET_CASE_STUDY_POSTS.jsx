import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';
import CaseStudyDetails from '@/graphql/fragment/CaseStudyDetails';

export async function fetchCaseStudyPosts({ variables } = {}, after = null) {
  const Query = gql`
    query getCaseStudy($first: Int!, $after: String) {
      caseStudies(first: $first, after: $after) {
        nodes {
          ...CaseStudyDetails
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
    ${CaseStudyDetails}
  `;

  return getFetch(Query, {
    variables,
  });
}
