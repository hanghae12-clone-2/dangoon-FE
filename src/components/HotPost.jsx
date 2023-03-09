import React from 'react';

import styled from 'styled-components';
import { useInfiniteScrollQuery } from '../hooks/useInfiniteScrollQuery';
import QUERY from '../constants/query';
import ROUTER from '../constants/router';
import InfiniteScroll from './post/InfiniteScroll';
import Loading from './Loading';
import Error from './Error';

export default function HotPost() {
  const {
    ref,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    data: posts,
  } = useInfiniteScrollQuery(
    ['HotPost'],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.HOT_POST,
    16
  );
  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {posts && (
        <PostContainer>
          <InfiniteScroll
            Ref={ref}
            posts={posts}
            path={ROUTER.PATH.DETAIL}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          >
            중고거래 인기매물
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
