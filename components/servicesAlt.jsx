import ServicesItems from './serviceItems';
import MagneticButton from './magneticButton';
import classnames from 'classnames';
import Link from 'next/link';
const ServicesAlt = ({ data }) => {
	const { items, custom_class } = data || {};
	const classes = classnames('services services-alt section', custom_class);
	return (
		<section className={classes}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-11 col-xxl-10">
						<ServicesItems items={items} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesAlt;
