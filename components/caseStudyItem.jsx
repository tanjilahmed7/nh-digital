import Image from 'next/image';
import Link from 'next/link';

const CaseStudyItem = ({ href, img, title, tags }) => {
	return (
		<div className="case_studies_item">
			<div className="case_studies_img">
				<Link href={href}>
					<Image
						src={img.src}
						alt={title}
						width={img.width}
						height={img.height}
					/>
				</Link>
			</div>
			<div className="case_studies_content">
				<Link href={href}>{title}</Link>
				<ul className="tag">
					{tags.map((tag, index) => (
						<li key={index}>{tag.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CaseStudyItem;
