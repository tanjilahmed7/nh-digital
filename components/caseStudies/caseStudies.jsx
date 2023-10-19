import React from 'react';
import { fetchCaseStudyPosts } from '@/graphql/case-studies/GET_CASE_STUDY_POSTS';
import { fetchCaseStudySlugs } from '@/graphql/case-studies/GET_CASE_STUDY_SLUGS';
import Main from '@/components/caseStudies/SectionMain';

const CaseStudies = async () => {
	const { caseStudies } =
		(await fetchCaseStudyPosts({
			variables: {
				first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
				after: null,
			},
		})) || {};

	const { caseStudyCategories } = (await fetchCaseStudySlugs()) || {};

	return (
    <section className='case_studies case_studies_alt section pt-0'>
      <div className='container'>
        <Main
          initialPosts={caseStudies}
          catetories={caseStudyCategories}
        ></Main>
      </div>
    </section>
  );
};

export default CaseStudies;
