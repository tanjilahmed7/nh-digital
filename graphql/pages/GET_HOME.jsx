import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchHome() {
  const GET_HOME = gql`
    {
      page(id: "front-page=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  return getFetch(GET_HOME);
}
