import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchPolicy() {
  const Query = gql`
    {
      page(id: "privacy-policy=", idType: URI) {
        ...Page
        content
      }
    }
    ${Page}
  `;

  return getFetch(Query);
}
