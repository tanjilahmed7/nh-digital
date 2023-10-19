import StorySlider from './storySlider';

const OurStory = ({ data }) => {
	const { title, subtitle, year_items } = data || {};
	return (
		<section className="our-story section">
			<div className="container">
				<div className="section-header">
					<h2 data-aos="fade-up" data-aos-duration="400">
						{title}
					</h2>
					<p data-aos="fade-up" data-aos-duration="600">
						{subtitle}
					</p>
				</div>
				<StorySlider stories={year_items} />
			</div>
		</section>
	);
};

export default OurStory;
