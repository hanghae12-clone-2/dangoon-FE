import React from 'react';
import styled from 'styled-components';
import QUERY from '../constants/query';
import useGetQuery from '../hooks/useGetQuery';
import Post from '../components/post/Post';
import ROUTER from '../constants/router';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function MyPost() {
  const {
    isLoading,
    isError,
    data: posts,
  } = useGetQuery(
    ['mypost'],
    QUERY.AXIOS_PATH.SEVER,
    QUERY.AXIOS_PATH.MY_POST,
    true
  );

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {posts && (
        <MyPostWrapper>
          <MyPostContainer>
            <Post posts={posts} path={ROUTER.PATH.DETAIL}>
              <PostTitle>내 게시물</PostTitle>
            </Post>
          </MyPostContainer>
        </MyPostWrapper>
      )}
    </>
  );
}

const MyPostWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const MyPostContainer = styled.div`
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
