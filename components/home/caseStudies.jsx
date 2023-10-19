import Link from 'next/link';
import MagneticButton from '../magneticButton';
import CaseStudiesContent from './caseStudiesContent';
import { fetchCaseStudyByGroupById } from '@/graphql/case-studies/GET_CASE_STUDY_ITEMS_BY_MULTI_ID';

const CaseStudies = async ({ className = '', data }) => {
  const { title, items } = data || {};
  const caseStudies = await fetchCaseStudyByGroupById(items);

  return (
    <section className={`case_studies section ${className}`}>
      <CaseStudiesContent title={title} caseStudies={caseStudies} />
      <div className='text-center' data-aos='fade-up'>
        <MagneticButton>
          <Link href='#' className='btn btn-stacked button--wayra'>
            More case studies
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
};

export default CaseStudies;
