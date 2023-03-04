import React from 'react';
import styled from 'styled-components';
import SearchPost from '../components/SearchPost';

export default function Search() {
  return (
    <SearchWrapper>
      <SearchPost />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
