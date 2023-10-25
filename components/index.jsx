import { lazy } from 'react';

const HeroHome = lazy(() => import('@/components/home/hero'));
const CaseStudies = lazy(() => import('@/components/home/caseStudies'));
const Brands = lazy(() => import('@/components/home/brands'));
const Services = lazy(() => import('@/components/services'));
const ServicesAlt = lazy(() => import('@/components/servicesAlt'));
const Testimonials = lazy(() => import('@/components/testimonials'));
const Strategy = lazy(() => import('@/components/strategy'));
const Blogs = lazy(() => import('@/components/home/blogs'));
const GrowBusiness = lazy(() => import('@/components/growBusiness'));
const Hero = lazy(() => import('@/components/global/hero'));
const GreatAttention = lazy(() =>
  import('@/components/services/greatAttention')
);
const BookConsultation = lazy(() =>
  import('@/components/services/bookConsultation')
);
const AboutUsStrategy = lazy(() => import('@/components/aboutUs/strategy'));
const OurStory = lazy(() => import('@/components/aboutUs/ourStory'));
const Awards = lazy(() => import('@/components/aboutUs/awards'));
const AboutBrands = lazy(() => import('@/components/aboutUs/brands'));
const Clients = lazy(() => import('@/components/aboutUs/clients'));
const Leadership = lazy(() => import('@/components/aboutUs/leadership'));
const JoinUs = lazy(() => import('@/components/aboutUs/joinUs'));
const CaseStudiesHero = lazy(() => import('@/components/caseStudies/hero'));
const AllCaseStudies = lazy(() =>
  import('@/components/caseStudies/caseStudies')
);
const WorkTogether = lazy(() => import('@/components/workTogether'));
const CaseSummary = lazy(() => import('@/components/caseStudies/caseSummary'));
const CaseDetails = lazy(() => import('@/components/caseStudies/caseDetails'));
const ServicesItems = lazy(() => import('@/components/servicesAlt'));
const IncludedServices = lazy(() =>
  import('@/components/services/includedServices')
);
const IndustryExperience = lazy(() =>
  import('@/components/services/industryExperience')
);
const OurProcess = lazy(() => import('@/components/services/ourProcess'));
const FAQ = lazy(() => import('@/components/services/faq'));
const CaseStudiesSlider = lazy(() => import('@/components/caseStudies'));
const EffectiveSpeech = lazy(() =>
  import('@/components/careers/effectiveSpeech')
);
const AllCaseStudiesSlider = lazy(() => import('@/components/caseStudies'));
const LifeAtNH = lazy(() => import('@/components/careers/lifeAtNH'));
const CareersStrategy = lazy(() => import('@/components/careers/strategy'));
const Benefits = lazy(() => import('@/components/careers/benefits'));
const Jobs = lazy(() => import('@/components/careers/jobs'));
const FeaturedBlogPost = lazy(() =>
  import('@/components/blog/featuredBlogPost')
);
const Posts = lazy(() => import('@/components/blog/posts'));
const ProjectDiscussion = lazy(() => import('@/components/projectDiscussion'));
const ContactForm = lazy(() => import('@/components/contactUs/contactForm'));
const OfficeAddress = lazy(() =>
  import('@/components/contactUs/officeAddress')
);

const GenericContent = lazy(() => import('@/components/genericContent'));

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
