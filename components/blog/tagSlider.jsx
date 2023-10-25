'use client';

import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchPosts } from '@/graphql/GET_POSTS';
import MagneticButton from '../magneticButton';

import 'swiper/scss';
import Items from './items';

const TagSlider = ({ tags = [], excludeIds, initialPosts }) => {
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const [posts, setPosts] = useState(initialPosts);
  const [after, setAfter] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setAfter(posts.pageInfo.endCursor);
    setHasNextPage(posts.pageInfo.hasNextPage);
  }, [posts]);

  useEffect(() => {
    if (swiperRef.current) {
      setSwiper(swiperRef.current.swiper);
    }
  }, []);

  const handlerFilter = async (category) => {
    setCategory(category);

    const { posts } = await fetchPosts({
      variables: {
        first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
        excludeIds: [excludeIds],
        category: category,
      },
    });

    setPosts(posts);
  };

  const handlerLoadMore = async () => {
    const data = await fetchPosts({
      variables: {
        first: parseInt(process.env.NEXT_PUBLIC_POSTS_LIMIT),
        after: after,
        excludeIds: [excludeIds],
        category: category,
      },
    });
    const LoadMoreData = data.posts;
    const LoadMorePageInfo = data.posts.pageInfo;
    setAfter(LoadMorePageInfo.endCursor);
    setHasNextPage(LoadMorePageInfo.hasNextPage);
    setPosts((prev) => ({
      nodes: [...prev.nodes, ...LoadMoreData.nodes],
      pageInfo: LoadMorePageInfo,
    }));
  };

  return (
    <>
      <div className='swiper-container'>
        <Swiper
          watchOverflow={true}
          ref={swiperRef}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={8}
        >
          {tags &&
            tags?.categories.map((tag) => (
              <SwiperSlide key={tag.id}>
                <button
                  className={`btn btn-stacked button--wayra ${
                    category == tag.slug ? 'active-class' : ''
                  }`}
                  onClick={() => {
                    handlerFilter(tag.slug);
                  }}
                >
                  {tag.name}
                </button>
              </SwiperSlide>
            ))}
        </Swiper>

        {tags.length > 8 && (
          <>
            <div
              className='swiper-button-prev'
              onClick={() => swiper.slidePrev()}
            >
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.3125 1L3 6L8.281 11L9 10.297L4.453 6L9 1.719L8.3125 1Z'
                  fill='black'
                  fillOpacity='0.8'
                ></path>
              </svg>
            </div>
            <div
              className='swiper-button-next'
              onClick={() => swiper.slideNext()}
            >
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.6875 11L9 6L3.719 1L3 1.703L7.547 6L3 10.281L3.6875 11Z'
                  fill='black'
                  fillOpacity='0.8'
                ></path>
              </svg>
            </div>
          </>
        )}
      </div>
      <Items posts={posts}></Items>
      <div className='text-center'>
        {hasNextPage && (
          <MagneticButton>
            <button
              onClick={handlerLoadMore}
              className='btn btn-stacked button--wayra'
            >
              Load more
            </button>
          </MagneticButton>
        )}
      </div>
    </>
  );
};

export default TagSlider;
