import ServiceItems from '../serviceItems';
import PageHeader from '../pageHeader';
import PageHero from '../pageHero';
import Image from 'next/image';

const Hero = ({ data, children, parent = {} }) => {
	const { title, subtitle, image } = data;
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		parent &&
			parent.length > 0 && {
				label: parent,
				href: '/' + parent.toLowerCase().split(' ').join('-'),
			},
		{ label: title },
	].filter(Boolean); // Removing null/undefined items
	return (
		<>
			<PageHero>
				<PageHeader breadcrumbs={breadcrumbs}>
					<h1 data-aos="fade-up" data-aos-duration="600">
						{title}
					</h1>
					{subtitle && (
						<p data-aos="fade-up" data-aos-duration="800">
							{subtitle}
						</p>
					)}
					{children}
				</PageHeader>
			</PageHero>
			{image && (
				<div className="ratio ratio-21x9">
					<Image src={image} alt="banner" width={1110} height={625} />
				</div>
			)}
		</>
	);
};

export default Hero;
