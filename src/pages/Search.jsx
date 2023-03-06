import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import SearchPost from '../components/SearchPost';

export default function Search() {
  return (
    <SearchWrapper>
      <SearchPost />
      <Footer />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
