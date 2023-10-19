import Image from 'next/image';
import Link from 'next/link';

const CaseStudyItem = ({ href, img, title, tags }) => {
	return (
    <div className='case_studies_item'>
      <div className='case_studies_img'>
        <Link href={href}>
          <Image
            src={img.src}
            alt={title}
            width={img.width}
            height={img.height}
            placeholder='blur'
            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
          />
        </Link>
      </div>
      <div className='case_studies_content'>
        <Link href={href}>{title}</Link>
        <ul className='tag'>
          {tags.map((tag, index) => (
            <li key={index}>{tag.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyItem;
