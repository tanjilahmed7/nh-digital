import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo-client';
const QUERY = gql`
	query GET_CASE_STUDIES {
		caseStudies {
			nodes {
				title
				slug
			}
		}

		caseStudyCategories {
			nodes {
				name
				slug
			}
		}
	}
`;

export async function fetchCaseStudySlugs() {
	const client = createApolloClient();
	const data = await client.query({
		query: QUERY,
		context: {
			fetchOptions: {
				next: {
					tags: ['cms'],
				},
			},
		},
	});

	// get all caseStudyCategories index will be slug and value will be name
	const caseStudyCategories =
		data?.data?.caseStudyCategories?.nodes?.reduce((acc, item) => {
			acc[item.slug] = item.name;
			return acc;
		}, {}) || {};

	return {
		slugs: data?.data?.caseStudies?.nodes?.map((item) => item.slug) || [],
		titles: data?.data?.caseStudies?.nodes?.map((item) => item.title) || [],
		caseStudyCategories,
	};
}
