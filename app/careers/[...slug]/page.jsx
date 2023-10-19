import ContactUs from '@/components/contactUs';
import MagneticButton from '@/components/magneticButton';
import Hero from '@/components/global/hero';
import GenericContent from '@/components/genericContent';
import { getCareerBySlug } from '@/graphql/careers/GET_CAREER_POST_BY_SLUG';
import { fetchCareesSlugs } from '@/graphql/careers/GET_CAREERS_SLUGS';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const { slugs } = await fetchCareesSlugs();
  return slugs.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({ params: { slug } }) {
  const { data } = await getCareerBySlug(slug[0]);
  if (!data.slug || data.slug === '') {
    notFound();
  }
  return {
    title: data.title,
  };
}

const CareerPage = async ({ params }) => {
  const { data, loading, error } =
    (await getCareerBySlug(params?.slug[0])) || {};
  const heroData = { title: data.title };

  return (
    <main>
      <Hero data={heroData}>
        <MagneticButton>
          <span className='btn btn-stacked btn-stacked--alt button--wayra'>
            {data?.position}
          </span>
        </MagneticButton>
      </Hero>
      <GenericContent content={data?.content} applyLink={data?.applyLink} />
      <ContactUs />
    </main>
  );
};

export default CareerPage;
