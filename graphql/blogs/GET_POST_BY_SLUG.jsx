import { gql } from '@apollo/client';
import { getFetch } from '@/graphql/getFetch';
// Get post by slug, slug type is slug
export async function getPostBySlug({ variables } = {}) {
  const GET_POST_SLUG = gql`
    query GET_POST_SLUG($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        excerpt
        date
        bannerImage
        featuredImage {
          node {
            sourceUrl
          }
        }
        blocks {
          order
          name
          attributesJSON
        }
        categories {
          nodes {
            id
            name
          }
        }
        content
        seo {
          title
          metaDesc
          metaKeywords
        }
      }
    }
  `;
  return getFetch(GET_POST_SLUG, {
    variables,
  });
}

// get all slugs for posts
export async function getPostsSlug({ variables } = {}) {
  const GET_POSTS_SLUG = gql`
    {
      posts {
        nodes {
          slug
        }
      }
    }
  `;
  return getFetch(GET_POSTS_SLUG, {
    variables,
  });
}
