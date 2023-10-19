import Link from "next/link";

const AwardItem = ({ award = [] }) => {
	const { title, description } = award || {};

	return (
		<div className="awards-and-recognition-item">
			<div className="magnetic">
				<Link href="#" type="button" className="btn btn-stacked button--wayra">
					{title}
				</Link>
			</div>
			<div className="content">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default AwardItem;
