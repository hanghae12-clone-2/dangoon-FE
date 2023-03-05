import React from 'react';

import styled from 'styled-components';
import QUERY from '../constants/query';
import useGetQuery from '../hooks/useGetQuery';
import ROUTER from '../constants/router';
import Post from './post/Post';

export default function MainPost() {
  const {
    isLoading,
    isError,
    data: posts,
  } = useGetQuery(
    [QUERY.KEY.POSTS],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.MAIN_POST
  );
  return (
    <>
      {isLoading && <p>로딩중</p>}
      {isError && <p>에러</p>}
      {posts && (
        <PostWrapper>
          <Post posts={posts} path={ROUTER.PATH.DETAIL}>
            중고거래 인기매물
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
