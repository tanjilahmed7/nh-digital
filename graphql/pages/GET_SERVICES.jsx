import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchServices() {
  const Query = gql`
    {
      page(id: "services=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  return getFetch(Query);
}
