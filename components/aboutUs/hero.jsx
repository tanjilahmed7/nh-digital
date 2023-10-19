import Image from "next/image";
import PageHeader from "../pageHeader";
import PageHero from "../pageHero";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];

const Hero = () => {
  return (
    <>
      <PageHero className="pb-0">
        <PageHeader breadcrumbs={breadcrumbs}>
          <h1 data-aos="fade-up" data-aos-duration="600">
            About us
          </h1>
          <p data-aos="fade-up" data-aos-duration="800">
            We are an award winning digitally-led, full-service creative agency.
            We combine strategy, marketing, design, and technology to help you
            stay ahead of your competition
          </p>
        </PageHeader>
      </PageHero>
      <div className="ratio ratio-21x9">
        <Image
          src="/images/about/hero-img.png"
          alt="banner"
          width={1110}
          height={625}
        />
      </div>
    </>
  );
};

export default Hero;
