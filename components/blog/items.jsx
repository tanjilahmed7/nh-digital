import Link from 'next/link';
import Image from 'next/image';

function Items({ posts }) {
  return (
    <div className='row g-4 mb-5 pb-4'>
      {posts && posts.nodes.length > 0 ? (
        posts.nodes.map((post, index) => (
          <div key={index} className='col-md-6'>
            <div
              className='blog-posts-item'
              data-aos='fade-up'
              data-aos-duration='300'
            >
              <Link href={`blog/${post.slug}`} className='blog-posts-img'>
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  width='368'
                  height='246'
                  alt={post.title}
                  placeholder='blur'
                  blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNFMEUwRTAiPjwvcmVjdD48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRUNFQ0VFIiBvZmZzZXQ9IjAiPjwvc3RvcD48c3RvcCBzdG9wLWNvbG9yPSIjRjRGNEY0IiBvZmZzZXQ9IjEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNnKSI+PC9yZWN0Pjwvc3ZnPg=='
                />
              </Link>
              <div className='tags'>
                {post.categories.edges.map((tag, index, arr) => (
                  <Link
                    key={index}
                    href={`blog/${post.slug}`}
                    className='tags-link'
                    dangerouslySetInnerHTML={{ __html: tag.node.name }}
                  ></Link>
                ))}
              </div>
              <h4>
                <Link href={`blog/${post.slug}`}>{post.title}</Link>
              </h4>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default Items;
