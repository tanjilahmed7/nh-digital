import Link from 'next/link';
import MagneticButton from '../magneticButton';
import CaseStudiesContent from './caseStudiesContent';
import { fetchCaseStudyByGroupById } from '@/graphql/case-studies/GET_CASE_STUDY_ITEMS_BY_MULTI_ID';

const CaseStudies = async ({ className = '', data }) => {
  const { title, items, view_more_text, view_more_url } = data || {};
  const caseStudies = await fetchCaseStudyByGroupById(items);

  return (
    <section className={`case_studies section pt-0 ${className}`}>
      <CaseStudiesContent title={title} caseStudies={caseStudies} />
      <div
        className='text-center btn-wrapper'
        data-aos='fade-up'
        data-aos-duration='600'
      >
        <MagneticButton>
          <Link href={view_more_url} className='btn btn-stacked button--wayra'>
            {view_more_text}
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default CaseStudies;
