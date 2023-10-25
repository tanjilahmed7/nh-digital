import ContactUs from '@/components/contactUs';
import GenericContent from '@/components/genericContent';
import Hero from '@/components/global/hero';
import { fetchPolicy } from '@/graphql/pages/GET_PRIVACY_POLICY';

export const metadata = {
  title: 'Privacy Policy',
};

const heroData = {
  title: 'Privacy Policy',
};

const PrivacyPage = async () => {
  const data = (await fetchPolicy()) || {};
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
