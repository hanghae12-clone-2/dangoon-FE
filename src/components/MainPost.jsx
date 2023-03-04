import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import PostItem from './PostItem';
import QUERY from '../constants/query';
import useGetQuery from '../hooks/useGetQuery';

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
          <PostTitle>중고거래 인기매물</PostTitle>
          <PostList>
            {posts.data.result.map(data => (
              <Li key={uuidv4()}>
                <PostItem post={data} />
              </Li>
            ))}
          </PostList>
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
  margin: 128px 0;
  font-size: ${props => props.theme.fontSize.large};
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1040px;
`;

const Li = styled.li`
  margin-bottom: 80px;
`;
