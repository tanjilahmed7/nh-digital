import Counter from './counter';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from './magneticButton';

const Strategy = ({ data }) => {
	const { title, count_items, image, image_mobile } = data;
	return (
		<section className="strategy section pb-0">
			<div className="container">
				<div className="stragegy-item">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<h2 data-aos="fade-up" data-aos-duration="200">
								{title}
							</h2>
							{count_items && (
								<div className="row text-center">
									{count_items.map((counter) => (
										<div
											key={counter._id}
											className="col-md-4"
											data-aos="fade-up"
											data-aos-duration="200"
										>
											<Counter
												count={counter.number}
												symbol={counter.prefix}
												title={counter.title}
											/>
										</div>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="text-center" data-aos="fade-up" data-aos-duration="500">
					<MagneticButton>
						<Link href="/about-us" className="btn btn-stacked button--wayra">
							About us
						</Link>
					</MagneticButton>
				</div>
			</div>
			<Image
				className="cta-image d-none d-md-block"
				src={image}
				alt="about-us"
				width={1400}
				height={400}
			/>
			<Image
				className="cta-image block d-md-none"
				src={image_mobile}
				alt="about-us"
				width={1400}
				height={400}
			/>
		</section>
	);
};

export default Strategy;