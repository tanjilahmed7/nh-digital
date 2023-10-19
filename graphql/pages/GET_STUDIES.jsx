import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';
import Page from '@/graphql/fragment/Page';

export async function fetchCaseStudyItem() {
  const Query = gql`
    {
      page(id: "case-studies=", idType: URI) {
        ...Page
      }
    }
    ${Page}
  `;
  return getFetch(Query);
}
