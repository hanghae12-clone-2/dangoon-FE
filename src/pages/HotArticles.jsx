import React from 'react';
import styled from 'styled-components';
import Post from '../components/Post';

export default function HotArticles() {
  return (
    <HotWrapper>
      <Post />
    </HotWrapper>
  );
}

const HotWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
