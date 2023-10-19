import AOSWrapper from '@/components/aosWrapper';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import '@/scss/styles.scss';
import CursorEffect from '@/components/cursorEffect';
import { Suspense } from 'react';
import { fetchMenus } from '@/graphql/pages/GET_MENUS';
import Loader from '@/components/loader';

export const metadata = {
  title: {
    default: 'Notionhive Website',
    template: '%s | Notionhive Website',
  },
  icons: {
    favicon: '/images/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.notionhive.com/',
    site_name: 'Notionhive',
    title: 'Notionhive | Digital Marketing Agency',
    description:
      'Notionhive is a top digital marketing agency in Bangladesh that provides digital marketing, branding, video, design, and UI/UX solutions, and services.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    themeColor: 'black',
  },
};

export default async function RootLayout({ children }) {
  const PrimaryMenu = await fetchMenus('Primary Menu');
  const ServiceMenu = await fetchMenus('Service');
  const QuickLinks = await fetchMenus('Quick');

  return (
    <html lang='en'>
      <body>
        <CursorEffect>
          <AOSWrapper>
            <Header navLinks={PrimaryMenu} />
            {children}
            <Footer servicesMenus={ServiceMenu} QuickLinksMenus={QuickLinks} />
          </AOSWrapper>
        </CursorEffect>
      </body>
    </html>
  );
}
