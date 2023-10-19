import PageHero from "../pageHero";
import PageHeader from "../pageHeader";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

const Hero = () => {
  return (
    <PageHero className="pb-0">
      <PageHeader breadcrumbs={breadcrumbs}>
        <h1 data-aos="fade-up" data-aos-duration="600">
          Blog
        </h1>
      </PageHeader>
    </PageHero>
  );
};

export default Hero;
