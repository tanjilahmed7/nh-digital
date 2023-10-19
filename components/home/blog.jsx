import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = ({ blog }) => {
	const { uri, title, featuredImage, categories } = blog || {};
	const image = featuredImage?.node?.sourceUrl;
	const tags = categories?.edges?.map((edge) => edge.node.name);
	return (
    <div className='blog_item'>
      {image && (
        <div className='blog_img'>
          <Image
            src={image}
            alt={title}
            width='350'
            height='210'
            placeholder='blur'
            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
          />
        </div>
      )}
      <div className='blog_content'>
        <span>
          {tags.map((tag, index, arr) =>
            arr.length !== index ? `${tag},` : tag
          )}
        </span>
        <Link href='/blog'>{title}</Link>
      </div>
    </div>
  );
};

export default Blog;
