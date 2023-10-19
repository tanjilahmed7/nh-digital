import { getFetch } from '@/graphql/getFetch';
import { gql } from '@apollo/client';

export async function fetchAllCareers() {
  const Query = gql`
    {
      careers {
        edges {
          node {
            id
            title
            slug
            position
            deadline
          }
        }
      }
    }
  `;

  const data = await getFetch(Query);
  return {
    careers: data?.careers?.edges?.map((career) => career.node),
  };
}
