import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchCareers() {
  const Query = gql`
    {
      page(id: "careers=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  return getFetch(Query);
}
