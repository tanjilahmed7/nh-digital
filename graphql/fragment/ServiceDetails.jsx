import { gql } from '@apollo/client';

// Define the GraphQL fragment
const ServiceDetails = gql`
  fragment ServiceDetails on Service {
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
  }
`;

export default ServiceDetails;
