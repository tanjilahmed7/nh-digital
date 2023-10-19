import Link from 'next/link';

const ServiceItem = ({ item }) => {
	const { title, description, url } = item || {};

	return (
		<div className="card services-card">
			<div className="card-body">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			{url && (
				<div className="card-footer">
					<Link href={url}>
						Read More
						<svg
							width="16"
							height="12"
							viewBox="0 0 16 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.33268 0L8.39935 0.933333L12.7987 5.33333H0.666016V6.66667H12.7987L8.39935 11.0667L9.33268 12L15.3327 6L9.33268 0Z"
								fill="white"
							/>
						</svg>
					</Link>
				</div>
			)}
		</div>
	);
};

export default ServiceItem;
