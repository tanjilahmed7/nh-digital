import { gql } from '@apollo/client';

// Define the GraphQL fragment
const CaseStudyDetails = gql`
  fragment CaseStudyDetails on CaseStudy {
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
        name
        slug
      }
    }
  }
`;

export default CaseStudyDetails;
