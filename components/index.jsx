import dynamic from 'next/dynamic';

const HeroHome = dynamic(() => import('@/components/home/hero'));
const CaseStudies = dynamic(() => import('@/components/home/caseStudies'));
const Brands = dynamic(() => import('@/components/home/brands'));
const Services = dynamic(() => import('@/components/services'));
const ServicesAlt = dynamic(() => import('@/components/servicesAlt'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Strategy = dynamic(() => import('@/components/strategy'));
const Blogs = dynamic(() => import('@/components/home/blogs'));
const GrowBusiness = dynamic(() => import('@/components/growBusiness'));
const Hero = dynamic(() => import('@/components/global/hero'));
const GreatAttention = dynamic(() =>
  import('@/components/services/greatAttention')
);
const BookConsultation = dynamic(() =>
  import('@/components/services/bookConsultation')
);
const AboutUsStrategy = dynamic(() => import('@/components/aboutUs/strategy'));
const OurStory = dynamic(() => import('@/components/aboutUs/ourStory'));
const Awards = dynamic(() => import('@/components/aboutUs/awards'));
const AboutBrands = dynamic(() => import('@/components/aboutUs/brands'));
const Clients = dynamic(() => import('@/components/aboutUs/clients'));
const Leadership = dynamic(() => import('@/components/aboutUs/leadership'));
const JoinUs = dynamic(() => import('@/components/aboutUs/joinUs'));
const CaseStudiesHero = dynamic(() => import('@/components/caseStudies/hero'));
const AllCaseStudies = dynamic(() =>
  import('@/components/caseStudies/caseStudies')
);
const WorkTogether = dynamic(() => import('@/components/workTogether'));
const CaseSummary = dynamic(() =>
  import('@/components/caseStudies/caseSummary')
);
const CaseDetails = dynamic(() =>
  import('@/components/caseStudies/caseDetails')
);
const ServicesItems = dynamic(() => import('@/components/servicesAlt'));
const IncludedServices = dynamic(() =>
  import('@/components/services/includedServices')
);
const IndustryExperience = dynamic(() =>
  import('@/components/services/industryExperience')
);
const OurProcess = dynamic(() => import('@/components/services/ourProcess'));
const FAQ = dynamic(() => import('@/components/services/faq'));
const CaseStudiesSlider = dynamic(() => import('@/components/caseStudies'));
const EffectiveSpeech = dynamic(() =>
  import('@/components/careers/effectiveSpeech')
);
const AllCaseStudiesSlider = dynamic(() => import('@/components/caseStudies'));
const LifeAtNH = dynamic(() => import('@/components/careers/lifeAtNH'));
const CareersStrategy = dynamic(() => import('@/components/careers/strategy'));
const Benefits = dynamic(() => import('@/components/careers/benefits'));
const Jobs = dynamic(() => import('@/components/careers/jobs'));
const FeaturedBlogPost = dynamic(() =>
  import('@/components/blog/featuredBlogPost')
);
const Posts = dynamic(() => import('@/components/blog/posts'));
const ProjectDiscussion = dynamic(() =>
  import('@/components/projectDiscussion')
);
const ContactForm = dynamic(() => import('@/components/contactUs/contactForm'));
const OfficeAddress = dynamic(() =>
  import('@/components/contactUs/officeAddress')
);

const componentMap = {
  'carbon-fields/hero': HeroHome,
  'carbon-fields/case-studies-slider': CaseStudies,
  'carbon-fields/brands-slider': Brands,
  'carbon-fields/our-service-items': Services,
  'carbon-fields/our-service-items-alt': ServicesAlt,
  'carbon-fields/testimonials': Testimonials,
  'carbon-fields/strategy': Strategy,
  'carbon-fields/blog-items': Blogs,
  'carbon-fields/business': GrowBusiness,
  'carbon-fields/banner': Hero,
  'carbon-fields/title-with-tabs': GreatAttention,
  'carbon-fields/lets-book': BookConsultation,
  'carbon-fields/about-us': AboutUsStrategy,
  'carbon-fields/our-story': OurStory,
  'carbon-fields/awards-recognition': Awards,
  'carbon-fields/brands': AboutBrands,
  'carbon-fields/our-clients': Clients,
  'carbon-fields/leadership': Leadership,
  'carbon-fields/join-our-team': JoinUs,
  'carbon-fields/case-studies-banner': CaseStudiesHero,
  'carbon-fields/all-case-studies': AllCaseStudies,
  'carbon-fields/lets-work-together': WorkTogether,
  'carbon-fields/case-studies-summary': CaseSummary,
  'carbon-fields/case-studies-details': CaseDetails,
  'carbon-fields/services': ServicesItems,
  'carbon-fields/services-included': IncludedServices,
  'carbon-fields/industry-experience': IndustryExperience,
  'carbon-fields/our-process': OurProcess,
  'carbon-fields/faq': FAQ,
  'carbon-fields/all-case-studies-slider': AllCaseStudiesSlider,
  'carbon-fields/life-at-notionhive': LifeAtNH,
  'carbon-fields/ceo-message': EffectiveSpeech,
  'carbon-fields/strategy-career': CareersStrategy,
  'carbon-fields/benefits': Benefits,
  'carbon-fields/available-openings': Jobs,
  'carbon-fields/fetured-posts': FeaturedBlogPost,
  'carbon-fields/blog-posts': Posts,
  'carbon-fields/project-discussion': ProjectDiscussion,
  'carbon-fields/contact-form': ContactForm,
  'carbon-fields/office-address': OfficeAddress,
};

export default componentMap;
