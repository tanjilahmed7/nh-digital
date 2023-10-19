import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchBlogs() {
  const Query = gql`
    {
      page(id: "blog=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;

  return getFetch(Query);
}
