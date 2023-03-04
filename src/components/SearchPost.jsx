import React, { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import PostItem from './PostItem';
import { useInfiniteScrollQuery } from '../hooks/useInfiniteScrollQuery';
import QUERY from '../constants/query';
import { Link, useParams } from 'react-router-dom';
import ROUTER from '../constants/router';

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
        <PostWrapper>
          <PostTitle>{`키워드: ${keyWord}`}</PostTitle>
          <PostList>
            {posts?.pages.map(post =>
              post.data.result.map(data => (
                <Li key={uuidv4()}>
                  <Link to={`${ROUTER.PATH.DETAIL}/${data.postid}`}>
                    <PostItem post={data} />
                  </Link>
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
