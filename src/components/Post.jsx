import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import QUERY from '../constants/query';
import Axios from '../utils/api/axios';
import PostItem from './PostItem';

export default function Post() {
  const axios = new Axios(QUERY.AXIOS_PATH.LOCAL);
  const {
    isLoading,
    isError,
    data: { data: posts },
  } = useQuery(
    [QUERY.KEY.POSTS],
    async () => axios.get(QUERY.AXIOS_PATH.POST),
    {
      staleTime: QUERY.STALETIME.FIVE_MIN,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      {isLoading && <p>로딩중</p>}
      {isError && <p>에러</p>}
      {posts && (
        <PostWrapper>
          <PostTitle>중고거래 인기매물</PostTitle>
          <PostList>
            {posts.map(post => (
              <li>
                <PostItem post={post} />
              </li>
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
  height: 100%;
  background-color: ${props => props.theme.color.sky_white};
`;

const PostTitle = styled.h1`
  margin-top: 8rem;
  font-size: ${props => props.theme.fontSize.large};
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65rem;
  height: 1rem;
  background-color: aqua;
`;
