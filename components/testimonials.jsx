import Link from 'next/link';
import MagneticButton from './magneticButton';
import TestimonialSwiper from './testimonialSwiper';
import classNames from 'classnames';

const Testimonials = ({ className = '', data }) => {
	const { title, button_text, button_url, items, custom_class } = data || {};
	const classes = classNames(className, custom_class);
	return (
		<section className={`testimonials section ${classes}`}>
			<div className="container">
				<div className="row gy-5 gy-lg-0">
					<div className="col-lg-5">
						<div className="left">
							<h2 data-aos="fade-up" data-aos-duration="200">
								{title}
							</h2>
							<MagneticButton>
								<Link href="#"
									className="btn btn-primary button--wayra"
									data-aos="fade-up"
									data-aos-duration="400"
								>
									{button_text}
								</Link>
							</MagneticButton>
						</div>
					</div>
					<div className="col-lg-7">
						<TestimonialSwiper items={items} />
						<div className="text-center block d-md-none">
							<MagneticButton>
								<Link href="#"
									className="btn btn-primary button--wayra"
									data-aos="fade-up"
									data-aos-duration="400"
								>
									{button_text}
								</Link>
							</MagneticButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
