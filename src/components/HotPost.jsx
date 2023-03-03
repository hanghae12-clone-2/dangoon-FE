import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import PostItem from './PostItem';
import { useInfiniteScrollQuery } from '../hooks/useInfiniteScrollQuery';
import QUERY from '../constants/query';

export default function HotPost() {
  const {
    ref,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    data: posts,
  } = useInfiniteScrollQuery(
    [QUERY.KEY.POSTS],
    QUERY.AXIOS_PATH.LOCAL,
    QUERY.AXIOS_PATH.HOT_POST,
    8
  );
  return (
    <>
      {isLoading && <p>로딩중</p>}
      {isError && <p>에러</p>}
      {posts && (
        <PostWrapper>
          <PostTitle>중고거래 인기매물</PostTitle>
          <PostList>
            {posts?.pages.map(post =>
              post.data.map(data => (
                <Li key={uuidv4()}>
                  <PostItem post={data} />
                </Li>
              ))
            )}
          </PostList>
          {isFetchingNextPage && hasNextPage ? (
            ''
          ) : (
            <LastPageComment ref={ref}>마지막 페이지 입니다.</LastPageComment>
          )}
        </PostWrapper>
      )}
    </>
  );
}

const PostWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.sky_white};
`;

const PostTitle = styled.h1`
  margin: 8rem 0;
  font-size: ${props => props.theme.fontSize.large};
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 65rem;
`;

const Li = styled.li`
  margin-bottom: 5rem;
`;

const LastPageComment = styled.div`
  margin-bottom: 1rem;
`;
