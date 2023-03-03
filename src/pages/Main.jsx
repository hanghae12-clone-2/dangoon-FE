import React from 'react';
import styled from 'styled-components';
import MainInfo from '../components/MainIntro';
import Post from '../components/Post';

export default function Main() {
  return (
    <MainWrapper>
      <MainInfo />
      <Post />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
