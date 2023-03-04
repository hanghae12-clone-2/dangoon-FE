import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import HotPost from '../components/HotPost';

export default function HotArticles() {
  return (
    <HotWrapper>
      <HotPost />
      <Footer />
    </HotWrapper>
  );
}

const HotWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
