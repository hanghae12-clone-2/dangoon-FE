import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useInfiniteScrollQuery } from '../hooks/useInfiniteScrollQuery';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';
import InfiniteScroll from './post/InfiniteScroll';
import { useParams } from 'react-router-dom';

export default function SearchPost() {
  const { keyWord } = useParams();
  const {
    ref,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    refetch,
    data: posts,
  } = useInfiniteScrollQuery(
    [QUERY.KEY.POSTS, keyWord],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.SERCH,
    keyWord
  );

  useEffect(() => {
    refetch();
  }, [keyWord, refetch]);

  return (
    <>
      {isLoading && <p>로딩중</p>}
      {isError && <p>에러</p>}
      {posts && (
        <PostContainer>
          <InfiniteScroll
            Ref={ref}
            posts={posts}
            path={ROUTER.PATH.DETAIL}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          >
            {`서울특별시 ${keyWord} 매물`}
          </InfiniteScroll>
        </PostContainer>
      )}
    </>
  );
}

const PostContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
