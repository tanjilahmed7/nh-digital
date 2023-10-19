import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchContact() {
  const GET_CONTACT = gql`
    {
      page(id: "contact-us=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  return getFetch(GET_CONTACT);
}
