import React from 'react';

import styled from 'styled-components';
import QUERY from '../constants/query';
import useGetQuery from '../hooks/useGetQuery';
import ROUTER from '../constants/router';
import Post from './post/Post';
import Loading from './Loading';
import Error from './Error';

export default function MainPost() {
  const {
    isLoading,
    isError,
    data: posts,
  } = useGetQuery(
    [QUERY.KEY.POSTS],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.MAIN_POST,
    true
  );

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {posts && (
        <PostWrapper>
          <Post posts={posts} path={ROUTER.PATH.DETAIL}>
            <PostTitle>중고거래 인기매물</PostTitle>
          </Post>
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
