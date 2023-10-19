import ServicesItems from './serviceItems';
import MagneticButton from './magneticButton';
import classnames from 'classnames';
import Link from 'next/link';
const Services = ({ data }) => {
	const { title, subtitle, button_text, button_url, custom_class, items } =
		data || {};
	const classes = classnames('services section', custom_class);
	return (
		<section className={classes}>
			<div className="container">
				<div className="row gy-5 gy-xl-0">
					<div className="col-xl-5">
						<div className="left">
							<h2 data-aos="fade-up" data-aos-duration="200">
								{title}
							</h2>
							<p data-aos="fade-up" data-aos-duration="400">
								{subtitle}
							</p>
							<MagneticButton>
								<Link href="#"
									className="btn btn-primary button--wayra download"
									data-aos="fade-up"
									data-aos-duration="600"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.833984 17.5V19.1667H19.1673V17.5H0.833984ZM15.834 10L14.6673 8.83337L10.834 12.6667V0.833374H9.16732V12.6659L5.33398 8.83254L4.16732 10L10.0007 15.8334L15.834 10Z"
											fill="white"
										/>
									</svg>
									{button_text}
								</Link>
							</MagneticButton>
						</div>
					</div>
					<div className="col-xl-7">
						<ServicesItems items={items} />
						<div className="text-center block d-md-none mt-5">
							<MagneticButton>
								<Link href="#"
									className="btn btn-primary button--wayra download"
									data-aos="fade-up"
									data-aos-duration="600"
								>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0.833984 17.5V19.1667H19.1673V17.5H0.833984ZM15.834 10L14.6673 8.83337L10.834 12.6667V0.833374H9.16732V12.6659L5.33398 8.83254L4.16732 10L10.0007 15.8334L15.834 10Z"
											fill="white"
										/>
									</svg>
									Download portfolio
								</Link>
							</MagneticButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
