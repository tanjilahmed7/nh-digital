import { gql } from '@apollo/client';

// Define the GraphQL fragment
const Page = gql`
  fragment Page on Page {
    id
    title
    blocks {
      order
      name
      attributesJSON
    }
    seo {
      canonical
      cornerstone
      metaDesc
      metaKeywords
      title
    }
  }
`;

export default Page;
