import Image from "next/image";
import PageHeader from "../pageHeader";
import PageHero from "../pageHero";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];

const Hero = () => {
  return (
    <>
      <PageHero className='pb-0'>
        <PageHeader breadcrumbs={breadcrumbs}>
          <h1 data-aos='fade-up' data-aos-duration='600'>
            About us
          </h1>
          <p data-aos='fade-up' data-aos-duration='800'>
            We are an award winning digitally-led, full-service creative agency.
            We combine strategy, marketing, design, and technology to help you
            stay ahead of your competition
          </p>
        </PageHeader>
      </PageHero>
      <div className='ratio ratio-21x9'>
        <Image
          src='/images/about/hero-img.png'
          alt='banner'
          width={1110}
          height={625}
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
        />
      </div>
    </>
  );
};

export default Hero;
