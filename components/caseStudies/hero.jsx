import { fetchCaseStudySlugs } from '@/graphql/case-studies/GET_CASE_STUDY_SLUGS';
import Dropdown from '../global/dropdown';
import PageHeader from '../pageHeader';
import PageHero from '../pageHero';
import Link from 'next/link';

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Case Studies' }];

const Hero = async ({ className, data }) => {
	const { title } = data || {};
	return (
		<PageHero className={className}>
			<PageHeader breadcrumbs={breadcrumbs}>
				<h1 data-aos="fade-up" data-aos-duration="600">
					{title}
				</h1>
		
			</PageHeader>
		</PageHero>
	);
};

export default Hero;
