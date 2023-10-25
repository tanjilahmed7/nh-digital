import ContactUs from '@/components/contactUs';
import GenericContent from '@/components/genericContent';
import Hero from '@/components/global/hero';
import { fetchTerms } from '@/graphql/pages/GET_TERMS_CONDITION';

export const metadata = {
  title: 'Terms of Services',
};

const heroData = { title: 'Terms of Services' };

const PrivacyPage = async () => {
  const data = await fetchTerms();
  const content = data?.page?.content || [];
  return (
    <main>
      <Hero data={heroData} />
      <GenericContent content={content} />
      <ContactUs />
    </main>
  );
};

export default PrivacyPage;
