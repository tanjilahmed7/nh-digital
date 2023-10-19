import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = ({ blog }) => {
	const { uri, title, featuredImage, categories } = blog || {};
	const image = featuredImage?.node?.sourceUrl;
	const tags = categories?.edges?.map((edge) => edge.node.name);
	return (
		<div className="blog_item">
			{image && (
				<div className="blog_img">
					<Image src={image} alt={title} width="350" height="210" />
				</div>
			)}
			<div className="blog_content">
				<span>
					{tags.map((tag, index, arr) =>
						arr.length !== index ? `${tag},` : tag
					)}
				</span>
				<Link href="/blog">{title}</Link>
			</div>
		</div>
	);
};

export default Blog;
