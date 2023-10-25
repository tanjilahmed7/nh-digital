import IndustrySlider from './industrySlider';
const IndustryExperience = ({ data }) => {
  const { title, description, items } = data;
  return (
    <section className='industry-experiences section'>
      <div className='container'>
        <div
          className='section-header'
          data-aos='fade-up'
          data-aos-duration='800'
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <IndustrySlider experiencees={items} />
      </div>
    </section>
  );
};

export default IndustryExperience;
