import React from 'react';
import styled from 'styled-components';

export default function Post({ children }) {
  return (
    <PostWrapper>
      <h1>중고거래 인기매물</h1>
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.color.sky_white};
`;

const PostList = styled.div``;
