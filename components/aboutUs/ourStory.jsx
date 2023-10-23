import StorySlider from './storySlider';

const OurStory = ({ data }) => {
  const { title, subtitle, year_items } = data || {};
  return (
    <section className='our-story section'>
      <div className='container'>
        <div
          className='section-header'
          data-aos='fade-up'
          data-aos-duration='800'
        >
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <StorySlider stories={year_items} />
      </div>
    </section>
  );
};

export default OurStory;
