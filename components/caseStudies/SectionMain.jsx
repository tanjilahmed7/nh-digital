'use client';
import MagneticButton from '@/components/magneticButton';
import { useEffect, useState, useCallback } from 'react';
import { renderPosts } from '@/components/caseStudies/renderPosts';
import { fetchCaseStudyPosts } from '@/graphql/case-studies/GET_CASE_STUDY_POSTS';
import { fetchCaseStudyByCategory } from '@/graphql/case-studies/GET_CASE_STUDY_BY_CATEGORY';
import { fetchTermsByPost } from '@/graphql/case-studies/GET_TERMS_BY_POST';
import { fetchCaseStudySlugs } from '@/graphql/case-studies/GET_CASE_STUDY_SLUGS';
import Dropdown from '@/components/global/dropdown';
import Link from 'next/link';

const SectionMain = ({ initialPosts, catetories }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [pageInfo, setPageInfo] = useState(posts?.pageInfo || {});
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [after, setAfter] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setAfter(posts.pageInfo.endCursor);
    setHasNextPage(posts.pageInfo.hasNextPage);
  }, [posts]);

  // Filter posts by category
  const handleFilter = async (category, title) => {
    setSelectedCategory(title);
    setSelectedCategorySlug(category);

    // Find category
    if (category == 'all') {
      setPosts(initialPosts);
      // setAfter(initialPosts.pageInfo.endCursor);
      // setHasNextPage(initialPosts.pageInfo.hasNextPage);
    } else {
      const { caseStudies } = await fetchTermsByPost({
        variables: {
          first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
          after: null,
          category: [category],
        },
      });
      setPosts(caseStudies);
      // setAfter(caseStudies.pageInfo.endCursor);
      // setHasNextPage(caseStudies.pageInfo.hasNextPage);
    }
  };

  // Load more posts
  const loadMorePosts = async () => {
    if (selectedCategorySlug === null || selectedCategorySlug === 'all') {
      const { caseStudies } = await fetchCaseStudyPosts({
        variables: {
          first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
          after: after,
        },
      });
      const LoadMoreData = caseStudies;
      const LoadMorePageInfo = caseStudies.pageInfo;
      setAfter(LoadMorePageInfo.endCursor);
      setHasNextPage(LoadMorePageInfo.hasNextPage);
      setPosts((prev) => ({
        nodes: [...prev.nodes, ...LoadMoreData.nodes],
        pageInfo: LoadMorePageInfo,
      }));
    } else {
      const { caseStudies } = await fetchTermsByPost({
        variables: {
          first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
          after: after,
          category: [selectedCategorySlug],
        },
      });

      const LoadMoreData = caseStudies;
      const LoadMorePageInfo = caseStudies.pageInfo;

      // setAfter(LoadMorePageInfo.endCursor);
      // setHasNextPage(LoadMorePageInfo.hasNextPage);
      setPosts((prev) => ({
        nodes: [...prev.nodes, ...LoadMoreData.nodes],
        pageInfo: LoadMorePageInfo,
      }));
    }
  };
  return (
    <>
      <div className='dropdown-case-studies'>
        <Dropdown className='case-stadies'>
          {{
            trigger: (
              <>
                {selectedCategory || 'All types of case studies'}
                <span className='ms-2'>
                  <svg
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.1667 4.91667L8.5 12L1.83333 4.95867L2.77066 4L8.5 10.0627L14.208 4L15.1667 4.91667Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </>
            ),
            menu: (
              <ul className='nh-dropdown-list'>
                <li>
                  <button
                    onClick={() =>
                      handleFilter('all', 'All types of case studies')
                    }
                  >
                    All types of case studies
                  </button>
                </li>

                {catetories &&
                  Object.entries(catetories).map(([slug, title]) => (
                    <li key={slug}>
                      <button onClick={() => handleFilter(slug, title)}>
                        {title}
                      </button>
                    </li>
                  ))}
              </ul>
            ),
          }}
        </Dropdown>
      </div>

      <div className='row justify-content-center mb-5 pb-4'>
        <div className='col-xl-11 col-xxl-10'>
          <div className='row g-5 justify-content-center'>
            {!loading && isEmpty && (
              <div className='col-12 text-center'>
                <h4 className='mb-5 not-found-message-case-studies'>
                  {selectedCategory} case studies for the website are not
                  available
                </h4>
              </div>
            )}
            {renderPosts(posts)}
          </div>
        </div>
      </div>

      <div className='text-center'>
        {hasNextPage && (
          <MagneticButton>
            <button
              className='btn btn-stacked button--wayra'
              onClick={loadMorePosts}
            >
              {(loading && 'Loading more case studies...') ||
                'Load more case studies'}
            </button>
          </MagneticButton>
        )}
      </div>
    </>
  );
};

export default SectionMain;
