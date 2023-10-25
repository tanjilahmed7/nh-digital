import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchTerms() {
  const Query = gql`
    {
      page(id: "terms-of-use=", idType: URI) {
        ...Page
        content
      }
    }
    ${Page}
  `;

  return getFetch(Query);
}
