import Image from 'next/image';
import Link from 'next/link';

export const renderPosts = (postsToRender, index) => {
	return postsToRender?.nodes?.map((study, index) => {
		const { title, slug, featuredImage, caseStudyCategories } = study;
		const { sourceUrl } = featuredImage?.node || {};
		const categories = caseStudyCategories?.nodes || {};
		return (
      <div className='col-10 col-md-6' key={index}>
        <div className='case_studies_item'>
          <div className='case_studies_img'>
            <Link href={`/case-studies/${slug}`}>
              {sourceUrl && (
                <Image
                  src={sourceUrl}
                  alt={title}
                  width={350}
                  height={350}
                  priority={index === 0 ? true : false}
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              )}
            </Link>
          </div>
          <div className='case_studies_content'>
            <Link href={`/case-studies/${slug}`}>{title}</Link>
            <ul className='tag'>
              {categories &&
                categories.map((category, index) => {
                  const { name, slug } = category;
                  return <li key={index}>{name}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
	});
};
