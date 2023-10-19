import { fetchCaseStudySlugs } from '@/graphql/case-studies/GET_CASE_STUDY_SLUGS';
import Dropdown from '../global/dropdown';
import PageHeader from '../pageHeader';
import PageHero from '../pageHero';
import Link from 'next/link';

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Case Studies' }];

const Hero = async ({ className, data }) => {
	const { title } = data || {};
	const { caseStudyCategories } = await fetchCaseStudySlugs();
	return (
		<PageHero className={className}>
			<PageHeader breadcrumbs={breadcrumbs}>
				<h1 data-aos="fade-up" data-aos-duration="600">
					{title}
				</h1>
				{/* <Dropdown className="case-stadies">
					{{
						trigger: (
							<>
								All types of case studies
								<span className="ms-2">
									<svg
										width="17"
										height="16"
										viewBox="0 0 17 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.1667 4.91667L8.5 12L1.83333 4.95867L2.77066 4L8.5 10.0627L14.208 4L15.1667 4.91667Z"
											fill="white"
										/>
									</svg>
								</span>
							</>
						),
						menu: (
							<ul className="nh-dropdown-list">
								{caseStudyCategories &&
									Object.entries(caseStudyCategories).map(([slug, title]) => (
										<li key={slug}>
											<Link href={slug}>{title}</Link>
										</li>
									))}
							</ul>
						),
					}}
				</Dropdown> */}
			</PageHeader>
		</PageHero>
	);
};

export default Hero;
